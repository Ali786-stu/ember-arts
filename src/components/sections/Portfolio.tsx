import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

// Furniture Design
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
import f20 from "@/assets/furniture/furniture/f1.jpeg";
import f21 from "@/assets/furniture/furniture/f2.jpeg";

// Meta Ads
import ma1 from "@/assets/Meta Ads/Meta Ads/111.jpg";
import ma2 from "@/assets/Meta Ads/Meta Ads/18-7-2026.png";
import ma3 from "@/assets/Meta Ads/Meta Ads/222.png";
import ma4 from "@/assets/Meta Ads/Meta Ads/333.png";
import ma5 from "@/assets/Meta Ads/Meta Ads/ads final crm.jpg";
import ma6 from "@/assets/Meta Ads/Meta Ads/ads for a website (2).jpg";
import ma7 from "@/assets/Meta Ads/Meta Ads/Akshaya Tritiya.png";
import ma8 from "@/assets/Meta Ads/Meta Ads/Brahmavarchas Yoga Post.png";
import ma9 from "@/assets/Meta Ads/Meta Ads/creative ads.jpg";
import ma10 from "@/assets/Meta Ads/Meta Ads/crm ads.png";
import ma11 from "@/assets/Meta Ads/Meta Ads/crm reel size post.png";
import ma12 from "@/assets/Meta Ads/Meta Ads/Gemini_Generated_Image_4hf1zx4hf1zx4hf1 (2).png";
import ma13 from "@/assets/Meta Ads/Meta Ads/guru (2).png";
import ma14 from "@/assets/Meta Ads/Meta Ads/Instagram-Post-Mockups.png";
import ma15 from "@/assets/Meta Ads/Meta Ads/Instagram.png";
import ma16 from "@/assets/Meta Ads/Meta Ads/M Pharma.jpg";
import ma17 from "@/assets/Meta Ads/Meta Ads/new ad  21-4-2026.png";
import ma18 from "@/assets/Meta Ads/Meta Ads/new post 20-4-2026.png";
import ma19 from "@/assets/Meta Ads/Meta Ads/passinate 222.png";
import ma20 from "@/assets/Meta Ads/Meta Ads/PASSIONATE-Recovered.png";
import ma21 from "@/assets/Meta Ads/Meta Ads/Untitled design (6).png";
import ma22 from "@/assets/Meta Ads/Meta Ads/website new add.png";
import ma23 from "@/assets/Meta Ads/Meta Ads/website.png";
import ma24 from "@/assets/Meta Ads/Meta Ads/yoga.png";

// Medical & Healthcare
import mh1 from "@/assets/Medical & Healthcare/Medical & Healthcare/1 (2).png";
import mh2 from "@/assets/Medical & Healthcare/Medical & Healthcare/1.png";
import mh3 from "@/assets/Medical & Healthcare/Medical & Healthcare/11.png";
import mh4 from "@/assets/Medical & Healthcare/Medical & Healthcare/12.png";
import mh5 from "@/assets/Medical & Healthcare/Medical & Healthcare/13.png";
import mh6 from "@/assets/Medical & Healthcare/Medical & Healthcare/14.png";
import mh7 from "@/assets/Medical & Healthcare/Medical & Healthcare/15.png";
import mh8 from "@/assets/Medical & Healthcare/Medical & Healthcare/2 (3).png";
import mh9 from "@/assets/Medical & Healthcare/Medical & Healthcare/2.png";
import mh10 from "@/assets/Medical & Healthcare/Medical & Healthcare/2132, Vipul Khand, Gomti Nagar, Near Sahara Shahar Lucknow (3).png";
import mh11 from "@/assets/Medical & Healthcare/Medical & Healthcare/3.png";
import mh12 from "@/assets/Medical & Healthcare/Medical & Healthcare/5.png";
import mh13 from "@/assets/Medical & Healthcare/Medical & Healthcare/Ad Post 30 Oct 2025.png";
import mh14 from "@/assets/Medical & Healthcare/Medical & Healthcare/Blue and White Modern Dental Care Instagram Post (3).png";
import mh15 from "@/assets/Medical & Healthcare/Medical & Healthcare/Blue and White Modern Home Appliance Repair Instagram Post.png";
import mh16 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Package  Ad Post 5 Nov 2025 2.png";
import mh17 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Post 13 Nov 2025.png";
import mh18 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Post 17 Nov 2025.png";
import mh19 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Post 27 Nov 2025.png";
import mh20 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Post 6 Nov 2025 2.png";
import mh21 from "@/assets/Medical & Healthcare/Medical & Healthcare/Brahmavarchas Yoga Post 7 Nov 2025.png";
import mh22 from "@/assets/Medical & Healthcare/Medical & Healthcare/varanasi creative.jpg";
import mh23 from "@/assets/Medical & Healthcare/Medical & Healthcare/YOGA.......png";

