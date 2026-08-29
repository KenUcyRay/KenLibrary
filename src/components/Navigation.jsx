import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const menus = [
  { label: "Library", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "The Best All Time", href: "/best-all-time" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-4 bg-[#3E2C23]/95 backdrop-blur border-b border-[#5C4433]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block h-0.5 w-6 bg-[#F1E2D1] rounded"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block h-0.5 w-6 bg-[#F1E2D1] rounded"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block h-0.5 w-6 bg-[#F1E2D1] rounded"
          />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-[#F1E2D1] font-bold text-lg tracking-wide">
          KenLibrary
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
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-[#4A3728]/95 backdrop-blur border border-[#5C4433] rounded-full p-2 shadow-lg"
          >
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                className="relative px-4 py-2 text-sm font-medium text-[#F1E2D1] rounded-full whitespace-nowrap"
              >
                {activePath === menu.href && (
                  <motion.div
                    layoutId="activeMenuHighlight"
                    className="absolute inset-0 bg-[#C17B4D] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {menu.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}