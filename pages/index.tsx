import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">ChoicePDF — Conversões</h1>
        <p className="mb-6">Teste as ferramentas de conversão. Exemplos:</p>
        <div className="flex gap-3 justify-center">
          <Link href="/png-jpg" className="px-4 py-2 bg-blue-600 text-white rounded">png-jpg</Link>
          <Link href="/pdf-word" className="px-4 py-2 bg-gray-700 text-white rounded">pdf-word</Link>
          <Link href="/mp4-mp3" className="px-4 py-2 bg-green-600 text-white rounded">mp4-mp3</Link>
        </div>
      </div>
    </main>
  );
}
