"use client";

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useState } from "react";

const center = {
  lat: -3.745,
  lng: -38.523,
};
const markers = [
  {
    id: 1,
    name: "Bến xe Miền Đông Mới",
    position: { lat: 10.8804117, lng: 106.8131184 },
  },
  {
    id: 2,
    name: "Bến xe Miền Tây",
    position: { lat: 10.8239906, lng: 106.5664172 },
  },
  {
    id: 3,
    name: "Bến xe Miền Tây Mới",
    position: { lat: 10.6623812, lng: 106.4858158 },
  },
  {
    id: 4,
    name: "Bến xe Cần Thơ Mới",
    position: { lat: 10.0041545, lng: 105.7669751 },
  },
  {
    id: 5,
    name: "Bến xe Vũng Tàu",
    position: { lat: 10.3505997, lng: 107.0840848 },
  },
  {
    id: 6,
    name: "Bến xe Long An",
    position: { lat: 10.5379642, lng: 106.4020228 },
  },
];

const HubSection = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });

 
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <div className="mx-auto md:px-40 sm:px-2 px-4 py-5 md:py-10">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">Bưu cục Chành xe</h1>
      <div className="w-full h-[500px] rounded-lg overflow-hidden bg-red-300">
        {isLoaded ? (
          <GoogleMap
            center={{ lat: 10.1902924, lng: 105.9420483 }}
            zoom={9}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {markers.map(({ id, name, position }) => (
              <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                // icon={{
                //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                //   scaledSize: { width: 50, height: 50 }
                // }}
              >
                {activeMarker === id ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div>
                      <p>{name}</p>
                    </div>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            ))}
          </GoogleMap>
        ) : null}
      </div>
    </div>
  );
};

export default HubSection;
