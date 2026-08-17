# PRD: Kantor Notaris Pranata & Partners — Jasa Notaris

## 1. Brand Identity

**Nama Brand:** Kantor Notaris Pranata & Partners
**Alasan Naming:** Format konvensional "[Nama Notaris] & Partners" mengikuti tradisi profesi hukum di Indonesia — memberikan trust signal langsung & legitimasi. "Pranata" (= aturan/tatanan) cocok dengan profesi notaris yang berkaitan dengan legal order.

**Tagline:** *"Aman Secara Hukum, Tenang Secara Pikiran."*

**Target Audience:**
- Pasangan yang mau menikah (perjanjian pranikah, akta nikah catatan sipil)
- Property buyer (AJB, akta hibah, akta tukar menukar)
- Entrepreneur (pendirian PT/CV, perubahan anggaran dasar)
- Keluarga (akta waris, akta hibah, akta perdamaian)
- Pemegang waralaba & franchise (perjanjian franchise)
- Investor (perjanjian kerja sama, MOU notariil)
- Usia 25-60, SES B+ sampai A

**Brand Voice:**
- Tone: Formal, profesional, terpercaya, tenang
- Style copywriting: Clear & precise dengan terminologi hukum yang accessible
- Avoid: Bahasa hukum berlebihan tanpa penjelasan, bahasa terlalu casual

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (subtle, formal)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (professional, conservative)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo formal serif, nav, CTA "Konsultasi" |
| 2 | Hero | React island `client:load` | Statement trustworthy + introduction |
| 3 | About Notaris | `.astro` static | Profil notaris & kredensial |
| 4 | Services | React island `client:visible` | 8 layanan notaris utama |
| 5 | When Do You Need Notary | React island `client:visible` | Edukasi kapan butuh notaris |
| 6 | Pricing Reference | `.astro` static | Tabel biaya indikatif per akta |
| 7 | Process | React island `client:visible` | 4-step process pembuatan akta |
| 8 | Documents Required | React island `client:visible` | Checklist dokumen per layanan |
| 9 | Office & Schedule | `.astro` static | Lokasi kantor & jam buka |
| 10 | FAQ | React island `client:visible` | Pertanyaan teknis umum |
| 11 | Testimonial | React island `client:visible` | Klien review (B2C & B2B) |
| 12 | Contact CTA | React island `client:idle` | Form janji temu |
| 13 | Footer | `.astro` static | Lisensi, jam buka, area servis |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Tentang • Layanan • Biaya • Tata Cara • Kontak
- CTA: **Buat Janji**

### Hero
- **Headline:** Setiap Tanda Tangan, Setiap Akta — Kami Pastikan Sah Secara Hukum.
- **Subheadline:** Kantor notaris yang melayani perorangan, keluarga, dan badan usaha di Jakarta sejak 2012. Pembuatan akta otentik dengan ketelitian profesional.
- **CTA Primary:** Konsultasi Gratis
- **CTA Secondary:** Lihat Layanan

Trust badges: "Diangkat Menkumham RI" • "Anggota INI (Ikatan Notaris Indonesia)" • "12+ Tahun Pengalaman" • "5.000+ Akta Terbit"

### About Notaris
- **Heading:** Tentang Kami
- **Body:** Kantor Notaris Pranata & Partners didirikan oleh Bapak Andi Pranata, S.H., M.Kn. — notaris dengan pengalaman lebih dari 12 tahun, diangkat oleh Kementerian Hukum dan HAM RI pada tahun 2012. Kantor kami melayani Jakarta Selatan dan sekitarnya, dengan spesialisasi dalam akta keluarga, properti, dan korporasi.

Sertifikasi profil:
- 📜 Diangkat Menkumham RI (SK No. AHU-XXX/2012)
- 🏛️ Anggota Ikatan Notaris Indonesia (INI)
- 🎓 S2 Magister Kenotariatan, Universitas Indonesia
- 👨‍⚖️ Pengalaman 12+ tahun praktik

Tim:
- **Andi Pranata, S.H., M.Kn.** — Notaris & PPAT
- **Tika Hartono, S.H., M.Kn.** — Partner Notaris (joining 2020)
- **Reza Wijaya, S.H.** — Senior Legal Staff
- 4 staff administratif

### Services
- **Heading:** Layanan Kami
- **Subheading:** Pembuatan akta otentik dan layanan kenotariatan lengkap.

Grid 8 service cards:

**🏠 Akta Tanah & Properti**
- AJB (Akta Jual Beli)
- Akta Hibah
- Akta Tukar Menukar
- APHB (Akta Pembagian Hak Bersama)
- Pengikatan Jual Beli (PJB)
- PPAT services

