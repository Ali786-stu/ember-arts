import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import s1 from "@/assets/work-social-1.jpg";
import s2 from "@/assets/work-social-2.jpg";
import s3 from "@/assets/work-social-3.jpg";
import st1 from "@/assets/work-standee-1.jpg";
import st2 from "@/assets/work-standee-2.jpg";
import p1 from "@/assets/work-poster-1.jpg";
import p2 from "@/assets/work-poster-2.jpg";
import b1 from "@/assets/work-brand-1.jpg";
import b2 from "@/assets/work-brand-2.jpg";
import a1 from "@/assets/work-ad-1.jpg";
import a2 from "@/assets/work-ad-2.jpg";

type Item = { src: string; title: string; client: string; tall?: boolean };
const data: Record<string, Item[]> = {
  "Social Media": [
    { src: s1, title: "Fashion Carnival Series", client: "Kamya Fashion" },
    { src: s2, title: "Organic Farm Story", client: "Zaphira Farms" },
    { src: s3, title: "Beauty Brand Carousel", client: "Studio Edit" },
  ],
  "Standees": [
    { src: st1, title: "Premium Roll-up Banner", client: "Corporate Event", tall: true },
    { src: st2, title: "Product Launch Standee", client: "Brand Launch", tall: true },
  ],
  "Posters & Banners": [
    { src: p1, title: "Cinema Poster Series", client: "Editorial", tall: true },
    { src: p2, title: "Festival Celebration", client: "Community", tall: true },
  ],
  "Branding & Logos": [
    { src: b1, title: "Monogram Identity", client: "Luxury Brand" },
    { src: b2, title: "Stationery System", client: "Studio Brand" },
  ],
  "Digital Ads": [
    { src: a1, title: "E-commerce Hero Ad", client: "Times Idea" },
    { src: a2, title: "Mobile App Promotion", client: "Digi Epitome" },
  ],
};

const tabs = Object.keys(data);

export function Portfolio() {
  const [tab, setTab] = useState(tabs[0]);
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="Selected Works" subtitle="A curated glimpse into recent design work across categories." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              data-cursor="hover"
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === t && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-luxury rounded-full shadow-luxury"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {data[tab].map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(item)}
                data-cursor="hover"
                className={`group relative overflow-hidden rounded-3xl glass cursor-none ${
                  item.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold-gradient">{item.client}</p>
                  <h4 className="mt-1 font-display text-xl text-foreground">{item.title}</h4>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project →
                  </span>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[200] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-strong rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:bg-foreground/10"
              >
                ×
              </button>
              <img src={open.src} alt={open.title} className="w-full max-h-[70vh] object-contain bg-background" />
              <div className="p-6 border-t border-border">
                <p className="text-xs tracking-[0.3em] uppercase text-gold-gradient">{open.client}</p>
                <h3 className="mt-2 font-display text-2xl">{open.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
