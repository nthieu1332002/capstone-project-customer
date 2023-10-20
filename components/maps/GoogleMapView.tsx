"use client";

import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
  } from "@react-google-maps/api";
  import React, { memo, useCallback, useEffect, useState } from "react";
  
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
  const center = { lat: 10.1902924, lng: 105.9420483 };
type Props = {};

const GoogleMapView = (props: Props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          center={center}
          zoom={9}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={onLoad}
          onUnmount={onUnmount}
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
    </>
  );
};

export default memo(GoogleMapView);
