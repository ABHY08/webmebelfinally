# WebMebelSaya — Premium Furniture Website

Website company profile + katalog produk furniture modern. Dibangun dengan **HTML, CSS, dan JavaScript murni** — 100% static, siap deploy ke Vercel / Netlify tanpa konfigurasi tambahan.

---

## 🗂️ Struktur Folder

```
webmebelsaya/
├── index.html              # Halaman utama
├── vercel.json             # Konfigurasi deploy Vercel
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # Stylesheet utama
    │   └── placeholders.css # Gradient placeholder produk
    ├── js/
    │   └── main.js         # JavaScript utama
    └── images/
        ├── hero.png        # Hero section image
        ├── sofa1.png       # Produk sofa
        ├── chair1.png      # Produk kursi
        ├── table1.png      # Produk meja
        ├── lemari1.png     # Produk lemari
        └── rak1.png        # Produk rak
```

---

## ✨ Fitur

- **Navbar** fixed dengan scroll effect, active link, dan hamburger mobile
- **Hero Section** dengan animasi float, CTA ganda (Katalog + WhatsApp)
- **Statistik** dengan animasi counter (500+ Produk, 10K+ Pelanggan, dll)
- **Katalog Produk** 8 produk dengan filter kategori (Sofa, Kursi, Meja, Lemari, Rak)
- **Setiap kartu produk** → tombol "Pesan" langsung buka WhatsApp
- **Ulasan Pelanggan** — 4 testimoni dengan featured card
- **Tentang Kami** dengan feature highlights
- **CTA Banner** WhatsApp
- **Footer** lengkap dengan sosial media dan kontak
- **Floating WhatsApp Button** selalu terlihat
- **Responsive** — mobile & desktop
- **Scroll Reveal** animasi saat elemen masuk viewport
- **Toast Notification** siap pakai

---

## 🚀 Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → **New Project**
2. Import folder `webmebelsaya` (drag & drop atau dari GitHub)
3. Klik **Deploy** — selesai! ✅

### Deploy ke Netlify
1. Buka [app.netlify.com](https://app.netlify.com) → **Add new site**
2. Drag & drop folder `webmebelsaya`
3. Deploy otomatis! ✅

---

## 📞 Konfigurasi WhatsApp

Ganti nomor WhatsApp di `assets/js/main.js` baris pertama:

```js
const WA_NUM = '6281234567890';  // ← Ganti dengan nomor Anda
```

Format: kode negara (62) + nomor tanpa 0 di awal.

---

## 🎨 Design System

| Warna       | Hex       | Penggunaan          |
|-------------|-----------|---------------------|
| Cream       | `#faf6f0` | Background utama    |
| Beige       | `#e8d5b7` | Border, aksen       |
| Brown       | `#8b5e3c` | Primary, CTA        |
| Brown Dark  | `#6b4226` | Gradient, footer    |
| Dark        | `#2c1a0e` | Heading, teks       |

**Font:** Playfair Display (heading) + Inter (body)

---

Dibuat dengan ❤️ — WebMebelSaya © 2024
