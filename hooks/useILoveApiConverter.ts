
export function useILoveApiConverter() {
  const convert = async (files: File[], conversionType: string, setProgress: (p: number) => void) => {
    setProgress(30);
    // Aqui você poderia usar a API externa do iLovePDF se tiver credenciais
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setProgress(100);
  };

  return { convert };
}

