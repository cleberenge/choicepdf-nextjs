export default function useServerSideConverter() {
  const convert = async (files: File[], conversionType?: string, setProgress?: (n:number)=>void) => {
    // placeholder for calling your server-side API
    if (setProgress) setProgress(100);
    return files[0];
  };
  return { convert };
}
