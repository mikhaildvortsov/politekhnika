import React from 'react';
import AnimatedElement from './AnimatedElement';

const RotorsPage: React.FC = () => {
  const brands = [
    { name: "HUNTER", logo: "/images/photos/hunter_logo.jpg" },
    { name: "RAIN BIRD", logo: "/images/photos/rainbird_logo.png" },
    { name: "IRRITROL", logo: "/images/photos/irritrol_logo.png" },
    { name: "TORO", logo: "/images/photos/toro_logo.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 md:h-[32rem] overflow-hidden">
        <img
          src="/images/photos/rotor_sprinkler.jpg"
          alt="Роторные дождеватели"
          className="w-full h-full object-cover"
          style={{ objectPosition: '60% center' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Роторные дождеватели
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Самовыдвижные роторные дождеватели производства
              </h2>
              <h3 className="text-xl md:text-2xl font-medium">
                HUNTER • RAIN BIRD • IRRITROL
              </h3>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="space-y-6">
              <AnimatedElement animationType="fade-right" delay={300}>
                <div className="float-right ml-[60px] mr-[40px] mb-6 max-w-[280px]">
                  <div className="rounded-2xl overflow-hidden bg-white p-6 shadow-xl">
                    <div className="overflow-hidden pr-8">
                      <img 
                        src="/images/photos/hunter_sprinkler.jpg" 
                        alt="Роторный дождеватель Hunter"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedElement>
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Профессиональные роторные дождеватели
                </h3>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Роторные дождеватели - это надежное решение для автоматического полива средних и больших газонов. Благодаря вращающейся струе воды обеспечивается равномерное орошение территории с высокой эффективностью использования воды.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Внешняя и внутренняя резьба 3/4"(дюйма), 1"(дюйм), 1 1/4"(дюйма), 2"(дюйма), 3"(дюйма)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Конфигурация прямоточная или угловая
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Корпус и крышка выполнены из полиамида, армированного стекловолокном (30%)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Серия F и M - это клапаны полной линейки размеров, которые очень просты в установке и использовании
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Исторический диапазон для Irritrol, который всегда гарантировал высокую производительность и надежность
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Регулируемая настройка дуги: 40° - 360° для точного покрытия любой зоны
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      8 стандартных и 4 низкоугловых сопла в комплекте для различных условий
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Прочный корпус из инженерного пластика выдерживает любые нагрузки
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xl text-gray-700 leading-relaxed">
                      Встроенный фильтр предотвращает засорение сопел мелкими частицами
                    </span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg text-gray-800 font-semibold mb-2">
                    <svg className="w-5 h-5 inline mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Новая система Slip Clutch
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Позволяет легко регулировать дугу полива без использования каких-либо инструментов. Просто поверните верхнюю часть корпуса - и нужный сектор орошения установлен!
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed italic">
                  Роторные дождеватели идеально подходят для полива газонов площадью от 50 до 500 м² и обеспечивают экономию воды до 30% по сравнению со статическими дождевателями.
                </p>
                
                <div className="clear-both"></div>
              </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Особенности */}
            <AnimatedElement animationType="fade-up" delay={100}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Особенности</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Секторная и полноразворотная модель в одном устройстве</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Корпус из S и, следовательно, более прочный</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Стандартная резиновая крышка обеспечивает дополнительную защиту от частиц грязи</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Используемая ранее верхняя регулировка</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Фильтр с большой площадью поверхности для лучшей устойчивости к засорению и устойчивости к мусору</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Простота сборки и разборки</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Характеристики */}
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Характеристики</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Радиус: 7,6 - 15,2 м</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Диапазон расхода: 0,6 - 2,0 м3/час</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Рабочее давление: 1,7 - 4,5 бар (рекомендуемое рабочее давление 3,0 бар) некоторые модели Hunter до 7,5 бар</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Высота подъема: 10-12,7 см</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Стандартная траектория сопла: 25°</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Набор сопел с низким углом траектории: 12°</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Опции */}
            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Опции</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Обратный клапан выдерживает подпор до 2,1 м изменения высоты, исключает вытекание воды</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Крышка индикатора рециркулированной воды (фиолетовая)</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Применение */}
            <AnimatedElement animationType="fade-up" delay={400}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Применение</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Коммерческое</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Частное</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Производители
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

export default RotorsPage;

