# Cập nhật: Template Email xác nhận cho khách

## ⚠️ QUAN TRỌNG: Cần tạo thêm 1 template

Hiện tại code đã cập nhật để:
1. ✅ Gửi email cho cô dâu khi có người gửi lời chúc
2. ✅ Gửi email xác nhận cho khách mời
3. ✅ Thu thập email của khách để gửi xác nhận
4. ❌ **Không hiển thị lời chúc công khai** (riêng tư)

## Bước 1: Tạo Template cho khách (Guest Confirmation)

1. Vào EmailJS Dashboard → **Email Templates**
2. Click **"Create New Template"**
3. Đặt tên: `guest_confirmation`

### Template Settings:

**Template ID**: `template_guest_confirm` (hoặc copy ID mới)

**To Email**: `{{to_email}}` (quan trọng - email khách sẽ tự động điền)

**From Name**: `Kim Anh & Xuân Tụy`

**Subject**:
```
💝 Cảm ơn bạn đã gửi lời chúc - Kim Anh & Xuân Tụy
```

**Content HTML**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #f5b3c1; font-size: 32px;">💝</h1>
  </div>
  
  <h2 style="color: #f5b3c1;">Xin chào {{guest_name}}!</h2>
  
  <p style="font-size: 16px; line-height: 1.6;">
    Cảm ơn bạn đã dành thời gian gửi lời chúc cho đám cưới của chúng tôi.
    Điều này thật sự có ý nghĩa rất lớn với chúng tôi! 🙏
  </p>
  
  <div style="background: linear-gradient(135deg, #fff9f5 0%, #ffe8e8 100%); padding: 25px; border-radius: 15px; margin: 25px 0; border-left: 5px solid #f5b3c1;">
    <p style="margin: 0 0 10px 0; font-weight: bold; font-size: 18px; color: #333;">
      📋 Xác nhận của bạn:
    </p>
    <p style="font-size: 20px; color: #666; margin: 0; font-weight: 600;">
      {{attendance_status}}
    </p>
  </div>
  
  <div style="background: #f8f8f8; padding: 20px; border-radius: 12px; margin: 25px 0;">
    <h3 style="color: #333; margin-top: 0;">📅 Thông tin tiệc cưới</h3>
    <table style="width: 100%; border-spacing: 0;">
      <tr>
        <td style="padding: 8px 0;"><strong>📆 Ngày:</strong></td>
        <td style="padding: 8px 0;">{{wedding_date}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>🕐 Giờ:</strong></td>
        <td style="padding: 8px 0;">{{wedding_time}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; vertical-align: top;"><strong>📍 Địa điểm:</strong></td>
        <td style="padding: 8px 0;">{{wedding_location}}</td>
      </tr>
    </table>
  </div>
  
  <p style="font-size: 16px; line-height: 1.6; margin-top: 25px;">
    Chúng tôi rất mong được gặp bạn trong ngày trọng đại này! 🎊
  </p>
  
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
    <p style="margin: 5px 0;">Trân trọng,</p>
    <p style="margin: 5px 0; font-weight: bold; font-size: 18px; color: #f5b3c1;">
      {{bride_name}}
    </p>
  </div>
  
  <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #f5b3c1; text-align: center;">
    <p style="color: #888; font-size: 12px; margin: 5px 0;">
      Email này được gửi tự động từ website thiệp cưới
    </p>
    <p style="color: #888; font-size: 12px; margin: 5px 0;">
      ⚠️ Vui lòng không trả lời trực tiếp email này
    </p>
  </div>
</div>
```

## Bước 2: Cập nhật code (ĐÃ LÀM SẴN)

File `src/components/Wishes.tsx` dòng 73-77 đã có sẵn:

```typescript
await emailjs.send(
  'service_0cvglka',
  'template_guest_confirm',  // ← Template ID mới tạo ở trên
  guestTemplateParams,
  'l4ebKHTIHQSnK9M-3'
);
```

⚠️ **Nếu Template ID khác**, hãy sửa `'template_guest_confirm'` thành ID thật.

## Bước 3: Test

1. Vào `http://localhost:3001`
2. Phần "Lời chúc" → Điền form (kể cả email)
3. Click "Gửi lời chúc"
4. Kiểm tra:
   - ✅ Cô dâu nhận email thông báo
   - ✅ Khách nhận email xác nhận
   - ✅ Không thấy lời chúc hiển thị công khai

## Thay đổi so với trước:

| Trước | Sau |
|-------|-----|
| Hiển thị lời chúc công khai | ❌ Không hiển thị công khai |
| Không thu thập email | ✅ Thu thập email khách |
| Chỉ gửi 1 email cho cô dâu | ✅ Gửi 2 emails (cô dâu + khách) |
| Có nút export JSON | ❌ Bỏ (vì không public) |
| Có phân trang | ❌ Bỏ (vì không public) |

## Lợi ích:

1. **Riêng tư**: Lời chúc chỉ cô dâu biết
2. **Xác nhận**: Khách yên tâm đã gửi thành công
3. **Email list**: Thu thập email để gửi cảm ơn sau
4. **Chuyên nghiệp**: Tự động hóa hoàn toàn
