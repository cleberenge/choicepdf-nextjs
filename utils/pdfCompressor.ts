
// Placeholder simples: compressão real exige libs como ghostscript ou pdfcpu no servidor.
export async function compressPdf(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  // Aqui você poderia aplicar compressão real via wasm/pdfcpu
  return new Blob([arrayBuffer], { type: "application/pdf" });
}

