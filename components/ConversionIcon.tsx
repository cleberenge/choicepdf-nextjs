
// components/ConversionIcon.tsx
import React from "react";

type ConversionIconProps = {
  type: string;
};

export default function ConversionIcon({ type }: ConversionIconProps) {
  let bgColor = "#ccc";
  let icon: React.ReactNode = null;

  switch (type) {
    case "png-jpg":
      bgColor = "#f59e0b"; // amarelo
      icon = <span>🖼️</span>;
      break;
    case "pdf-word":
      bgColor = "#ef4444"; // vermelho
      icon = <span>📄</span>;
      break;
    case "mp4-mp3":
      bgColor = "#3b82f6"; // azul
      icon = <span>🎵</span>;
      break;
    default:
      icon = <span>🔄</span>;
  }

  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </div>
  );
}

