'use client';

import { motion, useAnimation } from 'framer-motion';
import {
  Home,
  Building,
  Briefcase,
  Coffee,
  Factory,
  ShoppingBag,
} from 'lucide-react';
import { useEffect } from 'react';

const industries = [
  { name: 'Residential', icon: <Home size={48} /> },
  { name: 'Commercial', icon: <Building size={48} /> },
  { name: 'Corporate', icon: <Briefcase size={48} /> },
  { name: 'Hospitality', icon: <Coffee size={48} /> },
  { name: 'Industrial', icon: <Factory size={48} /> },
  { name: 'Retail', icon: <ShoppingBag size={48} /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

const floatingAnimation = {
  y: [0, -8, 0], // smooth up-down float
  transition: {
    repeat: Infinity,
    duration: 4,
    ease: 'easeInOut',
  },
};

const Industries = () => {
  return (
    <section
      id="industries"
      className="relative py-24 px-6 lg:px-24 bg-gradient-to-tr from-[#0f0f0f] via-[#121212] to-[#181818] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-radial from-[#B9975B]/30 via-transparent to-transparent opacity-30 blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#F7F5F2] tracking-tight drop-shadow-[0_0_10px_rgba(191,163,74,0.7)]">
          Industries We Work With
        </h2>
        <div className="mx-auto mt-3 w-20 h-1 bg-gradient-to-r from-[#B9975B] via-[#FFE56F] to-[#B9975B] rounded-full shadow-lg" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-14 justify-items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {industries.map(({ name, icon }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            animate={floatingAnimation}
            whileHover={{
              scale: 1.25,
              rotateX: 15,
              rotateY: 15,
              transition: { duration: 0.4, ease: 'easeOut' },
              boxShadow:
                '0 15px 30px rgba(191,163,74,0.5), 0 0 20px rgba(255,229,111,0.8)',
            }}
            whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
            className="relative flex flex-col items-center space-y-4 cursor-pointer rounded-3xl bg-[#1b1b1b] border border-[#3e3e3e] p-6 shadow-md
              transition-shadow duration-500
              hover:bg-gradient-to-br hover:from-[#2e2a1d] hover:via-[#4d4515] hover:to-[#bfa34a]/40
              hover:border-[#bfa34a] hover:shadow-[0_8px_24px_rgba(191,163,74,0.7)]
              perspective-800"
          >
            <motion.div
              className="text-[#B9975B] drop-shadow-[0_0_6px_rgba(191,163,74,0.9)]"
              style={{ pointerEvents: 'none' }}
            >
              {icon}
            </motion.div>

            <motion.p
              className="text-lg font-semibold bg-gradient-to-r from-[#bfa34a] via-[#fff7aa] to-[#bfa34a] bg-clip-text text-transparent select-none tracking-wider"
              whileHover={{
                backgroundPosition: ['0% 50%', '100% 50%'],
                transition: { duration: 1.2, repeat: Infinity, repeatType: 'mirror' },
              }}
            >
              {name}
            </motion.p>

            {/* Gold shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 2.5s linear infinite',
              }}
              style={{ mixBlendMode: 'screen' }}
            />

            <style jsx>{`
              @keyframes shimmer {
                0% {
                  background-position: 200% 0%;
                }
                100% {
                  background-position: -200% 0%;
                }
              }
            `}</style>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Industries;
