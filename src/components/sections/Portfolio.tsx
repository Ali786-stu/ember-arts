import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
import f1 from "@/assets/furniture/furniture/1st.png";
import f2 from "@/assets/furniture/furniture/1-2-2026 (2).png";
import f3 from "@/assets/furniture/furniture/4-4-26.png";
import f4 from "@/assets/furniture/furniture/6-4-2026.png";
import f5 from "@/assets/furniture/furniture/9-3-2026.png";
import f6 from "@/assets/furniture/furniture/creative 3-4-2026.png";
import f7 from "@/assets/furniture/furniture/nilkamal (2).png";
import f8 from "@/assets/furniture/furniture/Nilkamal Furniture Post 12 Jan 2025.png";
import f9 from "@/assets/furniture/furniture/Nilkamal Furniture Post 15 Jan 2025 2.png";
import f10 from "@/assets/furniture/furniture/Nilkamal Furniture Post 20 Jan 2025.png";
import f11 from "@/assets/furniture/furniture/Nilkamal Furniture Post 22 Jan 2025.png";
import f12 from "@/assets/furniture/furniture/Nilkamal Furniture Post 28 Jan 2025.png";
import f13 from "@/assets/furniture/furniture/Nilkamal Furniture Post 31 Jan 2026 2.png";
import f14 from "@/assets/furniture/furniture/Nilkamal Furniture Post 31 Jan 2026.png";
import f15 from "@/assets/furniture/furniture/Nilkamal Furniture Post 7 Jan 2025.png";
import f16 from "@/assets/furniture/furniture/Nilkamal Furniture Post 8 Feb 2026.png";
import f17 from "@/assets/furniture/furniture/Nilkamal Homes Furniture Chair Design Post 6 Feb 2026.png";
import f18 from "@/assets/furniture/furniture/Nilkamal Homes Vasant Panchami Post 23 Jan 2026.png";
import f19 from "@/assets/furniture/furniture/SHRI 1 .png";

