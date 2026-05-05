import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-display text-lg">
            <span className="text-gold-gradient">Lakshmi Verma</span> · Graphic Designer
          </p>
          <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase mt-1">
            © {new Date().getFullYear()} — Crafted with passion in Lucknow
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/graphizine120?igsh=OWdwY2wyZWNhdXY2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
            data-cursorpointer={true}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lakshmi-verma-298b78342?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors"
            data-cursorpointer={true}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
