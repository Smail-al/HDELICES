import React from 'react';
import { Cake, Users, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Cake className="h-8 w-8" />,
    title: 'Pâtisserie Sur Mesure',
    description: 'Créations personnalisées selon vos envies et occasions spéciales',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Service Traiteur',
    description: 'Organisation complète de vos événements et réceptions',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Mariages',
    description: 'Pièces montées et desserts pour votre jour unique',
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: 'Événements Professionnels',
    description: "Solutions sur mesure pour vos événements d'entreprise",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une expertise unique pour tous vos événements, des plus intimes aux plus prestigieux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-block p-3 bg-primary-100 rounded-full text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;