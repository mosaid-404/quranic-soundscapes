import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-quran-dark/50 backdrop-blur-lg border-t border-quran-gold/20 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 text-quran-gold">
            <span>صُنع بكل</span>
            <Heart className="w-5 h-5 animate-pulse" />
          </div>
          <p className="text-quran-light/80 text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} لمحبي الشيخ محمد صديق المنشاوي
          </p>
          <p className="text-quran-gold/80 text-xs">
            تلاوات القرآن الكريم بصوت الشيخ محمد صديق المنشاوي
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;