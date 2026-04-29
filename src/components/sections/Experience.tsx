import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    company: "Digi Epitome Technology",
    role: "Graphic Designer",
    period: "Feb 2025 — Present",
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
    period: "Aug — Dec 2025",
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
    period: "Jun 2023 — Aug 2025",
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
    period: "3 Months · Lucknow",
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
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.1, duration: 0.7 }}
      className="perspective-1000 h-[340px]"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onClick={() => setFlipped(!flipped)}
      data-cursor="hover"
    >
      <motion.div
        className="relative h-full w-full preserve-3d transition-transform duration-700"
        style={{
          transform: `${flipped ? "rotateY(180deg)" : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}`,
        }}
        onMouseEnter={() => !flipped && setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-strong rounded-3xl p-8 glow-border flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <span className="text-xs tracking-[0.3em] uppercase text-gold-gradient">{exp.tag}</span>
              <span className="text-xs text-muted-foreground">{exp.period}</span>
            </div>
            <h3 className="mt-6 font-display text-2xl md:text-3xl text-foreground leading-tight">{exp.company}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{exp.role}</p>
          </div>
          <div className="relative">
            <p className="text-sm text-foreground/80 italic">{exp.summary}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-gold/80 flex items-center gap-2">
              Hover for details <span>→</span>
            </p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 bg-luxury text-primary-foreground flex flex-col justify-center">
          <h4 className="font-display text-xl mb-4">{exp.company}</h4>
          <ul className="space-y-3">
            {exp.details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-foreground/80 flex-none" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Where I've Created Magic" subtitle="Hover or tap each card to explore the work behind the role." />
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((e, i) => (
            <FlipCard key={e.company} exp={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
