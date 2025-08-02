
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export function useFFmpegConverter() {
  const convert = async (files: File[], setProgress: (p: number) => void) => {
    const ffmpeg = createFFmpeg({ log: true });
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    setProgress(20);
    const file = files[0]; // suporte inicial a 1 arquivo

    ffmpeg.FS("writeFile", file.name, await fetchFile(file));
    await ffmpeg.run("-i", file.name, "output.mp3");

    const data = ffmpeg.FS("readFile", "output.mp3");
    const blob = new Blob([data.buffer], { type: "audio/mp3" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "output.mp3";
    link.click();

    setProgress(100);
  };

  return { convert };
}

