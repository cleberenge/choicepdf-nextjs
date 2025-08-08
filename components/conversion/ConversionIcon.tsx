import React from 'react';
import { FileIcon, FileTextIcon, MusicIcon, VideoIcon } from 'lucide-react';

type Props = { type: string; className?: string };

export default function ConversionIcon({ type, className }: Props) {
  const t = (type || '').toLowerCase();
  if (t.includes('pdf')) return <FileTextIcon className={className || 'w-6 h-6 text-red-500'} />;
  if (t.includes('mp3') || t.includes('audio')) return <MusicIcon className={className || 'w-6 h-6 text-yellow-500'} />;
  if (t.includes('mp4') || t.includes('video')) return <VideoIcon className={className || 'w-6 h-6 text-green-500'} />;
  return <FileIcon className={className || 'w-6 h-6 text-blue-500'} />;
}
