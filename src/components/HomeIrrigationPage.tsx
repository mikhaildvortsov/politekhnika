import React from 'react';
import AnimatedElement from './AnimatedElement';

const HomeIrrigationPage: React.FC = () => {
  const advantages = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Экономия времени",
      description: "Забудьте о ручном поливе. Система работает автоматически по заданному графику."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Экономия воды",
      description: "Умный полив использует на 30-50% меньше воды по сравнению с ручным поливом."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Здоровый газон",
      description: "Равномерный полив обеспечивает идеальные условия для роста растений."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Управление со смартфона",
      description: "Контролируйте полив из любой точки мира через мобильное приложение."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/images/photos/house.jpg"
            alt="Автополив для частного дома"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  АВТОПОЛИВ ДЛЯ ДОМА
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Профессиональные системы для вашего участка
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
              <p className="text-2xl text-gray-700 leading-relaxed">
                Ваш дом, Ваше пространство. Переезжая из города, мы стремимся совместить комфортную жизнь с близостью к Природе. Рядом с собой мы хотим видеть живые цветы, меняющие цвет листья деревьев, ходить с детьми босиком по только что скошенному газону. Прекрасно и просто.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Установить систему автоматического полива для участков площадью до нескольких тысяч кв.м. для нас очень просто. Потому что за 16 лет существования компании мы создали сотни таких работающих систем полива по всей стране. Мы кладем простое в основу Прекрасного.
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
              Преимущества автоматического полива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl text-gray-700 leading-relaxed">
                В современном мире система автополива уже является не роскошью, а повседневной необходимостью. Решив заказать у нас систему автоматического полива, Вы обязательно оцените ее преимущества.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                Основные достоинства системы автоматического полива:
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Значительная экономия собственного времени, так как сильно снижаются трудозатраты
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Снижаются затраты воды и электроэнергии
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Производится полный и постоянный контроль над процессом автоматического полива
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Система способна работать самостоятельно, без дополнительного вмешательства человека
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Автополив имеет множество плюсов, т.к. можно качественно оросить весь участок и достать даже до самых отдаленных растений
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedElement>

          {/* Example Work */}
          <AnimatedElement animationType="scale" delay={300}>
            <div className="max-w-4xl mx-auto mt-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/photos/sukhanovo.jpg" 
                  alt="Пример системы автополива"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-lg italic">
                Пример нашей работы в Московской области
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default HomeIrrigationPage;
