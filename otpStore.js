// Dùng Map để lưu OTP tạm thời trong RAM
// key: email, value: { otp, expiresAt }
const store = new Map()

function saveOTP(email, otp) {
  store.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 phút
  })
}

function verifyOTP(email, inputOtp) {
  const record = store.get(email)

  if (!record) return { ok: false, msg: 'Chưa gửi OTP cho email này' }
  if (Date.now() > record.expiresAt) return { ok: false, msg: 'OTP đã hết hạn' }
  if (record.otp !== inputOtp) return { ok: false, msg: 'OTP không đúng' }

  store.delete(email) // dùng xong xóa luôn
  return { ok: true, msg: 'Xác nhận thành công!' }
}

module.exports = { saveOTP, verifyOTP }