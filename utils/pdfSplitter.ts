
import { PDFDocument } from "pdf-lib";

export async function splitPdf(file: File): Promise<Blob[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  const pages: Blob[] = [];
  for (let i = 0; i < pdfDoc.getPageCount(); i++) {
    const newDoc = await PDFDocument.create();
    const [copiedPage] = await newDoc.copyPages(pdfDoc, [i]);
    newDoc.addPage(copiedPage);

    const pdfBytes = await newDoc.save();
    pages.push(new Blob([pdfBytes], { type: "application/pdf" }));
  }
  return pages;
}

