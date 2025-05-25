'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];

const HeaderDesktop = () => {
  return (
    <header
      className="hidden lg:flex justify-between items-center px-16 py-5 bg-[#0f0f0f]/90 backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.3)] sticky top-0 z-50"
      style={{ position: 'relative' }} // <-- Added to prevent scroll offset warnings from Framer Motion
    >
      {/* Animated Gradient Logo */}
      <motion.h1
        className="text-2xl font-bold font-serif bg-gradient-to-r from-[#B9975B] via-[#f3eac2] to-[#B9975B] text-transparent bg-clip-text select-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Infotech Interiors
      </motion.h1>

      {/* Nav Items */}
      <nav className="flex gap-10 text-[#E0DED3] font-medium tracking-widest text-sm uppercase">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="relative group overflow-hidden"
          >
            <span className="transition-colors duration-200 group-hover:text-[#B9975B]">
              {item}
            </span>
            <motion.span
              layoutId={`underline-${item}`}  // UNIQUE layoutId per nav item
              className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#B9975B] origin-left group-hover:scale-x-100 transition-transform duration-300"
            />
          </Link>
        ))}
      </nav>

      {/* Social + WhatsApp */}
      <div className="flex items-center gap-4">
        <motion.a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#D9D6CC] hover:text-[#B9975B] transition-all duration-300"
        >
          <Facebook className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>

        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#D9D6CC] hover:text-[#B9975B] transition-all duration-300"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#D9D6CC] hover:text-[#B9975B] transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>

        <motion.a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#D9D6CC] hover:text-[#B9975B] transition-all duration-300"
        >
          <Youtube className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>

        {/* WhatsApp CTA */}
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px #B9975B' }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/1234567890?text=Hi%20Infotech%20Interiors!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-5 py-2 bg-[#B9975B] text-black font-semibold rounded-full shadow-md hover:shadow-xl transition-all"
        >
          WhatsApp
        </motion.a>
      </div>
    </header>
  );
};

export default HeaderDesktop;
