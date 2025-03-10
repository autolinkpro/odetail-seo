"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useBooking } from "@/hooks/useBooking";
import { detailPackages } from "@/utils/constants";

const StepTwo: React.FC = () => {
  const { setBookingData } = useBooking();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    const selectedDetailPackage = detailPackages[index];

    if (selectedPackage === index) {
      // Deselect package
      setSelectedPackage(null);
      setBookingData((prev) => ({
        ...prev,
        package: { name: "", addons: [], duration: "" },
      }));
    } else {
      // Select new package
      setSelectedPackage(index);
      setBookingData((prev) => ({
        ...prev,
        package: {
          name: selectedDetailPackage.title,
          addons: prev.package?.addons || [],
          duration: selectedDetailPackage.time,
        },
      }));
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-10 py-12 px-8">
      {detailPackages.map((pkg, index) => (
        <div
          key={index}
          className={`relative flex flex-col justify-between h-full min-h-[60vh] rounded-lg p-6 transition-all duration-300 shadow-lg hover:scale-105 ${
            selectedPackage === index ? "scale-105" : ""
          } ${
            pkg.title.includes("Deluxe")
              ? "bg-aztecBlack-light text-white"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <h3
              className={`text-2xl font-black ${
                pkg.title.includes("Deluxe")
                  ? "text-blue-400"
                  : "text-aztecBlue"
              }`}
            >
              {pkg.title}
            </h3>

            {/* Price */}
            <p className="text-2xl font-extrabold my-2">${pkg.price}</p>
          </div>

          {/* Features List */}
          <ul className="space-y-2 text-sm">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Shine Package (Only for Deluxe) */}
          {pkg.shinePackage && (
            <>
              <h4 className="my-4 text-md font-semibold">
                + Shine Package Included:
              </h4>
              <ul className="space-y-2 text-sm">
                {pkg.shinePackage.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Duration */}
          <div className="flex items-center text-gray-600 mt-4">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-aztecBlue" />
            <span
              className={`${
                pkg.title.includes("Deluxe") ? "text-gray-300" : "text-gray-600"
              } font-medium`}
            >
              {pkg.time}
            </span>
          </div>

          {/* Select Plan Button */}
          <button
            onClick={() => handleSelect(index)}
            className={`mt-auto text-white font-semibold py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-200
              ${selectedPackage === index ? "bg-aztecGreen" : "bg-aztecBlue"}`}
          >
            <span>Select plan</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default StepTwo;
