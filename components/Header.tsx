import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">ChoicePDF</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Início</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500">Contato</Link>
        </div>
      </nav>
    </header>
  );
}