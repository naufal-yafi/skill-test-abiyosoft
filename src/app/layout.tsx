import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@tailwindcss";

const poppins = Poppins({
  preload: true,
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tempat Wisata di Bali",
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
