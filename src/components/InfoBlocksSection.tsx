import React from 'react';
import AnimatedElement from './AnimatedElement';

const InfoBlocksSection: React.FC = () => {
  const infoBlocks = [
    {
      title: "Системы автополива",
      subtitle: "Проектирование и монтаж",
      description: "Мы предлагаем услуги проектирования и монтажа систем автополива для частных и бизнес объектов.",
      image: "/images/photos/1.jpg"
    },
    {
      title: "Оборудование для автополива",
      subtitle: "Широкий спектр",
      description: "Мы предлагаем широкий спектр профессионального оборудования для систем автополива от ведущих мировых производителей: Hunter, Rain Bird, Toro, Irritrol.",
      image: "/images/photos/2.jpg"
    },
    {
      title: "Рулонный газон",
      subtitle: "Продажа и укладка",
      description: "Мы предлагаем к реализации, а также осуществляем профессиональную укладку рулонного газона. Готовый идеальный газон за один день!",
      image: "/images/photos/3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {infoBlocks.map((block, index) => (
            <AnimatedElement key={index} animationType="fade-up" delay={100 + index * 100}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {block.title}
                  </h3>
                  <p className="text-xl font-semibold text-green-600 mb-6">
                    {block.subtitle}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;

