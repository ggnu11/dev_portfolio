"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SlideUpInView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
