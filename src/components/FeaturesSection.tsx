import React from 'react';
import AnimatedElement from './AnimatedElement';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Гарантия качества",
      description: "Используем только профессиональное оборудование Hunter, Rain Bird, Irritrol с гарантией от производителя"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Многолетний опыт",
      description: "Более 15 лет успешной работы в Волгограде и области. Реализовано более 500 проектов различной сложности"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Полный цикл работ",
      description: "От проектирования до пуско-наладки. Подбор оборудования, монтаж, настройка и обслуживание систем"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Конкурентные цены",
      description: "Оптимальное соотношение цена-качество. Работаем напрямую с поставщиками оборудования"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Быстрый монтаж",
      description: "Средний срок установки системы автополива 3-5 дней. Минимальное нарушение ландшафта участка"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Сервисное обслуживание",
      description: "Консервация на зиму, расконсервация весной, ремонт и модернизация существующих систем"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Политехника - ваш надежный партнер в создании систем автоматического полива
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animationType="fade-up" delay={900}>
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать свой проект?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и расчет стоимости системы автополива для вашего участка
            </p>
            <a 
              href="tel:+79876417868"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Позвонить сейчас: 8-987-641-78-68
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FeaturesSection;
