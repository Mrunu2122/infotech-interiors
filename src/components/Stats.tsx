'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const statsData = [
  { label: 'Clients Served', value: 350 },
  { label: 'Projects Delivered', value: 480 },
  { label: 'Years of Experience', value: 12 },
  { label: 'Awards Won', value: 15 },
];

// Ease out cubic for smoother animation
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Particle = ({ delay = 0 }: { delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [-5, 0, 5],
      y: [-5, 0, 5],
    }}
    transition={{ delay, duration: 1, repeat: Infinity, repeatDelay: 3 }}
    className="absolute rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 w-1.5 h-1.5"
  />
);

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    let animationFrameId: number;
    const duration = 2500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed < duration) {
        const progress = easeOutCubic(elapsed / duration);
        const newCounts = statsData.map(({ value }) =>
          Math.min(Math.floor(progress * value), value)
        );
        setCounts(newCounts);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCounts(statsData.map((s) => s.value));
        setHasAnimated(true);
        cancelAnimationFrame(animationFrameId);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, hasAnimated]);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative bg-gradient-to-tr from-black via-[#121212] to-black py-24 px-6 lg:px-24 overflow-hidden"
    >
      {/* Shimmer overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(191,163,74,0.15) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite',
          mixBlendMode: 'screen',
          filter: 'blur(40px)',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-16 relative z-10">
        {statsData.map(({ label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.75, ease: 'easeOut' }}
            whileHover={{ scale: 1.15, boxShadow: '0 0 30px 5px rgba(191,163,74,0.8)' }}
            className="relative bg-[#121212] rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer select-none"
          >
            {/* Sparkling particles */}
            <AnimatePresence>
              {hasAnimated && (
                <>
                  <Particle delay={0} />
                  <Particle delay={0.4} />
                  <Particle delay={0.8} />
                </>
              )}
            </AnimatePresence>

            <motion.p
              key={counts[i]}
              className="text-6xl sm:text-7xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-lg"
              layout
            >
              {counts[i]}
            </motion.p>
            <p className="uppercase mt-4 tracking-widest text-[#d4c87a] font-semibold text-sm sm:text-base">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
