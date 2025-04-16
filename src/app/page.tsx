"use client";

import dynamic from "next/dynamic";
const Maps = dynamic(() => import("./_maps"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <Maps />
    </main>
  );
}
