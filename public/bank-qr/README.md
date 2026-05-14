# Hướng dẫn thêm QR Code Chuyển khoản

## Cách tạo QR Code ngân hàng:

### Phương án 1: Sử dụng App Ngân hàng
1. Mở app ngân hàng (Vietcombank, Techcombank, v.v.)
2. Vào mục **"Nhận tiền"** hoặc **"QR Code"**
3. Chọn **"Tạo mã QR nhận tiền"**
4. Screenshot hoặc tải ảnh QR code
5. Lưu với tên: `groom-qr.jpg` (chú rể) và `bride-qr.jpg` (cô dâu)

### Phương án 2: Sử dụng công cụ online
- Truy cập: https://qr.sepay.vn/ hoặc https://vietqr.io/
- Nhập thông tin: Ngân hàng, Số tài khoản, Tên tài khoản
- Tải QR code về

## Cách upload QR Code:

1. **Đổi tên file:**
   - Chú rể: `groom-qr.jpg` 
   - Cô dâu: `bride-qr.jpg`

2. **Copy vào thư mục này:** `public/bank-qr/`

3. **Làm mới trình duyệt** (F5)

## Định dạng ảnh:
- `.jpg`, `.jpeg`, `.png`
- Tỷ lệ: 1:1 (vuông) tốt nhất
- Kích thước: 500x500px đến 1000x1000px
- Nền trắng, QR code rõ ràng

## Cập nhật thông tin ngân hàng:

Mở file: `src/components/GiftRegistry.tsx`

Tìm dòng:
```typescript
const bankAccounts: BankAccount[] = [
  {
    id: 1,
    owner: 'Chú rể - Xuân Tụy',
    bankName: 'Vietcombank',           // ← Đổi tên ngân hàng
    accountNumber: '1234567890',       // ← Đổi số tài khoản
    accountName: 'NGUYEN XUAN TUY',    // ← Đổi tên chủ tài khoản
    qrCode: '/bank-qr/groom-qr.jpg',
  },
  ...
]
```

## Lưu ý:
- Nếu không có QR code, vẫn hiển thị thông tin chuyển khoản text
- Kiểm tra kỹ số tài khoản trước khi deploy
- Tên chủ tài khoản nên VIẾT HOA không dấu
