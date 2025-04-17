import { MetadataRoute } from "next";
import { seo } from "./layout";

export default function manifest(): MetadataRoute.Manifest {
  return {
    lang: "id",
    dir: "ltr",
    name: `${seo.title}: Pegunungan, Pantai, Air Terjun dan Pura`,
    short_name: seo.title,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    orientation: "landscape",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
