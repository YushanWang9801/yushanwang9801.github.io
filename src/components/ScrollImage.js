import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ScrollImage = ({ src, className = "", alt = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
      animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
      className={`relative overflow-hidden bg-secondary/10 ${className}`}
    >
      <motion.img
        style={{ y, scale: 1.1 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

export default ScrollImage;
