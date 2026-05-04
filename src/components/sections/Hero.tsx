import { motion } from "framer-motion";
import { Palette, Type, PenTool, Printer, Share2, Sparkles, Camera, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/lakshmi-portrait.jpg";

// Real Software Icons
import aiIcon from "@/assets/hero/39f1491e-90e2-47c0-b628-eb1605784772-Photoroom.png";
import cdIcon from "@/assets/hero/476a1b78-7a54-430d-bffa-5c8a916327a9-Photoroom.png";
import aeIcon from "@/assets/hero/531e17cc-c072-4bac-a82c-72224d0c9883-Photoroom.png";
import psIcon from "@/assets/hero/a156ef35-58ec-49df-bc23-ef804a4a6dbb-Photoroom.png";
import idIcon from "@/assets/hero/da2b0047-719b-4754-910d-55a7da85b5fa-Photoroom.png";

type RingItem = { img: string; color: string; bg: string; scale?: number };

const rings: { size: number; duration: number; reverse: boolean; items: RingItem[] }[] = [
  {
    size: 420,
    duration: 35,
    reverse: false,
    items: [
      { img: psIcon, color: "#31A8FF", bg: "#001E36", scale: 1.15 },
      { img: aiIcon, color: "#FF9A00", bg: "#330000", scale: 1.15 },
      { img: idIcon, color: "#FF3366", bg: "#49021F", scale: 1.15 },
      { img: aeIcon, color: "#9999FF", bg: "#00005B", scale: 1.15 },
      { img: cdIcon, color: "#7CC242", bg: "#0E2200", scale: 1.15 },
    ],
  },
];

function OrbitRing({
  size,
  duration,
  reverse,
  items,
  scale: globalScale,
}: {
  size: number;
  duration: number;
  reverse: boolean;
  items: RingItem[];
  scale: number;
}) {
  const scaledSize = size * globalScale;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-gold/15"
      style={{
        width: scaledSize,
        height: scaledSize,
        marginLeft: -scaledSize / 2,
        marginTop: -scaledSize / 2,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((it, i) => {
        const angle = (i / items.length) * 360;
        const chipSize = 54 * globalScale * (it.scale || 1);
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${angle}deg) translateY(-${scaledSize / 2}px)` }}
          >
            <div
              className="absolute flex items-center justify-center rounded-full shadow-glow overflow-hidden"
              style={{
                width: chipSize,
                height: chipSize,
                background: it.bg,
                transform: `translate(-50%, -50%) rotate(${reverse ? angle : -angle}deg)`,
                boxShadow: `0 0 25px ${it.color}55`,
                border: `1px solid ${it.color}44`,
              }}
            >
              <img src={it.img} alt="" className="w-full h-full object-contain p-2" />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 380) setScale(0.5);
      else if (w < 480) setScale(0.58);
      else if (w < 640) setScale(0.68);
      else if (w < 768) setScale(0.78);
      else if (w < 1024) setScale(0.88);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const portraitSize = Math.round(280 * scale);
  const stageSize = Math.round(540 * scale);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-glow" />
      </div>

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-32 lg:pt-40">

        {/* Mobile Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="lg:hidden flex w-full justify-center order-1 z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 glass backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse shadow-glow" />
            <span className="text-xs font-medium tracking-wide text-gold-soft uppercase">Available for freelance Projects</span>
          </div>
        </motion.div>

        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6 order-3 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 glass backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse shadow-glow" />
            <span className="text-sm font-medium tracking-wide text-gold-soft uppercase">Available for freelance Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1]"
            data-cursorpointertext={true}
          >
            Creative <br className="hidden sm:block" />
            <span className="text-gold-gradient animate-gradient">
              Designer & <br className="hidden sm:block" /> Visual Storyteller
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed"
            data-cursorpointertext={true}
          >
            Hi, I'm <strong className="text-white font-medium">Lakshmi Verma</strong>. I design impactful visual identities, social media creatives, and print designs that help brands stand out and connect with their audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2 lg:pt-4"
          >
            <a
              href="#portfolio"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gold text-background text-sm sm:text-base font-medium hover:bg-white transition-colors duration-300 shadow-glow"
              data-cursorpointer={true}
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gold/30 text-white text-sm sm:text-base hover:bg-gold/10 transition-colors duration-300"
              data-cursorpointer={true}
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>

        {/* Right: portrait with rotating skill rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 1, ease: "easeOut" }}
          className="relative mx-auto flex items-center justify-center order-2 lg:order-2 my-4 lg:my-0"
          style={{ width: stageSize, height: stageSize }}
        >
          <div className="absolute inset-10 rounded-full bg-luxury blur-3xl opacity-30" />

          {rings.map((r, i) => (
            <OrbitRing key={i} {...r} scale={scale} />
          ))}

          <motion.div
            className="relative rounded-full overflow-hidden glow-border shadow-luxury"
            style={{ width: portraitSize, height: portraitSize }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            data-cursorpointermini={true}
          >
            <img
              src={portrait}
              alt="Lakshmi Verma"
              className="h-full w-full object-cover"
              width={600}
              height={600}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/40 p-1.5">
          <motion.div className="h-2 w-1 rounded-full bg-gold" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
