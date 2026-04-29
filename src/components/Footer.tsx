export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 justify-between items-center">
        <p className="font-display text-lg">
          <span className="text-gold-gradient">Lakshmi Verma</span> · Graphic Designer
        </p>
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} — Crafted with passion in Lucknow
        </p>
      </div>
    </footer>
  );
}
