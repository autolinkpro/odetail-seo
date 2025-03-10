"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactCard: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:quotes@odetail.ca?subject=A new inquiry!&body=Hi, my name is ${formData.firstName} ${formData.lastName}. ${formData.message}`;
  };

  return (
    <div className="flex items-center justify-center w-full px-6 lg:px-20 max-w-screen-xl">
      {/* Contact Info Card */}
      <div className="flex flex-col items-center w-full max-w-screen-sm bg-white rounded-lg shadow-lg px-10 py-8 md:m-6">
        {/* Store Image */}
        <div className="w-full h-64 relative mb-6">
          <Image
            src={`/static/shop_front.jpg`}
            alt="Storefront"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Store Info */}
        <div className="flex flex-col items-center text-center gap-2 md:gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-aztecBlue md:mb-2">
            Airdrie, AB
          </h2>
          <div className="flex items-center text-black font-medium text-sm md:text-lg">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-2 text-aztecBlue"
            />
            203 - 2914 Kingsview Boulevard SE
          </div>
          <div className="flex items-center text-black font-medium text-sm md:text-lg">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-aztecBlue" />
            <a href="tel:+15873662254">(587) 366-2254</a>
          </div>
        </div>

        {/* Hours Section */}
        <div className="mt-6 md:mt-8 w-full flex flex-col justify-center items-center gap-2">
          <h3 className="text-xl font-bold text-black mb-4">
            Hours of Operation
          </h3>
          <table className="w-full text-sm border-collapse text-center">
            <tbody>
              {[
                { day: "Monday", hours: "8:30 am - 5:00 pm" },
                { day: "Tuesday", hours: "8:30 am - 5:00 pm" },
                { day: "Wednesday", hours: "8:30 am - 5:00 pm" },
                { day: "Thursday", hours: "8:30 am - 5:00 pm" },
                { day: "Friday", hours: "8:30 am - 5:00 pm" },
                { day: "Saturday", hours: "9:00 am - 4:00 pm" },
                { day: "Sunday", hours: "Closed" },
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <th className="p-2 text-black font-bold">{item.day}:</th>
                  <td className="p-2 text-black font-medium">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-aztecBlack-light text-white rounded-lg shadow-lg w-full max-w-screen-sm px-10 py-8 md:m-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-aztecBlue mb-4">
          Message Us
        </h2>
        <p className="text-gray-200 text-sm md:text-lg font-medium mb-8">
          Any comments, questions, or concerns? Send us a message!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name *"
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name *"
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
          </div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email *"
            required
            className="w-full p-3 rounded-lg text-black border border-gray-300"
          />
          <textarea
            rows={4}
            {...register("message")}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg text-black border border-gray-300"
          />
          <button
            type="submit"
            className="w-full p-3 uppercase bg-aztecBlue rounded-lg text-white font-bold text-lg hover:scale-95 transition-transform"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
