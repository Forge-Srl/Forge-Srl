const functions = require("firebase-functions")
const nodemailer = require("nodemailer")

exports.contactUs = functions.https.onRequest((request, response) => {
    if (request.method !== 'POST') {
        return response.status(403).send('Forbidden')
    }

    /**
    You can check the values with
      firebase functions:config:get

    To change the values use
      firebase functions:config:set register.username='<something>' register.password='<something>'

    After update, to use the values in the simulator go to `functions` folder and run
      firebase functions:config:get > .runtimeconfig.json
    */
    const registerConfig = functions.config().register
    const registerHost = 'authsmtp.securemail.pro'
    const forgeInfoEmail = 'info@forge.srl'

    const transporter = nodemailer.createTransport({
        host: registerHost,
        port: 465,
        secure: true,
        auth: {
            user: registerConfig.username,
            pass: registerConfig.password
        }
    })

    try {
        const name = request.body.name ? request.body.name.replace(/[^\p{L}\p{N}\s]/gu, '') : ''
        const email = request.body.from
        const sender = `"${name}" <${email}>`
        const subject = request.body.subject
        const message = request.body.message

        transporter.sendMail({
            from: registerConfig.username,
            to: forgeInfoEmail,
            replyTo: sender,
            subject: subject,
            text: message,
        }, (error, result) => {
            if (error) {
                console.log(error)
                return response.status(500).send('An error occurred while sending email.')
            }

            return response.send(result.messageId)
        })
    } catch (e) {
        console.log(e)
        return response.status(500).send('An error occurred while sending email.')
    }
})
