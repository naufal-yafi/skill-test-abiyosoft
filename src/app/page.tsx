"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { type Destination, destinations } from "@data/destinations";
import Card from "@component/card";
const LeafletMaps = dynamic(() => import("@lib/leaflet"), { ssr: false });

export default function Home() {
  const [currentData, setCurrentData] = useState<Destination>(destinations[0]);

  return (
    <main className="w-full relative flex flex-col md:flex-row">
      <section className="w-full md:w-1/2 block">
        <LeafletMaps changeData={setCurrentData} />
      </section>

      <aside className="w-full md:w-1/2 py-6 px-6 flex justify-center">
        <div className="mx-auto max-w-lg">
          <Card data={currentData} />
        </div>
      </aside>
    </main>
  );
}
