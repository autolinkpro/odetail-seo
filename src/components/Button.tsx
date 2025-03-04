"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  theme: "outlined" | "filled";
  text: string;
  phone?: string;
}

const Button: React.FC<ButtonProps> = ({ theme, text, phone }) => {
  const router = useRouter();

  const baseClasses =
    "inline-block pl-5 pr-5 pt-3 pb-3 uppercase rounded-lg text-sm md:text-lg font-bold tracking-wide border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1 transform hover:scale-95";

  const outlinedClasses = `${baseClasses} bg-aztecBlue text-white border-transparent`;
  const filledClasses = `${baseClasses} text-aztecBlue bg-transparent border-aztecBlue`;

  if (theme === "filled" && phone) {
    return (
      <a href={`tel:${phone}`} className="no-underline">
        <button className={filledClasses}>{text}</button>
      </a>
    );
  }

  if (theme === "filled") {
    return <button className={filledClasses}>{text}</button>;
  }

  return (
    <button className={outlinedClasses} onClick={() => router.push("/quote")}>
      {text}
    </button>
  );
};

export default Button;
