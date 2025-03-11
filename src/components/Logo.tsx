"use client";

import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const isMobile = useIsMobile();
  const height = isMobile ? 95 : 120;
  const width = isMobile ? 95 : 120;

  return (
    <Link href="/" className="flex items-center">
      <div className="ml-2">
        <Image
          src="/static/logo_light.png"
          alt="O Detail Logo"
          height={height}
          width={width}
        />
      </div>
    </Link>
  );
};

export default Logo;
