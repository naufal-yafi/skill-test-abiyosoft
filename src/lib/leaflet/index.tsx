"use client";

import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import { destinations } from "@data/destinations";
import { defaultIcon } from "./custom-icon";
import { useState } from "react";

export default function Maps() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const isDesktop = useMediaQuery({ minWidth: 500 });

  return (
    <MapContainer
      center={[-8.4095, 115.1889]}
      zoom={isDesktop ? 10 : 9}
      className="w-full h-screen"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
              ? defaultIcon
              : destination.icon
          }
          eventHandlers={{
            click: () => {
              setActiveMarker(destination.name_place);
            },
          }}
        />
      ))}
    </MapContainer>
  );
}
