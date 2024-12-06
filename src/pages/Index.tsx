import React, { useState } from 'react';
import SurahList from '@/components/SurahList';
import AudioPlayer from '@/components/AudioPlayer';
import { UserCircle, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Surah {
  number: number;
  name: string;
  audioUrl: string;
}

const Index = () => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // تحديث الوقت كل ثانية عندما يتم تشغيل السورة
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

  // تحويل الثواني إلى تنسيق mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen pb-24">
      <header className="py-8 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-quran-gold mb-2">القرآن الكريم</h1>
        <h2 className="text-2xl text-quran-light/80">بصوت الشيخ محمد صديق المنشاوي</h2>
      </header>
      
      <main className="container mx-auto px-4 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات الشيخ */}
          <Card className="p-6 bg-quran-dark border-quran-gold/20">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-quran-gold/10 flex items-center justify-center">
                <UserCircle className="w-24 h-24 text-quran-gold" />
              </div>
              <h3 className="text-xl text-quran-gold">الشيخ محمد صديق المنشاوي</h3>
              <p className="text-quran-light/80 text-sm">
                من أشهر قراء القرآن الكريم في العالم الإسلامي
              </p>
            </div>
          </Card>

          {/* قائمة السور */}
          <div className="md:col-span-2">
            <SurahList onSelect={setSelectedSurah} />
          </div>
        </div>

        {/* عداد الوقت */}
        {selectedSurah && (
          <div className="fixed top-4 left-4 bg-quran-dark/90 p-4 rounded-lg border border-quran-gold/20 flex items-center space-x-2 backdrop-blur-sm">
            <Clock className="text-quran-gold w-5 h-5" />
            <span className="text-quran-gold font-mono">{formatTime(elapsedTime)}</span>
          </div>
        )}
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