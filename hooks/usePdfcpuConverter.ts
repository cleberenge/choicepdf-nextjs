
import { splitPdf } from "@/utils/pdfSplitter";
import { mergePdf } from "@/utils/pdfMerger";
import { compressPdf } from "@/utils/pdfCompressor";
import { downloadBlob } from "@/utils/fileDownloader";

export function usePdfcpuConverter() {
  const convert = async (
    files: File[],
    conversionType: string,
    setProgress: (p: number) => void
  ) => {
    setProgress(25);

    let result: Blob | Blob[] | null = null;

    if (conversionType === "split-pdf") {
      result = await splitPdf(files[0]);
      (result as Blob[]).forEach((blob, i) => {
        downloadBlob(blob, `page-${i + 1}.pdf`);
      });
    } else if (conversionType === "merge-pdf") {
      result = await mergePdf(files);
      downloadBlob(result, "merged.pdf");
    } else if (conversionType === "compress-pdf") {
      result = await compressPdf(files[0]);
      downloadBlob(result, "compressed.pdf");
    }

    setProgress(100);
  };

  return { convert };
}


