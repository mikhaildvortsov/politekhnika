import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const CatalogSection: React.FC = () => {
  const catalogItems = [
    {
      title: "Контроллеры автополива",
      description: "Wi-Fi контроллеры Hunter для умного управления поливом с вашего смартфона",
      image: "/images/photos/rotor_sprinkler.jpg",
      link: "/controllers"
    },
    {
      title: "Электромагнитные клапаны",
      description: "Надежные клапаны Hunter, Rain Bird, Irritrol для управления зонами полива",
      image: "/images/photos/pgv_101g.jpg",
      link: "/valves"
    },
    {
      title: "Дождеватели и форсунки",
      description: "Роторные и веерные дождеватели, MP Rotator для равномерного полива",
      image: "/images/photos/sprinkler.jpg",
      link: "/nozzles"
    },
    {
      title: "Роторные дождеватели",
      description: "Профессиональные роторные дождеватели для больших площадей",
      image: "/images/photos/rotor.jpg",
      link: "/rotors"
    },
    {
      title: "Корпуса дождевателей",
      description: "Выдвижные корпуса различной высоты для любых типов объектов",
      image: "/images/photos/heads.jpg",
      link: "/corpus"
    },
    {
      title: "MP Rotator",
      description: "Инновационные ротаторные форсунки с высокой эффективностью полива",
      image: "/images/photos/rotator.jpg",
      link: "/mp-rotator"
    }
  ];

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Каталог оборудования
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Профессиональное оборудование для систем автоматического полива от ведущих мировых производителей
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item, index) => (
            <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
              <Link to={item.link}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-gray-800 text-center leading-tight group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
