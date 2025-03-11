"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { useBooking } from "@/hooks/useBooking";
import { Tints } from "@/utils/constants";
import Image from "next/image";

const tintPercentages = ["5", "20", "35", "70", "None"];

const StepThreeTint: React.FC = () => {
  const { setBookingData, bookingData } = useBooking();

  const selectedTints = bookingData.tint || [];

  const handleCardClick = (tintName: string, tintDur: string) => {
    const isSelected = selectedTints.some((tint) => tint.name === tintName);

    setBookingData((prev) => ({
      ...prev,
      tint: isSelected
        ? prev.tint && prev.tint.length > 1
          ? prev.tint.filter((tint) => tint.name !== tintName) // Keep remaining tints
          : []
        : [...(prev.tint || []), { name: tintName, percent: "5", tintDur }], // Default to 5%
    }));
  };

  const handlePercentChange = (
    tintName: string,
    percent: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.stopPropagation(); // Prevent the dropdown from triggering card click

    setBookingData((prev) => ({
      ...prev,
      tint: prev.tint?.map((tint) =>
        tint.name === tintName ? { ...tint, percent } : tint
      ),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-8">
        {Tints.map((tint, index) => {
          const isSelected = selectedTints.some((t) => t.name === tint.title);
          const selectedPercent =
            selectedTints.find((t) => t.name === tint.title)?.percent || "5";

          return (
            <div key={index} className="relative">
              {/* Main Card (Only Clickable on Non-Interactive Elements) */}
              <div
                className={`flex items-center justify-center rounded-lg transition-all duration-200 border-4 cursor-pointer
              ${
                isSelected
                  ? "border-aztecGreen rounded-xl"
                  : "border-transparent"
              }`}
                onClick={() => handleCardClick(tint.title, tint.duration)}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col relative w-full h-full">
                  {/* Content */}
                  <div className="flex items-start pb-6 px-2">
                    {/* Icon */}
                    <div className="text-4xl mr-6 h-6">
                      <Image
                        src={tint.icon}
                        alt={`${tint.title} icon`}
                        width={tint.width}
                        height={tint.height}
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {tint.title}
                      </h3>
                      <p className="text-black text-sm mb-2 font-normal">
                        {tint.description}
                      </p>
                      <div className="flex items-center gap-2 font-bold text-lg">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-aztecBlue"
                        />
                        {tint.duration} min
                      </div>
                    </div>
                  </div>

                  {/* Tint Percentage Selector - Prevents Card Click */}
                  {isSelected && (
                    <div className="flex flex-row justify-center items-center gap-4 mt-4">
                      <label className="text-black font-bold mb-2">
                        Tint Percentage:
                      </label>
                      <select
                        className="w-1/2 p-2 border rounded-md text-black cursor-pointer"
                        value={selectedPercent}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          handlePercentChange(tint.title, e.target.value, e)
                        }
                      >
                        {tintPercentages.map((percent) => (
                          <option key={percent} value={percent}>
                            {percent}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Add/Remove Button */}
                  <button
                    className={`absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg duration-200 transition-all text-white
                  ${isSelected ? "bg-aztecGreen" : "bg-aztecBlue"}`}
                  >
                    <FontAwesomeIcon icon={isSelected ? faCheck : faPlus} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepThreeTint;
