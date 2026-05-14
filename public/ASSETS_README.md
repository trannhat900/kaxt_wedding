# Wedding Invitation Placeholder Assets

## Hướng dẫn thay thế assets

### 1. Ảnh Gallery
Đặt ảnh thật vào thư mục `public/gallery/`:
- `1.jpg` - Ảnh đầu tiên
- `2.jpg` - Ảnh thứ hai
- `3.jpg` - Ảnh thứ ba
- `4.jpg` - Ảnh thứ tư
- `5.jpg` - Ảnh thứ năm
- `6.jpg` - Ảnh thứ sáu

Kích thước khuyến nghị: 1200x1200px (vuông) hoặc 1200x800px (ngang)

### 2. Cover Image (OG Image)
Đặt ảnh cover cho social sharing tại:
- `public/og-cover.jpg` - Kích thước: 1200x630px

### 3. Icons/Favicons
Tạo icon từ logo hoặc ảnh cưới:
- `public/icon-192.png` - 192x192px
- `public/icon-512.png` - 512x512px

Có thể sử dụng https://favicon.io hoặc https://realfavicongenerator.net

### 4. Nhạc nền
Đặt file nhạc vào:
- `public/music/wedding-bgm.mp3`

Khuyến nghị: Nhạc không lời, nhẹ nhàng, lãng mạn, dưới 5MB

---

## Công cụ tối ưu ảnh

- **TinyPNG**: https://tinypng.com (nén ảnh)
- **Squoosh**: https://squoosh.app (nén và resize)
- **ImageMagick**: Command line tool cho batch processing

## Nhạc royalty-free

- **Free Music Archive**: https://freemusicarchive.org
- **Incompetech**: https://incompetech.com
- **YouTube Audio Library**: https://studio.youtube.com/channel/UC.../music
- **Bensound**: https://www.bensound.com

---

**Lưu ý**: Sau khi thay thế assets, nhớ rebuild project với `npm run build`
