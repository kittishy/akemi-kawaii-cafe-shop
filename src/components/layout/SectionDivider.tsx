
import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div 
      className="w-full flex justify-center my-4 opacity-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <div className="text-2xl">🐾 🐾 🐾</div>
    </motion.div>
  );
}
