export default function useClientSideConverter() {
  const convert = async (files: File[], conversionType?: string, setProgress?: (n:number)=>void) => {
    // placeholder for pure client-side conversion
    if (setProgress) setProgress(100);
    return files[0];
  };
  return { convert };
}