type Item = { src: string; title: string; client: string; tall?: boolean; gallery?: string[] };
const data: Record<string, Item[]> = {
  "Social Media": [
    { 
      src: f1, 
      title: "Furniture Brand Creatives", 
      client: "Social Media",
      gallery: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19]
    },
    { src: s2, title: "Organic Farm Story", client: "Zaphira Farms" },
    { src: s3, title: "Beauty Brand Carousel", client: "Studio Edit" },
  ],
  "Print Design": [
    { src: st1, title: "Premium Roll-up Banner", client: "Corporate Event", tall: true },
    { src: st2, title: "Product Launch Standee", client: "Brand Launch", tall: true },
    { src: p1, title: "Cinema Poster Series", client: "Editorial", tall: true },
    { src: p2, title: "Festival Celebration", client: "Community", tall: true },
  ],
  "Branding": [
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
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Prevent background scroll and hide navbar when modal is open
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const progressBar = document.querySelector('.fixed.top-0.left-0.right-0.z-\\[60\\]');
    
    if (open) {
      document.body.style.overflow = "hidden";
      if (navbar) (navbar as HTMLElement).style.display = "none";
      if (progressBar) (progressBar as HTMLElement).style.display = "none";
    } else {
      document.body.style.overflow = "unset";
      if (navbar) (navbar as HTMLElement).style.display = "block";
      if (progressBar) (progressBar as HTMLElement).style.display = "block";
    }
    return () => { 
      document.body.style.overflow = "unset";
      if (navbar) (navbar as HTMLElement).style.display = "block";
      if (progressBar) (progressBar as HTMLElement).style.display = "block";
    };
  }, [open]);

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!open?.gallery || !selectedImg) return;
    const idx = open.gallery.indexOf(selectedImg);
    if (idx < open.gallery.length - 1) setSelectedImg(open.gallery[idx + 1]);
    else setSelectedImg(open.gallery[0]);
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!open?.gallery || !selectedImg) return;
    const idx = open.gallery.indexOf(selectedImg);
    if (idx > 0) setSelectedImg(open.gallery[idx - 1]);
    else setSelectedImg(open.gallery[open.gallery.length - 1]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImg) return;
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, open]);

  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="My Work" subtitle="A selection of my Best Design Work across Branding, Social Media, and Print." />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              data-cursorpointer={true}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all ${tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {tab === t && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-gold rounded-full shadow-luxury"
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
                data-cursorpointer={true}
                className={`group relative overflow-hidden rounded-3xl glass cursor-none border-[3px] border-gold/40 hover:border-gold transition-all duration-700 shadow-[0_20px_50px_rgba(212,175,55,0.1)] ${item.tall ? "md:row-span-2 aspect-[3/5]" : "aspect-square"
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
            className="fixed inset-0 z-[9999] bg-[#050505] overflow-y-scroll overflow-x-hidden select-none"
          >
            {/* Gallery Layout for Album items */}
            {open.gallery ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen w-full flex flex-col relative"
              >
                {/* Sticky Header */}
                <div className="sticky top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-6 md:py-8 bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 z-[110]">
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.6em] uppercase text-gold mb-1 font-semibold">Showcase</span>
                    <h2 className="font-display italic text-2xl md:text-5xl text-white">{open.title}</h2>
                  </div>
                  <button
                    onClick={() => setOpen(null)}
                    className="h-10 w-10 md:h-14 md:w-14 rounded-full glass-strong border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-500 group"
                    data-cursorpointer={true}
                  >
                    <span className="text-2xl md:text-3xl leading-none group-hover:rotate-90 transition-transform duration-500 text-white font-light">×</span>
                  </button>
                </div>

                {/* Grid Content */}
                <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-10 md:py-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-10">
                    {open.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                        onClick={() => setSelectedImg(img)}
                        className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden group border-[3px] border-gold/40 hover:border-gold transition-all duration-1000 shadow-[0_20px_50px_rgba(212,175,55,0.1)] bg-white/5"
                        data-cursorpointer={true}
                      >
                        {/* Running Golden Border Effect (Hover) */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-[-1px] rounded-[inherit] p-[3px] bg-gradient-to-r from-transparent via-gold to-transparent animate-border-beam bg-[length:200%_100%]" />
                        </div>

                        <img 
                          src={img} 
                          alt={`${open.title} ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-6 md:p-8">
                          <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-2 font-bold">Zoom View</p>
                          <h5 className="font-display italic text-xl md:text-2xl text-white">Project Case {idx + 1}</h5>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Simple Modal for non-gallery items */
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full mx-6 glass-strong rounded-3xl overflow-hidden shadow-luxury"
              >
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:bg-foreground/10"
                >
                  ×
                </button>
                <img src={open.src} alt={open.title} className="w-full max-h-[70vh] object-contain bg-background" />
                <div className="p-8 border-t border-white/5">
                  <h3 className="font-display italic text-2xl text-white">{open.title}</h3>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Individual Gallery Images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            {/* Nav Buttons - Elegant Responsive Design */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-50 pointer-events-none px-4 md:px-10">
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImg}
                className="h-12 w-12 md:h-20 md:w-20 rounded-full glass-strong flex items-center justify-center hover:bg-gold/10 transition-all pointer-events-auto group border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-black/20"
                data-cursorpointer={true}
              >
                <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-white/70 group-hover:text-gold transition-colors" strokeWidth={1} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImg}
                className="h-12 w-12 md:h-20 md:w-20 rounded-full glass-strong flex items-center justify-center hover:bg-gold/10 transition-all pointer-events-auto group border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-black/20"
                data-cursorpointer={true}
              >
                <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-white/70 group-hover:text-gold transition-colors" strokeWidth={1} />
              </motion.button>
            </div>

            <motion.div
              key={selectedImg}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[70vh] md:h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                {/* Lightbox Running Border */}
                <div className="absolute inset-[-1px] rounded-[inherit] p-[2px] bg-gradient-to-r from-transparent via-gold to-transparent animate-border-beam bg-[length:200%_100%] z-0" />
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedImg}
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={selectedImg} 
                    alt="Enlarged view" 
                    className="w-full h-full object-contain relative z-10 bg-[#050505]/50"
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Redesigned Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[120] h-12 w-12 md:h-16 md:w-16 rounded-full glass-strong flex items-center justify-center hover:bg-red-500/10 transition-all border border-white/10 group shadow-luxury"
              data-cursorpointer={true}
            >
              <X className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-red-400 transition-colors" strokeWidth={1.5} />
            </motion.button>

            {/* Counter at Bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-50">
              <p className="text-[10px] md:text-xs tracking-[1em] text-gold uppercase font-bold drop-shadow-glow">
                {open?.gallery ? `${open.gallery.indexOf(selectedImg) + 1} / ${open.gallery.length}` : ""}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
