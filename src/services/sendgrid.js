const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const emailEnvironment = ['production', 'development']

const sendVerificationEmail = (email, token) => {
  if (emailEnvironment.includes(process.env.NODE_ENV)) {
    sgMail.send({
      to: email,
      from: 'team@slohacks.com',
      subject: 'SLO Hacks Verification Link',
      text: `The token below will allow you to verify your account.\n${token}\nThe token expires after 1 hour.`
    })
  }
}

const sendForgotPasswordEmail = (email, token) => {
  if (emailEnvironment.includes(process.env.NODE_ENV)) {
    sgMail.send({
      to: email,
      from: 'team@slohacks.com',
      subject: 'SLO Hacks Reset Password',
      text: `The token will below will allow you to reset your password.\n${token}\nThe token expires after 1 hour.`
    })
  }
}

module.exports = {
  sendVerificationEmail,
  sendForgotPasswordEmail
}
