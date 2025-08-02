
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Termos de Uso</h1>
        <p>
          Ao utilizar os serviços do ChoicePDF, você concorda com estes Termos de Uso.
          Nosso serviço é gratuito para fins pessoais e comerciais, desde que respeitados
          limites de uso justos e razoáveis, para garantir estabilidade e qualidade para todos os 
          usuários.
        </p>
        <p>
          É sua responsabilidade garantir que possui os direitos legais sobre os arquivos que envia
          e que seu uso está em conformidade com a legislação vigente.É proibido utilizar a plataforma
          para qualquer atividade ilegal, como distribuição de malware,violação de direitos autorais 
          ou disseminação de conteúdo nocivo.
        </p>              
        <p>
          Podemos alterar estes termos e os serviços a qualquer momento, com aviso prévio em caso de 
          mudanças significativas.Também podemos suspender ou desativar acessos em caso de uso indevido
          ou abusivo.
        </p>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil e, quando aplicável,
          por normas internacionais que regulam o ambiente digital.
        </p>
      </main>
      <Footer />
    </div>
  );
}

