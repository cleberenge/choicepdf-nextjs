
interface FileListProps {
  files: File[];
}

export default function FileList({ files }: FileListProps) {
  if (!files || files.length === 0) return null;

  return (
    <ul className="mt-4 text-left bg-gray-50 p-4 rounded-lg">
      {files.map((file, i) => (
        <li key={i} className="text-gray-700">
          {file.name}
        </li>
      ))}
    </ul>
  );
}

