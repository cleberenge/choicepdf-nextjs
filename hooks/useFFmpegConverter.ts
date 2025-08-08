'use client';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useRef } from 'react';

export default function useFFmpegConverter() {
  const ffmpegRef = useRef<any | null>(null);

  const ensure = async () => {
    if (!ffmpegRef.current) {
      const ff = createFFmpeg({ log: true });
      ffmpegRef.current = ff;
      await ff.load();
    }
    return ffmpegRef.current;
  };

  const convert = async (files: File[], setProgress?: (n: number) => void) => {
    const ff = await ensure();
    if (setProgress) setProgress(40);

    const file = files[0];
    const inputName = file.name;
    const outputName = 'output.mp4';

    ff.FS('writeFile', inputName, await fetchFile(file));
    await ff.run('-i', inputName, outputName);
    const data = ff.FS('readFile', outputName);
    if (setProgress) setProgress(100);
    return new Blob([data.buffer], { type: 'video/mp4' });
  };

  return { convert };
}
