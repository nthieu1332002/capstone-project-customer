import React from "react";
import { Autocomplete, Libraries, LoadScript } from "@react-google-maps/api";

const libraries: Libraries = ["places"];
const GoogleMapSearch = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
      libraries={libraries}
      region="vn"
    >
      <Autocomplete>
        <>{children}</>
      </Autocomplete>
    </LoadScript>
  );
};

export default GoogleMapSearch;
