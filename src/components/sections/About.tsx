import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import portrait from "@/assets/lakshmi-portrait.jpg";
import { SectionHeading } from "../SectionHeading";

const stats = [
  { v: "3+", l: "Years Experience" },
  { v: "50+", l: "Creatives Designed" },
  { v: "Multiple", l: "Brands Worked On" },
  { v: "Always", l: "Dedicated & Consistent" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 lg:py-20 px-6 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeading eyebrow="About" title="The Designer Behind the Pixels" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Left: Elegant Arched Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-[400px]"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-violet/20 to-gold/20 rounded-[140px] blur-3xl opacity-50" />
            
            {/* Arched Frame */}
            <div className="relative aspect-[4/5] rounded-t-[200px] rounded-b-[40px] border border-gold/30 p-2.5 bg-background/40 backdrop-blur-sm shadow-luxury" data-cursorpointermini={true}>
              <div className="relative h-full w-full rounded-t-[190px] rounded-b-[30px] overflow-hidden">
                <img
                  src={portrait}
                  alt="Lakshmi Verma"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Quote Card */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-left-6 glass-strong rounded-3xl p-4 border border-gold/40 shadow-glow max-w-[220px] z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="text-gold w-6 h-6 mb-3 opacity-80" />
              <p className="font-display italic text-lg text-white/90 leading-snug">
                "Design that <span className="text-gold font-medium">speaks</span>, not just looks good."
              </p>
            </motion.div>

          </motion.div>

          {/* Right: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-violet/30 bg-violet/5 text-violet/80 text-xs tracking-widest uppercase">
                <Heart className="w-3 h-3" /> Nice to meet you
              </div>
              <h3 className="font-display text-4xl md:text-5xl leading-[1.1] text-white" data-cursorpointertext={true}>
                Graphic Designer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-gradient italic font-medium">
                  focused on impactful visuals
                </span>
              </h3>
            </div>
            
            <div className="space-y-4 text-white/70 text-base lg:text-lg font-light leading-relaxed" data-cursorpointertext={true}>
              <p>
                I create visually engaging designs for social media and print that help brands communicate clearly and stand out. From posts and ads to brochures and brand materials, I focus on clean, modern, and effective design.
              </p>
              <p>
                I combine creativity with practical design thinking to deliver work that not only looks good but also serves its purpose. Always learning, improving, and adapting to new trends.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass rounded-2xl p-5 text-center border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group cursor-default"
                  data-cursorpointermini={true}
                >
                  <div className="font-display text-2xl sm:text-3xl text-gold group-hover:scale-110 transition-transform duration-500">{s.v}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 group-hover:text-gold-soft transition-colors leading-tight">{s.l}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 w-full">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-soft font-medium leading-loose text-center lg:text-left">
                Branding <span className="mx-2 text-gold/30">|</span> 
                Typography <span className="mx-2 text-gold/30">|</span> 
                Social Media <span className="mx-2 text-gold/30">|</span> 
                Print Design <span className="mx-2 text-gold/30">|</span> 
                Logos <span className="mx-2 text-gold/30">|</span> 
                Vector Art
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
