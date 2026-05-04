import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-violet to-gold"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 ${scrolled ? "glass-strong rounded-2xl" : ""}`}
          style={{ padding: scrolled ? "0.75rem 1.5rem" : undefined }}>
          <a href="#home" className="font-display text-2xl tracking-tight" data-cursorpointer={true}>
            <span className="text-gold-gradient">Graphizine</span>
            <span className="ml-3 text-xs tracking-[0.3em] text-muted-foreground uppercase">Studio</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-cursorpointer={true}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm text-gold-gradient hover:bg-gold/10 transition-all"
            data-cursorpointer={true}
          >
            Start a Project
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mx-6 mt-3 glass-strong rounded-2xl p-6"
          >
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-base text-muted-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
