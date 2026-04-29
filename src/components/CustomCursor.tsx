import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      >
        <div className="h-3 w-3 rounded-full bg-gold" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          scale: hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className={`h-9 w-9 rounded-full border-2 ${hovering ? "border-violet bg-gold/10" : "border-gold/60"} mix-blend-difference transition-colors`} />
      </motion.div>
    </>
  );
}
