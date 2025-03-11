"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { detailPackages } from "@/utils/constants";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-10 mt-6">
      {detailPackages.map((packageDetail, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-lg shadow-lg p-6 text-center border border-gray-300 lg:min-h-screen flex flex-col justify-between gap-2
            ${
              packageDetail.title.includes("Deluxe")
                ? "border-blue-500 shadow-xl py-8"
                : "py-6"
            } 
            transition-transform duration-300 hover:scale-105 w-full md:w-1/2 max-w-lg`}
        >
          <h3 className="text-3xl font-black text-aztecBlue">
            {packageDetail.title}
          </h3>
          <div className="flex text-lg text-black font-bold gap-2 justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-aztecBlue" />
              {packageDetail.time}
            </div>
          </div>
          <p className="text-sm text-black font-semibold mt-2">
            {packageDetail.description}
          </p>
          <div className="w-full h-[1.5px] bg-gray-400 my-4" />

          {/* Features List */}
          <ul className="mt-2 space-y-2 text-lg text-gray-900 font-normal text-left">
            {packageDetail.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-aztecGreen mr-2 text-lg">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Shine Package (Only for Deluxe) */}
          {packageDetail.shinePackage && (
            <>
              <h4 className="mt-6 text-lg font-semibold text-black">
                + Shine Package Included:
              </h4>
              <ul className="mt-2 space-y-2 text-base text-gray-900 text-left">
                {packageDetail.shinePackage.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-lg">✨</span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Call to Action */}
          <div className="mt-auto">
            <button
              className="w-full bg-aztecBlue text-white py-2 rounded-full hover:bg-blue-600 transition font-bold"
              onClick={() => router.push("/quote")}
            >
              Get Package
            </button>
          </div>

          {/* Highlighted Badge for Deluxe */}
          {packageDetail.title.includes("Deluxe") && (
            <span className="absolute top-0 right-0 bg-aztecBlue text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
              Most Popular
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
