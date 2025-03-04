"use client";

import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import useScroll from "@/hooks/useScroll";

const NavBar = () => {
  const isScrolled = useScroll(5);

  return (
    <div
      className={`w-full flex flex-row items-center py-2 px-6 lg:px-20 justify-between transition-all duration-300 ${
        isScrolled ? "fixed bg-black/75" : "absolute bg-[#1d2124]"
      } top-0 left-0 right-0 z-50`}
    >
      <div className="flex items-center">
        <Logo />
      </div>
      <NavItems />
    </div>
  );
};

export default NavBar;
