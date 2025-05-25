'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#purposes', label: 'Our Purposes' },
  { href: '#industries', label: 'Industries' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
  { href: '#brands', label: 'Brands' },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
];

const linkVariants = {
  hover: {
    scale: 1.05,
    color: '#d4bc61',
    transition: { duration: 0.3 },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    color: '#d4bc61',
    transition: { duration: 0.3 },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-black text-[#bfa34a] py-14 px-8 lg:px-32 rounded-t-3xl shadow-lg select-none"
    >
      <h3 className="text-3xl font-serif font-extrabold mb-8 text-transparent bg-gradient-to-r from-[#f7e48b] via-[#d4bc61] to-[#f7e48b] bg-clip-text">
        Infotech Interiors
      </h3>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Company Info */}
        <div className="max-w-sm text-[#c9a94f] tracking-wide leading-relaxed space-y-5">
          <p className="text-lg">
            Transforming spaces with style and comfort. Your trusted interior decoration partner.
          </p>
          <p className="opacity-60 text-sm select-text">
            © {new Date().getFullYear()} Infotech. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-x-12 gap-y-4 text-lg font-medium cursor-pointer text-[#c9a94f]">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#d4bc61] after:transition-all after:duration-300 hover:after:w-full"
              variants={linkVariants}
              whileHover="hover"
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-8">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={iconVariants}
              whileHover="hover"
              className="text-[#c9a94f] transition-colors"
            >
              <Icon size={30} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
