const formUrl = (action, local) => local
    ? `http://localhost:5001/forge-srl/us-central1/${action}`
    : `https://us-central1-forge-srl.cloudfunctions.net/${action}`

module.exports = {
    recaptchaClientKey: '6Lc06DAbAAAAAO87U0h1atSDthKftgqo8p1bPOyl',
    url: {
        contactUs: (local = false) => formUrl('contactUs', local),
        applyForJob: (local = false) => formUrl('applyForJob', local)
    }
}