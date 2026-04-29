import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const certs = [
  { title: "Web Designing Certificate", body: "Certified in modern web design fundamentals & UI principles.", icon: "🎨" },
  { title: "CCC Certificate", body: "Course on Computer Concepts — government-recognized IT credential.", icon: "💻" },
  { title: "State Government Award", body: "Scout & Guide — recognition for service and discipline.", icon: "🏆" },
  { title: "Kamya Fashion Carnival", body: "Graphic Designer — Season 1, Lucknow (2023).", icon: "✨" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certificates" title="Recognition & Credentials" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              data-cursor="hover"
              className="relative glass-strong rounded-3xl p-8 overflow-hidden group glow-border"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-colors" />
              <div className="relative">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-display text-lg text-foreground leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gold-gradient">Verified</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
