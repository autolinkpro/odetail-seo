"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface BookingData {
  carType: string;
  year: string;
  make: string;
  model: string;
  selectedDate: string;
  selectedTime: string;
  package: {
    name: string;
    addons: {
      name: string;
      addonDur?: string;
    }[];
    duration: string;
  } | null;
  tint: {
    name: string;
    percent: string;
    tintDur: string;
  }[];
}

interface BookingContextType {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
}

interface BookingProviderProps {
  children: ReactNode;
}

const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    carType: "",
    year: "",
    make: "",
    model: "",
    selectedDate: "",
    selectedTime: "",
    package: null,
    tint: [],
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
