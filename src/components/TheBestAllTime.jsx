// src/components/TheBestAllTime.jsx
import { motion } from "motion/react";
import { Crown, Flame } from "lucide-react";

const topThree = [
  {
    rank: 1,
    title: "Lookism",
    cover: "/covers/lookism.jpeg",
    score: "9.8",
  },
  {
    rank: 2,
    title: "A.I Doctor",
    cover: "/covers/ai-doctor.jpeg",
    score: "9.6",
  },
  {
    rank: 3,
    title: "The Bully In Charge",
    cover: "/covers/bullyinc.jpg",
    score: "9.5",
  },
];

const restRanking = [
  { rank: 4, title: "Solo Leveling", cover: "/covers/solo-leveling.png", score: "9.3" },
  { rank: 5, title: "Wind Breaker", cover: "/covers/wind-breaker.webp", score: "9.2" },
  { rank: 6, title: "Mercenary Enrollment", cover: "/covers/mercenary-enrollment.jpg", score: "9.1" },
  { rank: 7, title: "The Great Mage Return After 4000 Years", cover: "/covers/the-great-mage-return-after-4000-years.jpg", score: "9.0" },
  { rank: 8, title: "Not Your Typical Reincarnation Story", cover: "/covers/not-your-typical-reincarnation-story.png", score: "8.9" },
];

// Style tiap podium beda: rank 1 paling besar & di tengah
const podiumStyle = {
  1: {
    order: "md:order-2",
    size: "w-48 md:w-64",
    ring: "from-yellow-300 via-amber-500 to-yellow-300",
    glow: "shadow-[0_0_40px_rgba(250,204,21,0.4)]",
    label: "text-yellow-300",
    translate: "md:-translate-y-6",
  },
  2: {
    order: "md:order-1",
    size: "w-40 md:w-52",
    ring: "from-slate-300 via-slate-400 to-slate-300",
    glow: "shadow-[0_0_30px_rgba(203,213,225,0.3)]",
    label: "text-slate-300",
    translate: "md:translate-y-4",
  },
  3: {
    order: "md:order-3",
    size: "w-40 md:w-52",
    ring: "from-orange-400 via-amber-700 to-orange-400",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.3)]",
    label: "text-orange-400",
    translate: "md:translate-y-6",
  },
};

function PodiumCard({ manga }) {
  const style = podiumStyle[manga.rank];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: manga.rank * 0.12, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.06, y: -8 }}
      className={`relative flex flex-col items-center ${style.order} ${style.translate}`}
    >
      {/* Crown for rank 1 */}
      {manga.rank === 1 && (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mb-1"
        >
          <Crown className="text-yellow-300" size={28} fill="currentColor" />
        </motion.div>
      )}

      {/* Glowing ring cover */}
      <div className={`relative ${style.size} aspect-3/4 rounded-2xl p-[2px] bg-gradient-to-br ${style.ring} ${style.glow}`}>
        <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#FFF8F0]">
          <img
            src={manga.cover}
            alt={manga.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#3E2C23]/85 via-[#3E2C23]/10 to-transparent" />
        </div>

        {/* Rank number badge */}
        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF8F0] border-2 ${style.label} border-current font-extrabold text-lg shadow-sm`}>
          {manga.rank}
        </div>
      </div>

      {/* Title & score */}
      <div className="mt-6 text-center max-w-[14rem]">
        <h3 className="text-[#3E2C23] font-bold text-sm line-clamp-2">{manga.title}</h3>
        <p className={`mt-1 text-xs font-semibold ${style.label}`}>★ {manga.score}</p>
      </div>
    </motion.div>
  );
}

function RankRow({ manga, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ x: 6 }}
      className="group flex items-center gap-4 bg-[#FFF8F0] border border-[#D9CBB5] hover:border-[#C17B4D]/50 rounded-xl px-4 py-3 transition-colors shadow-sm"
    >
      <span className="w-8 text-center text-2xl font-black text-[#A8A492] group-hover:text-[#C17B4D] transition-colors">
        {manga.rank}
      </span>

      <div className="w-12 h-16 rounded-md overflow-hidden bg-[#F7ECDD] border border-[#D9CBB5] shrink-0">
        <img
          src={manga.cover}
          alt={manga.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-[#3E2C23] font-semibold text-sm truncate group-hover:text-[#C17B4D] transition-colors">
          {manga.title}
        </h4>
        <p className="text-xs text-[#6B5D4F] mt-0.5">★ {manga.score}</p>
      </div>

      <Flame
        className="text-[#A8A492] group-hover:text-[#C17B4D] transition-colors shrink-0"
        size={18}
      />
    </motion.div>
  );
}

export default function TheBestAllTime() {
  return (
    <section className="px-4 py-14 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-[#B5602E] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Hall of Fame
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E2C23]">
          The Best All Time
        </h2>
      </motion.div>

      {/* Podium top 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-6 mb-16">
        {topThree.map((manga) => (
          <PodiumCard key={manga.rank} manga={manga} />
        ))}
      </div>

      {/* Ranking list 4+ */}
      <div className="space-y-3">
        {restRanking.map((manga, i) => (
          <RankRow key={manga.rank} manga={manga} index={i} />
        ))}
      </div>
    </section>
  );
}
