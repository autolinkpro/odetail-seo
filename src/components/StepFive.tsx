"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useBooking } from "@/hooks/useBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCar,
  faNewspaper,
  faWrench,
  faClockRotateLeft,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { AdditionalOptions } from "@/utils/constants";
import { useService } from "@/hooks/useService";
import { useRouter } from "next/navigation";

interface EmailParams extends Record<string, unknown> {
  company_name: string;
  car_type: string;
  year: string;
  make: string;
  model: string;
  sensors: string;
  selected_datetime: string;
  estimated_duration: string;
  service_title: string;
  package_name: string;
  addons: string;
}

const StepFive: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setBookingData, bookingData } = useBooking();
  const { serviceContext } = useService();
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const totalDuration =
    serviceContext.serviceType === "detail"
      ? bookingData.package?.duration || "-"
      : serviceContext.serviceType === "tinting"
      ? bookingData.tint
          ?.map((tint) => parseInt(tint.tintDur as string))
          .filter((duration) => !isNaN(duration))
          .reduce((total, current) => total + current, 0) || "-"
      : bookingData.package?.addons
          .map((s) => parseInt(s.addonDur as string))
          .filter((duration) => !isNaN(duration))
          .reduce((total, current) => total + current, 0) || "-";

  const summaryData =
    serviceContext.serviceType === "detail"
      ? [
          {
            icon: faCar,
            label: "Car Type",
            value: bookingData.carType || "-",
          },
          {
            icon: faNewspaper,
            label: "Year / Make / Model",
            value:
              `${bookingData.year} ${bookingData.make} ${bookingData.model}` ||
              "-",
          },
          {
            icon: faWrench,
            label: "Selected Package",
            value: bookingData.package?.name || "-",
          },
          {
            icon: faBoxes,
            label: "Selected Add-ons",
            value:
              bookingData.package?.addons
                .map((addon) => addon.name)
                .join(", ") || "None",
          },
          {
            icon: faCalendarDays,
            label: "Date & Time",
            value: `${bookingData.selectedDate || "-"}  ${
              bookingData.selectedTime
            }`,
          },
          {
            icon: faClockRotateLeft,
            label: "Est. Duration",
            value: totalDuration !== "-" ? `${totalDuration} min` : "-",
          },
        ]
      : serviceContext.serviceType === "tinting"
      ? [
          {
            icon: faCar,
            label: "Car Type",
            value: bookingData.carType || "-",
          },
          {
            icon: faNewspaper,
            label: "Year / Make / Model",
            value:
              `${bookingData.year} ${bookingData.make} ${bookingData.model}` ||
              "-",
          },
          {
            icon: faBoxes,
            label: "Selected Tint",
            value:
              bookingData.tint
                ?.map((tint) => `${tint.name} (${tint.percent}%)`)
                .join(", ") || "None",
          },
          {
            icon: faCalendarDays,
            label: "Date & Time",
            value: `${bookingData.selectedDate || "-"} ${
              bookingData.selectedTime
            }`,
          },
          {
            icon: faClockRotateLeft,
            label: "Est. Duration",
            value: totalDuration !== "-" ? `${totalDuration} min` : "-",
          },
        ]
      : [
          {
            icon: faCar,
            label: "Car Type",
            value: bookingData.carType || "-",
          },
          {
            icon: faNewspaper,
            label: "Year / Make / Model",
            value:
              `${bookingData.year} ${bookingData.make} ${bookingData.model}` ||
              "-",
          },
          {
            icon: faBoxes,
            label: "Service",
            value:
              bookingData.package?.addons
                .map((addon) => addon.name)
                .join(", ") || "None",
          },
          {
            icon: faCalendarDays,
            label: "Date & Time",
            value: `${bookingData.selectedDate || "-"} ${
              bookingData.selectedTime
            }`,
          },
          {
            icon: faClockRotateLeft,
            label: "Est. Duration",
            value: totalDuration !== "-" ? `${totalDuration} min` : "-",
          },
        ];

  const WithAvatar = () => (
    <div className="flex flex-col pl-8">
      <div className="grid z-10 place-items-center absolute -left-12 top-1/2 -translate-y-1/2 size-20 rounded-full shadow-lg bg-black text-white">
        <img src="/static/logo_light.png" alt="logo" />
      </div>
      <p className="text-white font-semibold">O Detail</p>
      <p className="text-sm text-zinc-400">
        Your quote has been sent successfully!
      </p>
    </div>
  );

  useEffect(() => {
    const isBookingComplete = Boolean(
      bookingData.carType &&
        bookingData.year &&
        bookingData.make &&
        bookingData.model &&
        bookingData.selectedDate &&
        bookingData.selectedTime
    );

    setIsReady(isBookingComplete);
  }, [bookingData]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userPublicID = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const formData = new FormData(formRef.current);
    const formFields = Object.fromEntries(formData.entries());

    const selectedSensors = [
      formFields.rain_sensors && "Rain Sensors",
      formFields.rain_lane_sensors && "Rain & Lane Sensors",
      formFields.heads_up_display && "Heads-Up Display",
      formFields.not_sure && "Not Sure",
    ]
      .filter(Boolean)
      .join(", ");

    const emailParams: EmailParams = {
      ...formFields,
      company_name: "O Detail",
      car_type: bookingData.carType || "-",
      year: bookingData.year || "-",
      make: bookingData.make || "-",
      model: bookingData.model || "-",
      sensors: selectedSensors || "None",
      selected_datetime: `${bookingData.selectedDate || "-"}, ${
        bookingData.selectedTime || "-"
      }`,
      estimated_duration: totalDuration !== "-" ? `${totalDuration} min` : "-",
      service_title: "SERVICE", // Default value
      package_name: "No service selected", // Default value
      addons: "None", // Default value
    };

    // Handle service-specific fields
    if (serviceContext.serviceType === "detail") {
      emailParams.service_title = "SELECTED PACKAGE";
      emailParams.package_name =
        bookingData.package?.name || "No package selected";
      emailParams.addons =
        bookingData.package?.addons.map((addon) => addon.name).join(", ") ||
        "None";
    } else if (serviceContext.serviceType === "tinting") {
      emailParams.service_title = "SELECTED TINTS";
      emailParams.package_name =
        bookingData.tint
          ?.map((tint) => `${tint.name} (${tint.percent}%)`)
          .join(", ") || "No tint selected";
      emailParams.addons = "N/A"; // No add-ons for tinting
    } else if (serviceContext.serviceType === "windshield") {
      emailParams.service_title = "SERVICE";
      emailParams.package_name =
        bookingData.package?.addons.map((addon) => addon.name).join(", ") ||
        "None";
      emailParams.addons = "N/A";
    } else {
      emailParams.service_title = "SERVICE";
      emailParams.package_name = "No service selected";
      emailParams.addons = "None";
    }

    setIsLoading(true);
    emailjs.send(serviceID!, templateID!, emailParams, userPublicID!).then(
      () => {
        formRef.current?.reset();
        setIsLoading(false);
        toast(WithAvatar, {
          className:
            "shadow-lg overflow-visible scale-100 ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-slate-800 highlight-white/5",
        });

        setBookingData({
          carType: "Sedan",
          year: "",
          make: "",
          model: "",
          selectedDate: "",
          selectedTime: "",
          package: {
            name: "",
            addons: [],
            duration: "",
          },
          tint: [],
        });

        router.refresh();
      },
      (error) => {
        toast(`Quote failed to send: ${error.text}`);
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-8">
      {/* Summary Section */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center bg-white rounded-lg p-8 shadow-md w-full max-w-sm space-y-2"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-aztecBlue text-3xl font-bold"
            />
            <div className="text-aztecBlue uppercase font-bold text-lg pb-4">
              {item.label}
            </div>
            <div className="text-black font-extrabold text-2xl mt-1">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="bg-black text-white rounded-lg p-10 shadow-lg">
        <h2 className="text-2xl font-bold text-aztecBlue mb-4">
          Your Contact Details
        </h2>
        <p className="text-gray-200 text-sm font-medium mb-8">
          The request will be sent to us and an associate will get in touch to
          confirm your booking.
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="customer_first"
              placeholder="First Name *"
              required
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
            <input
              type="text"
              name="customer_last"
              placeholder="Last Name *"
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
          </div>
          <input
            type="email"
            name="customer_email"
            placeholder="Email *"
            required
            className="w-full p-3 rounded-lg text-black border border-gray-300"
          />
          <input
            type="tel"
            name="customer_phone"
            placeholder="Phone Number *"
            required
            className="w-full p-3 rounded-lg text-black border border-gray-300"
          />

          {/* Additional Options */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-aztecBlue">
              Additional Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {AdditionalOptions.map((option) => (
                <label
                  key={option.name}
                  className="flex items-center gap-2 text-white"
                >
                  <input
                    type="checkbox"
                    name={option.name}
                    value="Yes"
                    className="accent-aztecBlue size-4"
                  />
                  {option.label}
                </label>
              ))}
            </div>

            <input
              type="text"
              name="vin_number"
              placeholder="VIN Number (optional)"
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
            <textarea
              rows={4}
              name="customer_additionalInfo"
              placeholder="Additional Information"
              className="w-full p-3 rounded-lg text-black border border-gray-300"
            />
          </div>

          <button
            type="submit"
            disabled={!isReady || isLoading}
            className={`w-full p-3 uppercase rounded-lg text-white font-bold text-lg ${
              isReady
                ? "bg-aztecBlue hover:scale-95 transition"
                : "bg-gray-700 text-gray-500"
            }`}
          >
            {isLoading ? "..." : "Get Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StepFive;
