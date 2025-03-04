import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { BookingProvider } from "@/hooks/useBooking";

export const metadata: Metadata = {
  title: "O Detail",
  description: "Trusted Car Detailing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BookingProvider>
        <body className={`antialiased`}>
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </BookingProvider>
    </html>
  );
}
