import type { StaticImageData } from "next/image";
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
  description: string;
  image: StaticImageData;
};

export const destinations: Destination[] = [
  {
    name_place: "Buleleng",
    coordinates: {
      lat: -8.161141,
      lng: 115.0243566,
    },
    description:
      "Its capital is Singaraja. Located in northern Bali, <strong>Buleleng</strong> has a long coastline and is famous for Lovina Beach, where tourist can spot dolphins, and the scenic Gitgit Waterfall.",
    image: Buleleng,
  },
  {
    name_place: "Bangli",
    coordinates: {
      lat: -8.2401296,
      lng: 115.3671946,
    },
    description:
      "With its capital in <strong>Bangli</strong>, this is the only landlocked regency in Bali. Despite lacking a coastline, <strong>Bangli</strong> is rich in natural beauty, home to Mount Batur and Lake Batur, which are popular among hikers and nature lovers.",
    image: Bangli,
  },
  {
    name_place: "Jembrana",
    coordinates: {
      lat: -8.4420616,
      lng: 114.6404127,
    },
    description:
      "Its capital is Negara. Located in western Bali, <strong>Jembrana</strong> is known for the Makepung tradition, a unique water buffalo race. Medewi Beach, favored by surfers, is also in this regency.",
    image: Jembrana,
  },
  {
    name_place: "Tabanan",
    coordinates: {
      lat: -8.6211334,
      lng: 115.0819741,
    },
    description:
      "With its capital in <strong>Tabanan</strong>, this regency features stunning natural landscapes, including the UNESCO World Heritage-listed Jatiluwih rice terraces. Tanah Lot Temple, one of Bali's most iconic landmarks, is also located here.",
    image: Tabanan,
  },
  {
    name_place: "Badung",
    coordinates: {
      lat: -8.5454461,
      lng: 114.8378722,
    },
    description:
      "With its capital in Mangupura, <strong>Badung</strong> is the heart of Bali's tourism industry. Popular destinations like Kuta, Seminyak, and Nusa Dua are located here, offering beautiful beaches, luxury resorts, and vibrant nightlife.",
    image: Badung,
  },
  {
    name_place: "Denpasar",
    coordinates: {
      lat: -8.6726549,
      lng: 115.0766157,
    },
    description:
      "As the capital city of Bali Province, <strong>Denpasar</strong> serves as the center of goverment, bussiness, and education. It offers a blend of traditional Balinese culture and modern urban life. The city is known for its traditional markets and museums showcasing the history and art of Bali.",
    image: Denpasar,
  },
  {
    name_place: "Gianyar",
    coordinates: {
      lat: -8.5124573,
      lng: 115.2541347,
    },
    description:
      "The capital is <strong>Gianyar</strong>. This regency is known as the cultural and artistic center of Bali. Ubud, located here, is famous for its art galleries, traditional dance performances, and the Sacred Monkey Forest.",
    image: Gianyar,
  },
  {
    name_place: "Klungkung",
    coordinates: {
      lat: -8.636968,
      lng: 114.9009815,
    },
    description:
      "The capital is Semarapura. <strong>Klungkung</strong> is famous for Kerta Gosa, a historical building once used as a royal court. This regency also includes the Nusa islands (Nusa Penida, Nusa Lembongan, Nusa Ceningan) known for their stunning beaches and marine life.",
    image: Klungkung,
  },
  {
    name_place: "Karangasem",
    coordinates: {
      lat: -8.3585659,
      lng: 115.3859445,
    },
    description:
      "With Amlapura as its capital, <strong>Karangasem</strong> is in eastern Bali. This regency is home to major attractions like Besakih Temple, the largest and most sacred temple in Bali, as well as the royal water gardens of Tirta Gangga and Taman Ujung.",
    image: Karangasem,
  },
];
