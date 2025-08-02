
interface ProgressSectionProps {
  progress: number;
}

export default function ProgressSection({ progress }: ProgressSectionProps) {
  return (
    <div className="mt-4">
      <p className="mb-1">Progresso: {progress}%</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

