"use client";

import React, { FC, ReactNode } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  children: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  type,
  children,
  prefix,
  suffix,
  className,
}) => {
  return (
    <button
      className={`${className} ${
        type === "primary"
          ? "bg-[#141414] text-white"
          : "bg-white text-[#373737] border-[#e6e6e6] secondary-btn"
      } flex items-center gap-2 border rounded-md p-2 text-xs font-medium cursor-pointer`}
    >
      {prefix}
      {children}
      {suffix}
    </button>
  );
};

export default Button;
