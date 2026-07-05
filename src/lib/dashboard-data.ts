export type Destinasi = {
  id: "wae_rebo" | "komodo";
  nama: string;
  lokasi: string;
  koordinat: [number, number];
  total: number;
  positif: number;
  negatif: number;
  netral: number;
  rating: { bintang: number; jumlah: number }[];
  warna: string;
  topikLda: { nama: string; nilai: number }[];
  trending: { kata: string; freq: number }[];
  wordcloud: { kata: string; bobot: number; sentimen: "neg" | "pos" }[];
  klaster: { id: number; nama: string; jumlah: number; deskripsi: string }[];
  radar: { aspek: string; skor: number }[];
  kmeans: {
    k: number;
    silhouette: number;
    daviesBouldin: number;
    calinski: number;
    topKata: { cluster: number; jumlah: number; kata: string[] }[];
    points: { x: number; y: number; c: number }[];
  };
  topikTrend: {
    bulan: string;
    [topik: string]: number | string;
  }[];
  topikSeries: string[];
};

export const DESTINASI: Destinasi[] = [
  {
    id: "wae_rebo",
    nama: "Desa Wae Rebo",
    lokasi: "Manggarai, NTT",
    koordinat: [-8.7615, 120.2728],
    total: 1102,
    positif: 369,
    negatif: 597,
    netral: 136,
    warna: "#2563eb",
    rating: [
      { bintang: 1, jumlah: 43 },
      { bintang: 2, jumlah: 22 },
      { bintang: 3, jumlah: 40 },
      { bintang: 4, jumlah: 120 },
      { bintang: 5, jumlah: 877 },
    ],
    topikLda: [
      { nama: "Wisata Alam / Pendakian", nilai: 26.0 },
      { nama: "Budaya & Desa Wae Rebo", nilai: 27.8 },
      { nama: "Pengalaman Menginap Adat", nilai: 46.3 },
    ],
    trending: [
      { kata: "trekking", freq: 312 },
      { kata: "rumah adat", freq: 287 },
      { kata: "porter", freq: 201 },
      { kata: "view", freq: 189 },
      { kata: "lelah", freq: 164 },
      { kata: "mahal", freq: 143 },
      { kata: "ramah", freq: 138 },
      { kata: "jalur", freq: 121 },
      { kata: "kabut", freq: 98 },
      { kata: "kopi", freq: 87 },
    ],
    wordcloud: [
      { kata: "mahal", bobot: 92, sentimen: "neg" },
      { kata: "lelah", bobot: 84, sentimen: "neg" },
      { kata: "licin", bobot: 71, sentimen: "neg" },
      { kata: "jauh", bobot: 65, sentimen: "neg" },
      { kata: "porter", bobot: 60, sentimen: "neg" },
      { kata: "kotor", bobot: 48, sentimen: "neg" },
      { kata: "indah", bobot: 88, sentimen: "pos" },
      { kata: "adat", bobot: 76, sentimen: "pos" },
      { kata: "ramah", bobot: 70, sentimen: "pos" },
      { kata: "unik", bobot: 58, sentimen: "pos" },
    ],
    klaster: [
      { id: 0, nama: "Pengalaman Budaya", jumlah: 412, deskripsi: "Rumah adat, tradisi, keramahan warga" },
      { id: 1, nama: "Tantangan Trekking", jumlah: 386, deskripsi: "Jalur, fisik, cuaca, porter" },
      { id: 2, nama: "Biaya & Logistik", jumlah: 213, deskripsi: "Tiket, akomodasi, transport mahal" },
      { id: 3, nama: "Keindahan Alam", jumlah: 91, deskripsi: "Pemandangan, kabut, sunrise" },
    ],
    radar: [
      { aspek: "Keindahan", skor: 92 },
      { aspek: "Aksesibilitas", skor: 38 },
      { aspek: "Harga", skor: 45 },
      { aspek: "Pelayanan", skor: 74 },
      { aspek: "Fasilitas", skor: 52 },
      { aspek: "Budaya", skor: 95 },
    ],
    kmeans: {
      k: 2,
      silhouette: 0.7925,
      daviesBouldin: 0.4359,
      calinski: 1560.16,
      topKata: [
        { cluster: 0, jumlah: 1049, kata: ["desa", "jalan", "tidak", "jam", "daki", "makan", "orang", "malam", "indah", "alam"] },
        { cluster: 1, jumlah: 53, kata: ["bagus", "alam", "suka", "tualang", "banget", "pandang", "kunjung", "iya", "puncak", "wae"] },
      ],
      points: generateScatter(1102, 0.7925, "wae"),
    },
    topikSeries: ["Budaya & Desa Wae Rebo", "Budaya & Desa Wae Rebo #2", "Wisata Alam/Pendakian"],
    topikTrend: [
      { bulan: "2018-06", "Budaya & Desa Wae Rebo": 9, "Budaya & Desa Wae Rebo #2": 21, "Wisata Alam/Pendakian": 7 },
      { bulan: "2019-06", "Budaya & Desa Wae Rebo": 32, "Budaya & Desa Wae Rebo #2": 43, "Wisata Alam/Pendakian": 27 },
      { bulan: "2020-06", "Budaya & Desa Wae Rebo": 25, "Budaya & Desa Wae Rebo #2": 64, "Wisata Alam/Pendakian": 22 },
      { bulan: "2021-06", "Budaya & Desa Wae Rebo": 28, "Budaya & Desa Wae Rebo #2": 17, "Wisata Alam/Pendakian": 2 },
      { bulan: "2022-06", "Budaya & Desa Wae Rebo": 46, "Budaya & Desa Wae Rebo #2": 62, "Wisata Alam/Pendakian": 4 },
      { bulan: "2023-06", "Budaya & Desa Wae Rebo": 56, "Budaya & Desa Wae Rebo #2": 99, "Wisata Alam/Pendakian": 61 },
      { bulan: "2024-06", "Budaya & Desa Wae Rebo": 48, "Budaya & Desa Wae Rebo #2": 93, "Wisata Alam/Pendakian": 39 },
      { bulan: "2025-07", "Budaya & Desa Wae Rebo": 0, "Budaya & Desa Wae Rebo #2": 5, "Wisata Alam/Pendakian": 6 },
      { bulan: "2025-08", "Budaya & Desa Wae Rebo": 4, "Budaya & Desa Wae Rebo #2": 4, "Wisata Alam/Pendakian": 13 },
      { bulan: "2025-09", "Budaya & Desa Wae Rebo": 1, "Budaya & Desa Wae Rebo #2": 5, "Wisata Alam/Pendakian": 7 },
      { bulan: "2025-10", "Budaya & Desa Wae Rebo": 0, "Budaya & Desa Wae Rebo #2": 8, "Wisata Alam/Pendakian": 6 },
      { bulan: "2025-11", "Budaya & Desa Wae Rebo": 1, "Budaya & Desa Wae Rebo #2": 5, "Wisata Alam/Pendakian": 8 },
      { bulan: "2025-12", "Budaya & Desa Wae Rebo": 3, "Budaya & Desa Wae Rebo #2": 3, "Wisata Alam/Pendakian": 5 },
      { bulan: "2026-01", "Budaya & Desa Wae Rebo": 2, "Budaya & Desa Wae Rebo #2": 6, "Wisata Alam/Pendakian": 6 },
      { bulan: "2026-02", "Budaya & Desa Wae Rebo": 3, "Budaya & Desa Wae Rebo #2": 3, "Wisata Alam/Pendakian": 0 },
      { bulan: "2026-03", "Budaya & Desa Wae Rebo": 1, "Budaya & Desa Wae Rebo #2": 5, "Wisata Alam/Pendakian": 1 },
      { bulan: "2026-04", "Budaya & Desa Wae Rebo": 2, "Budaya & Desa Wae Rebo #2": 5, "Wisata Alam/Pendakian": 4 },
      { bulan: "2026-06", "Budaya & Desa Wae Rebo": 2, "Budaya & Desa Wae Rebo #2": 7, "Wisata Alam/Pendakian": 2 },
    ],
  },
  {
    id: "komodo",
    nama: "Taman Nasional Komodo",
    lokasi: "Labuan Bajo, NTT",
    koordinat: [-8.5833, 119.4833],
    total: 715,
    positif: 250,
    negatif: 395,
    netral: 70,
    warna: "#ef4444",
    rating: [
      { bintang: 1, jumlah: 120 },
      { bintang: 2, jumlah: 43 },
      { bintang: 3, jumlah: 38 },
      { bintang: 4, jumlah: 71 },
      { bintang: 5, jumlah: 443 },
    ],
    topikLda: [
      { nama: "Satwa & Taman Komodo", nilai: 49.8 },
      { nama: "Satwa & Foto Turis", nilai: 50.2 },
    ],
    trending: [
      { kata: "komodo", freq: 421 },
      { kata: "pink beach", freq: 268 },
      { kata: "snorkeling", freq: 232 },
      { kata: "mahal", freq: 198 },
      { kata: "ranger", freq: 176 },
      { kata: "tiket", freq: 165 },
      { kata: "kapal", freq: 142 },
      { kata: "padar", freq: 124 },
      { kata: "manta", freq: 96 },
      { kata: "panas", freq: 82 },
    ],
    wordcloud: [
      { kata: "mahal", bobot: 95, sentimen: "neg" },
      { kata: "tiket", bobot: 80, sentimen: "neg" },
      { kata: "naik", bobot: 72, sentimen: "neg" },
      { kata: "panas", bobot: 60, sentimen: "neg" },
      { kata: "antri", bobot: 54, sentimen: "neg" },
      { kata: "sampah", bobot: 41, sentimen: "neg" },
      { kata: "komodo", bobot: 96, sentimen: "pos" },
      { kata: "indah", bobot: 82, sentimen: "pos" },
      { kata: "snorkeling", bobot: 70, sentimen: "pos" },
      { kata: "ranger", bobot: 55, sentimen: "pos" },
    ],
    klaster: [
      { id: 0, nama: "Komodo & Satwa", jumlah: 312, deskripsi: "Pertemuan komodo, ranger, edukasi" },
      { id: 1, nama: "Wisata Bahari", jumlah: 198, deskripsi: "Snorkeling, pink beach, manta" },
      { id: 2, nama: "Keluhan Tiket & Biaya", jumlah: 145, deskripsi: "Kenaikan harga, biaya tambahan" },
      { id: 3, nama: "Logistik Kapal", jumlah: 60, deskripsi: "Kapal, antrean, durasi tour" },
    ],
    radar: [
      { aspek: "Keindahan", skor: 90 },
      { aspek: "Aksesibilitas", skor: 62 },
      { aspek: "Harga", skor: 30 },
      { aspek: "Pelayanan", skor: 68 },
      { aspek: "Fasilitas", skor: 64 },
      { aspek: "Budaya", skor: 55 },
    ],
    kmeans: {
      k: 2,
      silhouette: 0.8031,
      daviesBouldin: 0.3665,
      calinski: 1202.35,
      topKata: [
        { cluster: 0, jumlah: 678, kata: ["komodo", "tidak", "naga", "taman", "jalan", "hewan", "pulau", "pandu", "alam", "orang"] },
        { cluster: 1, jumlah: 37, kata: ["bagus", "kunjung", "alam", "komodo", "tempat", "pandang", "takjub", "murah", "selam", "cuman"] },
      ],
      points: generateScatter(715, 0.8031, "kom"),
    },
    topikSeries: ["Satwa & Foto Turis", "Satwa & Taman Komodo"],
    topikTrend: [
      { bulan: "2024-06", "Satwa & Foto Turis": 131, "Satwa & Taman Komodo": 169 },
      { bulan: "2025-07", "Satwa & Foto Turis": 9, "Satwa & Taman Komodo": 9 },
      { bulan: "2025-08", "Satwa & Foto Turis": 14, "Satwa & Taman Komodo": 7 },
      { bulan: "2025-09", "Satwa & Foto Turis": 6, "Satwa & Taman Komodo": 11 },
      { bulan: "2025-10", "Satwa & Foto Turis": 13, "Satwa & Taman Komodo": 8 },
      { bulan: "2025-11", "Satwa & Foto Turis": 6, "Satwa & Taman Komodo": 3 },
      { bulan: "2025-12", "Satwa & Foto Turis": 0, "Satwa & Taman Komodo": 4 },
      { bulan: "2026-01", "Satwa & Foto Turis": 1, "Satwa & Taman Komodo": 4 },
      { bulan: "2026-03", "Satwa & Foto Turis": 1, "Satwa & Taman Komodo": 4 },
      { bulan: "2026-04", "Satwa & Foto Turis": 1, "Satwa & Taman Komodo": 4 },
      { bulan: "2026-06", "Satwa & Foto Turis": 3, "Satwa & Taman Komodo": 1 },
    ],
  },
];