**💍 Akta Keluarga**
- Perjanjian Pranikah
- Perjanjian Pisah Harta
- Akta Waris
- Akta Pengakuan Anak
- Akta Adopsi

**🏢 Akta Perusahaan & Bisnis**
- Pendirian PT / CV
- Perubahan Anggaran Dasar
- Akta RUPS
- Akta Penggabungan / Akuisisi
- Pembubaran PT/CV

**🤝 Akta Perjanjian Bisnis**
- Perjanjian Kerja Sama
- Perjanjian Franchise / Waralaba
- Perjanjian Distributor / Agen
- MOU (Memorandum of Understanding)
- Perjanjian Sewa (jangka panjang)

**💰 Akta Keuangan & Hutang**
- Akta Pengakuan Hutang
- Akta Kuasa
- Akta Pemberian Jaminan
- Akta Hipotek

**📜 Legalisasi & Waarmerking**
- Legalisasi tanda tangan
- Waarmerking dokumen
- Pencocokan fotocopy dengan asli

**🌍 Pengurusan & Pendaftaran**
- Pendaftaran AHU (Online)
- Pengurusan SK Menkumham
- Pendaftaran HGB & SHM ke BPN
- Roya & Balik Nama

**👨‍👩‍👧 Akta Wasiat & Hibah**
- Akta Wasiat
- Akta Hibah (semasa hidup)
- Pencabutan Wasiat
- Pembukaan Wasiat

### When Do You Need Notary
- **Heading:** Kapan Anda Butuh Notaris?
- **Subheading:** Tidak semua urusan butuh notaris — tapi untuk hal-hal berikut, akta notaris memberi kekuatan hukum yang berbeda.

6 use case cards:

**🏠 Membeli / Menjual Properti**
AJB harus dibuat di hadapan PPAT (Notaris merangkap PPAT). Tanpa AJB, transfer hak milik tidak sah secara hukum.

**💍 Sebelum / Sesudah Pernikahan**
Perjanjian pranikah/pascanikah melindungi harta masing-masing pihak. Dibuat di hadapan notaris sebelum pencatatan nikah.

**🏢 Mendirikan PT / CV**
Akta pendirian harus dibuat di hadapan notaris untuk mendapatkan pengesahan dari Menkumham (PT) atau Pengadilan (CV lama).

**👨‍👩‍👧 Hibah ke Keluarga**
Hibah tanah / properti / saham di atas nilai tertentu wajib dengan akta notaris untuk validitas pajak.

**🤝 Kerja Sama Bisnis**
Perjanjian dengan nilai signifikan (di atas Rp 1 M) sebaiknya akta notaris. Memberikan kepastian hukum & alat bukti otentik.

**📜 Wasiat / Pembagian Waris**
Wasiat lebih aman dibuat dalam akta notaris. Pembagian waris berdasarkan akta meminimalisir konflik keluarga.

### Pricing Reference
- **Heading:** Referensi Biaya
- **Subheading:** Biaya notaris diatur dalam UU No. 30/2004 dan permenkumham, dengan toleransi negosiasi sesuai kompleksitas. Berikut indikatif yang biasa kami terapkan.

| Layanan | Biaya Notaris | Catatan |
|---------|---------------|---------|
| AJB Properti | 0.5% - 1% dari NJOP | Min Rp 2.5jt |
| Perjanjian Pranikah | Rp 3 jt - 6 jt | Konsultasi termasuk |
| Pendirian PT | Rp 4 jt - 7 jt | Belum termasuk PNBP & SK |
| Pendirian CV | Rp 2.5 jt - 4 jt | Belum termasuk pendaftaran |
| Perubahan Anggaran Dasar | Rp 2 jt - 4 jt | Per perubahan |
| Akta Waris | Rp 2 jt - 5 jt | Tergantung kompleksitas |
| Perjanjian Kerja Sama | Rp 1.5 jt - 5 jt | Tergantung pasal & nilai |
| Akta Hibah | Rp 1.5 jt - 3 jt | + BPHTB |
| Akta Wasiat | Rp 1.5 jt - 3 jt | |
| Legalisasi/Waarmerking | Rp 200k - 500k | Per dokumen |

Note: *Harga belum termasuk PNBP, pajak (PPh & BPHTB jika ada), dan biaya pendaftaran pemerintah. Konsultasi gratis untuk estimasi akurat.*

### Process
- **Heading:** Tata Cara Pembuatan Akta
- Timeline 4 step:
  1. **📞 Konsultasi Awal** — Booking janji temu, diskusi kebutuhan (gratis 30 menit)
  2. **📋 Persiapan Dokumen** — Kami berikan checklist dokumen yang dibutuhkan
  3. **✍️ Tanda Tangan Akta** — Hadir di kantor untuk pembacaan & penandatanganan akta
  4. **📦 Penyerahan & Pendaftaran** — Salinan akta diberikan, kami urus pendaftaran (jika perlu)

