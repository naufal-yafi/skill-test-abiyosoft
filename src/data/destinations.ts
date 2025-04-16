import { StaticImageData } from "next/image";
import {
  Badung,
  Bangli,
  Buleleng,
  Denpasar,
  Gianyar,
  Jembrana,
  Karangasem,
  Klungkung,
  Tabanan,
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
};

export const destinations: Destination[] = [
  {
    name_place: "Pantai Lovina",
    coordinates: {
      lat: -8.174159,
      lng: 115.058487,
    },
    address: "Anturan, Kec. Buleleng, Kab. Buleleng, Bali",
    description:
      "Pantai utara Bali yang terkenal dengan atraksi lumba-lumba dan suasana tenang untuk snorkeling maupun menyelam.",
    image: Buleleng,
    icon: "beach",
  },
  {
    name_place: "Gunung Batur",
    coordinates: {
      lat: -8.242372,
      lng: 115.375493,
    },
    address: "Batur Sel., Kec. Kintamani, Kab. Bangli, Bali",
    description:
      "Gunung berapi aktif yang menjadi destinasi populer untuk pendakian pagi hari dan pemandangan Danau Batur.",
    image: Bangli,
    icon: "mountain",
  },
  {
    name_place: "Pantai Medewi",
    coordinates: {
      lat: -8.430539,
      lng: 114.866138,
    },
    address: "Medewi, Kec. Pekutatan, Kab. Jembrana, Bali",
    description:
      "Pantai yang dikenal sebagai surga peselancar dengan ombak panjang di pesisir barat Bali.",
    image: Jembrana,
    icon: "beach",
  },
  {
    name_place: "Pura Tanah Lot",
    coordinates: {
      lat: -8.621685,
      lng: 115.086829,
    },
    address: "Beraban, Kec. Kediri, Kab. Tabanan, Bali",
    description:
      "Pura ikonik di atas batu karang di tengah laut, terkenal sebagai tempat menikmati matahari terbenam.",
    image: Tabanan,
    icon: "pura",
  },
  {
    name_place: "Pantai Kuta",
    coordinates: {
      lat: -8.71785,
      lng: 115.168186,
    },
    address: "Kec. Kuta, Kab. Badung, Bali",
    description:
      "Pantai populer dengan pasir putih, tempat berselancar, berjemur, dan kehidupan malam yang meriah.",
    image: Badung,
    icon: "beach",
  },
  {
    name_place: "Pantai Sanur",
    coordinates: {
      lat: -8.693173,
      lng: 115.255367,
    },
    address: "Sanur, Kec. Denpasar Selatan, Kota Denpasar, Bali",
    description:
      "Kawasan pantai yang tenang dengan jalur pejalan kaki, kafe pinggir laut, dan sunrise cantik.",
    image: Denpasar,
    icon: "beach",
  },
  {
    name_place: "Air Terjun Tegenungan",
    coordinates: {
      lat: -8.571107,
      lng: 115.289002,
    },
    address: "Kemenuh, Kec. Sukawati, Kab. Gianyar, Bali",
    description:
      "Air terjun terkenal di tengah hutan tropis, ideal untuk berenang atau menikmati alam.",
    image: Gianyar,
    icon: "waterfall",
  },
  {
    name_place: "Pura Kerta Gosa",
    coordinates: {
      lat: -8.53471,
      lng: 115.407303,
    },
    address: "Semarapura Kelod, Kec. Klungkung, Kab. Klungkung, Bali",
    description:
      "Kompleks peninggalan kerajaan Klungkung dengan lukisan klasik Bali di langit-langit bale.",
    image: Klungkung,
    icon: "pura",
  },
  {
    name_place: "Pantai Yeh Malet",
    coordinates: {
      lat: -8.446777,
      lng: 115.609228,
    },
    address: "Antiga, Kec. Manggis, Kab. Karangasem, Bali",
    description:
      "Pantai tersembunyi dengan panorama batu karang dan ombak yang cocok untuk wisata santai.",
    image: Karangasem,
    icon: "beach",
  },
];
