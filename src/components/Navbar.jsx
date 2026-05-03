import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ name }) {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent-pink z-[60]"
        style={{ width: `${progress}%` }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-10 h-10"
            />
            <span className="text-lg font-bold tracking-tight">
              {name || "Portfolio"}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="p-2 rounded-xl hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dark ? "moon" : "sun"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? (
                    <BsSun className="w-5 h-5" />
                  ) : (
                    <BsMoon className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-xl hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? (
                <BsSun className="w-5 h-5" />
              ) : (
                <BsMoon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 glass z-[80] p-8 flex flex-col"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end p-2 mb-8"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </button>
              <div className="flex flex-col gap-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
