
interface ConversionOptionsProps {
  conversionType: string;
}

export default function ConversionOptions({ conversionType }: ConversionOptionsProps) {
  return (
    <div className="mt-4 text-sm text-gray-600">
      <p>Opções de configuração para: <strong>{conversionType}</strong></p>
      {/* Aqui entram selects/checkboxes específicos se necessário */}
    </div>
  );
}

