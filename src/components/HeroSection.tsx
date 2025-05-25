'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden font-serif bg-[#121212]"
    >
      {/* Background Image with Parallax Effect */}
      <motion.img
        src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Elegant interior"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        style={{ y }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c]/70 to-[#121212]/90 z-10" />

      {/* Radial Highlight Glow */}
      <div className="absolute w-[60vw] h-[60vw] rounded-full bg-[#B9975B]/10 blur-3xl z-10 top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6 max-w-3xl mx-auto"
      >
        <h1 className="text-[2.6rem] md:text-6xl font-bold text-[#F5F1E9] leading-tight tracking-tight drop-shadow-md">
          Transforming Spaces with <br />
          <motion.span
            initial={{ backgroundPosition: '200% center' }}
            animate={{ backgroundPosition: '0% center' }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="bg-gradient-to-r from-[#B9975B] via-[#f7e7c2] to-[#B9975B] bg-clip-text text-transparent"
          >
            Infotech Interiors
          </motion.span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#D9D6CC] font-light leading-relaxed max-w-xl mx-auto">
          Timeless elegance. Modern minimalism.<br className="hidden md:inline" />
          We design spaces that inspire and endure.
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(185, 151, 91, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="mt-10 inline-block px-8 py-3 bg-[#B9975B] text-[#121212] font-semibold rounded-full shadow-lg transition duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Book Your Dream Design</span>
          <span className="absolute left-0 top-0 w-full h-full bg-[#f7e7c2] opacity-0 group-hover:opacity-10 transition duration-300" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
