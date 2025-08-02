
export function useConversionColors(conversionType: string) {
  if (conversionType.includes("pdf")) return "bg-red-500";
  if (conversionType.includes("jpg") || conversionType.includes("png")) return "bg-yellow-500";
  if (conversionType.includes("heic")) return "bg-green-500";
  if (conversionType.includes("mp4") || conversionType.includes("mp3")) return "bg-purple-500";
  return "bg-blue-500";
}

