"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CountingNumber({ value, direction = "up", inView }) {
  const motionValue = useMotionValue(0); // Always start from 0
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const displayValue = useTransform(spring, (latest) => {
    return latest.toFixed(0);
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    } else {
      motionValue.set(0); // Reset to 0 when out of view
    }
  }, [value, motionValue, inView]);

  return <motion.span>{displayValue}</motion.span>;
}
