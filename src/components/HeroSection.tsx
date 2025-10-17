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
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Text Content */}
            <div className="text-white text-center xl:text-left">
              <AnimatedElement animationType="fade-up" delay={200}>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                  Контроллеры для автополива
                </h1>
              </AnimatedElement>
              
              <AnimatedElement animationType="fade-up" delay={400}>
                <p className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 font-light">
                  Умные системы автополива
                </p>
              </AnimatedElement>

              <AnimatedElement animationType="fade-up" delay={600}>
                <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                  Контроллеры для автополива с мобильным приложением имеют огромное количество функций, таких как: настройка графика полива, настройка зон полива, задержка полива и многие другие
                </p>
              </AnimatedElement>

              <AnimatedElement animationType="scale" delay={800}>
                <Link 
                  to="/контроллеры-для-автополива" 
                  className="inline-block bg-white text-green-700 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Узнать больше
                </Link>
              </AnimatedElement>
            </div>

            {/* Mobile App Image */}
            <AnimatedElement animationType="fade-left" delay={400}>
              <div className="hidden xl:flex justify-end xl:translate-y-[120px] xl:translate-x-[100px]">
                <img 
                  src="/images/photos/phone1.png" 
                  alt="Мобильное приложение управления поливом" 
                  className="w-full h-auto object-contain drop-shadow-2xl xl:scale-125"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
