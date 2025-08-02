
export function useServerSideConverter() {
  const convert = async (files: File[], conversionType: string, setProgress: (p: number) => void) => {
    setProgress(25);
    // Se tiver backend, aqui faria a chamada fetch/axios para API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setProgress(100);
  };

  return { convert };
}

