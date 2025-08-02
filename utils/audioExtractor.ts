
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export async function extractAudio(file: File): Promise<Blob> {
  const ffmpeg = createFFmpeg({ log: true });
  if (!ffmpeg.isLoaded()) await ffmpeg.load();

  ffmpeg.FS("writeFile", file.name, await fetchFile(file));
  await ffmpeg.run("-i", file.name, "output.mp3");
  const data = ffmpeg.FS("readFile", "output.mp3");

  return new Blob([data.buffer], { type: "audio/mp3" });
}

