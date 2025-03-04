"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarModelCanvas from "./CarModel";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const nextView = () => {
    setActiveIndex((prev) => (prev + 1) % windshieldTypes.length);
  };

  const prevView = () => {
    setActiveIndex(
      (prev) => (prev - 1 + windshieldTypes.length) % windshieldTypes.length
    );
  };

  const windshieldTypes = [
    {
      model: "/models/mazda_model.glb",
      title: "Windshield",
      subtitle: "Premium Protection for Your Vehicle",
      time: "90 minutes",
      features: [
        "Scratch-resistant glass",
        "UV protection coating",
        "Affordable pricing",
      ],
      primitivePos: [-46, -50, -45],
      camPos: [0, 5, -15],
      lookPos: [0, 8, -30],
      rotation: [0, 0, 0],
    },
    {
      model: "/models/mazda_model.glb",
      title: "Side Glass",
      subtitle: "Enhanced Durability and Clarity",
      time: "90 minutes",
      features: [
        "Enhanced clarity",
        "Thermal protection",
        "Premium durability",
      ],
      primitivePos: [-46, -50, -45],
      camPos: [150, -5, -165],
      lookPos: [150, 0, -170],
      rotation: [-170, 90, 170],
    },
    {
      model: "/models/mazda_model.glb",
      title: "Back Glass",
      subtitle: "Enhanced Durability and Clarity",
      time: "120 minutes",
      features: [
        "Enhanced clarity",
        "Thermal protection",
        "Premium durability",
      ],
      primitivePos: [-46, -50, -45],
      camPos: [1.5, 15, -305],
      lookPos: [1.5, 0, -305],
      rotation: [-170, 1, 180],
    },
  ];

  const activeView = windshieldTypes[activeIndex];

  return (
    <div className="flex flex-col w-full py-12 items-center text-black">
      <div className="flex flex-col lg:flex-row items-center justify-between w-3/4">
        {/* Car Model */}
        <div className="relative w-full lg:w-3/4 rounded-t-xl md:rounded-l-xl md:rounded-r-none">
          <CarModelCanvas
            modelPath={activeView.model}
            primitivePos={activeView.primitivePos}
            camPos={activeView.camPos}
            lookPos={activeView.lookPos}
            rotation={activeView.rotation}
          />

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
            <button
              onClick={prevView}
              className="mx-4 p-4 bg-aztecBlue text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center w-[60px] h-[60px]"
            >
              ❮
            </button>
            <button
              onClick={nextView}
              className="mx-4 p-4 bg-aztecBlue text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center w-[60px] h-[60px]"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/3 p-8 md:p-14 text-center md:text-left rounded-b-xl md:rounded-r-xl md:rounded-l-none bg-white shadow-md">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black">
              {activeView.title}
            </h2>
            <p className="flex items-center text-sm md:text-lg font-bold text-black py-2 tracking-wide">
              <FontAwesomeIcon
                icon={faClock}
                className="text-aztecBlue mr-2 text-base md:text-lg"
              />
              {activeView.time} minimum
            </p>
          </div>

          {/* Features List */}
          <ul className="list-none space-y-2 my-4 font-normal">
            {activeView.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="text-green-500 mr-2 text-lg">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button
            aria-label={`Get a quote for ${activeView.title}`}
            onClick={() => router.push("/quote")}
            className="w-full p-5 bg-aztecBlue text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-95"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
