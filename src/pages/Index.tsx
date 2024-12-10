import React, { useState } from 'react';
import SurahList from '@/components/SurahList';
import AudioPlayer from '@/components/AudioPlayer';
import Footer from '@/components/Footer';
import { UserCircle, Clock, Bookmark } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Surah {
  number: number;
  name: string;
  audioUrl: string;
}

const surahs: Surah[] = [
  {
    number: 1,
    name: "سورة الفاتحة",
    audioUrl: "https://server8.mp3quran.net/minsh/001.mp3"
  },
  {
    number: 2,
    name: "سورة البقرة",
    audioUrl: "https://server8.mp3quran.net/minsh/002.mp3"
  },
  {
    number: 3,
    name: "سورة آل عمران",
    audioUrl: "https://server8.mp3quran.net/minsh/003.mp3"
  },
  // ... يمكن إضافة المزيد من السور هنا
];

const Index = () => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (selectedSurah) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        setElapsedTime(0);
      }
    };
  }, [selectedSurah]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen pb-24 flex flex-col bg-gradient-to-b from-quran-dark to-quran-dark/95">
      <div className="flex-grow">
        <header className="py-12 text-center animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-quran-gold/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-quran-gold mb-4 tracking-wider">القرآن الكريم</h1>
            <h2 className="text-2xl text-quran-light/90 font-light">بصوت الشيخ محمد صديق المنشاوي</h2>
          </div>
        </header>
        
        <main className="container mx-auto px-4 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-quran-dark/50 border-quran-gold/20 backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-quran-gold/20 to-quran-gold/5 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <UserCircle className="w-24 h-24 text-quran-gold" />
                </div>
                <h3 className="text-2xl text-quran-gold font-semibold">الشيخ محمد صديق المنشاوي</h3>
                <p className="text-quran-light/80 text-center leading-relaxed">
                  من أشهر قراء القرآن الكريم في العالم الإسلامي، عُرف بجمال صوته وحسن أدائه
                </p>
                <div className="flex items-center gap-2 text-quran-gold/60">
                  <Bookmark className="w-5 h-5" />
                  <span>قارئ القرآن الكريم</span>
                </div>
              </div>
            </Card>

            <div className="md:col-span-2">
              <SurahList onSelect={setSelectedSurah} />
            </div>
          </div>

          {selectedSurah && (
            <div className="fixed top-4 left-4 bg-quran-dark/90 p-4 rounded-lg border border-quran-gold/20 flex items-center space-x-2 backdrop-blur-sm animate-fade-in">
              <Clock className="text-quran-gold w-5 h-5" />
              <span className="text-quran-gold font-mono">{formatTime(elapsedTime)}</span>
            </div>
          )}
        </main>
      </div>
      
      <Footer />

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