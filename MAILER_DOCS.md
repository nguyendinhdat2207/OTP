# Python Email Service

Simple email sender để tích hợp vào dự án GSX.

## Yêu cầu

- Python 3.7+
- Tài khoản Gmail với App Password

## Cài đặt

```bash
pip install -r requirements.txt
```

## Cấu hình

Tạo file `.env` tại thư mục gốc:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=xxxxxxxxxxxxxxxx
```

> `EMAIL_PASS` là **App Password** của Google, không phải mật khẩu Gmail thường.
>
> Cách tạo App Password: myaccount.google.com → Security → 2-Step Verification → App passwords → tạo mới → copy 16 ký tự.

## Sử dụng

```python
from mailer import send_email

send_email(
    to_email="nguoinhan@example.com",
    subject="Tiêu đề email",
    body="<p>Nội dung email, hỗ trợ HTML</p>"
)
```

## Test thử

```bash
python -c "from mailer import send_email; send_email('your_email@gmail.com', 'Test', '<p>Hello từ GSX</p>')"
```

Không có lỗi = hoạt động bình thường.
