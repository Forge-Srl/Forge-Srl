const functions = require('firebase-functions')
const cors = require('cors')
const nodemailer = require('nodemailer')
const fetch = require('node-fetch')
const Busboy = require('busboy')

const whitelist = [
    'https://forge-srl.it',
    'https://www.forge-srl.it',
    'https://forge.srl',
    'https://www.forge.srl',
]
const forgeEmail = {
    info: 'info@forge.srl',
    career: 'career@forge.srl',
}
const corsSettings = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

/**
 You can check the values with
 firebase functions:config:get

 To change the values use
 firebase functions:config:set register.username='<something>' register.password='<something>' recaptcha.key='<something>'

 After update, to use the values in the simulator go to `functions` folder and run
 firebase functions:config:get > .runtimeconfig.json
 */
const registerConfig = functions.config().register
const recaptchaConfig = functions.config().recaptcha

const registerHost = 'authsmtp.securemail.pro'
const transporter = nodemailer.createTransport({
    host: registerHost,
    port: 465,
    secure: true,
    auth: {
        user: registerConfig.username,
        pass: registerConfig.password,
    },
})

const getSender = (email, name) => {
    name = name ? name.replace(/[^\p{L}\p{N}\s]/gu, '') : ''
    return name ? `"${name}" <${email}>` : email
}

const verifyRecaptcha = (userToken, callback) => {
    if (!userToken) {
        callback('Missing token')
        return
    }

    fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        // Only this content type is accepted. See: https://stackoverflow.com/a/52416003
        body: new URLSearchParams({secret: recaptchaConfig.key, response: userToken}),
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(res => callback(null, res))
        .catch(error => callback(error))
}

const mailHandler = (buildMail) => functions.https.onRequest((request, response) => {
    cors(corsSettings)(request, response, () => {
        if (request.method !== 'POST') {
            return response.status(403).send('Forbidden')
        }

        const fail = (error) => {
            console.log(error)
            return response.status(500).send('An error occurred while sending email.')
        }

        const fields = {}
        const files = {}
        const busboy = Busboy({headers: request.headers})
        busboy.on('field', (fieldName, value) => (fields[fieldName] = value))
        busboy.on('file', (fieldName, fileStream, {filename, encoding, mimeType}) => {
            const data = []
            let nb = 0
            files[fieldName] = {
                filename: filename,
                encoding: encoding,
                mimeType: mimeType,
            }
            fileStream
                .on('data', (chunk) => {
                    data.push(chunk)
                    nb += chunk.length
                })
                .on('close', () => {
                    files[fieldName].data = Buffer.concat(data, nb)
                })
                .once('error', (err) => fail(err.message))
        })
        busboy.on('finish', () => {
            verifyRecaptcha(fields.recaptcha, (error, verification) => {
                if (error) {
                    return fail(error)
                }

                if (!verification.success || verification.score < 0.5) {
                    const errorMessage = `Recaptcha detected "${fields.name}" <${fields.from}> is a bot (success: ${verification.success}, score: ${verification.score})`
                    const verificationElement = verification['error-codes']
                        ? `\nError codes: ${verification['error-codes'].join(', ')}`
                        : ''
                    return fail(errorMessage + verificationElement)
                }

                try {
                    const mailData = buildMail(fields, files)

                    transporter.sendMail(mailData, (error, result) => {
                        if (error) {
                            return fail(error)
                        }

                        return response.send(result.messageId)
                    })
                } catch (e) {
                    return fail(e)
                }
            })
        })
        busboy.end(request.rawBody)
    })
})

exports.contactUs = mailHandler((fields, _files) => {
    const sender = getSender(fields.from, fields.name)
    if (!sender) {
        throw new Error('Missing sender')
    }

    const subject = fields.subject
    if (!subject) {
        throw new Error('Missing subject')
    }

    const message = fields.message
    if (!message) {
        throw new Error('Missing message')
    }

    return {
        from: registerConfig.username,
        to: forgeEmail.info,
        replyTo: sender,
        subject: subject,
        text: message,
    }
})

exports.applyForJob = mailHandler((fields, files) => {
    const sender = getSender(fields.from, fields.name)
    if (!sender) {
        throw new Error('Missing sender')
    }

    const phone = fields.phone
    if (!phone) {
        throw new Error('Missing phone')
    }

    const aboutYou = fields.about_you
    if (!aboutYou) {
        throw new Error('Missing about you')
    }

    const curriculum = files.curriculum
    if (!curriculum) {
        throw new Error('Missing curriculum file')
    }

    return {
        from: registerConfig.username,
        to: forgeEmail.career,
        replyTo: sender,
        subject: `Nuova candidatura: ${fields.name}`,
        text: `Cadidato: ${fields.name}\nEmail: ${fields.from}\nTelefono: ${phone}\n\nQualcosa su di me:\n${aboutYou}`,
        attachments: [
            {
                filename: curriculum.filename,
                contentType: curriculum.mimeType,
                encoding: curriculum.encoding,
                content: curriculum.data
            }
        ]
    }
})
