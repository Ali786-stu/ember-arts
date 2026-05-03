import { motion } from "framer-motion";
import { Palette, Type, PenTool, Printer, Share2, Sparkles, Camera, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/lakshmi-portrait.jpg";

type RingItem =
  | { kind: "text"; label: string; color: string; bg: string }
  | { kind: "icon"; Icon: typeof Palette; color: string; bg: string };

const rings: { size: number; duration: number; reverse: boolean; items: RingItem[] }[] = [
  {
    size: 360,
    duration: 32,
    reverse: false,
    items: [
      { kind: "text", label: "Ps", color: "#31A8FF", bg: "#001E36" },
      { kind: "text", label: "Ai", color: "#FF9A00", bg: "#330000" },
      { kind: "text", label: "Id", color: "#FF3366", bg: "#49021F" },
      { kind: "text", label: "Ae", color: "#9999FF", bg: "#00005B" },
      { kind: "text", label: "CD", color: "#7CC242", bg: "#0E2200" },
    ],
  },
  {
    size: 470,
    duration: 50,
    reverse: false,
    items: [
      { kind: "icon", Icon: Palette, color: "#D4AF6E", bg: "#1a1108" },
      { kind: "icon", Icon: Type, color: "#9B6EDC", bg: "#150a25" },
      { kind: "icon", Icon: PenTool, color: "#D4AF6E", bg: "#1a1108" },
      { kind: "icon", Icon: Printer, color: "#9B6EDC", bg: "#150a25" },
      { kind: "icon", Icon: Share2, color: "#D4AF6E", bg: "#1a1108" },
      { kind: "icon", Icon: Camera, color: "#9B6EDC", bg: "#150a25" },
      { kind: "icon", Icon: Layers, color: "#D4AF6E", bg: "#1a1108" },
      { kind: "icon", Icon: Sparkles, color: "#9B6EDC", bg: "#150a25" },
    ],
  },
];

function OrbitRing({
  size,
  duration,
  reverse,
  items,
  scale,
}: {
  size: number;
  duration: number;
  reverse: boolean;
  items: RingItem[];
  scale: number;
}) {
  const scaledSize = size * scale;
  const chipSize = Math.max(34, 44 * scale);
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
        const isText = it.kind === "text";
        const w = isText && (it as any).label.length > 2 ? chipSize * 1.5 : chipSize;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${angle}deg) translateY(-${scaledSize / 2}px)` }}
          >
            <div
              className="absolute flex items-center justify-center rounded-full glass-strong shadow-glow font-display font-bold"
              style={{
                width: w,
                height: chipSize,
                background: `linear-gradient(135deg, ${it.bg}, oklch(0.17 0.02 280 / 0.85))`,
                color: it.color,
                transform: `translate(-50%, -50%) rotate(${reverse ? angle : -angle}deg)`,
                boxShadow: `0 0 18px ${it.color}55`,
                fontSize: chipSize * 0.36,
              }}
            >
              {it.kind === "text" ? (
                it.label
              ) : (
                <it.Icon size={Math.round(chipSize * 0.5)} strokeWidth={2} />
              )}
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-20 lg:pt-0">
        
        {/* Mobile Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="lg:hidden flex w-full justify-center order-1 z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 glass backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse shadow-glow" />
            <span className="text-xs font-medium tracking-wide text-gold-soft uppercase">Available for freelance</span>
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
            <span className="text-sm font-medium tracking-wide text-gold-soft uppercase">Available for freelance</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1]"
          >
            Creative <br className="hidden sm:block" />
            <span className="text-gold-gradient animate-gradient">
              Visual Artist
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-medium">Lakshmi Verma</strong>. I specialize in crafting stunning visual identities, digital illustrations, and immersive brand experiences.
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
              data-cursor="hover"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gold/30 text-white text-sm sm:text-base hover:bg-gold/10 transition-colors duration-300"
              data-cursor="hover"
            >
              Let's Talk
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
            data-cursor="hover"
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
