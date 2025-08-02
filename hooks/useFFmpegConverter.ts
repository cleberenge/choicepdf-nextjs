
// hooks/useFFmpegConverter.ts
import { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export function useFFmpegConverter() {
  const [ffmpeg] = useState(() =>
    createFFmpeg({ log: true }) // habilita logs para depuração
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const load = async () => {
    if (!isLoaded) {
      await ffmpeg.load();
      setIsLoaded(true);
    }
  };

  const convert = async (
    files: File[],
    setProgress: (value: number) => void
  ) => {
    await load();

    const file = files[0]; // suporta apenas 1 arquivo por vez
    const inputName = file.name;
    const outputName = "output.mp4"; // ajuste conforme o formato desejado

    // escreve o arquivo na FS do ffmpeg
    ffmpeg.FS("writeFile", inputName, await fetchFile(file));

    // roda a conversão — exemplo: qualquer formato para mp4
    await ffmpeg.run("-i", inputName, outputName);

    // lê o arquivo convertido
    const data = ffmpeg.FS("readFile", outputName);

    // atualiza progresso
    setProgress(100);

    // retorna o Blob convertido
    return new Blob([data.buffer], { type: "video/mp4" });
  };

  return { convert };
}

