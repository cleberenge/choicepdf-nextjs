
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Formulário de Contato</h1>
        <p>Tem dúvidas, sugestões ou encontrou algum problema?</p>
        <p>Entre em contato conosco:</p>
        <p>
          <strong>E-mail:</strong> cleber.conteudo@gmail.com
        </p>
        <p>
          Ou preencha nosso formulário de contato na página Contato.
          Respondemos o mais rápido possível!
        </p>
      </main>
      <Footer />
    </div>
  );
}

