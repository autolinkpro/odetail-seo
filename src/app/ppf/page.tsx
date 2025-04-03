import Image from "next/image";

const PPF = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      {/* Hero Section */}
      <div className="relative flex flex-col w-full items-center justify-center py-12 min-h-[70vh] md:min-h-[80vh] bg-aztecBlack-dark">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
          style={{
            backgroundImage: "url('/static/ppf_lander.png')",
          }}
        />

        {/* Foreground Content */}
        <div className="flex flex-col items-center justify-center tracking-wide font-extrabold text-white mb-4 z-10">
          <h2 className="text-4xl md:text-9xl">Paint Protection</h2>
          <span className="text-3xl md:text-9xl text-aztecBlue">Film</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col min-h-[50vh] md:flex-row items-center justify-center px-7 py-12 md:px-12 gap-8">
        {/* Left Side - Text Content */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start">
          <h3 className="text-4xl md:text-5xl tracking-wide font-black text-black mb-4">
            PPF
          </h3>
          {/* Info Container */}
          <div className="space-y-4">
            {/* <p className="text-sm md:text-base text-black font-normal">
              Enhance your vehicle with premium window tint for improved style
              and comfort. Our{" "}
              <span className="text-aztecBlue font-bold">high-quality</span>{" "}
              tint provides increased privacy, protecting your belongings while
              offering a sleek, modern look. It blocks up to 99% of harmful UV
              rays, safeguarding your skin and interior from sun damage.
            </p>

            <p className="text-sm md:text-base text-black font-normal">
              The tint also reduces heat, keeping your car cooler and more
              comfortable, while minimizing glare for safer driving. With{" "}
              <span className="text-aztecBlue font-bold">long-lasting</span>{" "}
              durability, our tint resists fading and cracking, making it a
              smart investment for both style and protection.
            </p> */}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/static/ppf.jpeg"
            alt="Tint"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PPF;
