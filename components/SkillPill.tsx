"use client";

import { motion } from "framer-motion";

interface SkillPillProps {
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function SkillPill({ label, icon, delay = 0 }: SkillPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1.5 border border-foreground/20 text-xs font-mono font-medium text-foreground hover:bg-foreground/10 transition-colors"
    >
      {icon && <span className="w-4 h-4 text-foreground/80 flex items-center justify-center">{icon}</span>}
      <span>{label}</span>
    </motion.div>
  );
}