
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/data/conversionTextMap";
import Image from "next/image";
import Link from "next/link";
import ConversionIcon from "@/components/ConversionIcon";

export default function Home() {
  // Lista fixa na ordem do print
  const orderedTools = [
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

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 text-left">
            <h1 className="text-3xl font-bold mb-4">Converter PNG para JPG</h1>
            <p className="text-lg mb-4">
              Converta PNG para JPG gratuitamente, com segurança e diretamente no
              seu navegador.
            </p>
            <p className="text-gray-700">
              Para começar, selecione ou arraste seu arquivo. O processamento será
              automático e seu arquivo convertido estará disponível para download
              em segundos.
            </p>
            <p className="mt-4 text-gray-600">
              Sua privacidade é prioridade: a maioria das conversões ocorre
              localmente no seu navegador, sem envio para servidores.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
            <Image src="/qr-code.png" alt="QR Code" width={140} height={140} />
          </div>
        </div>

        {/* Lista de ferramentas em ordem fixa */}
        <div className="flex flex-wrap gap-3 mt-8">
          {orderedTools.map((toolId) => {
            const tool = tools[toolId];
            return (
              <Link
                key={tool.id}
                href={`/${tool.id}`}
                className="flex items-center px-3 py-2 bg-white shadow rounded-lg hover:shadow-md transition"
              >
                <ConversionIcon conversionType={tool.id} className="mr-2" />
                <span className="text-sm">{tool.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Área de upload */}
        <div className="mt-10 bg-green-400 p-8 rounded-lg text-center">
          <p className="font-medium">Clique para selecionar até 25 arquivos</p>
          <p className="text-sm text-gray-700">ou arraste e solte aqui</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

