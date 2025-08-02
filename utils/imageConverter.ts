
export async function convertImage(file: File, outputFormat: "jpg" | "png" | "webp"): Promise<Blob> {
  const img = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.drawImage(img, 0, 0);
  }

  const mimeType = outputFormat === "jpg" ? "image/jpeg" :
                   outputFormat === "png" ? "image/png" : "image/webp";

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
    }, mimeType, 0.9);
  });
}

