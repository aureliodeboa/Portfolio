"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollFloatProps {
  children: React.ReactNode;
  yOffset?: number;
  rotateOffset?: number;
  scaleOffset?: number;
  className?: string;
  delay?: number;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  yOffset = 50,
  rotateOffset = 5,
  scaleOffset = 0.05,
  className = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [yOffset, 0, -yOffset]),
    springConfig
  );

  const rotate = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [-rotateOffset, 0, rotateOffset]
    ),
    springConfig
  );

  const scale = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 1],
      [1 - scaleOffset, 1 + scaleOffset, 1 + scaleOffset, 1 - scaleOffset]
    ),
    springConfig
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: isInView ? y : 0,
        rotate: isInView ? rotate : 0,
        scale: isInView ? scale : 1,
        opacity: isInView ? opacity : 1,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// Variante específica para cards/itens individuais
export const ScrollFloatItem: React.FC<ScrollFloatProps> = ({
  children,
  yOffset = 30,
  rotateOffset = 3,
  scaleOffset = 0.03,
  className = "",
  delay = 0,
}) => {
  return (
    <ScrollFloat
      yOffset={yOffset}
      rotateOffset={rotateOffset}
      scaleOffset={scaleOffset}
      className={className}
      delay={delay}
    >
      {children}
    </ScrollFloat>
  );
};

