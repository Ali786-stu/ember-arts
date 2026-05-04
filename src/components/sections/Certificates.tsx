import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import React, { useState } from "react";
import { Award } from "lucide-react";

// Local realistic icons for certificates
import certWeb from "@/assets/cert-web.png";
import certCcc from "@/assets/cert-ccc.png";
import certGov from "@/assets/cert-gov.png";
import certFashion from "@/assets/cert-fashion.png";

const certs = [
  { 
    title: "Web Designing Certificate", 
    body: "Certified in modern web design fundamentals & UI principles.", 
    icon: certWeb,
    color: "from-blue-500/20 to-indigo-500/20",
    glow: "bg-blue-500/20"
  },
  { 
    title: "CCC Certificate", 
    body: "Course on Computer Concepts — government-recognized IT credential.", 
    icon: certCcc,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "bg-emerald-500/20"
  },
  { 
    title: "State Government Award", 
    body: "Scout & Guide — recognition for service and discipline.", 
    icon: certGov,
    color: "from-amber-500/20 to-orange-500/20",
    glow: "bg-amber-500/20"
  },
  { 
    title: "Kamya Fashion Carnival", 
    body: "Graphic Designer — Season 1, Lucknow (2023).", 
    icon: certFashion,
    color: "from-fuchsia-500/20 to-pink-500/20",
    glow: "bg-fuchsia-500/20"
  },
];

function CertificateCard({ c, isHovered }: { c: typeof certs[number], isHovered?: boolean }) {
  return (
    <div 
      className={`relative w-full h-full glass-strong rounded-[40px] p-8 overflow-hidden transition-all duration-500 border border-white/10 ${
        isHovered ? "border-white/30 shadow-2xl scale-[1.02]" : "shadow-xl"
      }`}
    >
      {/* Background Central Icon (Watermark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07] overflow-hidden">
        <motion.img 
          src={c.icon} 
          alt="" 
          animate={{ 
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.2 : 1 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-4/5 h-auto object-contain grayscale"
        />
      </div>

      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
      />

      <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-20`} />
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${c.glow} blur-[60px] opacity-40 transition-opacity`} />

      <div className="relative h-full flex flex-col z-10">
        <div className="mb-8 flex justify-between items-start">
          <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden p-2">
            <img src={c.icon} alt="Icon" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">ID Verified</span>
            <div className="w-12 h-[1px] bg-gold/30 mt-2" />
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight mb-4 drop-shadow-lg">
          {c.title}
        </h3>
        
        <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed mb-auto" data-cursorpointertext={true}>
          {c.body}
        </p>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/80 font-bold">Verified Credential</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 italic">2023-2024</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4 opacity-[0.05] pointer-events-none">
        <Award className="w-32 h-32 rotate-12" />
      </div>
    </div>
  );
}

export function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="relative pt-4 pb-32 px-6 overflow-hidden min-h-[750px] flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeading eyebrow="Credentials" title="Recognition & Awards" />
          <p className="mt-4 text-white/40 font-light max-w-xl mx-auto" data-cursorpointertext={true}>
            Explore my verified professional achievements.
          </p>
        </div>

        {/* Desktop View: 3D Floating Fan */}
        <div className="hidden md:flex relative h-[500px] items-center justify-center">
          <div className="relative w-full max-w-sm">
            {certs.map((c, i) => {
              const isHovered = hoveredIndex === i;
              const anyHovered = hoveredIndex !== null;
              
              const stackX = i * 10;
              const stackY = i * -10;
              const stackRotate = i * 2;
              
              const fanX = (i - (certs.length - 1) / 2) * 320;
              const fanRotate = (i - (certs.length - 1) / 2) * 10;

              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.8, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    zIndex: isHovered ? 50 : 10 + i,
                  }}
                  animate={{
                    x: anyHovered ? fanX : stackX,
                    y: anyHovered ? (isHovered ? -40 : 0) : stackY,
                    rotate: anyHovered ? fanRotate : stackRotate,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-[3/4]"
                >
                  <CertificateCard c={c} isHovered={isHovered} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Horizontal Slider */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 no-scrollbar -mx-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title + "-mobile"}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-none w-[85vw] snap-center aspect-[4/5]"
            >
              <CertificateCard c={c} />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Hint */}
        <div className="md:hidden text-center mt-4">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/20">
            <span>Scroll horizontally</span>
            <motion.div 
              animate={{ x: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >→</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
