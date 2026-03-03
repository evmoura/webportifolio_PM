import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({ value, suffix = '', label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('0');
  
  // Check if value is a number
  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const timeout = setTimeout(() => {
      const end = numericValue;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * end);
        
        setDisplayValue(current.toString());

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, numericValue, isNumeric, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.165, 0.84, 0.44, 1] as const,
      }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-semibold text-white mb-2">
        {isNumeric ? displayValue : value}
        <span className="text-white">{suffix}</span>
      </div>
      <div className="text-text-secondary text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
