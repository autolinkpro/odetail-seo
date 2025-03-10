import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { BookingProvider } from "@/hooks/useBooking";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <NavBar />
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </BookingProvider>
        <Footer />
      </body>
    </html>
  );
}
