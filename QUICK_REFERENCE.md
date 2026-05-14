# ⚡ QUICK REFERENCE CARD

## Essential Commands

```bash
# 🔧 SETUP
npm install                    # Install dependencies

# 💻 DEVELOPMENT
npm run dev                    # Start dev server → http://localhost:3000
npm run build                  # Build for production
npm run preview                # Preview production build

# 🚀 DEPLOYMENT
vercel --prod                  # Deploy to Vercel (after: npm i -g vercel)
git push                       # Auto-deploy (if connected to Vercel)

# 🧹 CLEANUP
npm run lint                   # Check code quality
```

---

## File Locations

| What                  | Where                               |
|-----------------------|-------------------------------------|
| Add photos            | `public/gallery/1.jpg` (1-6)        |
| Change wedding info   | `src/lib/time.ts`                   |
| Edit content          | `src/components/*.tsx`              |
| Customize colors      | `tailwind.config.js`                |
| Add music             | `public/music/wedding-bgm.mp3`      |
| Social share image    | `public/og-cover.jpg`               |

---

## Key Information

**Wedding Date**: November 21, 2025  
**Time**: 11:00 AM  
**Location**: Thôn 3B – Ea Wy – Đắk Lắk  
**Timezone**: Asia/Ho_Chi_Minh (UTC+7)

**Names**: Kim Anh & Xuân Tụy  
**Language**: Vietnamese (vi-VN)

---

## Tech Stack

- **React** 18.2.0
- **TypeScript** 5.3.3
- **Vite** 5.0.8
- **Tailwind CSS** 3.4.0
- **Framer Motion** 10.16.16

---

## Sections (8 total)

1. 🏠 Home (Hero)
2. 💑 Love Story Timeline
3. 📅 Wedding Details
4. 💌 Invitation
5. 📸 Gallery
6. 💝 Wishes
7. ⏱️ Countdown
8. 🙏 Thank You

---

## Deployment URLs

**Development**: http://localhost:3000  
**Preview**: http://localhost:4173  
**Production**: https://your-project.vercel.app

---

## Troubleshooting

| Issue                | Fix                                  |
|----------------------|--------------------------------------|
| Build fails          | `rm -rf node_modules && npm install` |
| Assets 404           | Put in `public/`, use `/path`        |
| Routing 404          | Check `vercel.json` exists           |
| Fonts missing        | Check internet, Google Fonts CDN     |
| Wrong countdown time | Verify timezone in `time.ts`         |

---

## Support Links

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

---

## Checklist Before Going Live

- [ ] Test `npm run dev`
- [ ] Verify names, dates, locations
- [ ] Test on mobile
- [ ] Build successfully
- [ ] Deploy to Vercel
- [ ] Test deployed URL
- [ ] Share with friends

---

**🎉 Ready to deploy!**
