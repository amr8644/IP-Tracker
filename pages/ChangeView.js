import { latLng } from "leaflet";
import { useMap } from "react-leaflet";

export function ChangeView({ coords, zoom }) {
  const map = useMap();
  const center = latLng(coords);
  map.setView(center, zoom);

  return null;
}
