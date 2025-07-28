import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  HardHat,
  DraftingCompass,
  Lightbulb,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <DraftingCompass size={40} className="text-primary" />,
      title: 'Planejamento e Engenharia',
      description:
        'Desenvolvemos projetos detalhados e soluções de engenharia inovadoras, garantindo a viabilidade e a eficiência de cada empreendimento desde sua concepção.',
    },
    {
      icon: <HardHat size={40} className="text-primary" />,
      title: 'Execução e Gerenciamento',
      description:
        'Com uma equipe qualificada e gerenciamento rigoroso, executamos obras com precisão, cumprindo prazos e mantendo os mais altos padrões de qualidade e segurança.',
    },
    {
      icon: <ClipboardList size={40} className="text-primary" />,
      title: 'Consultoria Especializada',
      description:
        'Oferecemos nossa expertise para auxiliar em todas as fases do seu projeto, desde a análise de terreno até a entrega final, garantindo as melhores decisões.',
    },
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: 'Soluções Inovadoras',
      description:
        'Integramos tecnologia e sustentabilidade em nossas construções, buscando sempre métodos que agreguem valor, otimizem recursos e respeitem o meio ambiente.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nossa Abordagem Construtiva</h2>
          <p className="section-subtitle mx-auto">
            Nossa metodologia de trabalho é fundamentada em quatro pilares
            essenciais que garantem o sucesso e a excelência de cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary text-primary rounded-2xl p-8 flex flex-col items-start shadow-lg hover:shadow-glow transition-shadow duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-accent p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
