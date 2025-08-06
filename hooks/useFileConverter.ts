
// hooks/useFileConverter.ts
import { useState } from "react";
import useFileUpload from "./useFileUpload";
import useFFmpegConverter from "./useFFmpegConverter";
import usePdfcpuConverter from "./usePdfcpuConverter";
import useILoveApiConverter from "./useILoveApiConverter";
import useServerSideConverter from "./useServerSideConverter";
import useClientSideConverter from "./useClientSideConverter";

export default function useFileConverter(conversionType: string) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const { uploadFiles } = useFileUpload();
  const ffmpeg = useFFmpegConverter();
  const pdfcpu = usePdfcpuConverter();
  const iloveapi = useILoveApiConverter();
  const serverSide = useServerSideConverter();
  const clientSide = useClientSideConverter();

  const convert = async (files: File[]) => {
    try {
      setIsConverting(true);
      setError(null);
      setProgress(10);

      // Decide o fluxo com base no tipo de conversão
      if (conversionType.includes("mp4") || conversionType.includes("mp3")) {
        await ffmpeg.convert(files, setProgress);
      } else if (conversionType.includes("pdf")) {
        await pdfcpu.convert(files, conversionType, setProgress);
      } else if (conversionType.includes("ilove")) {
        await iloveapi.convert(files, conversionType, setProgress);
      } else if (conversionType.includes("server")) {
        await serverSide.convert(files, conversionType, setProgress);
      } else {
        await clientSide.convert(files, conversionType, setProgress);
      }

      setProgress(100);
    } catch (err: any) {
      setError("Falha na conversão: " + err.message);
    } finally {
      setIsConverting(false);
    }
  };

  return { convert, progress, error, isConverting };
}

