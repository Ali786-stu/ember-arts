import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "../SectionHeading";
import { Sparkles, Star } from "lucide-react";

const experiences = [
  {
    company: "Digi Epitome Technology",
    role: "Graphic Designer",
    period: "2025 — Present",
    summary: "Social media creatives, branding & posters",
    details: [
      "Social Media Creatives & Ad Designs",
      "Branding, Posters & Promotional Visuals",
      "Managed multiple design projects end-to-end",
    ],
    tag: "Current",
  },
  {
    company: "Zaphira Organic Farms",
    role: "Social Media Designer",
    period: "2025",
    summary: "Social media handling & marketing",
    details: [
      "Social media creatives & marketing designs",
      "Full social media handling",
      "Crafted earthy, organic brand visuals",
    ],
    tag: "2025",
  },
  {
    company: "The Times Idea",
    role: "Advertising Designer",
    period: "2023 — 2025",
    summary: "Advertising creatives & campaigns",
    details: [
      "Advertising creatives for major campaigns",
      "Posters, banners & promotional designs",
      "Maintained brand consistency across assets",
    ],
    tag: "2 Years",
  },
  {
    company: "Digifootprints",
    role: "Design Intern",
    period: "Lucknow",
    summary: "Logos, banners, digital ads",
    details: [
      "Logo and brand element design",
      "Website banners & digital ads",
      "Social media creatives",
    ],
    tag: "Internship",
  },
];

function FlipCard({ exp, i }: { exp: typeof experiences[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (flipped) return; // Don't tilt when flipped
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
      className="perspective-1000 min-h-[360px] md:h-[360px] group cursor-pointer"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setFlipped(false);
      }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
    >
      <motion.div
        className="relative h-full w-full preserve-3d"
        animate={{
          rotateX: flipped ? 0 : tilt.x,
          rotateY: flipped ? 180 : tilt.y,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Front */}
        {/* Removed backdrop-filter (glass classes) as it causes severe rendering glitches during 3D rotation in many browsers */}
        <div className="absolute inset-0 backface-hidden bg-[#151020] border border-gold/20 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-card group-hover:border-gold/40 transition-colors">
          {/* Decorative Corner */}
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-gold/20 to-violet/20 blur-2xl opacity-60" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] uppercase tracking-[0.2em] text-gold">
                <Star className="w-3 h-3 fill-gold text-gold" /> {exp.tag}
              </span>
              <span className="text-xs font-light tracking-wider text-white/50">{exp.period}</span>
            </div>
            <h3 className="mt-8 font-display italic text-3xl md:text-4xl text-white leading-tight">
              {exp.company}
            </h3>
            <p className="mt-3 text-sm md:text-base text-gold-soft uppercase tracking-widest font-medium">
              {exp.role}
            </p>
          </div>
          
          <div className="relative z-10 mt-auto pt-6 border-t border-white/5">
            <p className="text-sm text-white/60 font-light leading-relaxed">{exp.summary}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 group-hover:text-gold transition-colors">
              Explore role <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#2a1a3a] to-[#151020] border border-violet/30 rounded-3xl p-8 flex flex-col justify-center shadow-luxury">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay rounded-3xl" />
          <div className="relative z-10">
            <Sparkles className="w-8 h-8 text-gold/60 mb-6" />
            <h4 className="font-display italic text-2xl text-white mb-2">{exp.company}</h4>
            <p className="text-sm text-gold-soft uppercase tracking-widest mb-6 pb-6 border-b border-white/10">{exp.role}</p>
            <ul className="space-y-4">
              {exp.details.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-light text-white/80 leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-none" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background elegant gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-violet/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <SectionHeading 
          eyebrow="Experience" 
          title="Where I've Created Magic" 
          subtitle="Hover over each card to explore the work behind the role." 
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {experiences.map((e, i) => (
            <FlipCard key={e.company} exp={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
