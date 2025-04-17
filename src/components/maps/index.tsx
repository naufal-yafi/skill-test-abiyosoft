"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import { Destination, destinations } from "@data/destinations";
import iconMap from "./custom-icon";

export default function LeafletMaps({
  changeData,
}: Readonly<{ changeData: Dispatch<SetStateAction<Destination>> }>) {
  const [activeMarker, setActiveMarker] = useState<string>(
    destinations[0].name_place
  );
  const isDesktop = useMediaQuery({ minWidth: 500 });

  return (
    <MapContainer
      center={[-8.4095, 115.1889]}
      zoom={isDesktop ? 10 : 9}
      className="w-full h-[40vh] md:h-screen"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://github.com/naufal-yafi/skill-test-abiyosoft">M Naufal Yafi</a> github'
        url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_KEY}`}
      />

      <ZoomControl position={isDesktop ? "bottomright" : "topright"} />

      {destinations.map((destination) => (
        <Marker
          key={destination.name_place}
          position={{
            lat: destination.coordinates.lat,
            lng: destination.coordinates.lng,
          }}
          icon={
            activeMarker === destination.name_place
              ? iconMap["default"]
              : iconMap[destination.icon]
          }
          eventHandlers={{
            click: () => {
              setActiveMarker(destination.name_place);
              changeData(destination);
            },
          }}
        />
      ))}
    </MapContainer>
  );
}
