const express = require('express')
const { sendOTPEmail } = require('./mailer')
const { saveOTP, verifyOTP } = require('./otpStore')

const app = express()
app.use(express.json())
app.use(express.static('public')) // serve file index.html

// Tạo OTP ngẫu nhiên 6 chữ số
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// POST /send-otp
app.post('/send-otp', async (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ msg: 'Thiếu email' })

  const otp = generateOTP()
  await sendOTPEmail(email, otp)
  saveOTP(email, otp)

  console.log(`[OTP] ${email} → ${otp}`) // xem trong terminal khi test
  res.json({ msg: 'Đã gửi OTP!' })
})

// POST /verify-otp
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body
  const result = verifyOTP(email, otp)
  res.json(result)
})

app.listen(3000, () => console.log('Server chạy tại http://localhost:3000'))