"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimate, stagger } from "framer-motion";
import FeatureItem from "./FeatureItem";

type IntroData = {
  id: number;
  title: string;
  detail: string;
  blobUrl: string | null;
};

export default function FeatureItems({ items }: { items: IntroData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-180px" });
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (isInView && scope.current) {
      animate(
        ".feature-item",
        { opacity: 1, y: 0 },
        {
          duration: 0.6,
          ease: "easeOut",
          delay: stagger(0.2, { startDelay: 0.1 }),
        }
      );
    }
  }, [isInView, animate, scope]);

  return (
    <div
      ref={(el) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (scope as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className="flex flex-col md:flex-row gap-16 md:gap-8"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="feature-item flex-1"
          initial={{ opacity: 0, y: 100 }}
        >
          <FeatureItem
            title={item.title}
            detail={item.detail}
            blobUrl={item.blobUrl}
          />
        </motion.div>
      ))}
    </div>
  );
}
