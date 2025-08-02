
// components/conversion/ConversionTool.tsx
import React, { useState } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useFileConverter } from "@/hooks/useFileConverter";

interface ConversionToolProps {
  conversionType: string;
}

export default function ConversionTool({ conversionType }: ConversionToolProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { uploadFiles } = useFileUpload();
  const { convert, progress, error, isConverting } = useFileConverter(conversionType);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const uploaded = await uploadFiles(files);
      setSelectedFiles(files);
      console.log("Arquivos prontos para conversão:", uploaded);
    }
  };

  const handleConvert = async () => {
    if (selectedFiles.length > 0) {
      await convert(selectedFiles);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-lg font-semibold">
        Conversão: {conversionType.toUpperCase()}
      </h2>

      <input type="file" multiple onChange={handleFileChange} />

      {selectedFiles.length > 0 && (
        <p className="text-sm text-gray-600">
          {selectedFiles.length} arquivo(s) selecionado(s)
        </p>
      )}

      <button
        onClick={handleConvert}
        disabled={isConverting || selectedFiles.length === 0}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isConverting ? "Convertendo..." : "Iniciar Conversão"}
      </button>

      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded h-3 overflow-hidden">
          <div
            className="h-3 bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
}

