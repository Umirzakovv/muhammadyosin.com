"use client"

import React from "react";
import Header from "../widgets/header";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[560px] mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Container;
