import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setCount(end);
      return;
    }

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, reducedMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
