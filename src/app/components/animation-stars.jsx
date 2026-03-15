"use client";
import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {stars.map((_, i) => {
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 3 + 2;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 0 6px white"
            }}
          />
        );
      })}
    </div>
  );
}
