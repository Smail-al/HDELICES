import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Gâteaux de Mariage',
    description: 'Des créations sur mesure pour votre jour spécial',
    image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Pâtisseries Fines',
    description: 'Une sélection raffinée de desserts artisanaux',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Événements Spéciaux',
    description: 'Des buffets sucrés pour vos célébrations',
    image: 'https://images.unsplash.com/photo-1547043184-599cd7e6a4f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Nos Créations Signatures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de pâtisseries artisanales, créées avec passion
            et des ingrédients de première qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;