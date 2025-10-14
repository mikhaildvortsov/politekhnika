import React from 'react';
import AnimatedElement from './AnimatedElement';

const ValvesPage: React.FC = () => {
  const brands = [
    { name: "HUNTER", logo: "/images/photos/hunter_logo.jpg" },
    { name: "RAIN BIRD", logo: "/images/photos/rainbird_logo.png" },
    { name: "IRRITROL", logo: "/images/photos/irritrol_logo.png" },
    { name: "TORO", logo: "/images/photos/toro_logo.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8 text-center">
              Электромагнитные клапаны для полива
            </h1>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">
              HUNTER • RAIN BIRD • IRRITROL • TORO
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={300}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Внешняя и внутренняя резьба 3/4"(дюйма), 1"(дюйм), 1 1/4"(дюйма), 2"(дюйма), 3"(дюйма).
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Конфигурация прямоточная или угловая.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Корпус и крышка выполнены из полиамида, армированного стекловолокном (30%).
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Серия F и M - это клапаны полной линейки размеров, которые очень просты в установке и использовании.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Исторический диапазон для Irritrol, который всегда гарантировал высокую производительность и надежность.
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement animationType="scale" delay={400}>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-6 h-80 flex items-center justify-center">
                <img 
                  src="/images/photos/irritrol_valve.webp" 
                  alt="Электромагнитный клапан Irritrol"
                  className="w-full h-full object-contain"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="scale" delay={500}>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-6 h-80 flex items-center justify-center">
                <img 
                  src="/images/photos/irritrol_valve_2.jpg" 
                  alt="Электромагнитный клапан Irritrol"
                  className="w-full h-full object-contain"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="scale" delay={600}>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-6 h-80 flex items-center justify-center">
                <img 
                  src="/images/photos/irritrol_valve_3.webp" 
                  alt="Электромагнитный клапан Irritrol"
                  className="w-full h-full object-contain"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Особенности */}
            <AnimatedElement animationType="fade-up" delay={100}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">Особенности</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Низкое потребление электроэнергии</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Быстрая очистка</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Простота в использовании</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Подходит для загрязненной воды</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Эффективная система фильтрации</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Характеристики */}
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">Характеристики</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Резьба: 3/4", 1", 1 1/4", 2", 3"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Рабочее давление: 0,2 - 10 бар</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Напряжение: 24V AC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Потребление: 0,3 А</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Опции */}
            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">Опции</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Прямоточная конфигурация</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Угловая конфигурация</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>С регулятором давления</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Различные размеры резьбы</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Кодификация */}
            <AnimatedElement animationType="fade-up" delay={400}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">Кодификация</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>PGV</strong> - Электромагнитный клапан</p>
                  <p><strong>F</strong> - Внутренняя резьба</p>
                  <p><strong>M</strong> - Наружная резьба</p>
                  <p><strong>100</strong> - 1"</p>
                  <p><strong>075</strong> - 3/4"</p>
                  <p><strong>GB</strong> - С регулятором давления</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Преимущества электромагнитных клапанов
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Надежность и долговечность</h3>
                <p className="text-gray-700 leading-relaxed">
                  Клапаны изготовлены из высококачественных материалов, устойчивых к коррозии и воздействию химикатов. Срок службы составляет более 10 лет при правильной эксплуатации.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Экономия воды и энергии</h3>
                <p className="text-gray-700 leading-relaxed">
                  Точное управление подачей воды позволяет снизить расход на 30-40%. Низкое энергопотребление соленоида обеспечивает минимальные эксплуатационные затраты.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-right" delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Простота установки и обслуживания</h3>
                <p className="text-gray-700 leading-relaxed">
                  Клапаны легко устанавливаются в любую систему полива. Быстрая очистка фильтра и замена диафрагмы без специальных инструментов занимает всего несколько минут.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={500}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Работа с загрязненной водой</h3>
                <p className="text-gray-700 leading-relaxed">
                  Эффективная система фильтрации и большой проходной канал позволяют клапанам стабильно работать даже с водой, содержащей механические примеси.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Installation Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
              Рекомендации по выбору и установке
            </h2>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Выбор размера клапана</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Размер клапана должен соответствовать диаметру магистральной трубы и обеспечивать необходимый расход воды:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>3/4"</strong> - для небольших зон до 6 дождевателей</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>1"</strong> - для средних зон 6-12 дождевателей</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>1 1/4" и больше</strong> - для крупных зон и высокого расхода</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Правила установки</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">1.</span>
                      <span>Устанавливайте клапаны в защищенных коробах для предотвращения замерзания зимой</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">2.</span>
                      <span>Соблюдайте направление потока воды (указано стрелкой на корпусе)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">3.</span>
                      <span>Обеспечьте доступ к клапану для обслуживания и настройки</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">4.</span>
                      <span>Используйте качественную проводку 24V для подключения к контроллеру</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <p className="text-lg text-gray-800 font-semibold">
                    Совет специалиста: При установке клапанов в коробах предусмотрите дренажные отверстия для отвода конденсата и возможность слива воды из системы на зиму.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
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

export default ValvesPage;
