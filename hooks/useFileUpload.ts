
export function useFileUpload() {
  const uploadFiles = async (files: File[]) => {
    // Placeholder de upload (ajuste conforme sua lógica de backend, se houver)
    return files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
  };

  return { uploadFiles };
}

