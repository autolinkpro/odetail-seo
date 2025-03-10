import Image from "next/image";

const WindshieldReplacement = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      {/* Hero Section */}
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[70vh] md:min-h-[80vh] bg-aztecBlack-dark">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('/static/bg_5.jpg')",
          }}
        />

        {/* Foreground Content */}
        <div className="flex flex-col items-center justify-center tracking-wide font-extrabold text-white mb-4 z-10">
          <h2 className="text-4xl md:text-9xl">Windshield</h2>
          <span className="text-3xl md:text-8xl text-aztecBlue">
            Replacement
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-7 py-12 md:px-0 gap-8 md:gap-16">
        {/* Info Container */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-black text-2xl md:text-3xl font-extrabold md:font-black md:leading-normal">
            Windshield Replacement
          </h1>
          <p className="md:max-w-xl text-sm md:text-base text-black font-normal mt-4">
            Our in-shop windshield replacement service offers everything you'd
            expect from a top-notch auto glass provider, plus an exclusive
            benefit. When you choose to have your windshield replaced at our
            shop, you'll receive{" "}
            <span className="font-bold text-aztecBlue cursor-pointer inline-block transition-transform duration-100 hover:scale-95">
              6 months free
            </span>{" "}
            unlimited rock chip repair with any replacement. Enjoy the peace of
            mind that comes with knowing your windshield is protected long after
            the initial service. Visit us today for expert care and added value!
          </p>
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

export default WindshieldReplacement;
