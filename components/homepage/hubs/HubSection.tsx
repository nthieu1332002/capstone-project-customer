"use client";

import Loading from "@/components/Loading";
import GoogleMapView from "@/components/maps/GoogleMapView";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const HubSection = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto md:px-40 sm:px-2 px-4 py-5 md:py-10">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">
        Bưu cục Chành xe
      </h1>
      <div
        className={cn(
          "w-full h-[500px] rounded-lg overflow-hidden",
          !showMap && "animate-pulse bg-gray-400"
        )}
      >
        {showMap ? <GoogleMapView /> : null}
      </div>
    </div>
  );
};

export default HubSection;
