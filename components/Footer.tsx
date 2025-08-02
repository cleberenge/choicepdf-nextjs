
export default function Footer() {
  return (
    <footer className="bg-blue-50 mt-12">
      {/* Seção institucional */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Sobre o ChoicePDF</h3>
          <p className="text-gray-600">
            Conheça nossa missão e valores fundamentais. Descubra como trabalhamos
            para oferecer soluções. Saiba mais sobre nossa equipe e compromisso.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Formulário de Contato</h3>
          <p className="text-gray-600">
            Entre em contato para tirar dúvidas ou suporte. Nossa equipe está sempre
            pronta para ajudar. Envie sugestões para melhorarmos nossos serviços.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Política de Privacidade</h3>
          <p className="text-gray-600">
            Saiba como protegemos seus dados pessoais. Entenda nossas práticas de
            segurança. Seus dados estão seguros conosco.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Termos de Uso</h3>
          <p className="text-gray-600">
            Leia os termos e condições de uso. Entenda seus direitos e
            responsabilidades. Mantenha-se informado sobre nossas políticas.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Transparência</h3>
          <p className="text-gray-600">
            Nosso compromisso com a transparência. Conheça nossas práticas éticas.
            Mantemos comunicação clara e honesta.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Política de Cookies</h3>
          <p className="text-gray-600">
            Saiba como gerenciar suas preferências. Garantimos uso responsável de
            cookies.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm py-4 border-t border-gray-200">
        © 2025 ChoicePDF. Todos os direitos reservados.
      </div>
    </footer>
  );
}

