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
      {/* Hero Section with Background */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/electromagn1.jpg"
            alt="Электромагнитные клапаны для полива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  ЭЛЕКТРОМАГНИТНЫЕ КЛАПАНЫ ДЛЯ ПОЛИВА
                </h1>
                <p className="text-lg md:text-xl font-light">
                  HUNTER • RAIN BIRD • IRRITROL • TORO
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Размеры резьбы</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Внешняя и внутренняя резьба <span className="font-bold text-green-700">1"</span>, <span className="font-bold text-green-700">1 1/2"</span>, <span className="font-bold text-green-700">2"</span>, <span className="font-bold text-green-700">3"</span>
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={350}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Конфигурация</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Конфигурация <span className="font-semibold text-green-700">прямоточная</span> или <span className="font-semibold text-green-700">угловая</span>
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={400}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Материал</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Надежный корпус и крышка выполнены из <span className="font-semibold text-green-700">полиамида</span>, армированного стекловолокном <span className="font-bold text-green-700">(30%)</span>
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={450}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Серия F и M</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Серия F и M - это клапаны полной линейки размеров, которые <span className="font-semibold text-green-700">очень просты</span> в установке и использовании
                </p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement animationType="fade-up" delay={500}>
            <div className="max-w-5xl mx-auto mt-8">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Наша рекомендация</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Мы используем сами и рекомендуем нашим клиентам использовать электромагнитные клапаны <span className="font-bold text-green-700">HUNTER</span>, которые за многие годы только подтверждают свою высокую производительность и надежность.
                </p>
              </div>
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
                    <span>Простота в монтаже и использовании</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Быстрая очистка</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Подходит для загрязненной воды</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Конкурентная цена</span>
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
                    <span>Резьба: 1", 1 1/2", 2", 3"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Рабочее давление: 0,2 - 10 бар</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Напряжение: 24V AC ток 0,3 А</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Напряжение 9V DC для автономных контроллеров</span>
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
                    <span>С регулятором потока</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Различные размеры резьбы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Возможность выбора по напряжению солиноида</span>
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
                  <p><strong>GB</strong> - С регулятором потока</p>
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
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Надежность и долговечность</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Клапаны изготовлены из высококачественных материалов, устойчивых к коррозии и воздействию химикатов. Срок службы составляет более 10 лет при правильной эксплуатации.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Экономия воды и энергии</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Точное управление подачей воды позволяет снизить расход на 30-40%. Низкое энергопотребление соленоида обеспечивает минимальные эксплуатационные затраты.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-right" delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Простота установки и обслуживания</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Клапаны легко устанавливаются в любую систему полива. Быстрая очистка фильтра и замена диафрагмы без специальных инструментов занимает всего несколько минут.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={500}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Работа с загрязненной водой</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Рекомендации по выбору и установке
            </h2>
          </AnimatedElement>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
              <AnimatedElement animationType="fade-up" delay={100}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Выбор размера клапана</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Размер клапана должен соответствовать диаметру магистральной трубы и обеспечивать необходимую пропускную способность
                </p>
              </AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatedElement animationType="fade-right" delay={150}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="text-3xl font-bold text-green-700 mb-2">1"</div>
                    <p className="text-gray-700">
                      Для средних зон 6-12 дождевателей с удельным расходом воды до <span className="font-bold text-green-700">6м3/час</span>
                    </p>
                  </div>
                </AnimatedElement>
                <AnimatedElement animationType="fade-left" delay={200}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="text-3xl font-bold text-green-700 mb-2">1 1/2" и больше</div>
                    <p className="text-gray-700">
                      Для систем с большими зонами и высоким расходом – свыше <span className="font-bold text-green-700">8 м3/час</span>
                    </p>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
              <AnimatedElement animationType="fade-up" delay={250}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Правила установки</h3>
              </AnimatedElement>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatedElement animationType="fade-right" delay={300}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                      <p className="text-gray-700 pt-1">
                        Устанавливайте клапаны в защищенных коробах для предотвращения попадания грунта, грязи и воды
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement animationType="fade-left" delay={350}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                      <p className="text-gray-700 pt-1">
                        Соблюдайте направление потока воды (указано стрелкой на корпусе)
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement animationType="fade-right" delay={400}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                      <p className="text-gray-700 pt-1">
                        Обеспечьте доступ к клапану для обслуживания и настройки
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement animationType="fade-left" delay={450}>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                      <p className="text-gray-700 pt-1">
                        Используйте качественную проводку 24V для подключения к контроллеру
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            <AnimatedElement animationType="fade-up" delay={500}>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-5xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Совет специалиста</h3>
                    <p className="text-2xl text-gray-700 leading-relaxed">
                      При установке клапанов в коробах на низинных участках предусмотрите дренажные отверстия для отвода скопившейся воды.
                    </p>
                  </div>
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
    </div>
  );
};

export default ValvesPage;
