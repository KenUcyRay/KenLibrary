// src/components/Favorite.jsx
import { Star } from "lucide-react";

const dummyFavorites = [
  {
    title: "A Hero Who Does Everything Well",
    cover: "/covers/a-hero-who.jpg",
    flag: "kr",
    totalChapter: 88,
    status: "ON GOING",
  },
  {
    title: "Magic Academy's Genius Blinker",
    cover: "/covers/magic-academy-genius-blinker.jpg",
    flag: "kr",
    totalChapter: 100,
    status: "END",
  },
  {
    title: "Regressor Of The Fallen Family",
    cover: "/covers/regressor-fallen-family.jpg",
    flag: "kr",
    totalChapter: 149,
    status: "ON GOING",
  },
  {
    title: "Solo Leveling",
    cover: "/covers/solo-leveling.png",
    flag: "kr",
    totalChapter: 179,
    status: "END",
  },
  {
    title: "Wind Breaker",
    cover: "/covers/wind-breaker.webp",
    flag: "kr",
    totalChapter: 556,
    status: "END",
  },
  {
    title: "Mercenary Enrollment",
    cover: "/covers/mercenary-enrollment.jpg",
    flag: "kr",
    totalChapter: 280,
    status: "ON GOING",
  },
  {
    title: "Not Your Typical Reincarnation Story",
    cover: "/covers/not-your-typical-reincarnation-story.png",
    flag: "kr",
    totalChapter: 100,
    status: "END",
  },
  {
    title: "The Great Mage Return After 4000 Years",
    cover: "/covers/the-great-mage-return-after-4000-years.jpg",
    flag: "kr",
    totalChapter: 201,
    status: "END",
  },
  {
    title: "I Copy Talents",
    cover: "/covers/icopy-talents.jpeg",
    flag: "ch",
    totalChapter: 106,
    status: "ON GOING",
  },
  {
    title: "A.I Doctor",
    cover: "/covers/ai-doctor.jpeg",
    flag: "kr",
    totalChapter: 187,
    status: "ON GOING",
  },
];

function FavoriteCard({ manga }) {
  return (
    <div className="group cursor-pointer relative">
      {/* Glow border wrapper */}
      <div className="relative rounded-xl p-[1.5px] bg-linear-to-br from-[#B5602E]/60 via-[#B8863B]/25 to-transparent group-hover:from-[#B5602E] group-hover:via-[#C17B4D]/40 transition-colors duration-300">
        <div className="relative aspect-3/4 rounded-[10px] overflow-hidden bg-[#F7ECDD]">
          <img
            src={manga.cover}
            alt={manga.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Warm gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#3E2C23]/75 via-transparent to-transparent" />
          {/* Favorite badge */}
          <span className="absolute top-2 left-2 flex items-center gap-1 bg-[#B5602E] text-[#FFF8F0] text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
            <Star size={10} fill="currentColor" className="text-[#FFF8F0]" />
            Favorite
          </span>

          {/* Flag */}
          {manga.flag && (
            <span className="absolute bottom-2 right-2 w-5 h-4 rounded-sm overflow-hidden bg-white/90 flex items-center justify-center text-[8px]">
              {manga.flag.toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Title - fixed height biar konsisten (2 baris = 48px untuk text-base) */}
      <h3 className="mt-3 text-base font-bold text-[#3E2C23] leading-tight min-h-[48px] line-clamp-2 group-hover:text-[#B5602E] transition-colors">
        {manga.title}
      </h3>

      {/* Total Chapter */}
      <div className="mt-2">
        <div className="flex items-center justify-between text-xs bg-[#F7ECDD] border border-[#D9CBB5] rounded px-2.5 py-1.5">
          <span className="text-[#6B5D4F]">Chapter {manga.totalChapter}</span>
          <span className="text-[#C17B4D] font-medium">{manga.status}</span>
        </div>
      </div>
    </div>
  );
}

export default function Favorite() {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-6">
        <Star className="text-[#B5602E]" size={22} fill="currentColor" />
        <h2 className="text-xl font-bold text-[#3E2C23] tracking-wide">
          Favorite
        </h2>
      </div>

      {/* Grid — kolom lebih sedikit biar card lebih besar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {dummyFavorites.map((manga, i) => (
          <FavoriteCard key={i} manga={manga} />
        ))}
      </div>
    </section>
  );
}
