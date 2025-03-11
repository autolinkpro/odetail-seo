"use client";

import React, { useState, useRef, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useBooking } from "@/hooks/useBooking";
import { CarTypes } from "@/utils/constants";
import Image from "next/image";

const reactSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "#1194e4",
    opacity: state.isDisabled ? 0.5 : 0.8,
    border: "1px solid #1194e4",
    borderBottom: state.isDisabled ? "1px solid #1194e4" : "2px solid #fff",
    borderRadius: "0.5rem",
    boxShadow: "none",
    padding: "0.25rem",
    fontSize: "1rem",
    fontWeight: 500,
    width: "14rem",
    cursor: "pointer",
    color: "#fff",
    ":hover": {
      borderColor: "#1194e4",
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? "#1194e4" : "#ffffff",
    color: state.isSelected ? "#ffffff" : "#000",
    ":hover": {
      backgroundColor: "#f1f1f1",
    },
    cursor: "pointer",
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "0.5rem",
    overflow: "hidden",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#fff",
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#fff",
    fontWeight: 500,
  }),
};

const StepOne: React.FC = () => {
  const { setBookingData } = useBooking();
  const [selectedType, setSelectedType] = useState<number>(0);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const swiperRef = useRef<any>(null);

  const fetchMakes = async (vehicleType: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${vehicleType}?format=json`
      );
      const data = await response.json();
      const uniqueMakes: string[] = Array.from(
        new Set(data.Results.map((make: any) => make.MakeName.trim()))
      );
      setMakes(uniqueMakes);
    } catch (error) {
      console.error("Error fetching makes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchModels = async (
    make: string,
    year: string,
    vehicleType: string
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}/vehicletype/${vehicleType}?format=json`
      );
      const data = await response.json();
      const uniqueModels: string[] = Array.from(
        new Set(data.Results.map((model: any) => model.Model_Name))
      );
      setModels(uniqueModels);
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypeChange = (index: number) => {
    setSelectedType(index);
    const selectedCarType = CarTypes[index].name;
    const qCarType = CarTypes[index].qName;

    setSelectedYear("");
    setSelectedMake("");
    setSelectedModel("");
    setMakes([]);
    setModels([]);

    setBookingData((prev) => ({
      ...prev,
      carType: selectedCarType,
      year: "",
      make: "",
      model: "",
    }));
    fetchMakes(qCarType);
  };

  const handleYearChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    const year = selectedOption?.value || "";
    setSelectedYear(year);
    setSelectedMake("");
    setSelectedModel("");
    setModels([]);
    setBookingData((prev) => ({ ...prev, year }));
  };

  const handleMakeChange = async (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    const make = selectedOption?.value || "";
    setSelectedMake(make);
    setSelectedModel("");
    fetchModels(make, selectedYear, CarTypes[selectedType].qName);
    setBookingData((prev) => ({ ...prev, make }));
  };

  const handleModelChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    const model = selectedOption?.value || "";
    setSelectedModel(model);
    setBookingData((prev) => ({ ...prev, model }));
  };

  useEffect(() => {
    fetchMakes(CarTypes[selectedType].qName);
    setBookingData((prev) => ({
      ...prev,
      carType: CarTypes[selectedType].name,
      year: "",
      make: "",
      model: "",
    }));
  }, [selectedType, setBookingData]);

  return (
    <div className="flex flex-col items-center w-full py-8 px-4">
      {/* Car Type Selection */}
      <div className="flex gap-4 flex-wrap justify-center my-6 z-10">
        {CarTypes.map((car, index) => (
          <button
            key={index}
            className={`text-lg md:text-xl px-6 py-2 rounded-full transition-all duration-300 font-semibold ${
              index === selectedType
                ? "bg-black text-aztecBlue"
                : "bg-transparent text-white hover:text-aztecBlue hover:bg-black"
            }`}
            onClick={() => {
              handleTypeChange(index);
              if (swiperRef.current) swiperRef.current.slideTo(index);
            }}
          >
            {car.name}
          </button>
        ))}
      </div>

      {/* Swiper for Car Images */}
      <div className="w-full max-w-6xl flex items-center justify-center mt-6 relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => handleTypeChange(swiper.activeIndex)}
          className="w-full"
        >
          {CarTypes.map((car, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative flex justify-center items-center w-full h-[500px]">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  // objectFit="cover"
                  className="object-contain transform scale-x-[-1]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {!isLoading ? (
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center mt-4">
          <Select
            value={
              selectedYear ? { value: selectedYear, label: selectedYear } : null
            }
            onChange={handleYearChange}
            options={Array.from({ length: 25 }, (_, i) => ({
              value: (2023 - i).toString(),
              label: (2023 - i).toString(),
            }))}
            placeholder="Select Year"
            styles={reactSelectStyles}
            isClearable
          />
          <Select
            value={
              selectedMake ? { value: selectedMake, label: selectedMake } : null
            }
            onChange={handleMakeChange}
            options={makes.map((make) => ({ value: make, label: make }))}
            placeholder="Select Make"
            styles={reactSelectStyles}
            isClearable
            isDisabled={!selectedYear}
          />
          <Select
            value={
              selectedModel
                ? { value: selectedModel, label: selectedModel }
                : null
            }
            onChange={handleModelChange}
            options={models.map((model) => ({ value: model, label: model }))}
            placeholder="Select Model"
            styles={reactSelectStyles}
            isClearable
            isDisabled={!selectedMake}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center mt-4">
          {" "}
          <div className="w-56 h-12 bg-gray-400 rounded-lg animate-pulse" />
          <div className="w-56 h-12 bg-gray-400 rounded-lg animate-pulse" />
          <div className="w-56 h-12 bg-gray-400 rounded-lg animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default StepOne;
