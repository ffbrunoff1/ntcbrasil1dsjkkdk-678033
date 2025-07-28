import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="w-10 h-10 text-secondary" />,
      title: 'Qualidade Superior',
      description:
        'Compromisso com a excelência em cada detalhe, utilizando materiais de ponta e as melhores práticas do mercado.',
    },
    {
      icon: <Target className="w-10 h-10 text-secondary" />,
      title: 'Inovação Constante',
      description:
        'Buscamos continuamente novas tecnologias e métodos construtivos para otimizar processos e entregar resultados superiores.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      title: 'Segurança e Confiança',
      description:
        'A segurança de nossos colaboradores e a solidez de nossas construções são pilares inegociáveis em todos os projetos.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sobre a NTC Brasil</h2>
          <p className="section-subtitle mx-auto">
            Mais que construir edifícios, construímos relações de confiança e
            realizamos sonhos. Nossa trajetória é marcada pela solidez, inovação
            e um compromisso inabalável com a qualidade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