// Seeded scatter to mimic SVD K-Means projection (dense cluster 0 baseline, sparse cluster 1 above)
function generateScatter(n: number, _sil: number, seed: string) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return (s & 0xffffffff) / 0x100000000;
  };
  const sample = Math.min(n, 600);
  const out: { x: number; y: number; c: number }[] = [];
  for (let i = 0; i < sample; i++) {
    const isC1 = rand() < 0.06;
    if (isC1) {
      out.push({ x: rand() * 0.45 + 0.05, y: rand() * 0.9 + 0.1, c: 1 });
    } else {
      out.push({ x: rand() * 0.6, y: (rand() - 0.4) * 0.15, c: 0 });
    }
  }
  return out;
}

/* ---------------- KLASIFIKASI DETAIL ---------------- */
export type ClassMetric = { precision: number; recall: number; f1: number; support: number };
export type ModelDetail = {
  accuracy: number;
  classes: Record<"Negatif" | "Netral" | "Positif", ClassMetric>;
  macro: { precision: number; recall: number; f1: number; support: number };
  weighted: { precision: number; recall: number; f1: number; support: number };
  cm: number[][]; // 3x3 [actual][pred] order Negatif, Netral, Positif
};

export const MODEL_DETAIL: Record<"SVM" | "Random Forest" | "Naive Bayes", { wae_rebo: ModelDetail; komodo: ModelDetail }> = {
  SVM: {
    wae_rebo: {
      accuracy: 87.78,
      classes: {
        Negatif: { precision: 0.87, recall: 0.95, f1: 0.91, support: 120 },
        Netral:  { precision: 0.85, recall: 0.63, f1: 0.72, support: 27 },
        Positif: { precision: 0.90, recall: 0.85, f1: 0.88, support: 74 },
      },
      macro:    { precision: 0.87, recall: 0.81, f1: 0.84, support: 221 },
      weighted: { precision: 0.88, recall: 0.88, f1: 0.87, support: 221 },
      cm: [[114, 2, 4], [7, 17, 3], [10, 1, 63]],
    },
    komodo: {
      accuracy: 71.33,
      classes: {
        Negatif: { precision: 0.75, recall: 0.89, f1: 0.81, support: 79 },
        Netral:  { precision: 0.00, recall: 0.00, f1: 0.00, support: 14 },
        Positif: { precision: 0.67, recall: 0.64, f1: 0.65, support: 50 },
      },
      macro:    { precision: 0.47, recall: 0.51, f1: 0.49, support: 143 },
      weighted: { precision: 0.65, recall: 0.71, f1: 0.68, support: 143 },
      cm: [[70, 1, 8], [6, 0, 8], [17, 1, 32]],
    },
  },
  "Random Forest": {
    wae_rebo: {
      accuracy: 87.78,
      classes: {
        Negatif: { precision: 0.89, recall: 0.98, f1: 0.93, support: 120 },
        Netral:  { precision: 0.68, recall: 0.70, f1: 0.69, support: 27 },
        Positif: { precision: 0.95, recall: 0.77, f1: 0.85, support: 74 },
      },
      macro:    { precision: 0.84, recall: 0.82, f1: 0.82, support: 221 },
      weighted: { precision: 0.88, recall: 0.88, f1: 0.88, support: 221 },
      cm: [[118, 1, 1], [6, 19, 2], [9, 8, 57]],
    },
    komodo: {
      accuracy: 74.83,
      classes: {
        Negatif: { precision: 0.78, recall: 0.85, f1: 0.81, support: 79 },
        Netral:  { precision: 0.53, recall: 0.71, f1: 0.61, support: 14 },
        Positif: { precision: 0.79, recall: 0.60, f1: 0.68, support: 50 },
      },
      macro:    { precision: 0.70, recall: 0.72, f1: 0.70, support: 143 },
      weighted: { precision: 0.76, recall: 0.75, f1: 0.75, support: 143 },
      cm: [[67, 5, 7], [3, 10, 1], [16, 4, 30]],
    },
  },
  "Naive Bayes": {
    wae_rebo: {
      accuracy: 76.02,
      classes: {
        Negatif: { precision: 0.72, recall: 0.97, f1: 0.83, support: 120 },
        Netral:  { precision: 0.00, recall: 0.00, f1: 0.00, support: 27 },
        Positif: { precision: 0.88, recall: 0.69, f1: 0.77, support: 74 },
      },
      macro:    { precision: 0.53, recall: 0.55, f1: 0.53, support: 221 },
      weighted: { precision: 0.69, recall: 0.76, f1: 0.71, support: 221 },
      cm: [[117, 0, 3], [23, 0, 4], [22, 1, 51]],
    },
    komodo: {
      accuracy: 63.64,
      classes: {
        Negatif: { precision: 0.63, recall: 0.90, f1: 0.74, support: 79 },
        Netral:  { precision: 0.00, recall: 0.00, f1: 0.00, support: 14 },
        Positif: { precision: 0.65, recall: 0.40, f1: 0.49, support: 50 },
      },
      macro:    { precision: 0.43, recall: 0.43, f1: 0.41, support: 143 },
      weighted: { precision: 0.58, recall: 0.64, f1: 0.58, support: 143 },
      cm: [[71, 0, 8], [11, 0, 3], [30, 0, 20]],
    },
  },
};

