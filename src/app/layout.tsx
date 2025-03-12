import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { BookingProvider } from "@/hooks/useBooking";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServiceProvider } from "@/hooks/useService";

export const metadata: Metadata = {
  title: "O Detail-Trusted Car Detailing Service",
  description: "Trusted Car Detailing Service",
};

const proximaNova = localFont({
  variable: "--font-proxima",
  src: [
    {
      path: "../../public/fonts/proximanova_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/proximanova_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/proximanova_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/proximanova_extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/proximanova_black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} font-proxima antialiased`}>
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
