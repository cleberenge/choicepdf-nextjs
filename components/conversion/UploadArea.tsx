
import { useCallback } from "react";

interface UploadAreaProps {
  onUpload: (files: File[]) => void;
}

export default function UploadArea({ onUpload }: UploadAreaProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(Array.from(e.target.files));
    }
  }, [onUpload]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onUpload(Array.from(e.dataTransfer.files));
    }
  }, [onUpload]);

  return (
    <div
      className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <label className="cursor-pointer">
        <p className="mb-2">Clique para selecionar até 25 arquivos</p>
        <p className="text-sm text-gray-500">ou arraste e solte aqui</p>
        <input type="file" multiple className="hidden" onChange={handleChange} />
      </label>
    </div>
  );
}

