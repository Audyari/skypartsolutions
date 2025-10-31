---
description: |
  Menambahkan fitur debugging untuk memeriksa masalah loading data katalog
  
  **Status**: Proposed
  **Priority**: High
  **Impact**: High
  
  **Components**:
  - `src/pages/catalog/index.astro`
  - `src/utils/database.ts`
  - `src/components/DebugInfo.astro` (new)
  
  **Dependencies**:
  - Supabase Client
  - Astro
---

# Debugging Data Katalog

## Masalah
Data katalog tidak muncul di halaman katalog meskipun kode seharusnya menampilkan data dari Supabase.

## Tujuan
1. Menambahkan logging dan debugging untuk memeriksa koneksi ke Supabase
2. Memastikan query ke database berhasil
3. Menampilkan informasi error yang lebih detail
4. Menambahkan komponen debug yang bisa diaktifkan/dinonaktifkan

## Perubahan yang Diperlukan

### 1. Memperbarui `database.ts`
- Menambahkan logging koneksi Supabase
- Memeriksa environment variables yang diperlukan
- Menambahkan fungsi untuk memeriksa koneksi

### 2. Memperbarui `index.astro`
- Menambahkan state loading
- Menambahkan error boundary
- Menampilkan informasi debug saat development
- Menambahkan tombol untuk memuat ulang data

### 3. Komponen Baru: `DebugInfo.astro`
- Menampilkan informasi koneksi database
- Menampilkan query yang dijalankan
- Menampilkan response dari API
- Hanya ditampilkan di lingkungan development

## Implementasi

### Langkah 1: Periksa Koneksi Database
```typescript
// src/utils/database.ts
import { createClient } from '@supabase/supabase-js';
import { env } from 'astro/env';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Anon Key is missing');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// Fungsi untuk memeriksa koneksi
export async function checkConnection() {
  try {
    const { data, error } = await supabase
      .from('aircraft_parts')
      .select('count', { count: 'exact', head: true });
      
    if (error) throw error;
    return { success: true, count: data };
  } catch (error) {
    console.error('Database connection error:', error);
    return { success: false, error };
  }
}
```

### Langkah 2: Update Halaman Katalog
```astro
---
// Di bagian atas file, tambahkan:
import { checkConnection } from '../../utils/database';
import DebugInfo from '../../components/DebugInfo.astro';

// Tambahkan state untuk debugging
const debugMode = import.meta.env.DEV; // Hanya aktif di development
let debugInfo = {};

// Di dalam try-catch, tambahkan:
try {
  if (supabase) {
    // Debug: Simpan informasi koneksi
    const connectionCheck = await checkConnection();
    debugInfo = { ...debugInfo, connectionCheck };
    
    // Query yang sudah ada...
  }
} catch (error) {
  // Error handling yang sudah ada
  debugInfo = { ...debugInfo, error: error.message };
}
---

<!-- Di bagian bawah halaman, sebelum penutup </div> -->
{debugMode && <DebugInfo data={debugInfo} />}
```

### Langkah 3: Buat Komponen DebugInfo
```astro
---
// src/components/DebugInfo.astro
const { data } = Astro.props;
---

<div class="fixed bottom-4 right-4 bg-gray-900 border border-red-500 p-4 rounded-lg max-w-lg max-h-96 overflow-auto text-xs">
  <h3 class="text-red-400 font-mono font-bold mb-2">Debug Information</h3>
  <pre class="text-green-400 whitespace-pre-wrap break-all">
    {JSON.stringify(data, null, 2)}
  </pre>
</div>

<style>
  pre {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    line-height: 1.2;
  }
</style>
```

## Testing
1. Buka halaman katalog di development mode
2. Periksa console log untuk pesan error
3. Pastikan komponen debug muncul di pojok kanan bawah
4. Verifikasi koneksi database berhasil
5. Periksa query dan response dari Supabase

## Rollback Plan
Jika terjadi masalah, lakukan langkah-langkah berikut:
1. Nonaktifkan mode debug dengan mengubah `debugMode` menjadi `false`
2. Kembalikan perubahan pada `database.ts` ke versi sebelumnya
3. Hapus komponen `DebugInfo` dari halaman katalog

## Catatan Tambahan
- Pastikan environment variables sudah terkonfigurasi dengan benar
- Periksa izin (RLS) di dashboard Supabase
- Verifikasi tabel `aircraft_parts` ada dan berisi data
