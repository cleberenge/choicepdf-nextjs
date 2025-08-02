
import React, { useState } from "react";
import useFileUpload from "@/hooks/useFileUpload";
import useFileConverter from "@/hooks/useFileConverter";

interface ConversionToolProps {
  conversionType: string;
}

const ConversionTool: React.FC<ConversionToolProps> = ({ conversionType }) => {
  const { files, handleFileChange, removeFile } = useFileUpload();
  const { isConverting, convertFiles } = useFileConverter(conversionType);

  const [resultLinks, setResultLinks] = useState<string[]>([]);

  const handleConvert = async () => {
    if (!files.length) return;
    const results = await convertFiles(files);
    setResultLinks(results);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {/* Área de upload */}
      <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-blue-600 hover:underline"
        >
          Clique para selecionar arquivos ou arraste aqui
        </label>
      </div>

      {/* Lista de arquivos */}
      {files.length > 0 && (
        <ul className="mb-4 text-left">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Botão converter */}
      <button
        onClick={handleConvert}
        disabled={isConverting || !files.length}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
      >
        {isConverting ? "Convertendo..." : "Converter"}
      </button>

      {/* Resultados */}
      {resultLinks.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Arquivos convertidos:</h3>
          <ul>
            {resultLinks.map((url, idx) => (
              <li key={idx}>
                <a
                  href={url}
                  download
                  className="text-green-600 hover:underline"
                >
                  Download {idx + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConversionTool;

