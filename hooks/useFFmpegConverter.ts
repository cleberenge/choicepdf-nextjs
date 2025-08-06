
// hooks/useFFmpegConverter.ts
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export default function useFFmpegConverter() {
  const ffmpeg = createFFmpeg({ log: true });

  const convert = async (files: File[], setProgress: (p: number) => void) => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    for (const file of files) {
      ffmpeg.FS("writeFile", file.name, await fetchFile(file));

      // Exemplo: converter para MP3
      const outputName = "output.mp3";
      await ffmpeg.run("-i", file.name, outputName);

      const data = ffmpeg.FS("readFile", outputName);

      // Criar blob para download
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "audio/mpeg" })
      );

      console.log("Arquivo convertido:", url);
      setProgress(100);
    }
  };

  return { convert };
}

