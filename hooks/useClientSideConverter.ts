
import { splitPdf } from "@/utils/pdfSplitter";
import { mergePdf } from "@/utils/pdfMerger";
import { compressPdf } from "@/utils/pdfCompressor";
import { convertImage } from "@/utils/imageConverter";
import { downloadBlob } from "@/utils/fileDownloader";

export function useClientSideConverter() {
  const convert = async (
    files: File[],
    conversionType: string,
    setProgress: (p: number) => void
  ) => {
    try {
      setProgress(20);

      let result: Blob | Blob[] | null = null;

      // PDF split
      if (conversionType === "split-pdf") {
        result = await splitPdf(files[0]);
        (result as Blob[]).forEach((blob, i) => {
          downloadBlob(blob, `page-${i + 1}.pdf`);
        });
      }

      // PDF merge
      else if (conversionType === "merge-pdf") {
        result = await mergePdf(files);
        downloadBlob(result as Blob, "merged.pdf");
      }

      // PDF compress
      else if (conversionType === "compress-pdf") {
        result = await compressPdf(files[0]);
        downloadBlob(result, "compressed.pdf");
      }

      // Image conversions
      else if (conversionType === "png-to-jpg") {
        result = await convertImage(files[0], "jpg");
        downloadBlob(result, "converted.jpg");
      } else if (conversionType === "jpg-to-png") {
        result = await convertImage(files[0], "png");
        downloadBlob(result, "converted.png");
      } else if (conversionType === "jpg-to-webp") {
        result = await convertImage(files[0], "webp");
        downloadBlob(result, "converted.webp");
      }

      setProgress(100);
    } catch (err) {
      console.error("Erro na conversão client-side:", err);
    }
  };

  return { convert };
}


