// "use client";

// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import React from "react";

// const containerStyle = {
//     width:'100%',
//     height:'500px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };
// type Props = {};

// const GoogleMapView = (props: Props) => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
//   });

//   const [map, setMap] = React.useState<google.maps.Map | null>(null);

//   const onLoad = React.useCallback(function callback(map: google.maps.Map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback() {
//     setMap(null);
//   }, []);
//   return isLoaded ? (
//     <div className="bg-red-200 w-full h-[500px] px-40">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </div>
//   ) : null;
// };

// export default GoogleMapView;
