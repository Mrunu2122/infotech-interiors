'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What services does Infotech offer?',
    answer:
      'We specialize in interior decoration for residential, commercial, and hospitality spaces, offering design, project management, and furnishing solutions.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project duration varies by scope, but on average, small to medium projects take 4–8 weeks from design to completion.',
  },
  {
    question: 'Can I customize my design?',
    answer:
      'Absolutely! We believe in personalized design tailored to your preferences and lifestyle.',
  },
  {
    question: 'Do you offer consultation services?',
    answer:
      'Yes, we provide expert consultations to discuss your ideas and guide you through the process.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#1a1a1a] py-28 px-6"
      aria-label="Frequently Asked Questions"
    >
      {/* Background subtle animated texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(191,163,74,0.15),_transparent)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10 select-none">
        <h2 className="mb-14 text-center font-serif text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#bfa34a] to-[#ffe56f] bg-clip-text text-transparent drop-shadow-lg">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqData.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border border-[#3e3e3e] bg-[#121212] shadow-lg transition-shadow duration-500 ${
                  isOpen
                    ? 'shadow-[0_0_20px_rgba(191,163,74,0.7)]'
                    : 'hover:shadow-[0_0_15px_rgba(191,163,74,0.35)]'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                  className="flex w-full items-center justify-between rounded-3xl p-7 text-left text-lg sm:text-xl font-semibold text-[#f0e6b8] transition-colors duration-300 hover:text-[#ffe56f] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#bfa34a] focus-visible:ring-opacity-60"
                >
                  <motion.span
                    className="relative inline-block"
                  >
                    <>
                      {question}
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FFE56F] via-[#BFA34A] to-[#FFE56F]"
                        initial={{ width: 0 }}
                        animate={{ width: isOpen ? '100%' : 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
                    </>
                  </motion.span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="ml-3 text-[#bfa34a]"
                    aria-hidden="true"
                  >
                    {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto', scale: 1, marginTop: 0 },
                        collapsed: { opacity: 0, height: 0, scale: 0.95, marginTop: -16 },
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden px-8 pb-8 text-[#cfcfbb] text-base sm:text-lg select-text"
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
