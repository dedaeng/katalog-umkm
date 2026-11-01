// DATA CONTOH: hanya untuk tampilan awal sebelum terhubung ke database.
// Nama kolom sama persis dengan tabel "produk" di docs/schema.sql.
// Setelah US-01 selesai, halaman tidak lagi memakai file ini.

export const produkContoh = [
  {
    id: 1,
    nama: "Polo Padang dan Indo' Deatanna",
    harga: 0,
    deskripsi:
      "Kisah seorang pria bernama Polo Padang yang harus melewati serangkaian ujian agar bisa bertemu dengan istri dan anaknya.",
    foto_url: "/produk/polopadang.webp",
    kategori: "Cerita Rakyat",
  },
  {
    id: 2,
    nama: "Landorundun",
    harga: 0,
    deskripsi: "Kisah seorang perempuan cantik berambut sangat panjang bernama Landorundun.",
    foto_url: "/produk/landorundun.webp",
    kategori: "Cerita Rakyat",
  },
  {
    id: 3,
    nama: "Pakkalise'",
    harga: 0,
    deskripsi: "Cerita tentang Pakkalise'.",
    foto_url: "/produk/pakkalise.webp",
    kategori: "Cerita Rakyat",
  },
  {
    id: 4,
    nama: "Pakkalise'",
    harga: 0,
    deskripsi: "Kisah tentang Pakkalise'.",
    foto_url: "/produk/kerabangau.webp",
    kategori: "Cerita Rakyat",
  },
  {
    id: 5,
    nama: "Burung Tattiu' dan Rusa",
    harga: 0,
    deskripsi: "Kisah persahabatan antara seekor burung tattiu' dan seekor rusa.",
    foto_url: "/produk/tattiu.webp",
    kategori: "Cerita Rakyat",
  },
  {
    id: 6,
    nama: "Anjing, Kucing dan Tikus",
    harga: 0,
    deskripsi: "Inilah awal mula anjing, kucing dan tikus selalu ribut bila bertemu.",
    foto_url: "/produk/anjingkucing.webp",
    kategori: "Cerita Rakyat",
  },
];

export function cariProdukContoh(id) {
  return produkContoh.find((produk) => String(produk.id) === String(id));
}
