import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HDÉLICES</h3>
            <p className="text-primary-200">
              L'art de la pâtisserie française, entre tradition et innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-200 hover:text-white">Accueil</a></li>
              <li><a href="#products" className="text-primary-200 hover:text-white">Nos Pâtisseries</a></li>
              <li><a href="#services" className="text-primary-200 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-primary-200 hover:text-white">À Propos</a></li>
              <li><a href="#contact" className="text-primary-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-primary-200">
              <li>Lundi - Vendredi: 8h - 19h</li>
              <li>Samedi: 8h - 20h</li>
              <li>Dimanche: 9h - 13h</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; 2024 HDÉLICES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;