"use client";

import { ReactNode, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { RemoveScroll } from "react-remove-scroll";
import { X } from "react-feather";
import { useOnClickOutside } from "@/utils/useOnClickOutside";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setTimeout(() => router.back(), 200);
  }, [router]);

  useOnClickOutside(contentRef, handleClose);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  const modalRoot =
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-modal-overlay bg-black/30 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <RemoveScroll>
          <motion.div
            ref={contentRef}
            className="relative w-96 md:w-[688px] h-[600px] bg-background border border-foreground/15 rounded-md md:rounded-lg overflow-y-auto z-modal-content"
            initial={{ opacity: 0, translateY: 20, scale: 0.95 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            exit={{ opacity: 0, translateY: 20, scale: 0.9 }}
            transition={{ duration: 0.1, damping: 0, ease: "easeOut" }}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 opacity-45 hover:opacity-60 transition-opacity z-10"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </RemoveScroll>
      </motion.div>
    </AnimatePresence>,
    modalRoot
  );
}
