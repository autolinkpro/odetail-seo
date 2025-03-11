import AboutUs from "@/components/AboutUs";
import BookingSteps from "@/components/BookingSteps";
import Button from "@/components/Button";
import Location from "@/components/Location";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      {/* Header Section */}
      <div className="relative flex flex-col w-full items-center justify-center min-h-screen px-6">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={"/landing_odetail.mov"}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/75 z-1" />

        {/* Content */}
        <div className="z-10 text-center">
          <h1 className="font-black text-3xl xl:text-8xl md:text-5xl text-white sm:leading-tight lg:leading-snug xl:leading-normal">
            Airdrie Auto
          </h1>
          <h2 className="text-2xl md:text-7xl tracking-wide font-extrabold text-aztecBlue mb-8">
            Detailing
          </h2>
          <p className="text-sm xl:text-lg text-gray-200 font-normal md:mt-4 max-w-xl mx-auto">
            Get in touch today for a free, no-obligation quote and let us handle
            your auto detailing needs with ease and professionalism.
          </p>
          <div className="flex items-center justify-center md:space-x-6 gap-2 md:gap-0 mt-8 flex-wrap">
            <Button theme="filled" text="Get Free Quote" />
            <Button theme="outlined" text="Call Us Now" phone="5879667636" />
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="h-16" />
      <BookingSteps />

      {/* Section 2 - What We Offer */}
      <div
        className="relative flex flex-col w-full items-center py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/static/carbon_bg.jpg")',
          backgroundPosition: "center 85%",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/55 z-0" />
        <div className="z-10 text-center">
          <h3 className="text-lg font-bold uppercase text-aztecBlue mt-6 mb-4 tracking-widest">
            What We Offer
          </h3>
          <h2 className="text-2xl md:text-6xl font-extrabold text-white tracking-wide mb-4 text-center leading-tight">
            Reliable customized detailing services
          </h2>
          <h3 className="text-lg md:text-2xl font-bold uppercase text-white my-4">
            Guaranteed High Quality Results
          </h3>
          <AboutUs />
        </div>
      </div>

      {/* Spacing */}
      <div className="h-24" />

      {/* Section 3 - Location */}
      <div className="relative flex flex-col w-full items-center">
        <Location />
      </div>

      {/* Spacing */}
      <div className="h-24" />
    </div>
  );
};

export default Home;
