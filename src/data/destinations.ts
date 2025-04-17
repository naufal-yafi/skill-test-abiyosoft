import { StaticImageData } from "next/image";
import {
  AirTerjunAlingAling,
  AirTerjunGitgit,
  AirTerjunLekeLeke,
  AirTerjunSekumpul,
  AirTerjunTegenungan,
  AirTerjunTibumana,
  BukitCampuhan,
  BukitMende,
  GunungAbang,
  GunungAgung,
  GunungBatur,
  PantaiAmed,
  PantaiKuta,
  PantaiMelasti,
  PantaiNusaDua,
  PantaiPadangPadang,
  PantaiSeminyak,
  PuraAgungBekasih,
  PuraLuhurUluwatu,
  PuraTanahLot,
  PuraTirtaEmpul,
  PuraUlunDanuBratan,
} from "./photos";

export type Destination = {
  name_place: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  description: string;
  image: StaticImageData;
  icon: "default" | "beach" | "mountain" | "pura" | "waterfall";
  url: string;
};

export const destinations: Destination[] = [
  {
    name_place: "Pantai Kuta",
    coordinates: {
      lat: -8.719266,
      lng: 115.16864,
    },
    address: "Kuta, Kec. Kuta, Kab. Badung, Bali",
    description:
      "Pantai populer di Bali dengan pasir putih dan ombak yang cocok untuk berselancar serta menikmati matahari terbenam.",
    image: PantaiKuta,
    icon: "beach",
    url: "https://maps.app.goo.gl/tFhFhifmsn8HMk7F9",
  },
  {
    name_place: "Pantai Seminyak",
    coordinates: {
      lat: -8.69,
      lng: 115.16,
    },
    address: "Seminyak, Kec. Kuta, Kab. Badung, Bali",
    description:
      "Pantai dengan suasana santai, restoran mewah, dan tempat bersantai yang populer di kalangan wisatawan.",
    image: PantaiSeminyak,
    icon: "beach",
    url: "https://maps.app.goo.gl/GcYs4T38WAQMZk4j9",
  },
  {
    name_place: "Pantai Melasti",
    coordinates: {
      lat: -8.848,
      lng: 115.147,
    },
    address: "Ungasan, Kec. Kuta Selatan, Kab. Badung, Bali",
    description:
      "Pantai dengan tebing kapur yang indah dan air laut yang jernih, cocok untuk berfoto dan berenang.",
    image: PantaiMelasti,
    icon: "beach",
    url: "https://maps.app.goo.gl/ia5QgS2MFqJ2EVej8",
  },
  {
    name_place: "Pantai Padang Padang",
    coordinates: {
      lat: -8.805,
      lng: 115.093,
    },
    address: "Pecatu, Kec. Kuta Selatan, Kab. Badung, Bali",
    description:
      "Pantai kecil yang terkenal dengan ombaknya yang cocok untuk berselancar dan pernah menjadi lokasi syuting film 'Eat Pray Love'.",
    image: PantaiPadangPadang,
    icon: "beach",
    url: "https://maps.app.goo.gl/Jj4KedWmTqh1jjQF9",
  },
  {
    name_place: "Pantai Amed",
    coordinates: {
      lat: -8.343,
      lng: 115.678,
    },
    address: "Amed, Kec. Abang, Kab. Karangasem, Bali",
    description:
      "Pantai dengan pasir hitam vulkanik dan terkenal sebagai lokasi snorkeling dan diving yang menakjubkan.",
    image: PantaiAmed,
    icon: "beach",
    url: "https://maps.app.goo.gl/jESjWt3137dafddk6",
  },
  {
    name_place: "Pantai Nusa Dua",
    coordinates: {
      lat: -8.792,
      lng: 115.225,
    },
    address: "Nusa Dua, Kec. Kuta Selatan, Kab. Badung, Bali",
    description:
      "Kawasan resor mewah dengan pantai yang tenang dan fasilitas lengkap untuk wisatawan.",
    image: PantaiNusaDua,
    icon: "beach",
    url: "https://maps.app.goo.gl/nmVFRsEPkBtBzmCM8",
  },
  {
    name_place: "Pura Tanah Lot",
    coordinates: {
      lat: -8.621,
      lng: 115.086,
    },
    address: "Beraban, Kec. Kediri, Kab. Tabanan, Bali",
    description:
      "Pura ikonik yang terletak di atas batu karang di tengah laut, menjadi salah satu tujuan wisata utama di Bali.",
    image: PuraTanahLot,
    icon: "pura",
    url: "https://maps.app.goo.gl/W1c5p1F9kFvkrVv89",
  },
  {
    name_place: "Pura Luhur Uluwatu",
    coordinates: {
      lat: -8.829,
      lng: 115.084,
    },
    address: "Pecatu, Kec. Kuta Selatan, Kab. Badung, Bali",
    description:
      "Pura yang terletak di atas tebing dengan pemandangan laut yang spektakuler dan pertunjukan tari Kecak saat matahari terbenam.",
    image: PuraLuhurUluwatu,
    icon: "pura",
    url: "https://maps.app.goo.gl/QQ17xncW3gTAh2Ek9",
  },
  {
    name_place: "Pura Agung Besakih",
    coordinates: {
      lat: -8.374,
      lng: 115.45,
    },
    address: "Besakih, Kec. Rendang, Kab. Karangasem, Bali",
    description:
      "Pura terbesar dan tersuci di Bali, terletak di lereng Gunung Agung dan terdiri dari kompleks beberapa pura.",
    image: PuraAgungBekasih,
    icon: "pura",
    url: "https://maps.app.goo.gl/jQPkxiNpcKK7vQR18",
  },
  {
    name_place: "Pura Tirta Empul",
    coordinates: {
      lat: -8.418,
      lng: 115.315,
    },
    address: "Manukaya, Kec. Tampaksiring, Kab. Gianyar, Bali",
    description:
      "Pura terkenal dengan kolam pemandian suci yang digunakan untuk ritual penyucian diri oleh umat Hindu.",
    image: PuraTirtaEmpul,
    icon: "pura",
    url: "https://maps.app.goo.gl/vs41CrGfRLs3KYh59",
  },
  {
    name_place: "Pura Ulun Danu Bratan",
    coordinates: {
      lat: -8.275,
      lng: 115.167,
    },
    address: "Candikuning, Kec. Baturiti, Kab. Tabanan, Bali",
    description:
      "Pura yang terletak di tepi Danau Beratan dengan latar belakang pegunungan, menjadi ikon pariwisata Bali.",
    image: PuraUlunDanuBratan,
    icon: "pura",
    url: "https://maps.app.goo.gl/Ncb5RY1sXddSKPq48",
  },
  {
    name_place: "Air Terjun Tegenungan",
    coordinates: {
      lat: -8.571,
      lng: 115.289,
    },
    address: "Kemenuh, Kec. Sukawati, Kab. Gianyar, Bali",
    description:
      "Air terjun yang mudah diakses dengan aliran air yang deras dan area kolam yang cocok untuk berenang.",
    image: AirTerjunTegenungan,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/8WKq3bKGRTgaScAaA",
  },
  {
    name_place: "Air Terjun Gitgit",
    coordinates: {
      lat: -8.172,
      lng: 115.145,
    },
    address: "Gitgit, Kec. Sukasada, Kab. Buleleng, Bali",
    description:
      "Air terjun setinggi sekitar 35 meter yang dikelilingi oleh hutan tropis, menjadi daya tarik wisata di Bali utara.",
    image: AirTerjunGitgit,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/qNW6aEocTmeqvSXn6",
  },
  {
    name_place: "Air Terjun Sekumpul",
    coordinates: {
      lat: -8.115,
      lng: 115.167,
    },
    address: "Sekumpul, Kec. Sawan, Kab. Buleleng, Bali",
    description:
      "Kompleks air terjun yang terdiri dari beberapa aliran air yang tinggi dan indah",
    image: AirTerjunSekumpul,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/TdwdDEhFL1WqkGHT7",
  },
  {
    name_place: "Air Terjun Tibumana",
    coordinates: {
      lat: -8.519,
      lng: 115.335,
    },
    address: "Apuan, Kec. Susut, Kab. Bangli, Bali",
    description:
      "Air terjun tersembunyi dengan suasana tenang dan alami, dikelilingi pepohonan hijau dan cocok untuk berenang.",
    image: AirTerjunTibumana,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/e6PKtmpVLAy8E2Fr8",
  },
  {
    name_place: "Air Terjun Leke Leke",
    coordinates: {
      lat: -8.34,
      lng: 115.154,
    },
    address: "Antapan, Kec. Baturiti, Kab. Tabanan, Bali",
    description:
      "Air terjun kecil namun indah, dengan akses jalan setapak melalui hutan dan jembatan bambu.",
    image: AirTerjunLekeLeke,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/v8MfPFSamu3Ymnqp9",
  },
  {
    name_place: "Air Terjun Aling-Aling",
    coordinates: {
      lat: -8.178,
      lng: 115.128,
    },
    address: "Sambangan, Kec. Sukasada, Kab. Buleleng, Bali",
    description:
      "Air terjun yang terkenal karena aktivitas cliff jumping dan seluncuran alami di bebatuan.",
    image: AirTerjunAlingAling,
    icon: "waterfall",
    url: "https://maps.app.goo.gl/1QW1W1pf1MYxZasRA",
  },
  {
    name_place: "Gunung Batur",
    coordinates: {
      lat: -8.239,
      lng: 115.376,
    },
    address: "Batur, Kec. Kintamani, Kab. Bangli, Bali",
    description:
      "Gunung berapi aktif yang populer untuk pendakian dengan pemandangan matahari terbit dari puncaknya.",
    image: GunungBatur,
    icon: "mountain",
    url: "https://maps.app.goo.gl/da6AJrvrFMuvnHPw7",
  },
  {
    name_place: "Gunung Agung",
    coordinates: {
      lat: -8.343,
      lng: 115.508,
    },
    address: "Besakih, Kec. Rendang, Kab. Karangasem, Bali",
    description:
      "Gunung tertinggi di Bali yang dianggap suci, sering dijadikan lokasi pendakian spiritual dan menantang.",
    image: GunungAgung,
    icon: "mountain",
    url: "https://maps.app.goo.gl/6now2YottE36Hzjt6",
  },
  {
    name_place: "Gunung Abang",
    coordinates: {
      lat: -8.287,
      lng: 115.435,
    },
    address: "Abangsongan, Kec. Kintamani, Kab. Bangli, Bali",
    description:
      "Gunung dengan jalur pendakian yang tidak terlalu sulit, menawarkan pemandangan Danau Batur dari atas.",
    image: GunungAbang,
    icon: "mountain",
    url: "https://maps.app.goo.gl/cKQGQapKbX9LFUU78",
  },
  {
    name_place: "Bukit Mende",
    coordinates: {
      lat: -8.218,
      lng: 115.269,
    },
    address: "Subaya, Kec. Kintamani, Kab. Bangli, Bali",
    description:
      "Bukit dengan jalur hiking yang menyuguhkan panorama pegunungan dan lembah hijau yang menakjubkan.",
    image: BukitMende,
    icon: "mountain",
    url: "https://maps.app.goo.gl/Ugmp6JV5TNcGr5ZL6",
  },
  {
    name_place: "Bukit Campuhan",
    coordinates: {
      lat: -8.502,
      lng: 115.259,
    },
    address: "Ubud, Kec. Ubud, Kab. Gianyar, Bali",
    description:
      "Jalur trekking populer di Ubud dengan pemandangan alam yang asri dan cocok untuk jalan pagi.",
    image: BukitCampuhan,
    icon: "mountain",
    url: "https://maps.app.goo.gl/rnpLjxPo5HhSuHZMA",
  },
];
