export type SampleReview = {
  penulis: string;
  rating: number;
  tanggal: string;
  ulasan: string;
};

export type DestId = "wae_rebo" | "komodo";

export const SAMPLE_SENTIMEN: Record<DestId, { pos: SampleReview[]; neg: SampleReview[]; net: SampleReview[] }> = {
  wae_rebo: {
    pos: [
      { penulis: "bonita santi", rating: 4, tanggal: "setahun lalu", ulasan: "Hidden gem. Desa wisata exclussive, karena butuh effort khusus untuk bisa kesana. Arsitektur unik bangunan, timeless." },
      { penulis: "Farin Burhan", rating: 5, tanggal: "3 minggu lalu", ulasan: "Keindahan alam dan rumah adat tradisional Manggarai sungguh memukau." },
      { penulis: "Juandri Galut", rating: 4, tanggal: "2 tahun lalu", ulasan: "Kampung Waerebo masih memiliki rumah leluhur orang Manggarai. Karena itulah kampung ini dijadikan kampung wisata." },
      { penulis: "Carlitos chiquitin", rating: 4, tanggal: "2 tahun lalu", ulasan: "Tempat yang sangat keren, perjalanan menuju desa itu sangat sepadan." },
    ],
    neg: [
      { penulis: "Augustin ALRIQ", rating: 1, tanggal: "3 tahun lalu", ulasan: "Pendakian sederhana. Desa yang indah tetapi jebakan turis yang sangat besar. Menu makanan yang sama 3 kali... Sangat mahal." },
      { penulis: "Alize Ml", rating: 2, tanggal: "setahun lalu", ulasan: "Hati-hati, kami mengalami keracunan makanan setelah menginap di desa tersebut." },
      { penulis: "Niklas Holm", rating: 1, tanggal: "3 tahun lalu", ulasan: "Biaya total terlalu tinggi: 50+50 untuk skuter, 200 untuk pemandu, 300 untuk desa & sekitar 50 tiket masuk. Akhirnya saya memutuskan untuk tidak pergi." },
      { penulis: "Miguel Angel Serrano", rating: 1, tanggal: "7 tahun lalu", ulasan: "Berjalan sejauh itu hanya untuk diperlakukan dengan dingin dan acuh tak acuh. Saya tidak akan merekomendasikannya kepada siapa pun." },
    ],
    net: [
      { penulis: "Karolus Shardi", rating: 3, tanggal: "4 tahun lalu", ulasan: "Perjalanan menuju Wae Rebo begitu mengesankan. Jalannya lumayan rusak, tapi terbayarkan dengan keindahan kampung adat Wae Rebo." },
      { penulis: "Putu Vivi", rating: 3, tanggal: "6 tahun lalu", ulasan: "Desa yang sangat indah dengan suasana yang menyenangkan, tetapi tidak ada aktivitas intensif yang dilakukan wisatawan bersama penduduk setempat." },
      { penulis: "Ka Tja", rating: 3, tanggal: "4 minggu lalu", ulasan: "Tempat ini benar-benar indah dan sangat layak dikunjungi. Namun terasa terlalu ramai dan kehilangan sebagian keasliannya." },
      { penulis: "Marie Baumgarth", rating: 3, tanggal: "2 tahun lalu", ulasan: "Jika Anda mencari keaslian, hindari tempat ini. Bagus untuk mendaki, meskipun 200.000 rupiah ditambah donasi mulai terasa mahal." },
    ],
  },
  komodo: {
    pos: [
      { penulis: "Zuyyin Safitri", rating: 4, tanggal: "5 bulan lalu", ulasan: "Komodonya besar-besar, tapi tidak banyak. Worth it sekalian open trip ke semua wisata di Labuan Bajo." },
      { penulis: "vinodini sivabalan", rating: 5, tanggal: "2 bulan lalu", ulasan: "Para pemandu wisatanya luar biasa, berpengetahuan luas, membantu, dan sangat informatif. Sangat direkomendasikan!" },
      { penulis: "Jose Fernandez", rating: 4, tanggal: "9 bulan lalu", ulasan: "Pendakiannya sepadan dengan pemandangannya. Ada hampir 800 anak tangga, cukup menantang namun pemandangannya luar biasa." },
      { penulis: "Constantine Johns", rating: 4, tanggal: "8 bulan lalu", ulasan: "Sungguh pengalaman istimewa bisa melihat Komodo di habitat aslinya. Kami beruntung melihat 4 ekor dewasa dan 1 bayi." },
    ],
    neg: [
      { penulis: "Scrunches", rating: 1, tanggal: "2 bulan lalu", ulasan: "Taman ini mengerikan, hewan-hewannya seperti memakai narkoba. Turnya tidak informatif dan tidak profesional. Saya tidak merekomendasikannya." },
      { penulis: "Alejandro Tercedor", rating: 1, tanggal: "10 bulan lalu", ulasan: "Saya tidak suka cara para pemandu memperlakukan hewan-hewan tersebut. Mereka memaksa komodo dengan tongkat hanya untuk mendapatkan foto." },
      { penulis: "Aldith Fadillah", rating: 1, tanggal: "10 bulan lalu", ulasan: "Pelayanan administrasi yang buruk, penggunaan media sosial tidak komunikatif." },
      { penulis: "Kim Larsen", rating: 1, tanggal: "3 bulan lalu", ulasan: "Meskipun kecewa, saya dan keluarga memutuskan untuk tidak pergi. Kami tidak bisa membayangkan mendukung tempat ini." },
    ],
    net: [
      { penulis: "Demi van Casand", rating: 3, tanggal: "setahun lalu", ulasan: "Sebuah pulau yang indah di mana biasanya ada banyak hal dilihat. Selama tur yang panjang, kami hanya melihat burung kakatua dan komodo." },
      { penulis: "A. Casquers", rating: 3, tanggal: "setahun lalu", ulasan: "Bisa melihat naga dari dekat, tetapi konsepnya sangat buruk; tur hanya 30 menit lalu dibawa ke area bar dan suvenir." },
      { penulis: "Luk cuuuhn", rating: 3, tanggal: "setahun lalu", ulasan: "Sangat indah! Tapi sayang sekali tur perahu hampir tidak pernah diperiksa. Sampah dan limbah begitu saja berakhir di laut." },
      { penulis: "Thunderballs are go", rating: 3, tanggal: "setahun lalu", ulasan: "Kami menyewa pemandu untuk tur. Tersedia tiga pilihan rute yang berbeda." },
    ],
  },
};

