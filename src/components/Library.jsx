// src/components/Library.jsx
const dummyManhwa = [
  {
    title: "A Hero Who Does Everything Well",
    cover: "/covers/a-hero-who.jpg",
    flag: "kr",
    totalChapter: 88,
    status: "ON GOING",
  },
  {
    title: "Level-Up Doctor",
    cover: "/covers/level-up-doctor.jpeg",
    flag: "kr",
    totalChapter: 87,
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
    title: "The Ordinary Lawyer's Subspace",
    cover: "/covers/the-ordinary-lawyer.jpg",
    flag: "kr",
    totalChapter: 42,
    status: "ON GOING",
  },
  {
    title: "Return Of The Devourer",
    cover: "/covers/return-of-the-devourer.webp",
    flag: "kr",
    totalChapter: 48,
    status: "ON GOING",
  },
  {
    title: "Regression Of The Close Combat Mage",
    cover: "/covers/regression-of-the-close-combat-mage.jpeg",
    flag: "kr",
    totalChapter: 91,
    status: "ON GOING",
  },
  {
    title: "Player Who Returned 10.000 Years Later",
    cover: "/covers/player-who-returned.jpg",
    flag: "kr",
    totalChapter: 158,
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
    title: "Disastrous Necromancer",
    cover: "/covers/disastrous-necromance.jpeg",
    flag: "ch",
    totalChapter: 301,
    status: "ON GOING",
  },
  {
    title: "I Obtained a Mythic Item",
    cover: "/covers/i-obtained-a-mythic-item.jpg",
    flag: "kr",
    totalChapter: 194,
    status: "ON GOING",
  },
  {
    title: "Wind Breaker",
    cover: "/covers/wind-breaker.webp",
    flag: "kr",
    totalChapter: 556,
    status: "END",
  },
  {
    title: "Max Talent Player",
    cover: "/covers/max-talent-player.jpeg",
    flag: "kr",
    totalChapter: 81,
    status: "ON GOING",
  },
  {
    title: "The Indomitable Martial King",
    cover: "/covers/the-indomitable-martial-king.jpg",
    flag: "kr",
    totalChapter: 148,
    status: "ON GOING",
  },
  {
    title: "My Unbeatable Passive Skill Lets Me Deal Massive Damage",
    cover: "/covers/my-unbeatable.jpg",
    flag: "kr",
    totalChapter: 152,
    status: "ON GOING",
  },
  {
    title: "Player Who Can't Level Up",
    cover: "/covers/player-who-cant-level-up.jpg",
    flag: "kr",
    totalChapter: 241,
    status: "ON GOING",
  },
  {
    title: "Level 999 Goblin",
    cover: "/covers/level-999-goblin.jpg",
    flag: "kr",
    totalChapter: 60,
    status: "ON GOING",
  },
  {
    title: "Lookism",
    cover: "/covers/lookism.jpeg",
    flag: "kr",
    totalChapter: 560,
    status: "ON GOING",
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

      {/* Title - fixed height biar konsisten (2 baris = 40px) */}
      <h3 className="mt-2 text-sm font-semibold text-[#3E2C23] leading-tight min-h-[40px] flex items-start gap-1">
        <span
          className={`shrink-0 text-[#FFF8F0] text-[9px] font-bold px-1.5 py-0.5 rounded mt-0.5 ${
            manga.status === "END" ? "bg-[#6B5D4F]" : "bg-[#B5602E]"
          }`}
        >
          {manga.status === "END" ? "END" : "UP"}
        </span>
        <span className="line-clamp-2 flex-1">{manga.title}</span>
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
    <section className="px-3 sm:px-4 py-6 sm:py-8 max-w-7xl mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {dummyManhwa.map((manga, i) => (
          <MangaCard key={i} manga={manga} />
        ))}
      </div>
    </section>
  );
}
