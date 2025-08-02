
import React from "react";

interface ConversionIconProps {
  conversionType: string;
  className?: string;
}

const ConversionIcon: React.FC<ConversionIconProps> = ({ conversionType, className = "" }) => {
  let bgColor = "#9E9E9E";
  let icon = null;

  switch (conversionType) {
    case "png-jpg":
      bgColor = "#47E5BC";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 
                   0-2 .9-2 2v14c0 1.1.9 2 2 
                   2h14c1.1 0 2-.9 2-2zM8.5 
                   13.5l2.5 3.01L14.5 12l4.5 
                   6H5l3.5-4.5z"/>
        </svg>
      );
      break;

    case "jpg-pdf":
      bgColor = "#FDEE00";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2c-1.1 0-2 .9-2 
                   2v16c0 1.1.89 2 2 
                   2h12c1.11 0 2-.9 
                   2-2V8l-6-6H6z"/>
        </svg>
      );
      break;

    case "pdf-word":
      bgColor = "#6366F1";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <text x="7" y="17" fontSize="10" fontWeight="bold">W</text>
        </svg>
      );
      break;

    case "word-pdf":
      bgColor = "#DC2626";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <text x="6" y="17" fontSize="10" fontWeight="bold">PDF</text>
        </svg>
      );
      break;

    case "compress-video":
      bgColor = "#8B5CF6";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      );
      break;

    case "split-pdf":
      bgColor = "#73D2DE";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3h14v18H5z M12 3v18"/>
        </svg>
      );
      break;

    case "merge-pdf":
      bgColor = "#FFAAA5";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 3h10v2H7V3zm0 
                   16h10v2H7v-2zm0-8h10v2H7v-2z"/>
        </svg>
      );
      break;

    case "reduce-pdf":
      bgColor = "#CE8D66";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 
                   20h14v-2H5v2z"/>
        </svg>
      );
      break;

    case "reduce-jpg":
      bgColor = "#FFFFFF";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 
                   2v14c0 1.1.9 2 2 2h14c1.1 
                   0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
      );
      break;

    case "reduce-png":
      bgColor = "#FF7E6B";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8"/>
        </svg>
      );
      break;

    case "svg-png":
      bgColor = "#DCEDC1";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="12" height="12"/>
        </svg>
      );
      break;

    case "jpg-webp":
      bgColor = "#706F6F";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 5v9l-3-3-4 4-4-4-4 4V5h15z"/>
        </svg>
      );
      break;

    case "svg-jpg":
      bgColor = "#8A89C0";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
      break;

    case "html-pdf":
      bgColor = "#998785";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 
                   2v14h2V3h12V1zm3 4H8c-1.1 
                   0-2 .9-2 2v14c0 1.1.9 2 2 
                   2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/>
        </svg>
      );
      break;

    case "csv-json":
      bgColor = "#F2C80F";
      icon = (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="12" height="12"/>
        </svg>
      );
      break;

    case "csv-excel":
      bgColor = "#059669";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <text x="6" y="17" fontSize="10" fontWeight="bold">X</text>
        </svg>
      );
      break;

    default:
      bgColor = "#9E9E9E";
      icon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-md w-10 h-10 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {icon}
    </div>
  );
};

export default ConversionIcon;

