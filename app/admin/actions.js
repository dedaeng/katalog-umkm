"use server";

import { createAdminSessionClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * Server Action untuk memproses login admin menggunakan Supabase Auth (email dan password).
 */
export async function masuk(prevState, formData) {
  const data =
    formData instanceof FormData
      ? formData
      : prevState instanceof FormData
        ? prevState
        : null;

  const email = data?.get ? data.get("email") : null;
  const password = data?.get ? data.get("password") : null;

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  const supabase = await createAdminSessionClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: String(email).trim(),
    password: String(password),
  });

  if (error) {
    return { error: "Email atau password salah. Silakan periksa kembali." };
  }

  redirect("/admin");
}

/**
 * Server Action untuk mengakhiri sesi admin (logout) lalu kembali ke halaman login.
 */
export async function keluar() {
  const supabase = await createAdminSessionClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export const login = masuk;
export const logout = keluar;

