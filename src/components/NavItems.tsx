"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { menuStyles } from "@/utils/menuStyles";

const NavItems: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle Click Outside to Close Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Handle Click Outside to Close Mobile Menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Close the mobile menu when an item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden" ref={menuRef}>
        <Menu
          right
          styles={menuStyles}
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        >
          <ul className="flex flex-col list-none space-y-3 text-xl text-white">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Free Quote
              </Link>
            </li>
            <li>
              <Link
                href="/ppf"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                PPF
              </Link>
            </li>
            <li>
              <Link
                href="/polishing"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Polishing
              </Link>
            </li>
            <li>
              <Link
                href="/tint"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Tinting Service
              </Link>
            </li>
            <li>
              <Link
                href="/windshield-replacement"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Windshield Replacement
              </Link>
            </li>
            <li>
              <Link
                href="/chip-repair"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Chip Repair
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Menu>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-5 list-none text-white text-lg font-semibold">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/quote" className="hover:text-gray-300">
            Free Quote
          </Link>
        </li>
        <li>
          <Link href="/tint" className="hover:text-gray-300">
            Tinting Service
          </Link>
        </li>
        <li>
          <Link href="/windshield-replacement" className="hover:text-gray-300">
            Windshield Replacement
          </Link>
        </li>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <span>More</span>
            <FontAwesomeIcon icon={faChevronDown} className="w-4" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <ul
              className="absolute top-full right-0 mt-2 w-40 bg-[#1d2124] text-white rounded-md shadow-lg p-2 border-b-2 border-aztecBlue"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <li className="p-2 hover:text-gray-300">
                <Link href="/ppf">PPF</Link>
              </li>
              <li className="p-2 hover:text-gray-300">
                <Link href="/polishing">Polishing</Link>
              </li>
              <li className="p-2 hover:text-gray-300">
                <Link href="/chip-repair">Chip Repair</Link>
              </li>
              <li className="p-2 hover:text-gray-300">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="p-2 hover:text-gray-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </ul>
    </>
  );
};

export default NavItems;
