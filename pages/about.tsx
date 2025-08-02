
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Sobre o ChoicePDF</h1>
        <p>
          O ChoicePDF foi criado para tornar sua vida digital mais simples e produtiva.
          Oferecemos ferramentas rápidas, seguras e gratuitas para conversão e manipulação
          de arquivos, diretamente no navegador e sem necessidade de cadastro.
        </p>
        <p>
          Nosso objetivo é que qualquer pessoa, independentemente do nível técnico,
          consiga realizar conversões profissionais em poucos segundos, com total privacidade
          e segurança. Sempre que possível, os arquivos são processados localmente no seu
          dispositivo, garantindo que seus dados permaneçam protegidos.
        </p>
        <p>
          Desenvolvemos nossas soluções utilizando tecnologias modernas, como WebAssembly
          e compressão no lado do cliente, para entregar alto desempenho e uma experiência intuitiva.
        </p>
        <p>
          Estamos em constante evolução, adicionando novas funcionalidades com base no feedback
          dos usuários. Se tiver sugestões ou dúvidas, fale conosco através da página de contato.
          É um prazer ajudar você a trabalhar melhor com seus documentos!
        </p>
      </main>
      <Footer />
    </div>
  );
}

