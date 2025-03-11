"use client";

import Image from "next/image";
import { useState } from "react";

const tintLevels = [
  { percent: "5%", value: 95 },
  { percent: "20%", value: 80 },
  { percent: "35%", value: 65 },
  { percent: "70%", value: 30 },
  { percent: "None", value: 0 },
];

export default function TintSelector() {
  const [selectedTint, setSelectedTint] = useState<number>(0);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Base Car Image */}
        <Image
          src="/static/cars/coupe.png"
          alt="Car Tint Example"
          width={800}
          height={600}
          className="w-auto h-auto transform scale-x-[-1]"
        />

        {/* Tint Overlay */}
        <div className="absolute inset-0 flex">
          {tintLevels.map(({ percent, value }, index) => (
            <div
              key={index}
              className="flex-1 h-full cursor-pointer flex items-end justify-center relative transition-all"
              onClick={() => setSelectedTint(value)}
            >
              {/* Tint Effect */}
              <div
                className="absolute inset-0 bg-black transition-opacity rounded-xl"
                style={{
                  opacity: selectedTint === value ? value / 100 : 0,
                }}
              />

              {/* Label */}
              <span
                className={`text-white bg-aztecBlue py-1 px-2 md:py-0 md:px-6 rounded-full font-bold text-xs md:text-lg absolute bottom-4 transition-all z-10 ${
                  selectedTint === value ? "bg-aztecGreen" : "text-gray-200"
                }`}
              >
                {percent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
