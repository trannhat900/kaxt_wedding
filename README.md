# Kim Anh & Xuân Tụy - Wedding Invitation Website

🎉 **Thiệp cưới trực tuyến** cho Kim Anh & Xuân Tụy - 21.11.2025

## 📋 Tổng quan

Website thiệp mời đám cưới được xây dựng hoàn toàn bằng tiếng Việt, với thiết kế hiện đại, lãng mạn và tối ưu cho mọi thiết bị. 

### ✨ Tính năng chính

- 🏠 **Trang chủ** - Hero section với hiệu ứng hoa rơi lãng mạn
- 💑 **Câu chuyện tình yêu** - Timeline các mốc quan trọng
- 📅 **Thông tin tiệc cưới** - Ngày giờ, địa điểm, bản đồ
- 💌 **Thư mời** - Lời mời chính thức từ gia đình
- 📸 **Bộ sưu tập ảnh** - Gallery với lightbox
- 💝 **Lời chúc** - Form gửi lời chúc với localStorage
- ⏱️ **Đếm ngược** - Live countdown đến giờ cưới
- 🙏 **Cảm ơn** - Lời cảm ơn và nút chia sẻ
- 🎵 **Nhạc nền** - Background music player
- ⬆️ **Scroll to top** - Nút cuộn về đầu trang

### 🎨 Thiết kế

- **Màu sắc**: Blush pink, Ivory, Champagne, Gold
- **Font chữ**: Playfair Display (serif), Inter (sans-serif), Great Vibes (script)
- **Animations**: Framer Motion + CSS keyframes
- **Responsive**: Mobile-first, tối ưu cho mọi kích thước màn hình
- **Accessibility**: ARIA labels, keyboard navigation, contrast

### 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (static site)

---

## 🚀 Cài đặt và Chạy Local

### Yêu cầu

- Node.js 16+ và npm/yarn

### Các bước

1. **Cài đặt dependencies**
   ```bash
   npm install
   ```

2. **Chạy development server**
   ```bash
   npm run dev
   ```
   Website sẽ chạy tại `http://localhost:3000`

3. **Build production**
   ```bash
   npm run build
   ```
   Output sẽ được tạo trong thư mục `dist/`

4. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📦 Deploy lên Vercel

### Cách 1: Deploy qua Git (Khuyến nghị)

1. **Đẩy code lên GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Wedding invitation website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import vào Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập và click **"Add New Project"**
   - Import repository từ GitHub
   - Vercel sẽ tự động phát hiện Vite config

3. **Cấu hình (tự động)**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click **Deploy**
   - Chờ vài phút để build hoàn thành
   - Website sẽ có URL dạng `https://your-project.vercel.app`

### Cách 2: Deploy qua Vercel CLI

1. **Cài đặt Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   Làm theo hướng dẫn trên terminal

3. **Deploy production**
   ```bash
   vercel --prod
   ```

### Custom Domain (Tùy chọn)

1. Vào **Project Settings** trên Vercel
2. Chọn tab **Domains**
3. Thêm domain của bạn (ví dụ: `kimanh-xuantuy.com`)
4. Cập nhật DNS records theo hướng dẫn của Vercel

---

## 🎯 Troubleshooting

### Vấn đề: Asset không load

**Giải pháp**: Đảm bảo `base` trong `vite.config.ts` đúng với deployment path:
```typescript
export default defineConfig({
  base: '/', // hoặc '/sub-path/' nếu deploy vào subfolder
});
```

### Vấn đề: Routing 404

**Giải pháp**: File `vercel.json` đã có `rewrites` để xử lý SPA routing. Đảm bảo file này có trong project.

### Vấn đề: Fonts không hiển thị

**Giải pháp**: Fonts được load từ Google Fonts trong `index.html`. Kiểm tra kết nối internet khi development.

### Vấn đề: Build failed

**Giải pháp**: 
- Xóa `node_modules` và `package-lock.json`
- Chạy lại `npm install`
- Đảm bảo Node.js version 16+

---

## 📝 Tùy chỉnh nội dung

### Thay đổi thông tin cưới

Chỉnh sửa trong các file:

- **Ngày giờ**: `src/lib/time.ts` - function `getWeddingDate()`
- **Địa điểm**: Components trong `src/components/`
- **Nội dung**: Các text trong từng component

### Thêm ảnh thật

1. Đặt ảnh vào `public/gallery/`
2. Cập nhật `src/components/Gallery.tsx`
3. Thay thế cover image: `public/og-cover.jpg`

### Thay đổi màu sắc

Chỉnh sửa `tailwind.config.js` trong phần `theme.extend.colors`

### Thêm nhạc nền

1. Đặt file MP3 vào `public/music/wedding-bgm.mp3`
2. Component `MusicPlayer.tsx` sẽ tự động load

---

## 📱 PWA (Progressive Web App)

Website hỗ trợ cài đặt như một ứng dụng:

- **Manifest**: `public/manifest.json`
- **Icons**: `public/icon-192.png`, `public/icon-512.png`
- **Offline**: Service worker có thể được thêm nếu cần

---

## 🌐 SEO & Meta Tags

Tất cả meta tags đã được cấu hình trong `index.html`:

- Open Graph (Facebook)
- Twitter Card
- Canonical URL
- Vietnamese language tags
- Theme color

---

## 📄 License

© 2025 Kim Anh & Xuân Tụy. All rights reserved.

---

## 💖 Lời cảm ơn

Cảm ơn bạn đã sử dụng template thiệp cưới này. Chúc hai bạn trăm năm hạnh phúc! 🎉💑

---

## 📞 Hỗ trợ

Nếu gặp vấn đề khi deploy, vui lòng:

1. Kiểm tra [Vercel Documentation](https://vercel.com/docs)
2. Xem [Vite Documentation](https://vitejs.dev/guide/)
3. Kiểm tra console log trong browser DevTools

---

**Made with 💖 in Vietnam**
