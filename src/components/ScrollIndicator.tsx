import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500 z-50 origin-left"
      style={{ scaleX: scrollProgress }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
    />
  );
};

export default ScrollIndicator;