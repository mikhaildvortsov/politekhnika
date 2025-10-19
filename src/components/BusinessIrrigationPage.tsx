import React from 'react';
import AnimatedElement from './AnimatedElement';

const BusinessIrrigationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/business1.jpg"
            alt="Автополив для бизнеса"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  АВТОПОЛИВ ДЛЯ БИЗНЕСА
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Торговые центры, офисные здания, базы отдыха
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Оригинальное решение по озеленению Вашей территории может требовать серьезных вложений. Но Вы никогда не сможете назвать их пассивными. Грамотно обустроенное, ухоженное пространство вокруг зданий будет работать на Ваше имя не один год. Обратитесь к нашим специалистам за консультацией в вопросе озеленения и системы автоматического полива. Поможем в кратчайшие сроки с подбором растений и обеспечением их орошения по конкурентным ценам.
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
                src="/images/photos/panorama.jpg"
                alt="Пример работы в Астраханской области"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 text-lg">
                Пример работы в Астраханской области
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Преимущества систем автополива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                  <span className="text-xl text-gray-700">Требуется минимальное участие человека</span>
                </li>
                <li className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                  <span className="text-xl text-gray-700">Орошение выполняется качественно и безупречно</span>
                </li>
                <li className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                  <span className="text-xl text-gray-700">Удобство и комфорт</span>
                </li>
                <li className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">4</span>
                  <span className="text-xl text-gray-700">Возможность поливать газон быстро и эффективно</span>
                </li>
                <li className="flex items-start bg-green-50 p-6 rounded-xl border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">5</span>
                  <span className="text-xl text-gray-700">Оптимизация затрат на оплату энергоносителей</span>
                </li>
              </ul>

              <div className="mt-8 p-8 bg-green-50 rounded-xl border-2 border-green-200">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Правильно настроенная система автополива работает без участия владельца участка. Это исключает человеческий фактор и гарантирует своевременный полив.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default BusinessIrrigationPage;
