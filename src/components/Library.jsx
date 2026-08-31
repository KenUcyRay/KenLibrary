// src/components/Library.jsx
const dummyManhwa = [
  {
    title: "Reincarnator's Stream",
    cover: "/covers/reincarnators-stream.jpg",
    flag: "kr",
    totalChapter: 62,
    status: "Belum tamat",
  },
  {
    title: "The Great Heavenly Demon Sovereign",
    cover: "/covers/great-heavenly-demon.jpg",
    flag: "kr",
    totalChapter: 63,
    status: "Belum tamat",
  },
  {
    title: "World's Strongest Punch",
    cover: "/covers/worlds-strongest-punch.jpg",
    flag: "kr",
    totalChapter: 16,
    status: "Belum tamat",
  },
  {
    title: "Regressor Of The Fallen Family",
    cover: "/covers/regressor-fallen-family.jpg",
    flag: "kr",
    totalChapter: 149,
    status: "Belum tamat",
  },
  {
    title: "Swordmaster's Youngest Son",
    cover: "/covers/swordmasters-youngest-son.jpg",
    flag: "kr",
    totalChapter: 87,
    status: "Belum tamat",
  },
  {
    title: "Chronicles Of The Demon Faction",
    cover: "/covers/chronicles-demon-faction.jpg",
    flag: "kr",
    totalChapter: 102,
    status: "Tamat",
  },
  {
    title: "Demonic Emperor",
    cover: "/covers/demonic-emperor.jpg",
    flag: "kr",
    totalChapter: 55,
    status: "Belum tamat",
  },
  {
    title: "The Legendary Hero Is An Academy Honors",
    cover: "/covers/legendary-hero.jpg",
    flag: "kr",
    totalChapter: 45,
    status: "Belum tamat",
  },
  {
    title: "Solo Leveling: Ragnarok",
    cover: "/covers/reincarnators-stream.jpg",
    flag: "kr",
    totalChapter: 78,
    status: "Belum tamat",
  },
  {
    title: "Nano Machine",
    cover: "/covers/great-heavenly-demon.jpg",
    flag: "kr",
    totalChapter: 210,
    status: "Belum tamat",
  },
  {
    title: "Return Of The Mount Hua Sect",
    cover: "/covers/worlds-strongest-punch.jpg",
    flag: "kr",
    totalChapter: 134,
    status: "Belum tamat",
  },
  {
    title: "Wind Breaker",
    cover: "/covers/regressor-fallen-family.jpg",
    flag: "kr",
    totalChapter: 89,
    status: "Belum tamat",
  },
  {
    title: "Omniscient Reader",
    cover: "/covers/swordmasters-youngest-son.jpg",
    flag: "kr",
    totalChapter: 187,
    status: "Tamat",
  },
  {
    title: "Tower Of God",
    cover: "/covers/chronicles-demon-faction.jpg",
    flag: "kr",
    totalChapter: 550,
    status: "Belum tamat",
  },
  {
    title: "Eleceed",
    cover: "/covers/demonic-emperor.jpg",
    flag: "kr",
    totalChapter: 301,
    status: "Belum tamat",
  },
  {
    title: "The Beginning After The End",
    cover: "/covers/legendary-hero.jpg",
    flag: "kr",
    totalChapter: 198,
    status: "Belum tamat",
  },
  {
    title: "Infinite Leveling Murim",
    cover: "/covers/reincarnators-stream.jpg",
    flag: "kr",
    totalChapter: 175,
    status: "Belum tamat",
  },
  {
    title: "Return Of The Legendary Spear Knight",
    cover: "/covers/great-heavenly-demon.jpg",
    flag: "kr",
    totalChapter: 112,
    status: "Belum tamat",
  },
  {
    title: "Mercenary Enrollment",
    cover: "/covers/worlds-strongest-punch.jpg",
    flag: "kr",
    totalChapter: 204,
    status: "Belum tamat",
  },
  {
    title: "Latna Saga: Survival Of A Sword King",
    cover: "/covers/regressor-fallen-family.jpg",
    flag: "kr",
    totalChapter: 68,
    status: "Tamat",
  },
];

function MangaCard({ manga }) {
  return (
    <div className="group cursor-pointer">
      {/* Cover */}
      <div className="relative aspect-3/4 rounded-lg overflow-hidden bg-[#FFF8F0] border border-[#D9CBB5]">
        <img
          src={manga.cover}
          alt={manga.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {manga.flag && (
          <span className="absolute bottom-2 right-2 w-5 h-4 rounded-sm overflow-hidden bg-white/90 flex items-center justify-center text-[8px]">
            {manga.flag.toUpperCase()}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-sm font-semibold text-[#3E2C23] line-clamp-2 flex items-start gap-1">
        <span className="shrink-0 bg-[#B5602E] text-[#FFF8F0] text-[9px] font-bold px-1.5 py-0.5 rounded">
          UP
        </span>
        {manga.title}
      </h3>

      {/* Total Chapter */}
      <div className="mt-2">
        <div className="flex items-center justify-between text-xs bg-[#F7ECDD] border border-[#D9CBB5] rounded px-2 py-1">
          <span className="text-[#6B5D4F]">Chapter {manga.totalChapter}</span>
          <span className="text-[#C17B4D] font-medium">{manga.status}</span>
        </div>
      </div>
    </div>
  );
}

export default function Library() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {dummyManhwa.map((manga, i) => (
          <MangaCard key={i} manga={manga} />
        ))}
      </div>
    </section>
  );
}