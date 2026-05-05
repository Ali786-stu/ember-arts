import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-5xl md:text-7xl text-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lakshmi Verma
            </motion.div>
            <motion.div
              className="h-[2px] w-0 bg-gradient-to-r from-transparent via-gold to-transparent"
              animate={{ width: "16rem" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <motion.p
              className="text-xs tracking-[0.4em] text-muted-foreground uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Graphic Designer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
