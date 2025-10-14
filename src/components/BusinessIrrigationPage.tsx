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
                Система автоматического полива – это важный инструмент, основным предназначением которого является сохранение ваших финансов, вложенных в озеленение и благоустройство. Автополив пользуется большим спросом не только на частных территориях, но также на территориях различных коммерческих объектов.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Используя системы автоматического полива, больше нет необходимости тратить деньги на садовников с грязными шлангами – система автополива сделает всё сама.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Надежная система полива – это мечта каждого. Несмотря на то, что многие пытаются добиться этого самостоятельно, системы автоматического полива остаются лучшим решением.
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

      {/* Schema Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Схема системы автополива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 flex justify-center">
              <img
                src="/images/photos/автополив.gif"
                alt="Схема системы автополива"
                className="w-full max-w-3xl h-auto rounded-lg"
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Цены на компоненты системы автополива
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">1</span>
                    <span className="text-gray-700">Накопительная пластиковая емкость 0,5-10м<sup>3</sup></span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 1 000 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">2</span>
                    <span className="text-gray-700">Насосная станция</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 15 000 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">3</span>
                    <span className="text-gray-700">Узел продувки системы на зиму</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">500 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">4</span>
                    <span className="text-gray-700">Фильтр, сетчатый или дисковый</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 800 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">5</span>
                    <span className="text-gray-700">Трубы ПНД и компрессионные фитинги</span>
                  </div>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">6</span>
                    <span className="text-gray-700">Гибкая подводка для подключения дождевателей, гидрантов</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 70 руб/м.п.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">7</span>
                    <span className="text-gray-700">Водяная розетка - быстрое подключение шланга</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">1100 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">8</span>
                    <span className="text-gray-700">Электромагнитные клапаны для автополива. 9В-24В</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 700 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">9</span>
                    <span className="text-gray-700">Провода управления клапанами - сечение 1-1,5мм<sup>2</sup></span>
                  </div>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">10</span>
                    <span className="text-gray-700">Контроллеры систем автоматического полива. Внутренние и наружные 9-24В 1-48 зон</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 2000 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">11</span>
                    <span className="text-gray-700">Метеодатчик, датчик дождя, заморозков</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 1500 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">12</span>
                    <span className="text-gray-700">Дождеватель в сборе, высота 5-30 см. С предустановленными форсунками и без</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 150 руб.</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">13</span>
                    <span className="text-gray-700">Комплект подключения капельного полива</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">2000 руб.</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">14</span>
                    <span className="text-gray-700">Система капельного полива</span>
                  </div>
                  <span className="font-bold text-green-600 ml-4 whitespace-nowrap">от 35 руб/п.м.</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white rounded-xl border-2 border-gray-300">
                <p className="text-lg text-gray-900 text-center mb-4">
                  Итоговая стоимость системы Вашего автополива будет стоить от 100 руб. за м<sup>2</sup>!
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

export default BusinessIrrigationPage;
