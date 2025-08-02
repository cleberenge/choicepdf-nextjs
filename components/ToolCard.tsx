import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ title, icon, href }) {
  return (
    <Link href={href} className="bg-white shadow rounded-2xl p-4 hover:shadow-md transition">
      <div className="flex flex-col items-center">
        <Image src={icon} alt={title} width={50} height={50} className="mb-2" />
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
    </Link>
  );
}