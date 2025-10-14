import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const PhotoCardsSection: React.FC = () => {
  const cards = [
    {
      title: "Системы автополива",
      image: "/images/photos/1.jpg",
      link: "/systems"
    },
    {
      title: "Оборудование",
      image: "/images/photos/2.jpg",
      link: "/equipment"
    },
    {
      title: "Укладка газона",
      image: "/images/photos/3.jpg",
      link: "/lawns"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AnimatedElement key={index} animationType="fade-up" delay={100 + index * 100}>
              <Link to={card.link}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mt-6 group-hover:text-green-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCardsSection;

