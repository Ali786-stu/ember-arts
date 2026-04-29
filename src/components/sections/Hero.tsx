import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const phrases = ["Visual Stories", "Bold Identities", "Aesthetic Designs", "Brand Worlds"];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % phrases.length);
        return;
      }
      setText(del ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-glow" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 h-32 w-32 rounded-full bg-violet/20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.9 }}
          className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight"
        >
          <span className="block text-foreground">Lakshmi</span>
          <span className="block text-gradient italic">Verma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 font-display text-2xl md:text-4xl"
        >
          <span className="text-muted-foreground italic">Crafting</span>
          <span className="min-w-[14ch] text-left text-gold-gradient">
            {text}
            <span className="cursor-blink ml-1 inline-block h-7 md:h-9 w-[2px] bg-gold align-middle" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-muted-foreground"
        >
          Graphic Designer based in Lucknow — turning ideas into modern, aesthetic, and meaningful visual experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-luxury px-8 py-4 text-sm font-semibold text-primary-foreground shadow-luxury transition-transform hover:scale-105"
          >
            <span className="relative z-10">View Work</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-full glass px-8 py-4 text-sm font-semibold text-foreground hover:bg-foreground/5 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/40 p-1.5">
            <motion.div className="h-2 w-1 rounded-full bg-gold" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
