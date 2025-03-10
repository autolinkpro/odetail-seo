"use client";

import Image from "next/image";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";

const Quote = () => {
  return (
    <div className="flex flex-col w-full h-full items-center bg-gray-300">
      {/* Landing Section */}
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[75vh] md:min-h-[85vh]">
        {/* <div className="absolute inset-0">
          <Image
            src={"/static/bg_1.jpg"}
            alt="Water Background"
            fill
            className="opacity-50 object-cover"
          />
        </div> */}
        <h2 className="text-4xl md:text-9xl tracking-wide font-extrabold text-aztecBlue mb-4 z-10">
          Auto Glass Repair
        </h2>
        <h3 className="text-2xl md:text-7xl tracking-wide font-extrabold text-black mt-4 z-10">
          Online Booking Service
        </h3>
      </div>

      {/* Step 01 */}
      <div className="relative flex flex-col w-full items-center justify-center py-12 bg-cover bg-center min-h-[65vh]">
        <div className="absolute inset-0 w-full bg-aztecBlack-dark">
          <Image
            src={"/static/garage_bg.jpg"}
            alt="Garage Background"
            fill
            priority
            className="opacity-50 object-cover"
          />
        </div>
        <h3 className="text-xl font-bold uppercase text-aztecBlue mb-2 tracking-widest z-10">
          Step 01
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white z-10">
          Choose Your Car Type
        </h2>
        <StepOne />
      </div>

      {/* Step 02 */}
      <div className="relative flex flex-col w-full items-center py-12 bg-gray-100">
        <h3 className="text-xl font-bold uppercase text-aztecBlue mb-2 tracking-widest">
          Step 02
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-5">
          Select Detail Package
        </h2>
        <StepTwo />
      </div>

      {/* Step 03 */}
      <div className="relative flex flex-col w-full items-center bg-cover bg-center pb-8 bg-aztecBlack-dark">
        <div
          className="absolute w-full h-screen bg-[url('/static/carbon_2.png')]"
          style={{
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        <h3 className="text-xl font-bold uppercase text-aztecBlue mb-2 tracking-widest z-10 pt-10">
          Step 03
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white z-10">
          Additional Services
        </h2>
        <StepThree />
      </div>

      {/* Step 04 */}
      <div className="relative flex flex-col w-full items-center py-12 bg-gray-100">
        <h3 className="text-xl font-bold uppercase text-aztecBlue mb-2 tracking-widest">
          Step 04
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-5">
          Date & Time
        </h2>
        <StepFour />
      </div>

      {/* Step 05 */}
      <div className="relative flex flex-col w-full items-center py-12 bg-gray-200">
        <h3 className="text-xl font-bold uppercase text-aztecBlue mb-2 tracking-widest">
          Step 05
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-5">
          Summary
        </h2>
        <StepFive />
      </div>
    </div>
  );
};

export default Quote;
