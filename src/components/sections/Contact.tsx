import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../SectionHeading";

const contacts = [
  { label: "Email", value: "lakshmiverma959@gmail.com", href: "mailto:lakshmiverma959@gmail.com", icon: "✉" },
  { label: "Phone", value: "+91 8922034155", href: "tel:+918922034155", icon: "☎" },
  { label: "Location", value: "Hazratganj, Lucknow", href: "#", icon: "◉" },
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Behance", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Dribbble", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let's Create Something Beautiful" subtitle="Have a project in mind? I'd love to hear about it." />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                data-cursor="hover"
                whileHover={{ x: 6 }}
                className="block glass-strong rounded-2xl p-6 group glow-border"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-luxury flex items-center justify-center text-primary-foreground text-xl shadow-glow">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                    <p className="mt-1 font-display text-lg text-foreground group-hover:text-gold-gradient transition-colors">
                      {c.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
            <div className="pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Follow</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    data-cursor="hover"
                    className="glass rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-gold-gradient hover:bg-gold/10 transition-all"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 space-y-5 glow-border"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Your Name" placeholder="Jane Doe" />
              <Input label="Email" type="email" placeholder="jane@studio.com" />
            </div>
            <Input label="Subject" placeholder="Project inquiry" />
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your idea…"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold transition-colors py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none resize-none no-cursor"
              />
            </div>
            <button
              type="submit"
              data-cursor="hover"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-luxury px-8 py-4 text-sm font-semibold text-primary-foreground shadow-luxury transition-transform hover:scale-105"
            >
              <span>{sent ? "Message Sent ✓" : "Send Message"}</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold transition-colors py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none no-cursor"
      />
    </div>
  );
}
