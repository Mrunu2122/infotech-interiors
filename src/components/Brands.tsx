'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Kajaria', logo: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/15/full/20210415120428.jpg' },
  { name: 'FurniCo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDipQu2J-zNf4TPH1NeTjaAQ3A25fi0L_MFQ&s' },
  { name: 'DecoLux', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBKkk-opMjaGaUadl_-C9G0gQU5D6pGB0Og&s' },
  { name: 'SpaceMakers', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDq3lbK4foHjHzspcFTqAxVFFwnAhjhbxPIQ&s' },
  { name: 'InterioPro', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEjwukyiWtawGKQ0Klb78EeFeRtlGf1c1wQ&s' },
];

// Motion variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const backgroundAnimation = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const Brands = () => {
  return (
    <section
      id="brands"
      className="relative py-20 px-6 lg:px-24 max-w-6xl mx-auto rounded-3xl overflow-hidden"
      aria-label="Brands We Work With Section"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#f5f0e6] via-[#d8c89f] to-[#f5f0e6] bg-[length:200%_200%] opacity-70 -z-10 rounded-3xl"
        {...backgroundAnimation}
      />

      <h2 className="text-4xl font-serif font-extrabold text-center text-[#7a5c3b] mb-16 tracking-wide drop-shadow-md">
        Brands We Work With
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {brands.map(({ name, logo }, i) => (
          <motion.div
            key={name}
            className="flex flex-col items-center space-y-4 cursor-pointer rounded-xl bg-white bg-opacity-90 border border-[#bfa34a]/30 shadow-lg p-6 transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(191,163,74,0.5)] hover:border-[#bfa34a] hover:bg-opacity-100"
            aria-label={name}
            role="img"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-20 w-36 object-contain filter transition-filter duration-300 hover:brightness-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://via.placeholder.com/140x80?text=Logo';
              }}
            />
            <p className="text-lg font-semibold text-[#bfa34a] tracking-wide select-none">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
