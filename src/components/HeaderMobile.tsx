'use client';

import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  'home',
  'about',
  'services',
  'projects',
  'testimonials',
  'contact',
];

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden px-5 py-3 bg-[#1C1C1C]/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Gradient Brand Name */}
        <motion.div
          className="text-xl font-bold font-serif bg-gradient-to-r from-[#B9975B] via-[#f3eac2] to-[#B9975B] text-transparent bg-clip-text select-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Infotech Interiors
        </motion.div>

        {/* Animated Menu Icon */}
        <motion.button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="p-2 rounded-md hover:bg-[#B9975B]/20 transition"
          whileTap={{ rotate: 90, scale: 0.95 }}
        >
          {open ? (
            <X className="w-6 h-6 text-[#B9975B]" />
          ) : (
            <Menu className="w-6 h-6 text-[#B9975B]" />
          )}
        </motion.button>
      </div>

      {/* Animated Nav Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden mt-4 space-y-6 text-[#D9D6CC] font-medium tracking-wide text-sm"
          >
            {navItems.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block uppercase hover:text-[#B9975B] transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            {/* Social Icons with Links */}
            <div className="flex gap-5 pt-2">
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#D9D6CC] hover:text-[#B9975B] transition"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#D9D6CC] hover:text-[#B9975B] transition"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#D9D6CC] hover:text-[#B9975B] transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#D9D6CC] hover:text-[#B9975B] transition"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/1234567890?text=Hi%20Infotech%20Interiors!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block px-6 py-3 mt-6 bg-[#B9975B] text-[#121212] font-semibold rounded-full text-center shadow-md hover:shadow-xl transition"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderMobile;
