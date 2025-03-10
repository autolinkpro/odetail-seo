import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const stepsData = [
  {
    icon: faCarSide,
    title: "Vehicle Info & Package",
    description:
      "Fill in your vehicle information and choose your detailing package.",
  },
  {
    icon: faCommentDollar,
    title: "Receive Quote",
    description: "We will provide you a quote for the detailing service.",
  },
  {
    icon: faCalendarAlt,
    title: "Book The Day",
    description: "Choose the best time to book an appointment.",
  },
];

const BookingSteps = () => {
  return (
    <div className="w-full flex flex-col items-center pt-3 pb-3 lg:pt-6 lg:pb-6">
      <h2 className="text-3xl lg:text-4xl text-black font-extrabold">
        3 Easy Steps
      </h2>
      <div className="flex justify-evenly flex-wrap mt-7 lg:mt-16">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:w-96 items-center transition-colors m-3"
          >
            <div className="flex rounded-lg items-center justify-center p-6 outline outline-2 outline-blue-300 transition-transform duration-100 hover:scale-110">
              <span className="text-blue-500 text-3xl">
                <FontAwesomeIcon icon={step.icon} />
              </span>
            </div>
            <h4 className="text-black text-lg font-bold mt-4">{step.title}</h4>
            <p className="text-xs md:text-sm text-center w-10/12 font-medium text-gray-700">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
