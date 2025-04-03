import Image from "next/image";

const Polishing = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      {/* Hero Section */}
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[70vh] md:min-h-[80vh] bg-aztecBlack-dark">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('/static/bg_4.jpg')",
          }}
        />

        {/* Foreground Content */}
        <h2 className="text-4xl md:text-9xl tracking-wide font-extrabold text-white mb-4 z-10">
          Polishing <span className="text-aztecBlue">Service</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-7 py-12 md:px-0 gap-8 md:gap-16">
        {/* Info Container */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          {/* <p className="md:max-w-xl text-sm md:text-base text-black font-normal">
            At <span className="font-bold text-aztecBlue">O Detail</span>, we
            offer efficient and affordable rock chip repair to keep your
            windshield in top condition. For just{" "}
            <span className="font-bold text-aztecBlue">$42.95</span>, we'll
            expertly repair one chip, with each additional chip repaired for
            only <span className="font-bold text-aztecBlue">$19.95</span>.
          </p>

          <p className="md:max-w-xl text-sm md:text-base text-black font-normal">
            For those who want year-round peace of mind, our subscription plan
            is an unbeatable value. For just{" "}
            <span className="font-bold text-aztecBlue">$99</span>, enjoy
            unlimited rock chip repairs throughout the year, ensuring your
            windshield remains free of damage no matter how many chips you
            encounter.
          </p>

          <p className="md:max-w-xl text-sm md:text-base text-black font-normal">
            Protect your investment and maintain your vehicle's safety with our
            reliable rock chip repair services. Click below to get started or
            contact us for more details!{" "}
            <span className="font-bold">No Appointment needed!</span>
          </p> */}
        </div>

        {/* Car Image */}
        <div className="relative w-80 h-52 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px]">
          <Image
            src="/static/sedan_1.png"
            alt="Sedan"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Polishing;
