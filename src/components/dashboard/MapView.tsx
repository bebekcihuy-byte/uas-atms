import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { DESTINASI } from "@/lib/dashboard-data";

const icon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<div style="background:${color};width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 4px 10px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center"><span style="transform:rotate(45deg);color:white;font-weight:700;font-size:14px">i</span></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(DESTINASI.map((d) => d.koordinat));
    map.fitBounds(bounds, { padding: [60, 60] });
  }, [map]);
  return null;
}

export function MapView() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
      <MapContainer
        center={[-8.6, 119.9]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: 480, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitBounds />
        {DESTINASI.map((d) => {
          const pct = (d.negatif / d.total) * 100;
          const color = pct > 50 ? "#ef4444" : "#10b981";
          return (
            <Marker key={d.id} position={d.koordinat} icon={icon(color)}>
              <Popup>
                <div className="text-sm">
                  <div className="mb-1 font-bold">{d.nama}</div>
                  <div>📝 Total: {d.total}</div>
                  <div>✅ Positif: {d.positif}</div>
                  <div>❌ Negatif: {d.negatif}</div>
                  <div>
                    % Negatif: <span className="font-bold">{pct.toFixed(2)}%</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}