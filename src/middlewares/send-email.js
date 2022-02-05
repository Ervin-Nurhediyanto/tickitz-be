import nodemailer from "nodemailer"

const send = (email) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.MAIL_FROM_ADDRESS,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: email,
    subject: 'Reset your password',
    html: '<p>You requested for a password reset, kindly use this <a href=' + process.env.RESET_URL + '>link</a> to reset your password</p><br><p>Cheers!</p>'
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err
    console.log('Email sent: ' + mailOptions.to + ' ' + info.response)
  })
}

export default send
