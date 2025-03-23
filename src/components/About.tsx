import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section bg-primary-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary-800">
              Notre Histoire
            </h2>
            <p className="text-gray-600">
              Depuis notre création, HDÉLICES s'est engagé à créer des moments
              de bonheur à travers l'art de la pâtisserie. Notre passion pour
              l'excellence et l'innovation nous pousse à repousser les limites
              de la créativité tout en respectant les traditions artisanales.
            </p>
            <p className="text-gray-600">
              Chaque création est le fruit d'un savoir-faire unique, transmis de
              génération en génération, et d'une recherche constante de la
              perfection dans les moindres détails.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-gray-600">Événements réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <img
              src="https://cdn.pixabay.com/photo/2019/02/19/12/49/a-sandwich-4006766_1280.jpg"
              alt="Notre atelier"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
