import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-secondary text-primary overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary to-accent opacity-80"></div>
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          variants={itemVariants}
        >
          Solucoes em Drenagem com <br className="hidden md:block" />
          <span className="text-white drop-shadow-lg">solidez e inovação.</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
          variants={itemVariants}
        >
          NTC Brasil: uma fundação robusta para suas conquistas.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <a
            href="#contact"
            className="btn btn-primary text-lg w-full sm:w-auto"
          >
            Inicie seu Projeto
          </a>
          <a
            href="#about"
            className="btn btn-secondary bg-white/20 border-white text-white hover:bg-white hover:text-secondary w-full sm:w-auto"
          >
            Saiba Mais
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-8 h-8 text-white opacity-70" />
      </motion.a>
    </section>
  );
}
