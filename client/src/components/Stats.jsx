import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const StatItem = ({ number, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, number, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, number]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="flex flex-col items-center group"
    >
      <div className="flex flex-col items-center justify-around">
        <div className="text-4xl md:text-5xl font-light tracking-tighter text-slate-800 flex items-center ">
        <motion.span>{rounded}</motion.span>
        <span className="text-amber-600 ml-1 font-outfit">{suffix}</span>
      </div>
      <div className="h-px w-8 bg-amber-200 my-4 transition-all group-hover:w-16 duration-500" />
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
        {label}
      </p>
      </div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <StatItem number={10} label="Curated Cities" />
          <StatItem number={30} label="Cozy Hotels" />
          <StatItem number={80} label="Rest Rooms" />
          <StatItem number={100} label="Happy Guests" suffix="+" />
        </div>
      </div>
    </section>
  );
}
