"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const Location = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const location = {
    lat: 51.262190267731846,
    lng: -113.99412257024366,
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full px-6 lg:px-20 max-w-screen-xl">
        {/* Map */}
        <div className="w-full lg:w-3/4 h-[450px] rounded-lg overflow-hidden shadow-md">
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          >
            <Map
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
              style={mapStyles}
              defaultZoom={18}
              defaultCenter={location}
            >
              <AdvancedMarker position={location} />
            </Map>
          </APIProvider>
        </div>

        {/* Description */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:ml-16 flex flex-col items-start">
          <div className="w-full mb-1 flex flex-row items-center space-x-4">
            <div className="w-1/12 h-[1px] bg-aztecBlue mb-2" />
            <h3 className="text-aztecBlue text-sm font-semibold uppercase tracking-widest mb-2">
              Location
            </h3>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Detailing, Tinting, and Auto Glass Repair
          </h2>

          {/* Address */}
          <div className="flex items-start mt-12">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-aztecBlue text-2xl mr-4"
            />
            <div className="text-sm font-normal text-black">
              <h3 className="text-lg font-bold mb-2 text-black">
                Service Point
              </h3>
              203 - 2914 Kingsview Boulevard SE
              <br />
              Airdrie, Alberta T4A 0E1, Canada
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
