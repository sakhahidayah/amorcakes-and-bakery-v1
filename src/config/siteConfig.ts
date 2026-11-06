export const siteConfig = {
  brandName: "Amorcakes and Bakery",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About / Why Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    whatsappNumber: "628111287080",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=628111287080&text=Hai+amor+saya&type=phone_number&app_absent=0",
    whatsappLabel: "Chat with Amorcakes on WhatsApp",
    email: "amor.group754@gmail.com",
  },
  ordering: {
    defaultMessage:
      "Hello Amorcakes, I would like to make an order. Please share today's availability.",
    categoryMessage: (categoryName: string) =>
      `Hello Amorcakes, I would like to ask about your ${categoryName.toLowerCase()}.`,
  },
  location: {
    address: null as string | null,
    addressLabel: "Visit one of our bakery locations",
    googleMapsUrl: null as string | null,
    branches: [
      {
        name: "Bakery Sudirman Sukabumi",
        address:
          "Jl. Sudirman No.36, Sriwidari, Kec. Gunungpuyuh, Kota Sukabumi, Jawa Barat 431219",
      },
      {
        name: "Bakery Cikole Sukabumi",
        address:
          "Jl. Gudang, Kebonjati, Kec. Cikole, Kota Sukabumi, Jawa Barat 43113, Indonesia",
      },
      {
        name: "Bakery Bangbarung Bogor",
        address:
          "Jalan H. Achmad Sobana, SH No. 38-B, RT. 003 RW. 10, Kel, RT.03/RW.10, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16152",
      },
      {
        name: "Bakery Dramaga Bogor",
        address:
          "Jl. Raya Dramaga No.KM. 7, RT.03/RW.02, Margajaya, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16116",
      },
      {
        name: "Bakery Pagelaran Bogor",
        address:
          "Jl. Raya Taman Pagelaran No.68, Padasuka, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610",
      },
      {
        name: "Bakery Cibubur Jakarta Timur",
        address:
          "Jl. Lap. Tembak No.6, RT.5/RW.4, Cibubur, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720",
      },
      {
        name: "Bakery Benhil Jakarta Pusat",
        address:
          "Jl. Bendungan Hilir Gg. IV No.12, RT.1/RW.3, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210",
      },
      {
        name: "Outlet Cibaraja",
        address: "Jl. Cagak – Cibaraja, Kutasirna, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152",
      },
      {
        name: "Outlet Labora Sukabumi",
        address: "Jl. Surya Kencana No.42, Cibadak, Kec. Cibadak, Kabupaten Sukabumi, Jawa Barat 43351",
      },
      {
        name: "Outlet Pamuruyan Sukabumi",
        address: "Jl. Surya Kencana No.183, Cibadak, Kec. Cibadak, Kabupaten Sukabumi, Jawa Barat 43351",
      },
      {
        name: "Outlet Parungkuda Sukabumi",
        address:
          "JL Parung Kuda, RT. 08 RW. 04, Sundawenang, Parungkuda, Sundawenang, Sukabumi, Kabupaten Sukabumi, Jawa Barat 43357",
      },
      {
        name: "Outlet Caringin Sukabumi",
        address: "Jl. Mayjen H.R. Edi Sukma No.KM. 17, Caringin, Kec. Caringin, Kabupaten Bogor, Jawa Barat 16730",
      },
      {
        name: "Outlet Cicurug Sukabumi",
        address: "Cicurug, Kec. Cicurug, Kabupaten Sukabumi, Jawa Barat 43359",
      },
      {
        name: "Outlet Panggeleseran Sukabumi",
        address: "Jl. Pelabuhan II No.km 12, Kertaraharja, Kec. Cikembar, Kabupaten Sukabumi, Jawa Barat 43157",
      },
      {
        name: "Outlet Lembursitu Sukabumi",
        address: "JL. Pelabuan II, Km. 6, Lembur Situ, Lembursitu, Sukabumi, Kota Sukabumi, Jawa Barat 43169",
      },
      {
        name: "Outlet Pelabuhan Sukabumi",
        address: "Jl. Siliwangi Palabuhanratu No.3, Kecamatan, Kec. Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat 43365",
      },
      {
        name: "Outlet Baros Sukabumi",
        address: "Jl. Baros No.Km 7, Baros, Kec. Baros, Kota Sukabumi, Jawa Barat 42173",
      },
      {
        name: "Outlet Cimangkok Sukabumi",
        address: "Titisan, Kec. Sukalarang, Kabupaten Sukabumi, Jawa Barat 43191",
      },
      {
        name: "Outlet Cibinong Bogor",
        address: "Jl. Raya Mayor Oking Jaya Atmaja No.1, Ciriung, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16917",
      },
      {
        name: "Outlet Citeureup Bogor",
        address: "Jl.Pahlwan No.216 Kec, Karang Asem Tim., Kel.citeureup, Kabupaten Bogor, Jawa Barat 16810",
      },
      {
        name: "Outlet Seuseupan Bogor",
        address: "Jl. Raya Puncak No.9, Banjar Waru, Kec. Ciawi, Kabupaten Bogor, Jawa Barat 16720",
      },
      {
        name: "Outlet Bantarkemang Bogor",
        address: "Jl. Rambutan Raya No.01, RT.05/RW.05, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143",
      },
      {
        name: "Outlet Cilodong Depok",
        address: "Jl. Tole Iskandar No.3, Depok, Kec. Cilodong, Kota Depok, Jawa Barat 16412",
      },
      {
        name: "Outlet Pekapuran Depok",
        address: "Jl. Pekapuran No.169, Sukamaju Baru, Kec. Tapos, Kota Depok, Jawa Barat 16455",
      },
      {
        name: "Outlet Benda",
        address: "Jl. Benda, RW.4, Cilandak Tim., Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560",
      },
    ],
  },
  businessHours: {
    status: "confirmed" as const,
    entries: [
      { days: "Jumat", opensAt: "08:00", closesAt: "21:00" },
      { days: "Sabtu", opensAt: "08:00", closesAt: "21:00" },
      { days: "Minggu", opensAt: "08:00", closesAt: "21:00" },
      { days: "Senin", opensAt: "08:00", closesAt: "21:00" },
      { days: "Selasa", opensAt: "08:00", closesAt: "21:00" },
      { days: "Rabu", opensAt: "08:00", closesAt: "21:00" },
      { days: "Kamis", opensAt: "08:00", closesAt: "21:00" },
    ] as Array<{
      days: string;
      opensAt: string | null;
      closesAt: string | null;
    }>,
    displayLabel: "Setiap hari, 08.00–21.00",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/amorcakesandbakery/",
    facebook: null as string | null,
    tiktok: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
