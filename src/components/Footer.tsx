import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-quran-dark border-t border-quran-gold/20 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-quran-light/80 text-sm">
          جميع الحقوق محفوظة © {new Date().getFullYear()} لمحبي الشيخ محمد صديق المنشاوي
        </p>
        <p className="text-quran-gold text-xs mt-2">
          تلاوات القرآن الكريم بصوت الشيخ محمد صديق المنشاوي
        </p>
      </div>
    </footer>
  );
};

export default Footer;