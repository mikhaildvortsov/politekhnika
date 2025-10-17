import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/photos/grass.jpg" 
          alt="Газон с системой автополива" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
            <AnimatedElement animationType="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Контроллеры для автополива
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animationType="fade-up" delay={400}>
              <p className="text-2xl md:text-3xl mb-6 font-light">
                Умные системы автополива
              </p>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={600}>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                Контроллеры для автополива с мобильным приложением имеют огромное количество функций, таких как: настройка графика полива, настройка зон полива, задержка полива и многие другие
              </p>
            </AnimatedElement>

            <AnimatedElement animationType="scale" delay={800}>
              <Link 
                to="/контроллеры-для-автополива" 
                className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Узнать больше
              </Link>
            </AnimatedElement>
          </div>

          {/* Mobile App Image */}
          <AnimatedElement animationType="fade-left" delay={400}>
            <div className="hidden lg:flex justify-end lg:translate-y-[120px] lg:translate-x-[100px]">
              <img 
                src="/images/photos/phone1.png" 
                alt="Мобильное приложение управления поливом" 
                className="w-full h-auto object-contain drop-shadow-2xl lg:scale-125"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
