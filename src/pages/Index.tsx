import React, { useState } from 'react';
import SurahList from '@/components/SurahList';
import AudioPlayer from '@/components/AudioPlayer';

interface Surah {
  number: number;
  name: string;
  audioUrl: string;
}

const Index = () => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <header className="py-8 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-quran-gold mb-2">القرآن الكريم</h1>
        <h2 className="text-2xl text-quran-light/80">بصوت الشيخ محمد صديق المنشاوي</h2>
      </header>
      
      <main className="container mx-auto px-4 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <SurahList onSelect={setSelectedSurah} />
        </div>
      </main>

      {selectedSurah && (
        <AudioPlayer
          audioUrl={selectedSurah.audioUrl}
          surahName={selectedSurah.name}
        />
      )}
    </div>
  );
};

export default Index;