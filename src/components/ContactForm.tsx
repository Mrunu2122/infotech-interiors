'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fff9e6] py-28 px-6 flex justify-center items-center min-h-screen"
      aria-label="Contact Form Section"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      >
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170716_01_Canyon_06_preview.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: ['0%', '10%', '0%'], y: ['0%', '5%', '0%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-tr from-[#bfa34a]/20 via-[#fff2b8]/15 to-transparent mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-xl w-full bg-white rounded-3xl border border-[#bfa34a]/30 p-12 shadow-lg shadow-yellow-300/30">
        <h2 className="text-4xl font-serif font-extrabold mb-8 text-[#bfa34a] text-center drop-shadow-md">
          Get in Touch
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <FloatingInput
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
            />
            <FloatingInput
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
            />
            <FloatingTextarea
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px #bfa34a' }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-[#bfa34a] to-[#ffe56f] text-black font-semibold rounded-full shadow-lg shadow-[#bfa34a]/70 focus:outline-none focus:ring-4 focus:ring-[#bfa34a]/60 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[#bfa34a] font-semibold text-2xl"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="inline-block mb-4"
              aria-hidden="true"
            >
              ✈️
            </motion.div>
            <p>Thanks for reaching out! We&apos;ll get back to you soon.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const FloatingInput = ({
  label,
  name,
  value,
  onChange,
  required,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}) => (
  <div className="relative">
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full rounded-lg bg-[#fff9e6] border border-[#bfa34a] py-4 px-5 text-[#4b4221] focus:border-[#bfa34a] focus:ring-1 focus:ring-[#bfa34a] placeholder-transparent transition"
      autoComplete="off"
      spellCheck={false}
    />
    <label
      htmlFor={name}
      className="absolute left-5 top-4 text-[#a68c34] text-sm font-semibold cursor-text transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8f7e42] peer-focus:top-4 peer-focus:text-[#bfa34a]"
    >
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({
  label,
  name,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div className="relative">
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      rows={5}
      className="peer w-full rounded-lg bg-[#fff9e6] border border-[#bfa34a] py-4 px-5 text-[#4b4221] focus:border-[#bfa34a] focus:ring-1 focus:ring-[#bfa34a] placeholder-transparent transition resize-none"
      spellCheck={false}
    />
    <label
      htmlFor={name}
      className="absolute left-5 top-4 text-[#a68c34] text-sm font-semibold cursor-text transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8f7e42] peer-focus:top-4 peer-focus:text-[#bfa34a]"
    >
      {label}
    </label>
  </div>
);

export default ContactForm;