### Documents Required
- **Heading:** Dokumen Yang Perlu Disiapkan
- **Subheading:** Pilih layanan untuk lihat checklist dokumen yang spesifik.

Tab: AJB Properti • Pendirian PT • Perjanjian Pranikah • Akta Waris

**Contoh: AJB Properti**
- KTP penjual & pembeli (suami/istri jika menikah)
- KK & buku nikah penjual & pembeli
- Sertifikat asli (SHM / HGB / HGU)
- PBB terakhir (lunas)
- Bukti pembayaran (kuitansi / transfer)
- IMB (jika ada bangunan)
- Akta nikah penjual (jika menikah)
- NPWP penjual & pembeli

### Office & Schedule
- **Heading:** Lokasi & Jam Buka
- **Office:** Jl. Kemang Selatan VIII No. 88, Jakarta Selatan
- **Jam Buka:**
  - Senin - Jumat: 09:00 - 17:00
  - Sabtu: 09:00 - 13:00 (by appointment)
  - Minggu & libur nasional: tutup
- **Janji Temu:** Disarankan janji temu sebelumnya untuk pelayanan optimal
- Map embed + parking info

### FAQ
- **Heading:** FAQ
Accordion:
1. Apa beda notaris dan PPAT? → Notaris berwenang umum (akta otentik), PPAT khusus pertanahan. Banyak notaris merangkap PPAT (dual role).
2. Berapa lama proses pembuatan AJB? → Umumnya 7-14 hari kerja setelah dokumen lengkap.
3. Apakah bisa tanda tangan akta lewat video call? → Untuk akta tertentu dapat dilakukan secara elektronik (sesuai UU No. 11/2008), tetapi mayoritas akta tetap memerlukan kehadiran fisik.
4. Jika salah satu pihak di luar negeri? → Bisa pakai kuasa notariil yang dilegalisir oleh KBRI setempat.
5. Apakah notaris bisa ke rumah/kantor klien? → Bisa, untuk kasus tertentu (klien sakit, jumlah pihak banyak). Tambahan biaya kunjungan.
6. Bagaimana memastikan notaris terdaftar resmi? → Cek di website resmi INI (notaris.or.id) atau AHU Online. Notaris resmi memiliki SK dari Menkumham.

### Testimonial
- **Heading:** Apa Kata Klien Kami
- 4 testimonial:

> "Proses AJB rumah pertama saya lancar di Pranata & Partners. Notaris sabar menjelaskan setiap pasal, gak buru-buru tanda tangan."
> — **Pak Hendra & Ibu Rinda, Property buyer**

> "Pendirian PT saya selesai 14 hari, dari konsultasi sampai SK Menkumham. Pricing transparan, ada breakdown PNBP & jasa."
> — **Andini, Founder Startup**

> "Sebagai pasangan yang menikah beda agama, kami butuh perjanjian pranikah yang spesifik. Pak Pranata bantu drafting dengan detail."
> — **Lisa & Daniel**

> "Akta waris keluarga besar (8 ahli waris), tim notaris facilitate dengan profesional. Tidak ada konflik."
> — **Keluarga Hartono**

### Contact CTA
- **Heading:** Buat Janji Konsultasi
- **Body:** Konsultasi awal 30 menit gratis. Sampaikan kebutuhan Anda, kami berikan rekomendasi & estimasi biaya akurat.
- Form: Nama • WhatsApp • Email • Layanan dibutuhkan (dropdown) • Pesan • Preferred date for appointment
- **CTA:** Buat Janji Temu

Alternative: **WhatsApp Direct** untuk pertanyaan cepat

