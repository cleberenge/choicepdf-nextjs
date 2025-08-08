export default function useILoveApiConverter() {
  const convert = async (files: File[], conversionType?: string, setProgress?: (n:number)=>void) => {
    // placeholder for external API call
    if (setProgress) setProgress(100);
    return files[0];
  };
  return { convert };
}
