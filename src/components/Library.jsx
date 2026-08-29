// src/components/Library.jsx
const dummyManhwa = [
  {
    title: "Reincarnator's Stream",
    cover: "/covers/reincarnators-stream.jpg",
    flag: "kr",
    chapters: [
      { number: "Chapter 62", time: "14 mnt" },
      { number: "Chapter 61", time: "7 hari" },
    ],
  },
  {
    title: "The Great Heavenly Demon Sovereign",
    cover: "/covers/great-heavenly-demon.jpg",
    flag: "kr",
    chapters: [
      { number: "Chapter 63", time: "20 mnt" },
      { number: "Chapter 62", time: "7 hari" },
    ],
  },
  {
    title: "World's Strongest Punch",
    cover: "/covers/worlds-strongest-punch.jpg",
    flag: "kr",
    chapters: [
      { number: "Chapter 16", time: "1 jam" },
      { number: "Chapter 15", time: "7 hari" },
    ],
  },
  // ...tambahin sisanya sesuai data asli kamu
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

      {/* Chapters */}
      <div className="mt-2 space-y-1">
        {manga.chapters.map((ch, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-xs bg-[#F7ECDD] border border-[#D9CBB5] rounded px-2 py-1"
          >
            <span className="text-[#6B5D4F]">{ch.number}</span>
            <span className="text-[#C17B4D] font-medium">{ch.time}</span>
          </div>
        ))}
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