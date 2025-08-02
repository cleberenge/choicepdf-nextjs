
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Política de Privacidade</h1>
        <p>Sua privacidade é uma prioridade para nós.</p>
        <p>Os arquivos que você converte permanecem no seu dispositivo e não são salvos por nós.</p>
        <p>Não vendemos, trocamos ou compartilhamos informações pessoais com terceiros.</p>
        <p>
          Podemos utilizar cookies e ferramentas de análise para entender melhor como
          os visitantes usam o site e melhorar continuamente nossos serviços.
        </p>
        <p>
          Cumprimos as regulamentações de proteção de dados, incluindo GDPR (Europa) e LGPD (Brasil).
        </p>
        <p>
          Se tiver qualquer dúvida sobre nossa política ou quiser solicitar informações,
          entre em contato conosco.
        </p>
      </main>
      <Footer />
    </div>
  );
}

