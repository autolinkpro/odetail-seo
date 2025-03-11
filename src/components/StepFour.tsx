"use client";

import React, { useState, useEffect } from "react";
import { format, addDays, startOfWeek, isBefore, startOfDay } from "date-fns";
import { useBooking } from "@/hooks/useBooking";

const StepFour: React.FC = () => {
  const { setBookingData } = useBooking();
  const now = new Date();
  const today = startOfDay(now);
  const [currentWeek, setCurrentWeek] = useState(
    startOfWeek(today, { weekStartsOn: 0 })
  );
  const [selectedTime, setSelectedTime] = useState<{
    [key: string]: string | null;
  }>({});
  const [daysToShow, setDaysToShow] = useState(7);

  useEffect(() => {
    const updateDaysToShow = () => {
      setDaysToShow(window.innerWidth <= 768 ? 3 : 7);
    };

    updateDaysToShow();
    window.addEventListener("resize", updateDaysToShow);
    return () => window.removeEventListener("resize", updateDaysToShow);
  }, []);

  const daysOfWeek = Array.from({ length: daysToShow }, (_, i) =>
    addDays(currentWeek, i)
  );

  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour24 = 9 + i;
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    const period = hour24 >= 12 ? "PM" : "AM";
    return `${hour12}:00 ${period}`;
  });

  const handleTimeClick = (date: string, time: string) => {
    const [hour, minute] = time
      .replace(/ (AM|PM)/, "")
      .split(":")
      .map(Number);
    const isPM = time.includes("PM");
    const hour24 = isPM && hour < 12 ? hour + 12 : hour;

    const [year, month, day] = date.split("-").map(Number);
    const dateTime = new Date(year, month - 1, day, hour24, minute);
    const localDateTime = new Date(
      dateTime.getTime() + dateTime.getTimezoneOffset() * 60000
    );

    if (isBefore(dateTime, now)) return;

    setSelectedTime((prev) => ({
      ...prev,
      [date]: prev[date] === time ? null : time,
    }));

    setBookingData((prev) => ({
      ...prev,
      selectedDate: format(localDateTime, "MMMM dd, yyyy"),
      selectedTime: time,
    }));
  };

  const goToNextWeek = () => setCurrentWeek(addDays(currentWeek, daysToShow));
  const goToPreviousWeek = () => {
    const previousWeekStart = addDays(currentWeek, -daysToShow);
    setCurrentWeek(
      isBefore(previousWeekStart, today) ? today : previousWeekStart
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-7xl py-8 px-6">
      {/* Header */}
      <div className="flex justify-between items-center w-full px-10 py-6 bg-aztecBlue text-white rounded-t-lg">
        <button
          onClick={goToPreviousWeek}
          className="font-bold border-2 rounded-full p-2 px-4 hover:scale-95 transition-transform"
        >
          &lt;
        </button>
        <h2 className="text-2xl font-extrabold">
          {format(currentWeek, "MMMM yyyy")}
        </h2>
        <button
          onClick={goToNextWeek}
          className="font-bold border-2 rounded-full p-2 px-4 hover:scale-95 transition-transform"
        >
          &gt;
        </button>
      </div>

      {/* Calendar Grid - Dynamically set columns */}
      <div
        className={`grid w-full p-4 text-center font-medium bg-gray-200 border-b-4 border-aztecBlue gap-4 
        ${daysToShow === 3 ? "grid-cols-3" : "grid-cols-7"}`}
      >
        {daysOfWeek.map((date) => (
          <div
            key={format(date, "yyyy-MM-dd")}
            className="flex flex-col items-center py-4 px-2 rounded-md"
          >
            <div
              className={`mb-4 border-b-2 ${
                format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")
                  ? "border-aztecBlue"
                  : "border-transparent"
              }`}
            >
              <div className="text-2xl font-extrabold text-black">
                {format(date, "dd")}
              </div>
              <div className="text-lg font-bold text-black">
                {format(date, "EEEE")}
              </div>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-1 gap-2 mt-2 w-full">
              {timeSlots.map((time) => {
                const [hour, minute] = time
                  .replace(/ (AM|PM)/, "")
                  .split(":")
                  .map(Number);
                const isPM = time.includes("PM");
                const hour24 = isPM && hour < 12 ? hour + 12 : hour;

                const [year, month, day] = format(date, "yyyy-MM-dd")
                  .split("-")
                  .map(Number);
                const dateTime = new Date(year, month - 1, day, hour24, minute);
                const isDisabled = isBefore(dateTime, now);

                return (
                  <button
                    key={`${format(date, "yyyy-MM-dd")}-${time}`}
                    onClick={() =>
                      handleTimeClick(format(date, "yyyy-MM-dd"), time)
                    }
                    disabled={isDisabled}
                    className={`text-sm w-full py-2 px-2 md:px-4 mt-1 rounded-full transition-all duration-200 ${
                      isDisabled
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : selectedTime[format(date, "yyyy-MM-dd")] === time
                        ? "bg-aztecGreen text-white"
                        : "bg-gray-100 text-black hover:bg-aztecGreen hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 mt-4">
        <span className="text-red-600 font-bold">*</span> Reservation times are
        approximate and may vary within 60 minutes.
      </div>
    </div>
  );
};

export default StepFour;
