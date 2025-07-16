
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Define the custom icon for pins (orange style)
const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Enhanced journey locations with all places mentioned
const locations = [
  {
    name: "Ayodhya",
    coords: [26.7994, 82.1946],
    wiki: "https://en.wikipedia.org/wiki/Ayodhya",
    desc: "Birthplace of Lord Rama, capital of Kosala Kingdom, start of Vanvaas.",
  },
  {
    name: "Nandigram",
    coords: [26.8467, 82.2986],
    wiki: "https://en.wikipedia.org/wiki/Nandigram",
    desc: "Where Bharat ruled in Rama's absence, keeping his sandals on the throne.",
  },
  {
    name: "Shringaverpur",
    coords: [25.0961, 81.8758],
    wiki: "https://en.wikipedia.org/wiki/Shringaverpur",
    desc: "Where Rama, Sita & Lakshmana crossed River Ganga during exile.",
  },
  {
    name: "Chitrakoot",
    coords: [25.1960, 80.8733],
    wiki: "https://en.wikipedia.org/wiki/Chitrakoot",
    desc: "Rama, Sita & Lakshmana spent years of exile here among ancient sages.",
  },
  {
    name: "Prayagraj",
    coords: [25.4484, 81.8397],
    wiki: "https://en.wikipedia.org/wiki/Prayagraj",
    desc: "Confluence of holy rivers, visited by Rama during his journey.",
  },
  {
    name: "Panchavati (Nashik)",
    coords: [20.0110, 73.7929],
    wiki: "https://en.wikipedia.org/wiki/Nashik#Panchavati",
    desc: "Forest where Sita was abducted by Ravana, encounter with Surpanakha.",
  },
  {
    name: "Dandakaranya",
    coords: [19.6000, 81.8000],
    wiki: "https://en.wikipedia.org/wiki/Dandakaranya",
    desc: "Great forest traversed during exile, meeting with various sages.",
  },
  {
    name: "Bhadrachalam",
    coords: [17.6689, 80.8936],
    wiki: "https://en.wikipedia.org/wiki/Bhadrachalam",
    desc: "Sacred temple town in Telangana, significant Rama pilgrimage site.",
  },
  {
    name: "Kishkindha (Hampi)",
    coords: [15.3350, 76.4617],
    wiki: "https://en.wikipedia.org/wiki/Kishkindha",
    desc: "Kingdom of the Vanaras, alliance with Hanuman and Sugriva.",
  },
  {
    name: "Ramtek (Nagpur)",
    coords: [21.3974, 79.3284],
    wiki: "https://en.wikipedia.org/wiki/Ramtek",
    desc: "Where Rama learned about Brahmastra from Rishi Agastya.",
  },
  {
    name: "Lepakshi",
    coords: [14.1292, 77.6183],
    wiki: "https://en.wikipedia.org/wiki/Lepakshi",
    desc: "Where the great bird Jatayu fell after fighting Ravana.",
  },
  {
    name: "Ramanathapuram",
    coords: [9.3630, 78.8370],
    wiki: "https://en.wikipedia.org/wiki/Ramanathapuram",
    desc: "Historic town near Rameshwaram, part of the southern journey.",
  },
  {
    name: "Rameshwaram",
    coords: [9.2887, 79.3127],
    wiki: "https://en.wikipedia.org/wiki/Rameswaram",
    desc: "Launch point for the bridge to Lanka, sacred Jyotirlinga temple.",
  },
  {
    name: "Suvela (Sri Lanka)",
    coords: [8.7500, 80.7500],
    wiki: "https://en.wikipedia.org/wiki/Suvela",
    desc: "Mountain in Lanka where Rama assembled his army for the final battle.",
  },
  {
    name: "Ashok Vatika (Sri Lanka)",
    coords: [6.9271, 79.8612],
    wiki: "https://en.wikipedia.org/wiki/Ashok_Vatika",
    desc: "Garden in Lanka where Sita was held captive, discovered by Hanuman.",
  },
  {
    name: "Lanka (Sri Lanka)",
    coords: [7.8731, 80.7718],
    wiki: "https://en.wikipedia.org/wiki/Lanka",
    desc: "Ravana's golden capital, site of the final battle and Sita's rescue.",
  },
];

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Only initialize once
    if (!mapRef.current || leafletMapRef.current) return;

    // Center: roughly central India for broad range
    leafletMapRef.current = L.map(mapRef.current, {
      center: [20, 80],
      zoom: 5,
      scrollWheelZoom: false,
    });

    // Add OSM base layer
    L.tileLayer(
      "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }
    ).addTo(leafletMapRef.current);

    // Add markers for all locations
    locations.forEach((loc, index) => {
      const marker = L.marker(loc.coords as [number, number], { icon })
        .addTo(leafletMapRef.current!)
        .bindPopup(`
          <div style="min-width: 200px;">
            <div style="font-weight:600;color:#c2410c;margin-bottom:4px;font-size:14px">${loc.name}</div>
            <div style="color:#1e293b;font-size:12px;margin-bottom:6px;line-height:1.4">${loc.desc}</div>
            <div style="display:flex;gap:8px;align-items:center;">
              <a href="${loc.wiki}" target="_blank" style="color:#0369a1;text-decoration:underline;font-size:11px">Learn More</a>
              <span style="color:#059669;font-size:11px;font-weight:600">Stop ${index + 1}</span>
            </div>
          </div>
        `);

      // Open Wikipedia on marker click (popup also shows)
      marker.on("click", () => {
        window.open(loc.wiki, "_blank", "noopener,noreferrer");
      });
    });

    // Draw path connecting the locations
    const pathCoords = locations.map(loc => loc.coords as [number, number]);
    L.polyline(pathCoords, {
      color: '#ea580c',
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 5'
    }).addTo(leafletMapRef.current);

    // Clean up on unmount
    return () => {
      leafletMapRef.current?.off();
      leafletMapRef.current?.remove();
      leafletMapRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-[70vh] min-h-[520px] max-w-6xl mx-auto rounded-lg shadow-lg mt-8 animate-fade-in">
      <div ref={mapRef} className="absolute inset-0 rounded-lg z-10" />
      <div className="absolute top-3 left-3 bg-white/90 px-4 py-3 rounded shadow-lg border border-orange-200 z-20">
        <h2 className="font-bold text-orange-700 mb-1 text-lg flex items-center gap-1">
          <MapPin size={18} className="inline" /> Complete Ramayana Journey Map
        </h2>
        <p className="text-orange-900 text-sm leading-normal">
          Follow the complete path from Ayodhya to Lanka with {locations.length} sacred locations.
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Click markers for details • Dotted line shows the journey path
        </p>
      </div>
    </div>
  );
};

export default InteractiveMap;
