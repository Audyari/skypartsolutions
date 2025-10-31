// src/utils/database.ts
import { createClient } from '@supabase/supabase-js';

// Debug: Log environment variables
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

console.log('🔧 Debug - Supabase URL:', supabaseUrl ? '✅ Ada' : '❌ Tidak Ada');
console.log('🔧 Debug - Supabase Key:', supabaseKey ? '✅ Ada' : '❌ Tidak Ada');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase URL or Anon Key is missing');
  console.error('Pastikan environment variables berikut sudah diatur:');
  console.error('- PUBLIC_SUPABASE_URL');
  console.error('- PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// Fungsi untuk memeriksa koneksi database
export async function checkConnection() {
  try {
    console.log('🔧 Debug - Memeriksa koneksi database...');
    
    const { data, error, count } = await supabase
      .from('aircraft_parts')
      .select('*', { count: 'exact', head: true });
      
    if (error) {
      console.error('❌ Database connection error:', error);
      return { 
        success: false, 
        error: error.message,
        details: error
      };
    }
    
    console.log('✅ Database connection successful');
    return { 
      success: true, 
      count: count,
      message: `Koneksi berhasil. Total data: ${count}`
    };
  } catch (error) {
    console.error('❌ Unexpected error during connection check:', error);
    return { 
      success: false, 
      error: error.message,
      details: error
    };
  }
}

// Fungsi untuk mendapatkan data aircraft parts dengan debugging
export async function getAircraftPartsWithDebug() {
  const debugInfo = {
    timestamp: new Date().toISOString(),
    environment: {
      url: supabaseUrl ? '✅ Set' : '❌ Tidak Set',
      key: supabaseKey ? '✅ Set' : '❌ Tidak Set'
    },
    connection: null,
    query: null,
    result: null,
    error: null
  };

  try {
    // Periksa koneksi terlebih dahulu
    debugInfo.connection = await checkConnection();
    
    if (!debugInfo.connection.success) {
      throw new Error(`Koneksi database gagal: ${debugInfo.connection.error}`);
    }

    console.log('🔧 Debug - Menjalankan query untuk aircraft_parts...');
    
    // Jalankan query utama
    const { data, error, count, status, statusText } = await supabase
      .from('aircraft_parts')
      .select('*')
      .order('created_at', { ascending: false });

    debugInfo.query = {
      table: 'aircraft_parts',
      operation: 'select',
      status,
      statusText
    };

    if (error) {
      debugInfo.error = {
        message: error.message,
        details: error,
        code: error.code
      };
      throw error;
    }

    debugInfo.result = {
      dataCount: data?.length || 0,
      totalCount: count,
      sampleData: data ? data.slice(0, 2) : null // Sample data untuk debug
    };

    console.log(`✅ Query berhasil. Data ditemukan: ${data?.length || 0} item`);
    
    return {
      data,
      error: null,
      debugInfo
    };

  } catch (error) {
    console.error('❌ Error dalam getAircraftPartsWithDebug:', error);
    debugInfo.error = {
      message: error.message,
      details: error
    };
    
    return {
      data: null,
      error,
      debugInfo
    };
  }
}