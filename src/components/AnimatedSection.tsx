"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedSection({
  children,
  className = "",
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}
