# 🚀 DEPLOYMENT GUIDE - Wedding Invitation Website
## Kim Anh & Xuân Tụy - 21.11.2025

---

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Verify Local Build
```bash
# Install dependencies
npm install

# Test development mode
npm run dev
# Open http://localhost:3000 and verify everything works

# Test production build
npm run build
npm run preview
# Open http://localhost:4173 and verify
```

### 2. Content Verification
- [ ] Wedding date is correct: 21.11.2025, 11:00 AM
- [ ] Location is correct: Thôn 3B – Ea Wy – Đắk Lắk
- [ ] Names are correct: Kim Anh & Xuân Tụy
- [ ] All Vietnamese text has proper diacritics
- [ ] Timeline stories are complete
- [ ] Invitation message is finalized

### 3. Assets Ready (Optional but recommended)
- [ ] Replace placeholder images in `/public/gallery/` with real photos
- [ ] Add wedding cover image: `/public/og-cover.jpg` (1200x630px)
- [ ] Add PWA icons: `/public/icon-192.png`, `/public/icon-512.png`
- [ ] Add background music: `/public/music/wedding-bgm.mp3`

---

## 📦 METHOD 1: DEPLOY VIA VERCEL (RECOMMENDED)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Wedding invitation website for Kim Anh & Xuân Tụy"

# Create main branch
git branch -M main

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR-USERNAME/wedding-kimanh-xuantuy.git

# Push
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub account

2. **Import Project**
   - Click **"Add New Project"** or **"Import Project"**
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure Project** (Auto-detected)
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Node.js Version: `18.x` (or latest LTS)

4. **Deploy**
   - Click **"Deploy"**
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://wedding-kimanh-xuantuy.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `kimanh-xuantuy.com`)
3. Update DNS records:
   - **Type**: `A` or `CNAME`
   - **Name**: `@` or `www`
   - **Value**: (provided by Vercel)
4. Wait for DNS propagation (5 minutes - 48 hours)

---

## 📦 METHOD 2: DEPLOY VIA VERCEL CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (development)
vercel

# Deploy to production
vercel --prod

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? [Your account]
# - Link to existing project? No
# - Project name? wedding-kimanh-xuantuy
# - Directory? ./
# - Override settings? No
```

---

## 🌐 POST-DEPLOYMENT STEPS

### 1. Verify Deployment
- [ ] Visit the deployed URL
- [ ] Test on mobile device
- [ ] Test all sections scroll smoothly
- [ ] Test countdown timer works
- [ ] Test wishes form (add a test wish)
- [ ] Test music player
- [ ] Test lightbox gallery
- [ ] Test share buttons (Facebook/Zalo)

### 2. Test Social Sharing
- [ ] Share link on Facebook - verify preview image and text
- [ ] Share link on Zalo - verify preview
- [ ] Check OG tags with: https://www.opengraph.xyz/

### 3. Performance Check
- [ ] Run Lighthouse audit (Chrome DevTools)
  - Performance: Should be 90+
  - Accessibility: Should be 90+
  - Best Practices: Should be 90+
  - SEO: Should be 90+

### 4. Share with Family & Friends
- [ ] Send invitation link to wedding guests
- [ ] Test on different devices (iOS, Android, Desktop)
- [ ] Collect feedback

---

## 🔧 TROUBLESHOOTING

### Issue: Build Failed on Vercel

**Solution 1**: Check Node.js version
```bash
# In vercel.json or Vercel dashboard, set Node.js to 18.x
```

**Solution 2**: Clear cache and redeploy
- Go to Vercel dashboard
- Settings → Clear Build Cache
- Redeploy

**Solution 3**: Check build logs
- Look for specific errors in Vercel deployment logs
- Common issues: Missing dependencies, TypeScript errors

### Issue: Assets Not Loading (404 errors)

**Solution**: Verify `base` URL in `vite.config.ts`
```typescript
export default defineConfig({
  base: '/', // Must be '/' for root domain
  // or '/subfolder/' if deploying to subfolder
});
```

### Issue: Routing Not Working (404 on refresh)

**Solution**: Verify `vercel.json` exists with rewrites:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Fonts Not Loading

**Solution**: 
- Fonts are loaded from Google Fonts CDN
- Check internet connection
- Verify `<link>` tags in `index.html`

### Issue: Images Not Showing

**Solution**: 
- Verify images are in `/public/` directory
- Use paths without `/public/` prefix (e.g., `/gallery/1.jpg` not `/public/gallery/1.jpg`)
- Rebuild after adding images

### Issue: Countdown Shows Wrong Time

**Solution**: 
- Verify timezone in `src/lib/time.ts`
- Wedding date should be: `2025-11-21T11:00:00+07:00`
- This is Vietnam time (UTC+7)

---

## 🔄 UPDATING THE WEBSITE

### Option 1: Via Git Push (Automatic)
```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel will automatically rebuild and deploy
```

### Option 2: Via Vercel Dashboard
1. Go to Vercel dashboard
2. Select your project
3. Click **"Redeploy"**

### Option 3: Manual Upload
- Not recommended for this project
- Use Git-based workflow for easier updates

---

## 📊 ANALYTICS & MONITORING

### Add Vercel Analytics (Optional)
1. Go to Vercel dashboard → Your project
2. Click **"Analytics"** tab
3. Enable **Vercel Analytics**
4. Add to your site: No code changes needed!

### Add Google Analytics (Optional)
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 💡 OPTIMIZATION TIPS

### 1. Image Optimization
- Use WebP format for smaller file sizes
- Compress images with TinyPNG: https://tinypng.com
- Recommended sizes:
  - Gallery: 1200x1200px, <200KB each
  - OG Image: 1200x630px, <300KB

### 2. Performance
- Keep total page size under 3MB
- Enable Vercel compression (automatic)
- Lazy load images (already implemented)

### 3. SEO
- Add structured data for events (optional)
- Submit to Google Search Console (optional)
- Create XML sitemap (optional for single page)

---

## 🎉 SUCCESS!

Your wedding invitation website is now live! 

**Next Steps:**
1. ✅ Share the link with your guests
2. ✅ Monitor wishes coming in
3. ✅ Enjoy your special day!

**Website URL:** `https://your-project.vercel.app`

---

## 📞 SUPPORT

If you need help:
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev/

---

**Chúc mừng Kim Anh & Xuân Tụy!** 💑💖

Made with love in Vietnam 🇻🇳
