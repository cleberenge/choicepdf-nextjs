export default function usePdfcpuConverter() {
  const convert = async (files: File[], conversionType?: string, setProgress?: (n:number)=>void) => {
    // placeholder - server-side or wasm-based implementation needed
    if (setProgress) setProgress(100);
    return files[0];
  };
  return { convert };
}
