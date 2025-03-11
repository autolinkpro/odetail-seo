"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface ServiceData {
  serviceType: string;
}

interface ServiceContextType {
  serviceContext: ServiceData;
  setServiceContext: React.Dispatch<React.SetStateAction<ServiceData>>;
}

interface ServiceProviderProps {
  children: ReactNode;
}

const ServiceContext = createContext<ServiceContextType | null>(null);

export const useService = (): ServiceContextType => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
};

export const ServiceProvider = ({ children }: ServiceProviderProps) => {
  const [serviceContext, setServiceContext] = useState<ServiceData>({
    serviceType: "detail",
  });

  return (
    <ServiceContext.Provider value={{ serviceContext, setServiceContext }}>
      {children}
    </ServiceContext.Provider>
  );
};
