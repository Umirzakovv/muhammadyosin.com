"use client";
import { ReactNode, useState } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute whitespace-nowrap bg-[#373737] px-2 text-white text-sm rounded-xl transition-opacity duration-200 
            ${
              position === "top"
                ? "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
                : ""
            }
            ${
              position === "bottom"
                ? "top-full left-1/2 transform -translate-x-1/2 mt-2"
                : ""
            }
            ${
              position === "left"
                ? "right-full top-1/2 transform -translate-y-1/2 mr-2"
                : ""
            }
            ${
              position === "right"
                ? "left-full top-1/2 transform -translate-y-1/2 ml-2"
                : ""
            }
          `}
        >
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

// Usage example
// <Tooltip text="Hello, Tooltip!" position="top">
//   <button className="p-2 bg-blue-500 text-white rounded">Hover me</button>
// </Tooltip>
