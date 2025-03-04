"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface BookingData {
  carType: string;
  year: string;
  make: string;
  model: string;
  selectedDate: string;
  selectedTime: string;
  service: { name: string; duration: string }[];
}

interface BookingContextType {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

interface BookingProviderProps {
  children: ReactNode;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookingData, setBookingData] = useState({
    carType: "",
    year: "",
    make: "",
    model: "",
    selectedDate: "",
    selectedTime: "",
    service: [
      {
        name: "",
        duration: "",
      },
    ],
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
