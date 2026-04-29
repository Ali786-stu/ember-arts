import { motion } from "framer-motion";
import portrait from "@/assets/lakshmi-portrait.jpg";
import { SectionHeading } from "../SectionHeading";

const stats = [
  { v: "3+", l: "Years Experience" },
  { v: "50+", l: "Projects Delivered" },
  { v: "4", l: "Brand Clients" },
  { v: "100%", l: "Passion" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="The Designer Behind the Pixels" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            data-cursor="hover"
          >
            <div className="absolute -inset-4 bg-luxury rounded-3xl blur-2xl opacity-30" />
            <div className="relative overflow-hidden rounded-3xl glow-border">
              <img
                src={portrait}
                alt="Lakshmi Verma"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                width={800}
                height={800}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4">
                <p className="font-display italic text-lg">"Design is intelligence made visible."</p>
              </div>
            </div>
            <motion.div
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl md:text-4xl mb-6 leading-tight">
              Creative & detail-oriented <span className="text-gold-gradient italic">graphic designer</span> with a love for branding and storytelling.
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm passionate about crafting meaningful, modern, and aesthetic designs — from social media creatives and posters to full brand identities. My foundation in branding, typography, and visual communication helps me turn ideas into visuals that resonate.
              </p>
              <p>
                Always eager to learn, adapt, and bring fresh ideas to dynamic teams.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-3xl text-gold-gradient">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Branding", "Typography", "Social Media", "Posters", "Logos", "Vector Art"].map((t) => (
                <span key={t} className="glass rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
