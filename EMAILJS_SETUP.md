# Hướng dẫn cấu hình EmailJS - Gửi email xác nhận tham dự

## Bước 1: Đăng ký tài khoản EmailJS (MIỄN PHÍ)

1. Truy cập: https://www.emailjs.com/
2. Click **"Sign Up"** để đăng ký tài khoản miễn phí
3. Xác thực email

## Bước 2: Tạo Email Service

1. Đăng nhập vào dashboard EmailJS
2. Vào **"Email Services"** → Click **"Add New Service"**
3. Chọn **Gmail** (hoặc email provider khác)
4. Kết nối với Gmail của cô dâu
5. Copy **Service ID** (ví dụ: `service_0cvglka`)

## Bước 3: Tạo Email Template

1. Vào **"Email Templates"** → Click **"Create New Template"**
2. Đặt tên template: `wedding_rsvp`
3. Cấu hình nội dung email:

### Subject (Tiêu đề email):
```
🎊 [{{guest_name}}] Xác nhận tham dự tiệc cưới
```

### Content (Nội dung email):
```html
<h2>Xác nhận tham dự từ khách mời</h2>

<p><strong>👤 Tên khách:</strong> {{guest_name}}</p>

<p><strong>📋 Trạng thái:</strong> {{attendance_status}}</p>

<p><strong>💬 Lời chúc:</strong></p>
<blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #f5b3c1;">
  {{guest_message}}
</blockquote>

<p><strong>🕐 Thời gian:</strong> {{timestamp}}</p>

<hr>
<p style="color: #888; font-size: 12px;">Email tự động từ website thiệp cưới Kim Anh & Xuân Tụy</p>
```

4. **To Email**: Nhập email cô dâu (ví dụ: `kimanh@gmail.com`)
5. Copy **Template ID** (ví dụ: `template_04ufu7p`)

## Bước 4: Lấy Public Key

1. Vào **"Account"** → **"General"**
2. Tìm mục **"Public Key"**
3. Copy key (ví dụ: `user_AbCdEfGhIjKlMnOp`)

## Bước 5: Cập nhật code

Mở file: `src/components/Wishes.tsx`

Tìm dòng 48-52 và thay thế:

```typescript
await emailjs.send(
  'service_abc1234',      // ← Thay bằng Service ID của bạn
  'template_xyz5678',     // ← Thay bằng Template ID của bạn
  templateParams,
  'user_AbCdEfGhIjKlMnOp' // ← Thay bằng Public Key của bạn
);
```

## Bước 6: Test thử

1. Chạy `npm run dev`
2. Mở `http://localhost:3001`
3. Vào phần "Lời chúc"
4. Điền form và chọn tham dự
5. Click "Gửi lời chúc"
6. Kiểm tra email cô dâu

## Giới hạn miễn phí EmailJS:

- ✅ **200 emails/tháng** (đủ cho wedding)
- ✅ Không cần credit card
- ✅ Không có watermark

## Nếu vượt quá 200 emails:

- Nâng cấp lên **Personal Plan**: $7.5/tháng (1000 emails)
- Hoặc dùng nhiều tài khoản EmailJS khác nhau

## Bảo mật:

⚠️ **Public Key có thể public** (không sao)
⚠️ Email nhận được cấu hình trong Template (bảo mật)
⚠️ Không ai thấy được email cô dâu ngoại trừ trong dashboard EmailJS

## Lưu ý:

- Xác nhận tham dự **chỉ gửi email riêng** cho cô dâu
- **KHÔNG hiển thị công khai** trên website
- Lời chúc vẫn hiển thị công khai như cũ
- Cô dâu sẽ nhận email mỗi khi có người gửi

## Troubleshooting:

**Lỗi: "Failed to send email"**
→ Kiểm tra Service ID, Template ID, Public Key

**Không nhận được email**
→ Kiểm tra spam folder
→ Kiểm tra "To Email" trong template

**Gmail block**
→ Vào Gmail Settings → Allow less secure apps
→ Hoặc dùng App Password
