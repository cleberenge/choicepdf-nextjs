'use client';
import React, { useState } from 'react';
import ConversionIcon from './ConversionIcon';
import useFileUpload from '@/hooks/useFileUpload';
import useFileConverter from '@/hooks/useFileConverter';

type Props = { type: string };

export default function ConversionTool({ type }: Props) {
  const { file, handleFileChange } = useFileUpload();
  const { convert, progress, error, isConverting } = useFileConverter(type);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);

  const handleConvert = async () => {
    if (!file) return;
    const result = await convert([file]);
    if (result instanceof Blob) {
      setOutputUrl(URL.createObjectURL(result));
    }
  };

  return (
    <div className="w-full max-w-xl bg-white p-6 rounded shadow">
      <div className="flex items-center gap-4 mb-4">
        <ConversionIcon type={type} />
        <h2 className="text-xl font-semibold">Conversor: {type}</h2>
      </div>

      <input type="file" onChange={handleFileChange} className="mb-4" />
      <div className="flex gap-2">
        <button
          onClick={handleConvert}
          disabled={isConverting || !file}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isConverting ? 'Convertendo...' : 'Converter'}
        </button>
        {outputUrl && (
          <a href={outputUrl} download className="px-4 py-2 bg-gray-800 text-white rounded">
            Baixar resultado
          </a>
        )}
      </div>

      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded h-3 mt-4">
          <div style={{ width: `${progress}%` }} className="h-3 bg-green-500 transition-all" />
        </div>
      )}

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
