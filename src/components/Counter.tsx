import React, { useEffect, useRef, useState } from 'react';
import { useInView, motion, animate, useMotionValue, useTransform } from 'motion/react';

interface CounterProps {
  value: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ value, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numerical value and suffix
  const numericalValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericalValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericalValue, count]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default Counter;
