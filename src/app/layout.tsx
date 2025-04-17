import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@tailwindcss";
import { seo } from "./_seo";

const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "white",
};

export const metadata: Metadata = {
  title: seo.title,
  keywords: [
    "wisata Bali",
    "tempat wisata di Bali",
    "liburan ke Bali",
    "destinasi Bali",
    "Bali Indonesia",
  ],
  description: seo.description,
  category: "Pariwisata",
  authors: [
    {
      name: "Muhammad Naufal Yafi'",
      url: "https://github.com/naufal-yafi",
    },
    {
      name: "Muhammad Naufal Yafi'",
      url: "https://www.linkedin.com/in/naufal-yafi",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 580,
        height: 405,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased bg-neutral-50`}>
        {children}
      </body>
    </html>
  );
}
