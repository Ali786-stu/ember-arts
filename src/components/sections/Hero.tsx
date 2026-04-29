import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/lakshmi-portrait.jpg";

// Skill icons with brand-ish colors (using simple letters/symbols as logos)
const rings = [
  {
    size: 360,
    duration: 32,
    reverse: false,
    items: [
      { label: "Ps", color: "#31A8FF", bg: "#001E36" },
      { label: "Ai", color: "#FF9A00", bg: "#330000" },
      { label: "Id", color: "#FF3366", bg: "#49021F" },
      { label: "Ae", color: "#9999FF", bg: "#00005B" },
      { label: "CD", color: "#7CC242", bg: "#0E2200" },
    ],
  },
  {
    size: 470,
    duration: 50,
    reverse: true,
    items: [
      { label: "Brand", color: "#D4AF6E", bg: "#1a1108" },
      { label: "Type", color: "#9B6EDC", bg: "#150a25" },
      { label: "Logo", color: "#D4AF6E", bg: "#1a1108" },
      { label: "Print", color: "#9B6EDC", bg: "#150a25" },
      { label: "Social", color: "#D4AF6E", bg: "#1a1108" },
    ],
  },
];

function OrbitRing({
  size,
  duration,
  reverse,
  items,
}: {
  size: number;
  duration: number;
  reverse: boolean;
  items: { label: string; color: string; bg: string }[];
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-gold/15"
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((it, i) => {
        const angle = (i / items.length) * 360;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${angle}deg) translateY(-${size / 2}px)` }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-2xl glass-strong shadow-glow font-display text-sm font-bold"
              style={{
                width: it.label.length > 2 ? 64 : 44,
                height: 44,
                background: `linear-gradient(135deg, ${it.bg}, oklch(0.17 0.02 280 / 0.8))`,
                color: it.color,
                transform: `translate(-50%, -50%) rotate(${reverse ? angle : -angle}deg)`,
                boxShadow: `0 0 20px ${it.color}40`,
              }}
            >
              {it.label}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Hero() {
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left intentionally empty */}
        <div className="hidden lg:block" />

        {/* Right: portrait with rotating skill rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 1, ease: "easeOut" }}
          className="relative mx-auto flex items-center justify-center"
          style={{ width: "min(90vw, 680px)", height: "min(90vw, 680px)" }}
        >
          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-luxury blur-3xl opacity-30" />

          {/* Rings */}
          {rings.map((r, i) => (
            <OrbitRing key={i} {...r} />
          ))}

          {/* Center portrait */}
          <motion.div
            className="relative h-[340px] w-[340px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden glow-border shadow-luxury"
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

      {/* Scroll indicator */}
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
