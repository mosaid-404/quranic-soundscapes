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
  { number: 4, name: "النساء", audioUrl: "https://server8.mp3quran.net/minsh/004.mp3" },
  { number: 5, name: "المائدة", audioUrl: "https://server8.mp3quran.net/minsh/005.mp3" },
  { number: 6, name: "الأنعام", audioUrl: "https://server8.mp3quran.net/minsh/006.mp3" },
  { number: 7, name: "الأعراف", audioUrl: "https://server8.mp3quran.net/minsh/007.mp3" },
  { number: 8, name: "الأنفال", audioUrl: "https://server8.mp3quran.net/minsh/008.mp3" },
  { number: 9, name: "التوبة", audioUrl: "https://server8.mp3quran.net/minsh/009.mp3" },
  { number: 10, name: "يونس", audioUrl: "https://server8.mp3quran.net/minsh/010.mp3" },
  { number: 11, name: "هود", audioUrl: "https://server8.mp3quran.net/minsh/011.mp3" },
  { number: 12, name: "يوسف", audioUrl: "https://server8.mp3quran.net/minsh/012.mp3" },
  { number: 13, name: "الرعد", audioUrl: "https://server8.mp3quran.net/minsh/013.mp3" },
  { number: 14, name: "إبراهيم", audioUrl: "https://server8.mp3quran.net/minsh/014.mp3" },
  { number: 15, name: "الحجر", audioUrl: "https://server8.mp3quran.net/minsh/015.mp3" },
  { number: 16, name: "النحل", audioUrl: "https://server8.mp3quran.net/minsh/016.mp3" },
  { number: 17, name: "الإسراء", audioUrl: "https://server8.mp3quran.net/minsh/017.mp3" },
  { number: 18, name: "الكهف", audioUrl: "https://server8.mp3quran.net/minsh/018.mp3" },
  { number: 19, name: "مريم", audioUrl: "https://server8.mp3quran.net/minsh/019.mp3" },
  { number: 20, name: "طه", audioUrl: "https://server8.mp3quran.net/minsh/020.mp3" },
  { number: 21, name: "الأنبياء", audioUrl: "https://server8.mp3quran.net/minsh/021.mp3" },
  { number: 22, name: "الحج", audioUrl: "https://server8.mp3quran.net/minsh/022.mp3" },
  { number: 23, name: "المؤمنون", audioUrl: "https://server8.mp3quran.net/minsh/023.mp3" },
  { number: 24, name: "النور", audioUrl: "https://server8.mp3quran.net/minsh/024.mp3" },
  { number: 25, name: "الفرقان", audioUrl: "https://server8.mp3quran.net/minsh/025.mp3" },
  { number: 26, name: "الشعراء", audioUrl: "https://server8.mp3quran.net/minsh/026.mp3" },
  { number: 27, name: "النمل", audioUrl: "https://server8.mp3quran.net/minsh/027.mp3" },
  { number: 28, name: "القصص", audioUrl: "https://server8.mp3quran.net/minsh/028.mp3" },
  { number: 29, name: "العنكبوت", audioUrl: "https://server8.mp3quran.net/minsh/029.mp3" },
  { number: 30, name: "الروم", audioUrl: "https://server8.mp3quran.net/minsh/030.mp3" },
  { number: 31, name: "لقمان", audioUrl: "https://server8.mp3quran.net/minsh/031.mp3" },
  { number: 32, name: "السجدة", audioUrl: "https://server8.mp3quran.net/minsh/032.mp3" },
  { number: 33, name: "الأحزاب", audioUrl: "https://server8.mp3quran.net/minsh/033.mp3" },
  { number: 34, name: "سبأ", audioUrl: "https://server8.mp3quran.net/minsh/034.mp3" },
  { number: 35, name: "فاطر", audioUrl: "https://server8.mp3quran.net/minsh/035.mp3" },
  { number: 36, name: "يس", audioUrl: "https://server8.mp3quran.net/minsh/036.mp3" },
  { number: 37, name: "الصافات", audioUrl: "https://server8.mp3quran.net/minsh/037.mp3" },
  { number: 38, name: "ص", audioUrl: "https://server8.mp3quran.net/minsh/038.mp3" },
  { number: 39, name: "الزمر", audioUrl: "https://server8.mp3quran.net/minsh/039.mp3" },
  { number: 40, name: "غافر", audioUrl: "https://server8.mp3quran.net/minsh/040.mp3" },
  { number: 41, name: "فصلت", audioUrl: "https://server8.mp3quran.net/minsh/041.mp3" },
  { number: 42, name: "الشورى", audioUrl: "https://server8.mp3quran.net/minsh/042.mp3" },
  { number: 43, name: "الزخرف", audioUrl: "https://server8.mp3quran.net/minsh/043.mp3" },
  { number: 44, name: "الدخان", audioUrl: "https://server8.mp3quran.net/minsh/044.mp3" },
  { number: 45, name: "الجاثية", audioUrl: "https://server8.mp3quran.net/minsh/045.mp3" },
  { number: 46, name: "الأحقاف", audioUrl: "https://server8.mp3quran.net/minsh/046.mp3" },
  { number: 47, name: "محمد", audioUrl: "https://server8.mp3quran.net/minsh/047.mp3" },
  { number: 48, name: "الفتح", audioUrl: "https://server8.mp3quran.net/minsh/048.mp3" },
  { number: 49, name: "الحجرات", audioUrl: "https://server8.mp3quran.net/minsh/049.mp3" },
  { number: 50, name: "ق", audioUrl: "https://server8.mp3quran.net/minsh/050.mp3" },
  { number: 51, name: "الذاريات", audioUrl: "https://server8.mp3quran.net/minsh/051.mp3" },
  { number: 52, name: "الطور", audioUrl: "https://server8.mp3quran.net/minsh/052.mp3" },
  { number: 53, name: "النجم", audioUrl: "https://server8.mp3quran.net/minsh/053.mp3" },
  { number: 54, name: "القمر", audioUrl: "https://server8.mp3quran.net/minsh/054.mp3" },
  { number: 55, name: "الرحمن", audioUrl: "https://server8.mp3quran.net/minsh/055.mp3" },
  { number: 56, name: "الواقعة", audioUrl: "https://server8.mp3quran.net/minsh/056.mp3" },
  { number: 57, name: "الحديد", audioUrl: "https://server8.mp3quran.net/minsh/057.mp3" },
  { number: 58, name: "المجادلة", audioUrl: "https://server8.mp3quran.net/minsh/058.mp3" },
  { number: 59, name: "الحشر", audioUrl: "https://server8.mp3quran.net/minsh/059.mp3" },
  { number: 60, name: "الممتحنة", audioUrl: "https://server8.mp3quran.net/minsh/060.mp3" },
  { number: 61, name: "الصف", audioUrl: "https://server8.mp3quran.net/minsh/061.mp3" },
  { number: 62, name: "الجمعة", audioUrl: "https://server8.mp3quran.net/minsh/062.mp3" },
  { number: 63, name: "المنافقون", audioUrl: "https://server8.mp3quran.net/minsh/063.mp3" },
  { number: 64, name: "التغابن", audioUrl: "https://server8.mp3quran.net/minsh/064.mp3" },
  { number: 65, name: "الطلاق", audioUrl: "https://server8.mp3quran.net/minsh/065.mp3" },
  { number: 66, name: "التحريم", audioUrl: "https://server8.mp3quran.net/minsh/066.mp3" },
  { number: 67, name: "الملك", audioUrl: "https://server8.mp3quran.net/minsh/067.mp3" },
  { number: 68, name: "القلم", audioUrl: "https://server8.mp3quran.net/minsh/068.mp3" },
  { number: 69, name: "الحاقة", audioUrl: "https://server8.mp3quran.net/minsh/069.mp3" },
  { number: 70, name: "المعارج", audioUrl: "https://server8.mp3quran.net/minsh/070.mp3" },
  { number: 71, name: "نوح", audioUrl: "https://server8.mp3quran.net/minsh/071.mp3" },
  { number: 72, name: "الجن", audioUrl: "https://server8.mp3quran.net/minsh/072.mp3" },
  { number: 73, name: "المزمل", audioUrl: "https://server8.mp3quran.net/minsh/073.mp3" },
  { number: 74, name: "المدثر", audioUrl: "https://server8.mp3quran.net/minsh/074.mp3" },
  { number: 75, name: "القيامة", audioUrl: "https://server8.mp3quran.net/minsh/075.mp3" },
  { number: 76, name: "الإنسان", audioUrl: "https://server8.mp3quran.net/minsh/076.mp3" },
  { number: 77, name: "المرسلات", audioUrl: "https://server8.mp3quran.net/minsh/077.mp3" },
  { number: 78, name: "النبأ", audioUrl: "https://server8.mp3quran.net/minsh/078.mp3" },
  { number: 79, name: "النازعات", audioUrl: "https://server8.mp3quran.net/minsh/079.mp3" },
  { number: 80, name: "عبس", audioUrl: "https://server8.mp3quran.net/minsh/080.mp3" },
  { number: 81, name: "التكوير", audioUrl: "https://server8.mp3quran.net/minsh/081.mp3" },
  { number: 82, name: "الانفطار", audioUrl: "https://server8.mp3quran.net/minsh/082.mp3" },
  { number: 83, name: "المطففين", audioUrl: "https://server8.mp3quran.net/minsh/083.mp3" },
  { number: 84, name: "الانشقاق", audioUrl: "https://server8.mp3quran.net/minsh/084.mp3" },
  { number: 85, name: "البروج", audioUrl: "https://server8.mp3quran.net/minsh/085.mp3" },
  { number: 86, name: "الطارق", audioUrl: "https://server8.mp3quran.net/minsh/086.mp3" },
  { number: 87, name: "الأعلى", audioUrl: "https://server8.mp3quran.net/minsh/087.mp3" },
  { number: 88, name: "الغاشية", audioUrl: "https://server8.mp3quran.net/minsh/088.mp3" },
  { number: 89, name: "الفجر", audioUrl: "https://server8.mp3quran.net/minsh/089.mp3" },
  { number: 90, name: "البلد", audioUrl: "https://server8.mp3quran.net/minsh/090.mp3" },
  { number: 91, name: "الشمس", audioUrl: "https://server8.mp3quran.net/minsh/091.mp3" },
  { number: 92, name: "الليل", audioUrl: "https://server8.mp3quran.net/minsh/092.mp3" },
  { number: 93, name: "الضحى", audioUrl: "https://server8.mp3quran.net/minsh/093.mp3" },
  { number: 94, name: "الشرح", audioUrl: "https://server8.mp3quran.net/minsh/094.mp3" },
  { number: 95, name: "التين", audioUrl: "https://server8.mp3quran.net/minsh/095.mp3" },
  { number: 96, name: "العلق", audioUrl: "https://server8.mp3quran.net/minsh/096.mp3" },
  { number: 97, name: "القدر", audioUrl: "https://server8.mp3quran.net/minsh/097.mp3" },
  { number: 98, name: "البينة", audioUrl: "https://server8.mp3quran.net/minsh/098.mp3" },
  { number: 99, name: "الزلزلة", audioUrl: "https://server8.mp3quran.net/minsh/099.mp3" },
  { number: 100, name: "العاديات", audioUrl: "https://server8.mp3quran.net/minsh/100.mp3" },
  { number: 101, name: "القارعة", audioUrl: "https://server8.mp3quran.net/minsh/101.mp3" },
  { number: 102, name: "التكاثر", audioUrl: "https://server8.mp3quran.net/minsh/102.mp3" },
  { number: 103, name: "العصر", audioUrl: "https://server8.mp3quran.net/minsh/103.mp3" },
  { number: 104, name: "الهمزة", audioUrl: "https://server8.mp3quran.net/minsh/104.mp3" },
  { number: 105, name: "الفيل", audioUrl: "https://server8.mp3quran.net/minsh/105.mp3" },
  { number: 106, name: "قريش", audioUrl: "https://server8.mp3quran.net/minsh/106.mp3" },
  { number: 107, name: "الماعون", audioUrl: "https://server8.mp3quran.net/minsh/107.mp3" },
  { number: 108, name: "الكوثر", audioUrl: "https://server8.mp3quran.net/minsh/108.mp3" },
  { number: 109, name: "الكافرون", audioUrl: "https://server8.mp3quran.net/minsh/109.mp3" },
  { number: 110, name: "النصر", audioUrl: "https://server8.mp3quran.net/minsh/110.mp3" },
  { number: 111, name: "المسد", audioUrl: "https://server8.mp3quran.net/minsh/111.mp3" },
  { number: 112, name: "الإخلاص", audioUrl: "https://server8.mp3quran.net/minsh/112.mp3" },
  { number: 113, name: "الفلق", audioUrl: "https://server8.mp3quran.net/minsh/113.mp3" },
  { number: 114, name: "الناس", audioUrl: "https://server8.mp3quran.net/minsh/114.mp3" }
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