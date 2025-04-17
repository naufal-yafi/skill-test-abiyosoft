"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { type Destination, destinations } from "@data/destinations";
import CardDisplayDestination from "@component/card-display-destination";
const Maps = dynamic(() => import("@component/maps"), { ssr: false });

export default function Home() {
  const [currentData, setCurrentData] = useState<Destination>(destinations[4]);

  return (
    <main className="w-full relative flex flex-col md:flex-row">
      <section className="w-full md:w-1/2 block">
        <Maps changeData={setCurrentData} />
      </section>

      <aside className="w-full md:w-1/2 py-6 px-6 flex justify-center">
        <article className="mx-auto max-w-lg">
          <CardDisplayDestination data={currentData} />
        </article>
      </aside>
    </main>
  );
}
