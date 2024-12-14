import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
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
            Contáctanos
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text)' }}>
            Estamos aquí para ayudarte. Escríbenos a través de las siguientes plataformas.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          


          
          <a
            href="https://www.instagram.com/lanita.pa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg"
            style={{
              textDecoration: 'none',
              color: 'var(--color-text)',
              border: '1px solid var(--color-accent)',
            }}
          >
            <FaInstagram className="text-5xl" style={{ color: 'var(--color-accent)' }} />
            <div>
              <h3 className="text-xl font-bold">Instagram</h3>
              <p>@lanita.pa</p>
            </div>
          </a>
          {/* Comentado para habilitar en el futuro */}
          {/* <a
            href="mailto:info@lanita.pa"
            className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg"
            style={{
              textDecoration: 'none',
              color: 'var(--color-text)',
              border: '1px solid var(--color-accent)',
            }}
          >
            <FaEnvelope className="text-5xl" style={{ color: 'var(--color-accent)' }} />
            <div>
              <h3 className="text-xl font-bold">Correo Electrónico</h3>
              <p>info@lanita.pa</p>
            </div>
          </a> */}
        </div>
      </section>

      <section className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-4xl font-semibold mb-4" style={{ color: 'var(--color-detail)' }}>
            Envíos Rápidos y Confiables
          </h2>
          <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
            Trabajamos con servicios como <strong>Uno Express</strong> para garantizar que tus pedidos lleguen de manera rápida y segura. ¡Elige la sucursal más cercana para recoger tus productos favoritos!
          </p>
          <p className="text-lg" style={{ color: 'var(--color-text)' }}>
            Tarifas a partir de <strong>$6.50</strong>. Contáctanos para más detalles sobre envíos y tiempos de entrega.
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default ContactPage;
