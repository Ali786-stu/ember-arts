import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../SectionHeading";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contacts = [
  { label: "Email", value: "lakshmiverma959@gmail.com", href: "mailto:lakshmiverma959@gmail.com", icon: <Mail className="w-5 h-5" /> },
  { label: "Phone", value: "+91 8922034155", href: "tel:+918922034155", icon: <Phone className="w-5 h-5" /> },
  { label: "Location", value: "Hazratganj, Lucknow", href: "#", icon: <MapPin className="w-5 h-5" /> },
];

const socials = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/graphizine120?igsh=OWdwY2wyZWNhdXY2", 
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ), 
    color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30" 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/lakshmi-verma-298b78342?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ), 
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30" 
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "Project Inquiry";
    const message = formData.get("message");

    // Construct the email body
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Construct the mailto link
    const mailtoUrl = `mailto:lakshmiverma959@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email app
    window.location.href = mailtoUrl;
    
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative pt-8 pb-32 px-6">
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
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                whileHover={{ x: 6 }}
                className="block glass-strong rounded-2xl p-6 group glow-border"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-luxury flex items-center justify-center text-primary-foreground shadow-glow group-hover:bg-gold transition-colors duration-500">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                    <p className="mt-1 font-display text-lg text-foreground group-hover:text-gold transition-colors">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className={`glass rounded-full p-4 transition-all flex items-center justify-center border border-white/5 aspect-square ${s.color}`}
                    title={s.name}
                  >
                    {s.icon}
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
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 space-y-5 glow-border"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Your Name" name="name" placeholder="Jane Doe" />
              <Input label="Email" name="email" type="email" placeholder="jane@studio.com" />
            </div>
            <Input label="Subject" name="subject" placeholder="Project inquiry" />
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your idea…"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold transition-colors py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none resize-none no-cursor"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-cursor="hover"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-luxury px-8 py-4 text-sm font-semibold text-primary-foreground shadow-luxury transition-transform hover:scale-105 disabled:opacity-50"
            >
              <span>{loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}</span>
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

function Input({ label, name, ...props }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold transition-colors py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none no-cursor"
      />
    </div>
  );
}
