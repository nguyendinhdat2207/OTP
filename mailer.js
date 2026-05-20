const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

async function sendOTPEmail(toEmail, otp) {
  await transporter.sendMail({
    from: `"OTP Demo" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Mã OTP của bạn',
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2>Xác nhận email</h2>
        <p>Mã OTP của bạn là:</p>
        <h1 style="letter-spacing: 8px; color: #2E75B6;">${otp}</h1>
        <p style="color: gray;">Mã hết hạn sau 5 phút.</p>
      </div>
    `,
  })
}

module.exports = { sendOTPEmail }