
// components/ConversionIcon.tsx
import React from "react";

interface ConversionIconProps {
  type: string;
}

export default function ConversionIcon({ type }: ConversionIconProps) {
  let bgColor = "#ccc";
  let icon: JSX.Element | null = null; // <-- corrigido aqui

  switch (type) {
    case "png-jpg":
      bgColor = "#47E5BC";
      icon = (
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1..." />
        </svg>
      );
      break;

    case "pdf-word":
      bgColor = "#F87171";
      icon = (
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 4h12v16H6z" />
        </svg>
      );
      break;

    // 👉 adicione os outros tipos de conversão aqui
    default:
      bgColor = "#ccc";
      icon = (
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
      break;
  }

  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded"
      style={{ backgroundColor: bgColor }}
    >
      {icon}
    </div>
  );
}

