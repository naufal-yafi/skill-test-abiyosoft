import type { Destination } from "@data/destinations";
import Image from "next/image";

export default function Card({ data }: Readonly<{ data: Destination }>) {
  return (
    <article className="group hover:shadow-2xl transition-all duration-500 rounded-lg">
      <Image
        src={data.image}
        alt="thumbnail"
        width={650}
        height={366}
        className="rounded-lg shadow-2xl drop-shadow-2xl group-hover:drop-shadow-none group-hover:shadow-none group-hover:rounded-b-none"
      />

      <div className="p-5 text-sm">
        <h1 className="font-bold text-xl">{data.name_place}</h1>
        <h2 className="text-neutral-500">{data.address}</h2>

        <p className="mt-5">{data.description}</p>

        <button className="font-medium mt-8 cursor-pointer flex gap-2 hover:gap-5 transition-all duration-500">
          <p className="hover:text-neutral-500">Lihat selengkapnya</p>
          <Image
            src="/arrow-right-line.png"
            alt="arrow right"
            width={18}
            height={18}
          />
        </button>
      </div>
    </article>
  );
}
