import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579697096985-41fe1430e5df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Découvrez l'Art de la Pâtisserie
          </h1>
          <p className="text-xl mb-8">
            Des créations artisanales uniques pour vos moments les plus précieux
          </p>
          <div className="flex space-x-4">
            <a
              href="#products"
              className="btn btn-primary"
            >
              Nos Créations
            </a>
            <a
              href="#contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;