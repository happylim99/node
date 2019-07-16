const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/*
sgMail.send({
    to: 'happylim99@gmail.com',
    from: 'happylim99@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you.'
})
*/

//send the object work as well
//const sendWelcomeEmail = (user) => {}

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'happylim@gmail.com',
        subject: 'Welcome to my app',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'happylim@gmail.com',
        subject: `It is sad to see you go`,
        text: `Goodbye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}