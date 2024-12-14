import React from 'react';
import { FaHandshake, FaLeaf, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8 max-w-7xl mx-auto"
    >
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold" style={{ color: 'var(--color-detail)' }}>
            Sobre Nosotros
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text)' }}>
            Creemos en la magia de transformar lana en momentos inolvidables. Conoce nuestra visión y valores.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md text-center"
          >
            <FaHandshake className="text-5xl mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-detail)' }}>
              Compromiso
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              Nuestra prioridad es crear productos que inspiren confianza, respetando a las personas y al planeta.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md text-center"
          >
            <FaLeaf className="text-5xl mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-detail)' }}>
              Sostenibilidad
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              Adoptamos prácticas responsables para garantizar un impacto positivo en nuestro entorno.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md text-center"
          >
            <FaAward className="text-5xl mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-detail)' }}>
              Calidad
            </h3>
            <p style={{ color: 'var(--color-text)' }}>
              Cada detalle es cuidado con esmero para crear productos que perduren y destaquen.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;
