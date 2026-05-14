# 🗺️ SITE MAP & COMPONENT STRUCTURE

## Visual Layout

```
┌─────────────────────────────────────────────────────┐
│  🧭 STICKY NAVIGATION (all pages)                   │
│  [Trang chủ] [Câu chuyện] [Tiệc cưới] [Thư mời]... │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  💝 WELCOME MODAL (first visit only)                │
│  "Lời nhắn gửi từ Kim Anh & Xuân Tụy"              │
│  [Floating hearts animation]                        │
│  [Bước vào thiệp mời ✨]                            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  1️⃣ HERO SECTION (#home)                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  [Animated falling petals]                          │
│                                                      │
│      Kim Anh 💖 Xuân Tụy                            │
│      (Great Vibes font, huge)                       │
│                                                      │
│           21.11.2025                                 │
│    Thôn 3B – Ea Wy – Đắk Lắk                       │
│                                                      │
│  [Xem thông tin tiệc cưới] (button)                │
│  [Scroll indicator ↓]                               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  2️⃣ LOVE STORY TIMELINE (#love-story)              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│    Câu chuyện tình yêu                              │
│    ───────────────────                               │
│                                                      │
│  [Card]  ●────  [Image 💑]                          │
│  Lần đầu gặp nhau                                   │
│  Mùa Xuân 2020                                       │
│                                                      │
│  [Image ☕]  ────●  [Card]                          │
│         Buổi hẹn hò đầu tiên                        │
│         Tháng 5, 2020                                │
│                                                      │
│  [Card]  ●────  [Image 💍]                          │
│  Lời cầu hôn lãng mạn                               │
│  Tháng 1, 2025                                       │
│                                                      │
│  [Image 💒]  ────●  [Card]                          │
│         Cùng nhau đến mãi mãi                        │
│         21.11.2025                                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  3️⃣ WEDDING DETAILS (#wedding-details)             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│    Thông tin tiệc cưới                              │
│    ─────────────────                                 │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐                │
│  │  📅          │  │  📍          │                │
│  │  Ngày & Giờ │  │  Địa điểm    │                │
│  │              │  │              │                │
│  │ Thứ Sáu, 21 │  │ Thôn 3B      │                │
│  │ tháng 11/25 │  │ Ea Wy        │                │
│  │              │  │ Đắk Lắk      │                │
│  │ 11:00 sáng  │  │ [Xem bản đồ] │                │
│  └──────────────┘  └──────────────┘                │
│                                                      │
│  [Interactive Google Maps iframe]                   │
│  [Lưu ý quan trọng: Trang phục, bãi xe, etc.]     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  4️⃣ INVITATION (#invitation)                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  [Decorative background blur effects]               │
│                                                      │
│         ────  💌  ────                              │
│           Thư mời                                    │
│                                                      │
│  "Tình yêu là sợi chỉ vô hình..."                  │
│                                                      │
│  Kính thưa quý khách,                               │
│  Trân trọng kính mời quý khách đến chung vui...    │
│  [Full formal invitation text in Vietnamese]        │
│                                                      │
│  Trân trọng,                                        │
│  Gia đình Kim Anh & Xuân Tụy                        │
│                                                      │
│         ────  💐💍💒  ────                          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  5️⃣ GALLERY (#gallery)                              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│    Bộ sưu tập ảnh                                   │
│    ───────────────                                   │
│                                                      │
│  ┌────┐ ┌────┐ ┌────┐                              │
│  │📸 │ │💐 │ │💑 │                              │
│  └────┘ └────┘ └────┘                              │
│  ┌────┐ ┌────┐ ┌────┐                              │
│  │🎉 │ │💒 │ │🌸 │                              │
│  └────┘ └────┘ └────┘                              │
│  (Click to open lightbox with < > navigation)       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  6️⃣ WISHES (#wishes)                                │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│    Lời chúc                                         │
│    ────────                                          │
│                                                      │
│  ┌─────────────────────────────────────┐            │
│  │  Gửi lời chúc của bạn              │            │
│  │  [Name input *]                     │            │
│  │  [Message textarea *]               │            │
│  │  [Gửi lời chúc 💝] (with confetti)  │            │
│  └─────────────────────────────────────┘            │
│                                                      │
│  ┌──────────┐  ┌──────────┐                        │
│  │ 💌       │  │ 💌       │                        │
│  │ Name     │  │ Name     │                        │
│  │ Message  │  │ Message  │                        │
│  └──────────┘  └──────────┘                        │
│                                                      │
│  [← Trước] Trang 1/X [Sau →]                       │
│  [Xuất lời chúc (JSON) 📥]                         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  7️⃣ COUNTDOWN (#countdown)                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│    Đếm ngược đến ngày trọng đại                     │
│    ──────────────────────────────                    │
│                                                      │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐                   │
│  │ 27 │  │ 14 │  │ 32 │  │ 45 │                   │
│  │ Ngày│ │ Giờ│ │Phút│ │Giây│                   │
│  └────┘  └────┘  └────┘  └────┘                   │
│  (Updates every second!)                            │
│                                                      │
│  After wedding: "Ngày trọng đại đã đến! 🎉💑💒"   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  8️⃣ THANK YOU (#thank-you)                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  [Decorative background effects]                    │
│                                                      │
│           🙏💝                                       │
│       Cảm ơn quý khách                              │
│                                                      │
│  Sự hiện diện của quý khách là món quà...          │
│  [Thank you message in Vietnamese]                  │
│                                                      │
│         ──── 💕 ────                                │
│                                                      │
│      Trân trọng,                                    │
│      Kim Anh & Xuân Tụy                             │
│                                                      │
│  Chia sẻ thiệp mời:                                 │
│  [📘 Facebook] [💬 Zalo]                           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  🦶 FOOTER                                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│       Kim Anh & Xuân Tụy                            │
│           21.11.2025                                 │
│     Thôn 3B – Ea Wy – Đắk Lắk                      │
│                                                      │
│  [Trang chủ] [Câu chuyện] [Tiệc cưới] etc.        │
│                                                      │
│  © 2025 Kim Anh & Xuân Tụy                          │
│  Made with 💖 in Vietnam                            │
└─────────────────────────────────────────────────────┘

┌──────────────┐
│  🎵 MUSIC    │ (Bottom-left floating)
│  [🔊/🔇]     │
└──────────────┘

┌──────────────┐
│  ⬆️ SCROLL   │ (Bottom-right floating)
│  [TO TOP]     │
└──────────────┘
```

