import { Icon } from "leaflet";

const iconMap: Record<string, Icon> = {
  default: new Icon({ iconUrl: "/placeholder.png", iconSize: [38, 38] }),
  beach: new Icon({ iconUrl: "/beach.png", iconSize: [38, 38] }),
  mountain: new Icon({ iconUrl: "/mountain.png", iconSize: [38, 38] }),
  pura: new Icon({ iconUrl: "/pura.png", iconSize: [38, 38] }),
  waterfall: new Icon({ iconUrl: "/waterfall.png", iconSize: [38, 38] }),
};

export default iconMap;
