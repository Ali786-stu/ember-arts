import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const software = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 92 },
  { name: "Adobe InDesign", level: 85 },
  { name: "CorelDRAW", level: 88 },
  { name: "Adobe After Effects", level: 75 },
];
const expertise = [
  { name: "Branding & Identity", level: 90 },
  { name: "Typography & Layout", level: 92 },
  { name: "Social Media Design", level: 95 },
  { name: "Vector Illustration", level: 85 },
  { name: "Poster & Banner Design", level: 90 },
];
const professional = [
  { name: "Creative Problem-Solving", level: 95 },
  { name: "Attention to Detail", level: 95 },
  { name: "Time Management", level: 90 },
  { name: "Quick Learning & Adaptability", level: 92 },
];

function Bar({ name, level, i }: { name: string; level: number; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
    >
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-gold-gradient font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-luxury rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 + i * 0.05 }}
        />
      </div>
    </motion.div>
  );
}

function Column({ title, items, idx }: { title: string; items: { name: string; level: number }[]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.15 }}
      className="glass-strong rounded-3xl p-8 glow-border"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="font-display text-3xl text-gold-gradient">0{idx + 1}</span>
        <h3 className="font-display text-xl text-foreground">{title}</h3>
      </div>
      <div className="space-y-5">
        {items.map((it, i) => (
          <Bar key={it.name} {...it} i={i} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Toolbox & Expertise" subtitle="A balanced mix of technical mastery, creative thinking, and reliable delivery." />
        <div className="grid lg:grid-cols-3 gap-6">
          <Column title="Design Software" items={software} idx={0} />
          <Column title="Design Expertise" items={expertise} idx={1} />
          <Column title="Professional Skills" items={professional} idx={2} />
        </div>
      </div>
    </section>
  );
}
