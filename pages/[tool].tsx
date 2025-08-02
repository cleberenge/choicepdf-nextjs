
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/data/conversionTextMap";
import ConversionTool from "@/components/conversion/ConversionTool";

export default function ToolPage() {
  const router = useRouter();
  const { tool } = router.query;

  if (!tool || typeof tool !== "string") return null;

  // Lista fixa das 12 ferramentas válidas
  const validTools = [
    "png-jpg",
    "jpg-pdf",
    "split-pdf",
    "merge-pdf",
    "reduce-pdf",
    "reduce-jpg",
    "reduce-png",
    "svg-png",
    "jpg-webp",
    "svg-jpg",
    "html-pdf",
    "csv-json",
  ];

  // Bloqueia acesso a ferramentas inexistentes
  if (!validTools.includes(tool)) {
    return (
      <div className="min-h-screen flex flex-col bg-blue-50">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold">Ferramenta não encontrada</h1>
          <p className="text-gray-600 mt-2">
            A ferramenta solicitada não existe ou está em manutenção.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const toolData = tools[tool];

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{toolData.title}</h1>
        <p className="text-lg mb-6 text-gray-700">{toolData.description}</p>

        {/* Área principal de conversão */}
        <ConversionTool conversionType={toolData.id} />

        {/* Instruções */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Como funciona?</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {toolData.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        {toolData.faq.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">Perguntas frequentes</h2>
            <div className="space-y-4">
              {toolData.faq.map((item, i) => (
                <div key={i}>
                  <p className="font-medium">{item.q}</p>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

