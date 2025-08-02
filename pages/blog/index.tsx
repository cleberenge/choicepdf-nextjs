
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export default function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog ChoicePDF</h1>
        <p className="text-gray-600 mb-8">
          Dicas, tutoriais e informações úteis para aproveitar ao máximo nossas ferramentas online.
        </p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-medium">
                Leia mais →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

