import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tempat indah di Bali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