### Footer
- Tagline: *"Profesional, terpercaya, melindungi hak hukum Anda."*
- Lisensi: SK Menkumham RI, INI member, PPAT Registry
- Privasi: "Semua konsultasi & dokumen klien dilindungi kerahasiaan profesi notaris (Pasal 16 UUJN)"
- Sosmed: LinkedIn (legal updates), Website only (no IG/TikTok — formal positioning)

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/legal-document-signing | "Penandatanganan akta legal" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/notary%20office%20professional/ | "Kantor notaris profesional" | 1920x1080 |
| About - Office | Unsplash | https://unsplash.com/s/photos/law-office-interior | "Interior kantor notaris" | 1200x800 |
| About - Notaris portrait | Pexels | https://www.pexels.com/search/lawyer%20professional%20portrait/ | "Notaris portrait" | 600x800 |
| Service - Tanah | Unsplash | https://unsplash.com/s/photos/property-document-house | "AJB properti" | 800x600 |
| Service - Keluarga | Pexels | https://www.pexels.com/search/wedding%20contract%20signing/ | "Perjanjian pranikah" | 800x600 |
| Service - Perusahaan | Unsplash | https://unsplash.com/s/photos/business-contract-signing | "Pendirian PT" | 800x600 |
| Service - Perjanjian | Pexels | https://www.pexels.com/search/business%20meeting%20contract/ | "Perjanjian kerja sama" | 800x600 |
| Service - Hutang | Unsplash | https://unsplash.com/s/photos/loan-agreement-document | "Pengakuan hutang" | 800x600 |
| Service - Legalisasi | Pexels | https://www.pexels.com/search/document%20stamp%20legal/ | "Legalisasi dokumen" | 800x600 |
| Service - Pendaftaran | Unsplash | https://unsplash.com/s/photos/legal-document-stack | "Pendaftaran AHU" | 800x600 |
| Service - Wasiat | Pexels | https://www.pexels.com/search/last%20will%20testament/ | "Akta wasiat" | 800x600 |
| When Need - Property | Unsplash | https://unsplash.com/s/photos/home-keys-transfer | "Transfer properti" | 600x600 |
| When Need - Marriage | Pexels | https://www.pexels.com/search/wedding%20rings%20document/ | "Perjanjian pernikahan" | 600x600 |
| When Need - Business | Unsplash | https://unsplash.com/s/photos/founders-startup-meeting | "Mendirikan PT" | 600x600 |
| Process - Consultation | Pexels | https://www.pexels.com/search/lawyer%20consultation%20meeting/ | "Konsultasi awal" | 800x600 |
| Process - Signing | Unsplash | https://unsplash.com/s/photos/contract-signing-pen | "Tanda tangan akta" | 800x600 |
| Office exterior | Unsplash | https://unsplash.com/s/photos/professional-office-building | "Kantor exterior" | 1200x800 |
| Testimonial - Client | Pexels | https://www.pexels.com/search/asian%20couple%20professional/ | "Client portrait" | 600x600 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Brand ini formal & professional — animasi harus subtle, jangan playful. Hindari bouncing, spring berlebihan.

### Hero (React island, `client:load`)
```tsx
// Hero: subtle fade-in dengan slight scale
const formalReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 }
  }
}

// Trust badges: simple fade-in stagger after headline
// No bouncy spring, keep it formal
```

### About Section (`.astro` + small island)
- Text reveal sequential dengan subtle ease
- Sertifikasi items: stagger reveal calm
- Notaris portrait: fade-in dengan slight scale

### Services Grid (React island, `client:visible`)
- 8 cards reveal stagger `staggerChildren: 0.06`
- Hover: card subtle lift `y: -4` (minimal, formal feel)
- Icon: subtle scale on visible (no bouncy)
- Border color shift on hover

### When Do You Need Notary (React island, `client:visible`)
- 6 use case cards reveal stagger
- Card hover: subtle background color shift, no scale
- Icon: subtle fade-in

### Pricing Table
- Row reveal stagger pada scroll into view
- Hover row: subtle background highlight
- No animated counters (formal context, keep static)

### Process Timeline (React island, `client:visible`)
- Vertical line draw via SVG `pathLength`
- Step numbers reveal sequential dengan duration lambat
- Step content: subtle slide-in from side

### Documents Required (React island, `client:visible`)
- Tab switch: smooth `layoutId` indicator
- Checklist items: stagger reveal
- Checkmark: simple fade-in (no animation overkill)

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate 180deg dengan ease
- Active row: subtle accent border

### Testimonial (React island, `client:visible`)
- Carousel auto-rotate 8s (slower, formal)
- Slide transition smooth, no bouncing
- Quote mark fade-in
- Pause on hover

### Contact Form
- Form field: subtle border accent on focus
- No bouncing animations
- Submit: simple loading state

### Scroll Reveal Pattern (reusable)
```tsx
const formalFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Services, Use Cases, Process, Docs, FAQ, Testimonial
- `client:idle` → Contact form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Kantor Notaris Pranata & Partners — Notaris & PPAT Jakarta Selatan
- **Description:** Kantor notaris terpercaya di Jakarta Selatan. AJB properti, pendirian PT, perjanjian pranikah, akta waris, perusahaan. Diangkat Menkumham, 12+ tahun pengalaman.
- **Keywords:** notaris jakarta selatan, jasa notaris, AJB notaris, pendirian PT, perjanjian pranikah, akta waris notaris, PPAT jakarta
- **OG Image:** Professional shot kantor dengan logo formal (1200x630)
- **Schema:** `LegalService` + `LocalBusiness` + `Person` schema
