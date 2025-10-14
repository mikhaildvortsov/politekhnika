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
              <p className="text-xl text-gray-700 leading-relaxed">
                Если у вас загородный участок либо частный дом, то Вы знаете, каких немалых денежных вложений требуют зеленые насаждения. Сохранить Ваши деньги и время поможет наша система автоматического полива. Такая система станет отличным помощником в уходе за участком. Также она обязательно приукрасит внешний вид вашего дома, и обязательно порадует качественной и эффективной работой.
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
              <p className="text-lg text-gray-700 leading-relaxed">
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
                  <span className="text-lg text-gray-700">
                    Значительная экономия собственного времени, так как сильно снижаются трудозатраты
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Снижаются затраты воды и электроэнергии
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Производится полный и постоянный контроль над процессом автоматического полива
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">
                    Система способна работать самостоятельно, без дополнительного вмешательства человека
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">
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

      {/* Schema Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Схема системы автополива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="scale" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <img 
                  src="/images/photos/автополив.gif" 
                  alt="Схема системы автополива"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Указаны примерные цены различных элементов автополива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">1</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Накопительная пластиковая емкость 0,5-10м3</span>
                    <span className="font-bold text-gray-900 ml-2">- от 1 000 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">2</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Насосная станция</span>
                    <span className="font-bold text-gray-900 ml-2">- от 15 000 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">3</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Узел продувки системы на зиму</span>
                    <span className="font-bold text-gray-900 ml-2">- 500 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">4</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Фильтр, сетчатый или дисковый</span>
                    <span className="font-bold text-gray-900 ml-2">- от 800 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">5</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Трубы ПНД и компрессионные фитинги.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">6</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Гибкая подводка для подключения дождевателей, гидрантов</span>
                    <span className="font-bold text-gray-900 ml-2">- от 70 руб/м.п.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">7</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Водяная розетка - быстрое подключение шланга</span>
                    <span className="font-bold text-gray-900 ml-2">- 1100 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">8</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Электромагнитные клапаны для автополива. 9В-24В</span>
                    <span className="font-bold text-gray-900 ml-2">- от 700 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">9</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Провода управления клапанами - сечение 1-1,5мм2</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">10</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Контроллеры систем автоматического полива. Внутренние и наружные 9-24В 1-48 зон - цены</span>
                    <span className="font-bold text-gray-900 ml-2">от 2000 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">11</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Метеодатчик, датчик дождя, заморозков</span>
                    <span className="font-bold text-gray-900 ml-2">- от 1500 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">12</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Дождеватель в сборе, высота 5-30 см. С предустановленными форсунками и без. - цены</span>
                    <span className="font-bold text-gray-900 ml-2">от 150 руб.</span>
                  </div>
                </li>
                <li className="flex items-start border-b border-gray-200 pb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">13</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Комплект подключения капельного полива</span>
                    <span className="font-bold text-gray-900 ml-2">- 2000 руб.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">14</span>
                  <div className="flex-1">
                    <span className="text-gray-700">Система капельного полива</span>
                    <span className="font-bold text-gray-900 ml-2">- от 35 руб/п.м.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-600">
                <p className="text-2xl font-bold text-green-700 text-center mb-4">
                  Итого: итоговая стоимость системы Вашего автополива будет стоить от 100 руб. за м²!
                </p>
                <p className="text-sm text-gray-600 italic">*Итоговая стоимость зависит от:</p>
                <ol className="text-sm text-gray-600 mt-2 space-y-1 ml-4">
                  <li>1. Формы и размеров участка(ов)</li>
                  <li>2. Количества и ширины дорожек</li>
                  <li>3. Количества и размеров деревьев, кустарников</li>
                  <li>4. Источника водоснабжения</li>
                  <li>5. Индивидуальных пожеланий заказчика</li>
                </ol>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">О НАС</h3>
              <p className="text-sm leading-relaxed">
                ООО «Политехника» — динамично развивающееся предприятие в г. Волжский, специализирующееся на проектировании и монтаже систем автоматического полива, ландшафтном строительстве и благоустройстве территории в целом. Многолетний опыт работы позволяет нашим сотрудникам выполнять работы по проектам различной сложности — от нескольких сотен квадратных метров до нескольких гектаров.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">КОНТАКТЫ</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p>г. Волжский, Фонтанная, 6</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p>8-987-641-78-68</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>polytekhnika@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">ПОЛЕЗНОЕ</h3>
              <div className="space-y-2 text-sm">
                <p>СОВЕТЫ ПО ПРОЕКТИРОВАНИЮ</p>
                <p>ЭТАП-1 ГЕОМЕТРИЯ УЧАСТКА</p>
                <p>ЭТАП-2 ИСТОЧНИКИ ВОДОСНАБЖЕНИЯ</p>
                <p>ЭТАП-3. АГРОНОМИЧЕСКИЙ, ГЕОГРАФИЧЕСКИЙ, КЛИМАТИЧЕСКИЙ.</p>
                <p>ЭТАП-4. ВЫБОР ТИПА ДОЖДЕВАТЕЛЕЙ.</p>
                <p>ЭТАП-5. РАСПРЕДЕЛЕНИЕ ДОЖДЕВАТЕЛЕЙ ПО ТЕРРИТОРИИ УЧАСТКА И ДЕЛЕНИЕ ИХ ПО КАНАЛАМ.</p>
                <p>ЭТАП-6. ГИДРАВЛИЧЕСКИЙ РАСЧЕТ И ПОДБОР ДИАМЕТРОВ ТРУБ.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeIrrigationPage;
