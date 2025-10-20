import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

interface EquipmentItem {
  id: number;
  name: string;
  image: string;
  link?: string;
}

const EquipmentPage: React.FC = () => {
  const equipmentItems: EquipmentItem[] = [
    {
      id: 1,
      name: 'Контроллеры для автополива',
      image: '/images/photos/avtopoliv-hunter-pro-hc-wi-fi-1.webp',
      link: '/оборудование-для-полива/контроллеры-для-автополива/'
    },
    {
      id: 2,
      name: 'Электромагнитные клапаны для автополива',
      image: '/images/photos/pgv_101g.jpg',
      link: '/оборудование-для-полива/электромагнитные-клапаны-для-полива/'
    },
    {
      id: 3,
      name: 'Корпус дождевателя, спринклер',
      image: '/images/photos/sprinkler.jpg',
      link: '/оборудование-для-полива/корпуса-дождевателей/'
    },
    {
      id: 4,
      name: 'Ротаторные головки МР ROTATOR',
      image: '/images/photos/rotator.jpg',
      link: '/оборудование-для-полива/mp-rotator-ротаторные-головки/'
    },
    {
      id: 5,
      name: 'Статические головки фиксированные и регулируемые',
      image: '/images/photos/heads.jpg',
      link: '/оборудование-для-полива/форсунки-сопла/'
    },
    {
      id: 6,
      name: 'Роторные дождеватели, спринклеры',
      image: '/images/photos/rotor.jpg',
      link: '/оборудование-для-полива/роторные-дождеватели/'
    },
    {
      id: 7,
      name: 'Оборудование капельного полива',
      image: '/images/photos/Airbrush-Image-Enhancer-1760781774584.jpg'
    },
    {
      id: 8,
      name: 'Насосное оборудование, насосные станции для автополива',
      image: '/images/photos/nasos_oborud.jpeg'
    },
    {
      id: 9,
      name: 'Емкости полимерные (полиэтиленовые, полипропиленовые)',
      image: '/images/photos/container.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/bladnannya-dlya.jpg"
            alt="Оборудование для автополива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  ОБОРУДОВАНИЕ ДЛЯ АВТОМАТИЧЕСКОГО ПОЛИВА
                </h1>
                <p className="text-lg md:text-xl font-light">
                  Профессиональное оборудование от ведущих мировых производителей
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentItems.map((item, index) => (
              <AnimatedElement 
                key={item.id} 
                animationType="fade-up" 
                delay={100 + index * 50}
              >
                {item.link ? (
                  <Link to={item.link} className="block h-full">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer">
                      <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          style={item.id === 1 ? { transform: 'scale(1.6) translateX(15%)' } : undefined}
                        />
                      </div>
                      <div className="p-6 flex-grow flex items-center justify-center">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight text-center group-hover:text-green-600 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 flex-grow flex items-center justify-center">
                      <h3 className="text-xl font-semibold text-gray-800 leading-tight text-center">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                )}
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
                О нашем оборудовании
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Наша компания предлагает широкий ассортимент профессионального оборудования для систем автоматического полива от ведущих мировых производителей: Hunter, Rain Bird, Toro, Irritrol.
                </p>
                <p>
                  Все представленное оборудование отличается высоким качеством, надежностью и долговечностью. Мы поможем вам подобрать оптимальное решение для любого типа участка и бюджета.
                </p>
                <p className="text-green-600 font-semibold">
                  Для консультации и заказа оборудования свяжитесь с нами по телефону: 8-987-641-78-68
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Мы работаем с ведущими производителями
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "HUNTER", logo: "/images/photos/hunter_logo.jpg" },
              { name: "RAIN BIRD", logo: "/images/photos/rainbird_logo.png" },
              { name: "IRRITROL", logo: "/images/photos/irritrol_logo.png" },
              { name: "TORO", logo: "/images/photos/toro_logo.jpg" }
            ].map((brand, index) => (
              <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className={`max-w-full object-contain ${
                      brand.name === "IRRITROL" || brand.name === "TORO" ? "max-h-32" : "max-h-24"
                    }`} 
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
