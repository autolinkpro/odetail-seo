import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-[#1d2124] flex flex-col items-center justify-center w-full pt-10 md:pt-16">
      <div className="flex flex-wrap justify-center w-full h-full max-w-screen-2xl">
        {/* Hours & Location */}
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 px-10 md:px-3 mt-7 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Hours & Location
          </h3>
          <div
            className="grid gap-2 mt-2"
            style={{ gridTemplateColumns: "auto auto" }}
          >
            <span className="text-white text-sm font-normal">Mon-Fri</span>
            <span className="text-white text-sm font-normal">
              08:30 a.m. – 05:00 p.m.
            </span>
            <span className="text-white text-sm font-normal">Sat</span>
            <span className="text-white text-sm font-normal">
              09:00 a.m. – 04:00 p.m.
            </span>
            <span className="text-white text-sm font-normal">Sun</span>
            <span className="text-gray-400 text-sm font-bold">Closed</span>
          </div>
          <div className="flex flex-col items-center mt-5">
            <p className="text-gray-500 text-sm font-normal mb-0">
              203 - 2914 Kingsview Boulevard SE
            </p>
            <p className="text-gray-500 text-sm font-normal mb-0">
              Airdrie, Alberta T4A 0E1, Canada
            </p>
          </div>
        </div>

        {/* Our Links */}
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 px-10 md:px-3 mt-7 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Our Links
          </h3>
          <ul className="flex flex-col list-none">
            <li className="mb-1 md:mb-3">
              <Link
                href="/"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Home
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/"
                className="text-sm text-white hover:text-aztecBlue"
              >
                About Us
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/quote"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Get Quote
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 px-10 md:px-3 mt-7 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Other Links
          </h3>
          <ul className="flex flex-col list-none">
            <li className="mb-1 md:mb-3">
              <Link
                href="/"
                className="text-sm text-white hover:text-aztecBlue"
              >
                FAQ
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/contact"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Contact Us
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Support
              </Link>
            </li>
            <li className="mb-1 md:mb-3">
              <Link
                href="/privacy-policy"
                className="text-sm text-white hover:text-aztecBlue"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 px-10 md:px-3 mt-7 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Socials
          </h3>
          <div className="flex items-center mb-3">
            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-aztecBlue flex items-center justify-center text-white text-xs md:text-base mr-2">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <h6 className="text-sm text-white hover:text-aztecBlue">
              <a href="tel:587-366-2254">+1 587-366-2254</a>
            </h6>
          </div>
          <div className="flex items-center mb-3">
            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-aztecBlue flex items-center justify-center text-white text-xs md:text-base mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h6 className="text-sm text-white hover:text-aztecBlue">
              <a href="mailto:quotes@odetail.ca">quotes@odetail.ca</a>
            </h6>
          </div>
          <div className="flex items-center mb-3">
            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-aztecBlue flex items-center justify-center text-white text-xs md:text-base mr-2">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <h6 className="text-sm text-white hover:text-aztecBlue">
              <a href="https://www.instagram.com/odetailairdrie">
                @odetailairdrie
              </a>
            </h6>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-aztecBlue flex items-center justify-center text-white text-xs md:text-base mr-2">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <h6 className="text-sm text-white hover:text-aztecBlue">
              <a href="https://www.facebook.com/ODetailAirdrie/">O Detail</a>
            </h6>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-start max-w-screen-2xl mt-7 md:mt-1">
        <small className="text-gray-400 text-[10px] pt-5">
          Copyright &copy; 2024 O Detail - All Rights Reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