// GYM CREATIVE
import gc1 from "@/assets/GYM CREATIVE/GYM CREATIVE/Black and Blue Modern Minimalist Fitness Apparel Instagram Post (2).png";
import gc2 from "@/assets/GYM CREATIVE/GYM CREATIVE/Black and Orange Modern Gym Instagram Post (1).png";
import gc3 from "@/assets/GYM CREATIVE/GYM CREATIVE/Black Orange Modern Fitness Gym Instagram Post (2).png";
import gc4 from "@/assets/GYM CREATIVE/GYM CREATIVE/Consistency (2).jpg";
import gc5 from "@/assets/GYM CREATIVE/GYM CREATIVE/creative psot.png";
import gc6 from "@/assets/GYM CREATIVE/GYM CREATIVE/Gym Discipline.jpg";
import gc7 from "@/assets/GYM CREATIVE/GYM CREATIVE/gym fitness (2).png";
import gc8 from "@/assets/GYM CREATIVE/GYM CREATIVE/Transformation.png";
import gc9 from "@/assets/GYM CREATIVE/GYM CREATIVE/Untitled-2 (2).png";
import gc10 from "@/assets/GYM CREATIVE/GYM CREATIVE/Weight Loss Tips.jpg";

// Educational creative
import ec1 from "@/assets/Educational creative/Educational creative/1 creative (2).jpg";
import ec2 from "@/assets/Educational creative/Educational creative/111111.png";
import ec3 from "@/assets/Educational creative/Educational creative/ALL CREATIVS.jpg";
import ec4 from "@/assets/Educational creative/Educational creative/creative.png";
import ec5 from "@/assets/Educational creative/Educational creative/ojd eduversity ,_.png";
import ec6 from "@/assets/Educational creative/Educational creative/Practice Material.jpg";
import ec7 from "@/assets/Educational creative/Educational creative/School Admission Images Changed.png";
import ec8 from "@/assets/Educational creative/Educational creative/SUMMER TRAINING 2026 (3).png";
import ec9 from "@/assets/Educational creative/Educational creative/SUMMER TRAINING 2026.png";
import ec10 from "@/assets/Educational creative/Educational creative/Untitled design (7).png";
import ec11 from "@/assets/Educational creative/Educational creative/Untitled design (8).png";
import ec12 from "@/assets/Educational creative/Educational creative/Untitled-1 (4).jpg";
import ec13 from "@/assets/Educational creative/Educational creative/WhatsApp Image 2026-03-01 at 5.29.36 PM.jpeg";
import ec14 from "@/assets/Educational creative/Educational creative/WhatsApp Image 2026-03-07 at 3.50.52 PM.jpeg";
import ec15 from "@/assets/Educational creative/Educational creative/WhatsApp Image 2026-03-10 at 4.54.03 PM.jpeg";
import ec16 from "@/assets/Educational creative/Educational creative/WhatsApp Image 2026-03-10 at 4.54.17 PM (2).jpeg";
import ec17 from "@/assets/Educational creative/Educational creative/WhatsApp Image 2026-03-10 at 4.54.31 PM.jpeg";
import ec18 from "@/assets/Educational creative/Educational creative/White and Red Modern Study In USA Instagram Post (1).png";

