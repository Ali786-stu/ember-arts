import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const items = [
  { year: "2022 — 2023", school: "Dream Zone, Hazratganj (Lucknow)", degree: "Diploma in Graphic Design" },
  { year: "2023 — 2025", school: "Sardar Vallabhbhai Patel, Sultanpur", degree: "Master of Arts (M.A.)" },
  { year: "2020 — 2023", school: "Sardar Vallabhbhai Patel, Sultanpur", degree: "Bachelor of Arts (B.A.)" },
  { year: "2019 — 2020", school: "S.B. Inter College, Ayodhya", degree: "Senior Secondary" },
  { year: "2017 — 2018", school: "S.B. Inter College, Ayodhya", degree: "Higher Secondary" },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="The Learning Journey" />
        <div className="relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-violet to-transparent origin-top"
          />
          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.year + it.school}
                initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="absolute left-4 md:left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-glow" />
                <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <span className="inline-block glass rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase text-gold-gradient">
                    {it.year}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-foreground leading-tight">{it.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.school}</p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
