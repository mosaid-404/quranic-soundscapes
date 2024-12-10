import React, { useRef, useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, Clock } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  surahName: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, surahName }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8); // تم زيادة مستوى الصوت الافتراضي
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("خطأ في تشغيل الصوت:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(duration);
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const newTime = (value[0] / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="audio-player fixed bottom-0 left-0 right-0 p-4 border-t border-quran-gold/20">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => setDuration((e.target as HTMLAudioElement).duration)}
      />
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-quran-gold text-quran-dark flex items-center justify-center hover:bg-quran-gold/90 transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <div className="flex flex-col">
            <div className="text-xl text-quran-gold">{surahName}</div>
            <div className="flex items-center gap-2 text-quran-light/80 text-sm">
              <Clock size={14} />
              <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-1 mx-4">
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={handleProgressChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-quran-gold" />
          <Slider
            value={[volume]}
            max={1}
            step={0.1}
            className="w-24"
            onValueChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;