// Appliance Marketing Post
import ap1 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/Aapka RO Safe Hai.png";
import ap2 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/cob light.png";
import ap3 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/creative 2.png";
import ap4 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/fan.png";
import ap5 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/SAFETY.png";
import ap6 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/SQUARE FAN.png";
import ap7 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/summer.png";
import ap8 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/SWITCH.png";
import ap9 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/USB Star 4+1 Surge & Spikeguard.png";
import ap10 from "@/assets/Appliance Marketing Post/Appliance Marketing Post/White Blue Minimalist HVAC Services Instagram Post.png";

type Item = { src: string; title: string; client: string; tall?: boolean; gallery?: string[] };
const data: Record<string, Item[]> = {
  "Meta Ads": [
    { 
      src: ma1, 
      title: "Meta Ads Showcase", 
      client: "Meta Ads",
      gallery: [ma1, ma2, ma3, ma4, ma5, ma6, ma7, ma8, ma9, ma10, ma11, ma12, ma13, ma14, ma15, ma16, ma17, ma18, ma19, ma20, ma21, ma22, ma23, ma24]
    }
  ],
  "Furniture Design": [
    { 
      src: f1, 
      title: "Luxury Furniture Creatives", 
      client: "Furniture Design",
      gallery: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21]
    }
  ],
  "Medical & Healthcare": [
    { 
      src: mh1, 
      title: "Healthcare Brandings", 
      client: "Medical & Healthcare",
      gallery: [mh1, mh2, mh3, mh4, mh5, mh6, mh7, mh8, mh9, mh10, mh11, mh12, mh13, mh14, mh15, mh16, mh17, mh18, mh19, mh20, mh21, mh22, mh23]
    }
  ],
  "GYM CREATIVE": [
    { 
      src: gc1, 
      title: "Fitness & Gym Ads", 
      client: "GYM CREATIVE",
      gallery: [gc1, gc2, gc3, gc4, gc5, gc6, gc7, gc8, gc9, gc10]
    }
  ],
  "Educational creative": [
    { 
      src: ec1, 
      title: "Educational Social Posts", 
      client: "Educational creative",
      gallery: [ec1, ec2, ec3, ec4, ec5, ec6, ec7, ec8, ec9, ec10, ec11, ec12, ec13, ec14, ec15, ec16, ec17, ec18]
    }
  ],
  "Appliance Marketing Post": [
    { 
      src: ap1, 
      title: "Home Appliance Ads", 
      client: "Appliance Marketing Post",
      gallery: [ap1, ap2, ap3, ap4, ap5, ap6, ap7, ap8, ap9, ap10]
    }
  ],
};

const tabs = ["All", ...Object.keys(data)];

export function Portfolio() {
  const [tab, setTab] = useState(tabs[0]);
  const [open, setOpen] = useState<Item | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Filter items based on selected tab
  const filteredItems = tab === "All" 
    ? Object.values(data).flat() 
    : data[tab];

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

        <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 mb-12 pb-4">
          <div className="flex flex-nowrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                data-cursorpointer={true}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${tab === t ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
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
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(item)}
                data-cursorpointer={true}
                className={`group relative overflow-hidden rounded-3xl glass cursor-none border-[3px] border-gold/40 hover:border-gold transition-all duration-700 shadow-[0_20px_50_rgba(212,175,55,0.1)] ${item.tall ? "md:row-span-2 aspect-[3/5]" : "aspect-square"
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-md bg-gold/20 border border-gold/30 text-[10px] text-gold font-bold uppercase tracking-widest">
                      {item.client}
                    </span>
                  </div>
                  <h4 className="mt-1 font-display text-xl text-white">{item.title}</h4>
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
            className="fixed inset-0 z-[9999] bg-[#050505] overflow-y-auto overflow-x-hidden select-none"
            data-lenis-prevent
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
            data-lenis-prevent
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
