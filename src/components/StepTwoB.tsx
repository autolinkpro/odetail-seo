"use client";

import React from "react";
import { useService } from "@/hooks/useService";
import { useBooking } from "@/hooks/useBooking";

const StepTwoB: React.FC = () => {
  const { serviceContext, setServiceContext } = useService();
  const { setBookingData } = useBooking();

  enum ServiceType {
    Windshield = "windshield",
    Detailing = "detail",
    Tinting = "tinting",
    // "Chip Repair" = "chip",
  }

  const handleServiceChange = (value: ServiceType) => {
    setServiceContext({ serviceType: value });
    setBookingData((prev) => ({
      ...prev,
      package: {
        name: "",
        addons: [],
        duration: "",
      },
      tint: [],
    }));
  };
  const categories = Object.entries(ServiceType) as [string, ServiceType][];
  return (
    <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-10 py-12 px-8 justify-center">
      {categories.map(([label, value]) => (
        <button
          key={value}
          onClick={() => handleServiceChange(value)}
          className={`${
            serviceContext.serviceType === value
              ? "bg-aztecGreen "
              : "bg-aztecBlue hover:scale-105 hover:bg-blue-600"
          } text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default StepTwoB;
