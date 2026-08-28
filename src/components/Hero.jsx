import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const featured = [
  {
    title: "Lookism",
    description: "Park Hyungsuk orang yang gendut dan jelek dirundung oleh orangorang di lingkungan sekolahnya setiap hari Namun sebuah keajaiban akan segera terjadi",
    image: "/images/lookismban.jpg",
  },
  {
    title: "The Bully In-Charge",
    description: "Setelah putus sekolah Kwon Daegun sedang mempersiapkan ujian kualifikasinya Saat dia sedang bekerja paruh waktu di sebuah toko serba ada dia berkelahi dengan beberapa preman Daegun yang dengan mudah mengalahkan mereka ditawari sebuah proyek yang disebut Iljin in ChargeThe Bully In Charge oleh Yayasan Pendidikan",
    image: "/images/bullyinc.jpg",
  },
  {
    title: "A.I. Doctor",
    description: "Bertaruh pada masa depan Grup TaeHwa AI dibuat untuk diagnosis bernama Baruda Penduduk ahli bedah saraf tahun pertama Lee Soohyuk bekerja dengan Baruda ketika dia terkena ledakan misterius dan kehilangan kesadaran Setelah sadar kembali dia bertemu AI Baruda dalam pikirannya",
    image: "/images/aidoctor.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const manhwa = featured[current];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gray-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={manhwa.image}
            alt={manhwa.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end h-full px-8 pb-16 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {manhwa.title}
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              {manhwa.description}
            </p>
            <button className="bg-white text-gray-950 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
              Baca Sekarang
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-8 z-10 flex gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-2 w-8 rounded-full bg-white/30 overflow-hidden"
          >
            {current === i && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 bg-white"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}