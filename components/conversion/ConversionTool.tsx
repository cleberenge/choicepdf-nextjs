
"use client";

import React, { useState } from "react";
import useFileUpload from "@/hooks/useFileUpload";
import useFileConverter from "@/hooks/useFileConverter";
import ConversionIcon from "../ConversionIcon";

type ConversionToolProps = {
  tool: string;
};

export default function ConversionTool({ tool }: ConversionToolProps) {
  const { uploadFiles } = useFileUpload();
  const { convert, progress, error, isConverting } = useFileConverter(tool);

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    await convert(files);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md bg-white">
      <ConversionIcon type={tool} />

      <h2 className="text-lg font-semibold">Conversor {tool}</h2>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="p-2 border rounded w-full"
      />

      <button
        onClick={handleConvert}
        disabled={isConverting || files.length === 0}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isConverting ? "Convertendo..." : "Converter"}
      </button>

      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded h-3 overflow-hidden">
          <div
            className="bg-green-500 h-3 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

