import React from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
type Props = {};

const GoogleMapSearch = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
      libraries={["places"]}
      region="vn"
    >
      <Autocomplete>
        <>{children}</>
      </Autocomplete>
    </LoadScript>
  );
};

export default GoogleMapSearch;
