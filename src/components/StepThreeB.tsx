"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { useBooking } from "@/hooks/useBooking";
import { Windshields } from "@/utils/constants";
import Image from "next/image";

const StepThreeB: React.FC = () => {
  const { setBookingData, bookingData } = useBooking();

  const selectedAddonNames =
    bookingData.package?.addons?.map((addon) => addon.name) || [];
  const [selectedIndices, setSelectedIndices] = useState<number[]>(
    Windshields.map((windshield, index) =>
      selectedAddonNames.includes(windshield.title) ? index : -1
    ).filter((index) => index !== -1)
  );

  const handleCardClick = (index: number) => {
    const selectedService = Windshields[index];
    const isSelected = selectedAddonNames.includes(selectedService.title);

    setBookingData((prev) => ({
      ...prev,
      package: {
        ...prev.package,
        name: prev.package?.name || "",
        addons: isSelected
          ? prev.package?.addons.filter(
              (addon) => addon.name !== selectedService.title
            ) || []
          : [
              ...(prev.package?.addons || []),
              {
                name: selectedService.title,
                addonDur: selectedService.duration,
              },
            ],
        duration: prev.package?.duration || "",
      },
    }));

    // Update UI selection
    setSelectedIndices((prevSelected) =>
      isSelected
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-8 cursor-pointer">
        {Windshields.map((addon, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center rounded-lg transition-all duration-200 border-4
              ${
                selectedIndices.includes(index)
                  ? "border-aztecGreen rounded-xl"
                  : "border-transparent"
              } 
              hover:scale-105`}
            onClick={() => handleCardClick(index)}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col relative w-full h-full">
              {/* Content */}
              <div className="flex items-start pb-6 px-2">
                {/* Icon */}
                <div className="text-4xl mr-6 h-6">
                  <Image
                    src={addon.icon}
                    alt={`${addon.title} icon`}
                    width={addon.width}
                    height={addon.height}
                  />
                </div>
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {addon.title}
                  </h3>
                  <p className="text-black text-sm mb-2 font-normal">
                    {addon.description}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-aztecBlue"
                    />
                    {addon.duration} min
                  </div>
                </div>
              </div>
              {/* Add Button */}
              <button
                className={`absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg duration-200 transition-all text-white
                  ${
                    selectedIndices.includes(index)
                      ? "bg-aztecGreen"
                      : "bg-aztecBlue"
                  }`}
              >
                <FontAwesomeIcon
                  icon={selectedIndices.includes(index) ? faCheck : faPlus}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThreeB;
