import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const ConversionTool = dynamic(() => import('@/components/conversion/ConversionTool'), { ssr: false });

export default function ToolPage() {
  const router = useRouter();
  const { tool } = router.query;

  if (!tool || typeof tool !== 'string') {
    return <p className="text-center mt-12">Carregando...</p>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <ConversionTool type={tool} />
    </main>
  );
}
