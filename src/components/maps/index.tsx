"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { useMediaQuery } from "react-responsive";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { type Destination, destinations } from "@data/destinations";
import iconMap from "./custom-icon";

export default function LeafletMaps({
  changeData,
}: Readonly<{ changeData: Dispatch<SetStateAction<Destination>> }>) {
  const [activeMarker, setActiveMarker] = useState<string>(
    destinations[4].name_place
  );
  const isDesktop = useMediaQuery({ minWidth: 500 });

  return (
    <MapContainer
      center={[-8.4095, 115.4]}
      zoom={isDesktop ? 10 : 9}
      className="w-full h-[40vh] md:h-screen"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://github.com/naufal-yafi/skill-test-abiyosoft">M Naufal Yafi</a> github'
        url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_KEY}`}
      />

      <ZoomControl position={isDesktop ? "bottomright" : "topright"} />

      <MarkerClusterGroup
        iconCreateFunction={(cluster: any) => {
          const count = cluster.getChildCount();

          return L.divIcon({
            html: `
        <div style="
          position: relative;
          width: 38px;
          height: 38px;
          background-image: url('/marker-group.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: medium;
          font-size: 14px;
        ">
          ${count}
        </div>
      `,
            className: "", // remove leaflet's default style
            iconSize: L.point(38, 38),
          });
        }}
        chunkedLoading
      >
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
      </MarkerClusterGroup>
    </MapContainer>
  );
}
