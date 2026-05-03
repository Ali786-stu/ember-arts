import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import React, { useRef, useState, useEffect } from "react";
import { GraduationCap, BookOpen, School, MapPin } from "lucide-react";

const items = [
  {
    year: "2023 — 2025",
    school: "Sardar Vallabhbhai Patel, Sultanpur",
    degree: "Master of Arts (M.A.)",
    desc: "Advanced studies in arts and humanities, focusing on creative research.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    year: "2022 — 2023",
    school: "Dream Zone, Hazratganj (Lucknow)",
    degree: "Diploma in Graphic Design",
    desc: "Comprehensive training in visual communication and design software.",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    year: "2020 — 2023",
    school: "Sardar Vallabhbhai Patel, Sultanpur",
    degree: "Bachelor of Arts (B.A.)",
    desc: "Foundational degree in arts with an emphasis on visual aesthetics.",
    icon: <School className="w-5 h-5" />
  },
  {
    year: "2019 — 2020",
    school: "S.B. Inter College, Ayodhya",
    degree: "Senior Secondary",
    desc: "Completed intermediate education with a focus on creative subjects.",
    icon: <MapPin className="w-5 h-5" />
  },
  {
    year: "2017 — 2018",
    school: "S.B. Inter College, Ayodhya",
    degree: "Higher Secondary",
    desc: "Foundational high school education in Ayodhya.",
    icon: <MapPin className="w-5 h-5" />
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" ref={containerRef} className="relative pt-8 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          eyebrow="Journey"
          title="Education & Learning"
          subtitle="Watch the energy flow from each achievement into my life's timeline."
        />

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />

          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-violet-500 to-transparent origin-top -translate-x-1/2 hidden md:block z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          />

          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/5 md:hidden" />

          <div className="space-y-32 md:space-y-40">
            {items.map((it, i) => (
              <TimelineItem key={i} item={it} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: typeof items[0], index: number }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const update = () => {
        setDimensions({
          width: cardRef.current?.offsetWidth || 0,
          height: cardRef.current?.offsetHeight || 0
        });
      };
      update();
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
  }, []);

  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center 60%"]
  });

  const pathLength = useSpring(cardScroll, { stiffness: 60, damping: 20 });
  const opacity = useTransform(cardScroll, [0, 0.1], [0, 1]);

  const radius = 32;
  const bridgeLength = 64;

  const getPath = () => {
    const { width, height } = dimensions;
    if (width === 0) return "";

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // On mobile, the timeline is always on the left of the card.
    const isTimelineOnLeft = isEven || isMobile;

    if (isTimelineOnLeft) {
      // Timeline is to the LEFT of the card (Right side card or Mobile)
      return `
        M 0, ${height / 2}
        L 0, ${radius}
        A ${radius},${radius} 0 0 1 ${radius},0
        L ${width - radius}, 0
        A ${radius},${radius} 0 0 1 ${width},${radius}
        L ${width}, ${height - radius}
        A ${radius},${radius} 0 0 1 ${width - radius},${height}
        L ${radius}, ${height}
        A ${radius},${radius} 0 0 1 0,${height - radius}
        L 0, ${height / 2}
        L ${-bridgeLength}, ${height / 2}
      `;
    } else {
      // Timeline is to the RIGHT of the card (Left side card)
      return `
        M ${width}, ${height / 2}
        L ${width}, ${radius}
        A ${radius},${radius} 0 0 0 ${width - radius},0
        L ${radius}, 0
        A ${radius},${radius} 0 0 0 0,${radius}
        L 0, ${height - radius}
        A ${radius},${radius} 0 0 0 ${radius},${height}
        L ${radius}, ${height}
        L ${width - radius}, ${height}
        A ${radius},${radius} 0 0 0 ${width},${height - radius}
        L ${width}, ${height / 2}
        L ${width + bridgeLength}, ${height / 2}
      `;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-center justify-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 md:-translate-y-1/2 z-30 shadow-[0_0_10px_rgba(212,175,55,0.8)]"
      />

      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
        <div ref={cardRef} className="relative group p-8 rounded-[32px] glass-strong border border-white/5 hover:border-gold/20 transition-all duration-500 hover:shadow-luxury">

          <div className="absolute -inset-[1px] pointer-events-none overflow-visible z-20">
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              fill="none"
              overflow="visible"
              className="overflow-visible w-full h-full"
            >
              <motion.path
                d={getPath()}
                stroke="url(#grad-line)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength, opacity }}
              />
              <defs>
                <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-gold-gradient font-bold mb-6">
            {item.icon}
            {item.year}
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-gold transition-colors duration-500">
            {item.degree}
          </h3>

          <p className="text-white/60 font-medium mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gold/50" />
            {item.school}
          </p>

          <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">
            {item.desc}
          </p>

          <div className="absolute -bottom-4 -right-4 text-8xl font-display italic text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-all duration-700 select-none">
            {item.year.split('—')[0].trim()}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