---

## Component Hierarchy

```
App.tsx
├── Navigation.tsx (sticky header)
├── WelcomeModal.tsx (first visit)
├── main
│   ├── Hero.tsx
│   ├── LoveStoryTimeline.tsx
│   ├── WeddingDetails.tsx
│   ├── Invitation.tsx
│   ├── Gallery.tsx
│   ├── Wishes.tsx
│   ├── Countdown.tsx
│   └── ThankYou.tsx
├── Footer.tsx
├── MusicPlayer.tsx (floating)
└── ScrollToTop.tsx (floating)
```

---

## User Flow

```
1. User visits website
   ↓
2. Welcome modal appears (first time only)
   ↓
3. Click "Bước vào thiệp mời"
   ↓
4. Land on Hero section
   ↓
5. Scroll down through sections:
   - Read love story
   - See wedding details
   - Read invitation
   - Browse photos
   - Leave a wish
   - Watch countdown
   ↓
6. Thank you & share on social media
   ↓
7. Click music player to start background music
   ↓
8. Use navigation to jump between sections
   ↓
9. Click "Lên đầu trang" to scroll back to top
```

---

## Animation Timeline

```
Page Load:
0.0s → Navigation slides down
0.3s → Hero content fades in
0.5s → Petals start falling
1.0s → CTA button appears
1.5s → Scroll indicator bounces

On Scroll:
- Timeline items slide in from sides
- Cards scale up on hover
- Numbers animate in countdown
- Gallery items fade in with stagger

On Interaction:
- Button hover → scale 1.05x
- Gallery click → lightbox fade in
- Wish submit → confetti explosion
- Music toggle → smooth transition
```

---

## Responsive Breakpoints

```
Mobile:     < 640px   (1 column, stacked layout)
Tablet:     640-1024px (2 columns for some sections)
Desktop:    > 1024px   (3 columns, full navigation)
```

---

## State Management

```
LocalStorage:
- wedding_wishes: Array of wishes
- wedding_music_muted: Boolean
- wedding_welcome_shown: Boolean

React State:
- Navigation: activeSection, isScrolled
- Gallery: selectedImage
- Wishes: wishes array, currentPage
- Countdown: timeRemaining (updates every 1s)
- Music: isPlaying, isMuted
- Welcome: isOpen
```

---

**This visual map helps you understand the entire site at a glance! 🗺️**
