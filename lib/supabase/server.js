import { createClient } from "@supabase/supabase-js";

/**
 * Membuat client Supabase di server menggunakan kunci rahasia (SUPABASE_SECRET_KEY).
 * Hanya digunakan di sisi server untuk membaca data publik tanpa terhalang RLS.
 */
export function createServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "SUPABASE_URL atau SUPABASE_SECRET_KEY belum diatur di environment variable."
    );
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export const buatKoneksiServer = createServerClient;
export const createClientServer = createServerClient;
export default createServerClient;

