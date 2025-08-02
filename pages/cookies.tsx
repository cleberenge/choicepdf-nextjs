
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Política de Cookies</h1>
        <p>O ChoicePDF usa cookies para oferecer uma experiência melhor aos visitantes.</p>
        <p>Cookies técnicos são necessários para que o site funcione corretamente.</p>
        <p>Cookies de análise ajudam a entender o comportamento dos usuários e aprimorar nossas ferramentas.</p>
        <p>
          Podemos utilizar cookies de terceiros, como os do Google AdSense, para veicular anúncios relevantes.
        </p>
        <p>
          Você pode gerenciar ou desativar os cookies nas configurações do seu navegador.
          Lembre-se de que isso pode afetar a funcionalidade do site.
        </p>
      </main>
      <Footer />
    </div>
  );
}

