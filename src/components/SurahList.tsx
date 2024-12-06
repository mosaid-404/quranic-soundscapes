import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface Surah {
  number: number;
  name: string;
  audioUrl: string;
}

interface SurahListProps {
  onSelect: (surah: Surah) => void;
}

const surahs: Surah[] = [
  { number: 1, name: "الفاتحة", audioUrl: "https://server8.mp3quran.net/minsh/001.mp3" },
  { number: 2, name: "البقرة", audioUrl: "https://server8.mp3quran.net/minsh/002.mp3" },
  { number: 3, name: "آل عمران", audioUrl: "https://server8.mp3quran.net/minsh/003.mp3" },
  // يمكن إضافة باقي السور هنا
];

const SurahList: React.FC<SurahListProps> = ({ onSelect }) => {
  return (
    <ScrollArea className="h-[70vh] w-full rounded-md border border-quran-gold/20 p-4">
      <div className="space-y-2">
        {surahs.map((surah) => (
          <button
            key={surah.number}
            onClick={() => onSelect(surah)}
            className="surah-item w-full text-right p-4 rounded-lg flex items-center justify-between"
          >
            <span className="text-quran-gold">{surah.number}</span>
            <span className="text-xl">{surah.name}</span>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default SurahList;