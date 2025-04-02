import Link from "next/link";
import React from "react";

export const ContentHeader = () => {
  return (
    <div>
      <div>
        <span></span>
        <h2>Frontend engineer</h2>
      </div>
      <Link href="/contact">
        <span></span>
        available for work
      </Link>
    </div>
  );
};
