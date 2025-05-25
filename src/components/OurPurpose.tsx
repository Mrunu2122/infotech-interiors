'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const OurPurpose = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-24 bg-gradient-to-b from-[#F7F5F2] to-[#f0ebe5] text-[#2C2C2C] overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute -top-10 -left-20 w-[600px] h-[600px] bg-[#e7dfd0] rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-[#B9975B]" size={28} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#1A1A1A]">
              Our Purpose
            </h2>
          </div>

          <div className="w-20 h-1 bg-[#B9975B] mb-6 rounded-full" />

          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            At <span className="font-semibold text-[#B9975B]">Infotech Interiors</span>, we go beyond design — we sculpt atmospheres that stir emotion and elevate living. Be it a serene personal retreat or a bold commercial space, our passion lies in making your dream environment real.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We blend visual beauty with practical comfort to build environments that feel personal, premium, and full of intention.
          </p>
        </motion.div>

        {/* Right Image with Fancy Frame & Animation */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1080&q=80"
              alt="Interior Design"
              className="rounded-3xl shadow-xl border border-[#ddd5ca] transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 rounded-3xl border-4 border-[#B9975B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPurpose;
