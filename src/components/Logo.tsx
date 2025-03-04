"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="ml-2">
        <Image
          src="/static/logo_light.png"
          alt="O Detail Logo"
          height={120}
          width={120}
        />
      </div>
    </Link>
  );
};

export default Logo;
