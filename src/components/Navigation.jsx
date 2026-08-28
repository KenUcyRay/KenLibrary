import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const menus = ["Library", "Favorite", "The Best All Time"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Library");

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-4 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block h-0.5 w-6 bg-white rounded"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block h-0.5 w-6 bg-white rounded"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block h-0.5 w-6 bg-white rounded"
          />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-lg tracking-wide">
          Astroxus
        </h1>
      </nav>

      {/* BOTTOM BAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-gray-900/95 backdrop-blur border border-gray-800 rounded-full p-2 shadow-lg"
          >
            {menus.map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className="relative px-4 py-2 text-sm font-medium text-white rounded-full whitespace-nowrap"
              >
                {activeMenu === menu && (
                  <motion.div
                    layoutId="activeMenuHighlight"
                    className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {menu}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}