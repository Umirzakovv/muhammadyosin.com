"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto px-2 pt-8 pb-2 mt-[96px] mb-10 bg-white rounded-xl shadow-md">{children}</div>
  );
};

export default ContentContainer;
