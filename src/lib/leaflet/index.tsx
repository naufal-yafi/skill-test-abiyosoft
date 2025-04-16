"use client";

import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { destinations } from "@data/destinations";
import { defaultIcon } from "./custom-icon";

export default function Maps() {
  return (
    <MapContainer
      center={[-8.4095, 115.1889]}
      zoom={10}
      className="w-full h-screen"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_KEY}`}
      />

      <ZoomControl position="bottomright" />

      {destinations.map((destination) => (
        <Marker
          key={destination.name_place}
          icon={defaultIcon}
          position={{
            lat: destination.coordinates.lat,
            lng: destination.coordinates.lng,
          }}
        />
      ))}
    </MapContainer>
  );
}
