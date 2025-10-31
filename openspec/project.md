# Konteks Proyek

## Tujuan
Membangun website e-commerce untuk SkyPart Solutions yang menawarkan berbagai macam sparepart kendaraan dengan fokus pada pengalaman pengguna yang baik dan performa tinggi.

## Tech Stack
- **Frontend**: Astro 5.1.10 (SSG/SSR)
- **Styling**: Tailwind CSS 4.1.16 dengan plugin Typography
- **Backend Services**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Netlify
- **Bahasa Pemrograman**: TypeScript 5.6.3
- **Build Tool**: Vite

## Konvensi Proyek

### Gaya Kode
- Gunakan TypeScript untuk type safety
- Format kode mengikuti standar ESLint/Prettier
- Gunakan komponen Astro untuk UI yang dapat digunakan kembali
- Gunakan konvensi penamaan PascalCase untuk komponen dan camelCase untuk fungsi/variabel

### Pola Arsitektur
- File-based routing dengan Astro
- Komponen UI yang dapat digunakan kembali di direktori `src/components/`
- Halaman statis di-generate pada waktu build untuk performa optimal
- Serverless functions untuk API endpoints

### Strategi Testing
- Pengujian komponen dengan Astro's built-in testing
- Pengujian integrasi untuk fungsi-fungsi kritis
- E2E testing untuk alur pengguna utama

### Workflow Git
- Gunakan Git Flow untuk manajemen cabang
- Format commit message: `[type](scope): pesan`
  - Contoh: `feat(products): tambah halaman daftar produk`
  - Types: feat, fix, docs, style, refactor, test, chore
- Pull request diperlukan sebelum merge ke branch main

## Konteks Domain
- Sistem manajemen katalog produk sparepart kendaraan
- Integrasi dengan layanan pembayaran (belum diimplementasikan)
- Manajemen inventaris dan stok
- Sistem autentikasi pengguna

## Batasan Penting
- Harus mendukung SEO yang baik
- Performa halaman harus optimal (Lighthouse score > 90)
- Harus responsif di semua perangkat
- Harus mengikuti standar aksesibilitas WCAG 2.1

## Dependensi Eksternal
- **Supabase**: Untuk backend services (database, auth, storage)
- **Netlify**: Untuk hosting dan serverless functions
- **Tailwind CSS**: Untuk styling
- **Zod**: Untuk validasi data (jika diperlukan)

## Struktur Proyek
```
src/
├── components/    # Komponen UI yang dapat digunakan kembali
├── content/      # Konten statis dan konfigurasi
├── pages/        # Halaman aplikasi
├── styles/       # File CSS/SCSS global
└── utils/        # Fungsi utilitas
```
