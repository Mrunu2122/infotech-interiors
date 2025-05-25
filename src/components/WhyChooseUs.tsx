'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Sparkles, Hammer, Palette, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Tailored Designs',
    desc: 'We customize every space according to your taste, lifestyle, and budget.',
    icon: <Palette size={40} strokeWidth={1.5} />,
  },
  {
    title: 'Expert Team',
    desc: 'Our designers and craftsmen bring years of experience and innovation.',
    icon: <Hammer size={40} strokeWidth={1.5} />,
  },
  {
    title: 'Premium Materials',
    desc: 'We source top-tier materials to ensure quality and longevity.',
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
  },
  {
    title: 'End-to-End Support',
    desc: 'From concept to completion — we handle it all for a smooth journey.',
    icon: <Sparkles size={40} strokeWidth={1.5} />,
  },
];

const shineVariant = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        ease: 'easeInOut',
      },
    },
  },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden py-32 px-6 lg:px-24 bg-gradient-to-tr from-[#0b0b0b] via-[#1a1a1a] to-[#0b0b0b] text-white select-none"
    >
      {/* Animated gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#B9975B]/50 via-[#F5F1E9]/20 to-[#B9975B]/50 filter blur-[140px] animate-blob"
        style={{ animationDuration: '30s' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#B9975B]/30 via-[#F5F1E9]/10 to-[#B9975B]/30 filter blur-[110px] animate-blob animation-delay-2000"
        style={{ animationDuration: '35s' }}
      />

      {/* Heading & Subheading with shining text effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl font-serif font-bold relative inline-block text-[#B9975B] overflow-hidden">
          Why Choose Us
          {/* Shining light sweep */}
          <motion.span
            className="absolute top-0 left-[-150%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            variants={shineVariant}
            animate="animate"
          />
        </h2>
        <p className="mt-4 text-lg max-w-xl mx-auto text-[#ccc] font-light tracking-wide">
          We blend creativity, craftsmanship, and care into every project — delivering interiors
          that speak your language.
        </p>
      </motion.div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: 0.3 + index * 0.2, duration: 0.6, ease: 'easeOut' },
              },
            }}
            className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_0_40px_rgba(185,158,85,0.5)] cursor-pointer transition-shadow duration-400"
            whileHover={{ scale: 1.04 }}
          >
            {/* Glowing icon capsule */}
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#B9975B] to-[#F5F1E9] shadow-lg shadow-[#B9975B]/70 hover:shadow-[#F5F1E9]/90 transition-all duration-400">
              <motion.div
                whileHover={{ rotateY: 15, rotateX: 15, scale: 1.1, filter: 'drop-shadow(0 0 8px #B9975B)' }}
                className="text-black"
              >
                {feature.icon}
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-[#F5F1E9]">{feature.title}</h3>
            <p className="text-[#D9D6CC] font-light leading-relaxed">{feature.desc}</p>

            {/* Subtle glowing ring behind */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#B9975B]/20 filter blur-lg animate-pulse" />
          </motion.div>
        ))}
      </div>

      {/* Floating sparkles */}
      <motion.div
        aria-hidden="true"
        className="absolute top-10 left-20 w-24 h-24 pointer-events-none"
        animate={{ rotate: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      >
        <Sparkles size={96} strokeWidth={1} className="text-[#B9975B]/60" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 right-32 w-28 h-28 pointer-events-none"
        animate={{ rotate: [0, -8, 0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      >
        <Sparkles size={112} strokeWidth={1} className="text-[#B9975B]/50" />
      </motion.div>
    </section>
  );
}
