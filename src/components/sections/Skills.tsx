import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { 
  Fingerprint, Type, Share2, PenTool, Image as ImageIcon, 
  Lightbulb, Target, Clock, RefreshCw, MessageSquare 
} from "lucide-react";
import React, { useState } from "react";

// Local generated images for the skills section
import softwareImg from "@/assets/skills-software.png";
import designImg from "@/assets/skills-design.png";
import professionalImg from "@/assets/skills-professional.png";

const categories = [
  {
    num: "01",
    title: "Software Stack",
    desc: "The tools I use to bring ideas to life.",
    items: [
      { name: "Adobe Photoshop", abbr: "Ps", color: "bg-[#001E36] border-[#31A8FF] text-[#31A8FF]" },
      { name: "Adobe Illustrator", abbr: "Ai", color: "bg-[#330000] border-[#FF9A00] text-[#FF9A00]" },
      { name: "Adobe InDesign", abbr: "Id", color: "bg-[#49021F] border-[#FF3366] text-[#FF3366]" },
      { name: "CorelDRAW", abbr: "Cd", color: "bg-[#051f14] border-[#10b981] text-[#10b981]" },
      { name: "After Effects", abbr: "Ae", color: "bg-[#00005B] border-[#9999FF] text-[#9999FF]" },
    ],
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    borderHover: "hover:border-blue-500/50",
    bgImage: softwareImg,
  },
  {
    num: "02",
    title: "Design Expertise",
    desc: "Core capabilities that define my creative process.",
    items: [
      { name: "Branding & Identity", Icon: Fingerprint, color: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400" },
      { name: "Typography & Layout", Icon: Type, color: "bg-purple-500/10 border-purple-500/30 text-purple-400" },
      { name: "Social Media Design", Icon: Share2, color: "bg-pink-500/10 border-pink-500/30 text-pink-400" },
      { name: "Vector Illustration", Icon: PenTool, color: "bg-violet-500/10 border-violet-500/30 text-violet-400" },
      { name: "Poster Design", Icon: ImageIcon, color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
    ],
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    borderHover: "hover:border-violet-500/50",
    bgImage: designImg,
  },
  {
    num: "03",
    title: "Professional",
    desc: "The soft skills that ensure smooth collaboration.",
    items: [
      { name: "Creative Problem-Solving", Icon: Lightbulb, color: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
      { name: "Attention to Detail", Icon: Target, color: "bg-orange-500/10 border-orange-500/30 text-orange-400" },
      { name: "Time Management", Icon: Clock, color: "bg-rose-500/10 border-rose-500/30 text-rose-400" },
      { name: "Adaptability", Icon: RefreshCw, color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
      { name: "Communication", Icon: MessageSquare, color: "bg-red-500/10 border-red-500/30 text-red-400" },
    ],
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    borderHover: "hover:border-orange-500/50",
    bgImage: professionalImg,
  },
];

function SkillPillar({ cat, i }: { cat: typeof categories[0]; i: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group flex-1 lg:hover:flex-[1.8] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[40px] overflow-hidden border border-white/10 bg-[#0d0914] ${cat.borderHover} cursor-default flex flex-col h-auto lg:h-[600px]`}
    >
      {/* Water Ripple Effect Layer */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[0, 1, 2].map((n) => (
            <motion.div
              key={n}
              className="absolute rounded-full border border-white/20"
              initial={{ width: 0, height: 0, opacity: 0.5, x: mousePos.x, y: mousePos.y }}
              animate={{ 
                width: 800, 
                height: 800, 
                opacity: 0,
                x: mousePos.x - 400,
                y: mousePos.y - 400
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: n * 0.8,
                ease: "easeOut"
              }}
              style={{ filter: "blur(1px)" }}
            />
          ))}
        </div>
      )}

      {/* Dynamic Gradient Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
      
      {/* Shape-Shifting Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        initial={{ borderRadius: "40px" }}
        animate={{ 
          borderRadius: isHovered ? "100px 40px 100px 40px" : "40px",
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.div 
          animate={{
            scale: isHovered ? [1.1, 1.2, 1.1] : [1.05, 1.15, 1.05],
            x: isHovered ? [0, -30, 0] : [0, -15, 0],
            rotate: isHovered ? [0, 2, -2, 0] : [0, 1, -1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
          style={{ backgroundImage: `url('${cat.bgImage}')` }} 
        />
      </motion.div>
      
      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0914]/40 to-[#0d0914]/95 pointer-events-none z-10" />

      {/* Giant Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="font-display italic text-[12rem] lg:text-[18rem] leading-none opacity-[0.04] lg:group-hover:opacity-[0.08] transform lg:group-hover:scale-50 lg:group-hover:-translate-y-24 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}
        >
          {cat.num}
        </motion.div>
      </div>

      <div className="relative h-full p-8 md:p-10 flex flex-col pointer-events-none z-30">
        <div className="flex items-start justify-between">
          <span className="font-display italic text-2xl text-white/50 group-hover:text-white transition-colors duration-500 drop-shadow-md">
            {cat.num}
          </span>
          <div className="w-8 h-px bg-white/30 group-hover:bg-white/80 group-hover:w-16 transition-all duration-700 mt-3" />
        </div>

        <div className="mt-auto transition-transform duration-700 transform lg:group-hover:-translate-y-4">
          <h3 className="font-display text-3xl md:text-4xl text-white drop-shadow-md">
            {cat.title}
          </h3>
          <p className="mt-2 text-sm text-white/70 font-light opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs whitespace-normal drop-shadow-md">
            {cat.desc}
          </p>
        </div>

        <div className="overflow-hidden mt-6 opacity-100 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-[300px] transition-all duration-700 ease-in-out pointer-events-auto">
          <ul className="space-y-4 pt-6 border-t border-white/10">
            {cat.items.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-center gap-4 text-white/80 group/item transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out"
                style={{ transitionDelay: `${idx * 50 + 100}ms` }}
              >
                {item.abbr ? (
                  <div className={`w-7 h-7 flex-none rounded-[4px] border ${item.color} flex items-center justify-center font-sans font-bold text-[11px] tracking-tight shadow-lg transition-transform duration-300 group-hover/item:scale-110`}>
                    {item.abbr}
                  </div>
                ) : item.Icon ? (
                  <div className={`w-7 h-7 flex-none rounded-[4px] border ${item.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/item:scale-110`}>
                    <item.Icon className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white transition-colors duration-300 flex-none shadow-md" />
                )}
                <span className="font-light text-sm md:text-base group-hover/item:text-white transition-colors duration-300 drop-shadow-md">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative pt-12 pb-32 px-6 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center overflow-hidden z-0 opacity-10 mix-blend-screen">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-display italic text-[15rem] leading-none text-transparent"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}
        >
          CREATIVE ARSENAL • DESIGN EXPERTISE • SOFTWARE STACK • CREATIVE ARSENAL • DESIGN EXPERTISE • SOFTWARE STACK • 
        </motion.div>
        
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-display text-[15rem] leading-none text-transparent mt-8 ml-[-500px]"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}
        >
          AESTHETICS • INNOVATION • ART DIRECTION • AESTHETICS • INNOVATION • ART DIRECTION • 
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl relative z-10 w-full">
        <SectionHeading 
          eyebrow="Expertise" 
          title="The Creative Arsenal" 
          subtitle="Hover over the pillars to explore my specific skills and tools." 
        />

        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[600px] gap-6 mt-8">
          {categories.map((cat, i) => (
            <SkillPillar key={cat.num} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
