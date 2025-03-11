import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { BookingProvider } from "@/hooks/useBooking";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServiceProvider } from "@/hooks/useService";

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
      <body className={`antialiased`}>
        <BookingProvider>
          <ServiceProvider>
            <NavBar />
            {children} <ToastContainer position="bottom-right" theme="dark" />
          </ServiceProvider>
        </BookingProvider>
        <Footer />
      </body>
    </html>
  );
}
