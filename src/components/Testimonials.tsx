'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav Kapoor',
    role: 'Homeowner, Mumbai',
    message:
      'Infotech transformed my house into a dream home. The team is super creative and very professional!',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Sneha Reddy',
    role: 'Co-founder, StartTech',
    message:
      'Their interior design completely elevated our office vibe. Clients notice it the second they walk in.',
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
  {
    name: 'Nikhil Sharma',
    role: 'Architect, Bangalore',
    message:
      'I regularly collaborate with Infotech — their finishes, styling, and approach are top-tier.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0 20px 30px rgba(0,0,0,0.15)' },
};

const Testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 32 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 40 } },
    },
  });

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 lg:px-32 bg-gradient-to-tr from-[#FAF9F6] to-[#F2EEE8] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background textured overlay */}
      <div
        className="absolute inset-0 bg-[url('/textures/paper-texture.png')] opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <h2
        className="relative z-10 mb-16 text-center font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#3A3A3A] drop-shadow-md"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        What Our Clients Say
      </h2>

      <div ref={sliderRef} className="keen-slider relative z-10" aria-label="Testimonials slider">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="keen-slider__slide bg-white rounded-3xl p-10 shadow-lg cursor-pointer flex flex-col justify-between min-h-[320px] transition-transform"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            tabIndex={0}
            role="group"
            aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
            style={{ width: '100%' }} // Important for slide sizing
          >
            <Quote className="w-8 h-8 text-[#B9975B] mb-6 animate-pulse" />

            <p className="mb-8 text-lg leading-relaxed text-gray-700 italic tracking-wide drop-shadow-sm">
              “{testimonial.message}”
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={`Photo of ${testimonial.name}`}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#B9975B]"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-[#2C2C2C] text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500 tracking-wide">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle floating gold sparkle */}
      <div
        aria-hidden="true"
        className="absolute top-8 right-16 w-6 h-6 bg-[#B9975B] rounded-full opacity-30 blur-[4px] animate-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-12 w-8 h-8 bg-[#B9975B] rounded-full opacity-20 blur-[8px] animate-pulse delay-1000"
      />
    </section>
  );
};

export default Testimonials;
