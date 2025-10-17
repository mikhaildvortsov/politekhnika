import React from 'react';
import AnimatedElement from './AnimatedElement';

const ParksIrrigationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/parks_squares.jpg"
            alt="Автополив для парков и скверов"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  АВТОПОЛИВ ДЛЯ ПАРКОВ И СКВЕРОВ
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Лучшие системы автополива для лучших парков России
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Автополив для парков и скверов
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Системы автоматического полива – это лучший современный способ орошения парков и скверов. Ведь именно благодаря автополиву они получают своевременный и качественный уход.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Качественная продуманная система подстраивается под биологические особенности каждого растения, благодаря чему происходит профессиональный полив.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <div className="max-w-5xl mx-auto">
              <img
                src="/images/photos/park-sokolniki.jpg"
                alt="Пример работы, парк Сокольники, Москва"
                className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-2xl"
                style={{ objectPosition: 'center 70%' }}
              />
              <p className="text-center text-gray-600 mt-4 text-lg">
                Пример работы, парк Сокольники, Москва
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default ParksIrrigationPage;