/* ---------------- BRIDGE WORDS (SNA) ---------------- */
export const BRIDGE_WORDS = [
  "air","alam","bagus","bayar","foto","harga","hidup","indah","jalan",
  "kunjung","makan","masuk","menit","orang","pandang","pandu","pergi",
  "salah","senang","takjub","tidak","unjung",
];
export const EKSKLUSIF_WAE = [
  "adat","anak","bajo","bawa","biaya","budaya","butuh","daki","desa",
  "duduk","flores","gunung","hujan","inap","jalur","jam","jangan","kaki","kampung","kopi",
];
export const EKSKLUSIF_KOMODO = [
  "ambil","biawak","bius","bukan","dunia","ekor","gerak","habitat","harap","hewan",
  "hutan","indonesia","jaga","kecewa","kelompok","komodo","laku","laut","liar","makhluk",
];

export const MODEL_AKURASI = [
  { model: "SVM", wae_rebo: 87.78, komodo: 71.33 },
  { model: "Random Forest", wae_rebo: 87.78, komodo: 74.83 },
  { model: "Naive Bayes", wae_rebo: 76.02, komodo: 63.64 },
];

export const SNA_NODES = [
  { id: "Wae Rebo", x: 30, y: 50, group: "destinasi", size: 36 },
  { id: "Komodo", x: 78, y: 35, group: "destinasi", size: 32 },
  { id: "Labuan Bajo", x: 60, y: 55, group: "hub", size: 26 },
  { id: "Ruteng", x: 42, y: 70, group: "hub", size: 20 },
  { id: "Trekking", x: 18, y: 22, group: "topik", size: 18 },
  { id: "Rumah Adat", x: 12, y: 60, group: "topik", size: 18 },
  { id: "Pink Beach", x: 90, y: 18, group: "topik", size: 18 },
  { id: "Snorkeling", x: 92, y: 52, group: "topik", size: 18 },
  { id: "Tiket Mahal", x: 55, y: 18, group: "isu", size: 16 },
  { id: "Porter", x: 25, y: 82, group: "isu", size: 14 },
];

export const SNA_EDGES: [string, string, number][] = [
  ["Wae Rebo", "Labuan Bajo", 4],
  ["Wae Rebo", "Ruteng", 3],
  ["Wae Rebo", "Trekking", 5],
  ["Wae Rebo", "Rumah Adat", 5],
  ["Wae Rebo", "Porter", 3],
  ["Wae Rebo", "Tiket Mahal", 2],
  ["Komodo", "Labuan Bajo", 5],
  ["Komodo", "Pink Beach", 5],
  ["Komodo", "Snorkeling", 4],
  ["Komodo", "Tiket Mahal", 4],
  ["Labuan Bajo", "Pink Beach", 3],
  ["Labuan Bajo", "Snorkeling", 3],
];

export const TOTAL = DESTINASI.reduce(
  (a, d) => ({
    total: a.total + d.total,
    positif: a.positif + d.positif,
    negatif: a.negatif + d.negatif,
    netral: a.netral + d.netral,
  }),
  { total: 0, positif: 0, negatif: 0, netral: 0 },
);