export const SAMPLE_RATING: Record<DestId, Record<1 | 2 | 3 | 4 | 5, SampleReview[]>> = {
  wae_rebo: {
    1: [
      { penulis: "Augustin ALRIQ", rating: 1, tanggal: "3 tahun lalu", ulasan: "Desa yang indah tetapi jebakan turis yang sangat besar. Menu makanan sama 3 kali... Sangat mahal." },
      { penulis: "Tukki Rex", rating: 1, tanggal: "3 tahun lalu", ulasan: "Waspada jebakan turis! Hindari menginap." },
    ],
    2: [
      { penulis: "Alize Ml", rating: 2, tanggal: "setahun lalu", ulasan: "Hati-hati, kami mengalami keracunan makanan setelah menginap di desa tersebut." },
    ],
    3: [
      { penulis: "Karolus Shardi", rating: 3, tanggal: "4 tahun lalu", ulasan: "Perjalanan menuju Wae Rebo mengesankan walau jalannya lumayan rusak; terbayarkan dengan keindahan kampung adat." },
      { penulis: "Putu Vivi", rating: 3, tanggal: "6 tahun lalu", ulasan: "Desa yang indah dengan suasana menyenangkan, tetapi minim aktivitas wisatawan bersama penduduk setempat." },
    ],
    4: [
      { penulis: "Esa", rating: 4, tanggal: "10 bulan lalu", ulasan: "Pendakiannya menyenangkan, perjalanan dengan mobilnya kurang menyenangkan." },
      { penulis: "bonita santi", rating: 4, tanggal: "setahun lalu", ulasan: "Hidden gem. Desa wisata eksklusif, butuh effort khusus untuk ke sana. Arsitektur unik, timeless." },
    ],
    5: [
      { penulis: "Farin Burhan", rating: 5, tanggal: "3 minggu lalu", ulasan: "Keindahan alam dan rumah adat tradisional Manggarai." },
      { penulis: "Rizky Armansyah P.", rating: 5, tanggal: "sebulan lalu", ulasan: "Salah satu desa tradisional terindah di dunia." },
    ],
  },
  komodo: {
    1: [
      { penulis: "Scrunches", rating: 1, tanggal: "2 bulan lalu", ulasan: "Taman ini mengerikan, hewan-hewannya terlihat lesu. Turnya tidak informatif dan tidak profesional." },
      { penulis: "Kim Larsen", rating: 1, tanggal: "3 bulan lalu", ulasan: "Meskipun kecewa, kami memutuskan untuk tidak pergi setelah membaca banyak ulasan jujur." },
    ],
    2: [
      { penulis: "Marco Boccaleoni", rating: 2, tanggal: "setahun lalu", ulasan: "Biaya masuknya mencapai 400.000 rupiah, namun pemandu wisata tidak berbicara bahasa Inggris dengan baik." },
      { penulis: "Eric DENIS", rating: 2, tanggal: "setahun lalu", ulasan: "Selain sensasi melihat biawak, tur lebih berorientasi bisnis daripada alam. Pemandu tidak memberikan nilai tambah." },
    ],
    3: [
      { penulis: "Thunderballs are go", rating: 3, tanggal: "setahun lalu", ulasan: "Kami menyewa pemandu untuk tur. Tersedia tiga pilihan rute yang berbeda." },
      { penulis: "Demi van Casand", rating: 3, tanggal: "setahun lalu", ulasan: "Pulau yang indah. Selama tur panjang kami sebenarnya hanya melihat burung kakatua dan komodo." },
    ],
    4: [
      { penulis: "Zuyyin Safitri", rating: 4, tanggal: "5 bulan lalu", ulasan: "Komodonya besar-besar tapi tidak banyak. Worth it sekalian open trip ke Labuan Bajo." },
      { penulis: "Jessica Rusli", rating: 4, tanggal: "8 bulan lalu", ulasan: "World heritage site. Banyak komodo. Tempatnya panas banget tapi." },
    ],
    5: [
      { penulis: "Multibagger Stocks", rating: 5, tanggal: "4 minggu lalu", ulasan: "Senang sekali bertemu dengan Komodo Dragon!" },
      { penulis: "vinodini sivabalan", rating: 5, tanggal: "2 bulan lalu", ulasan: "Pemandu wisatanya luar biasa, berpengetahuan luas, membantu, dan sangat informatif. Sangat direkomendasikan!" },
    ],
  },
};