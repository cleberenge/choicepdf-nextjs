'use client';
import useFFmpegConverter from './useFFmpegConverter';
import usePdfcpuConverter from './usePdfcpuConverter';
import useILoveApiConverter from './useILoveApiConverter';
import useServerSideConverter from './useServerSideConverter';
import useClientSideConverter from './useClientSideConverter';
import { useState } from 'react';

export default function useFileConverter(conversionType: string) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

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

      if (conversionType.includes('mp4') || conversionType.includes('mp3')) {
        const blob = await ffmpeg.convert(files, setProgress);
        return blob;
      } else if (conversionType.includes('pdf')) {
        return await pdfcpu.convert(files, conversionType, setProgress);
      } else if (conversionType.includes('ilove')) {
        return await iloveapi.convert(files, conversionType, setProgress);
      } else if (conversionType.includes('server')) {
        return await serverSide.convert(files, conversionType, setProgress);
      } else {
        return await clientSide.convert(files, conversionType, setProgress);
      }
    } catch (err: any) {
      setError(err?.message || String(err));
      throw err;
    } finally {
      setIsConverting(false);
    }
  };

  return { convert, progress, error, isConverting };
}
