import React from 'react';
import AnimatedElement from './AnimatedElement';

const NozzlesPage: React.FC = () => {
  const brands = [
    { name: "HUNTER", logo: "/images/photos/hunter_logo.jpg" },
    { name: "RAIN BIRD", logo: "/images/photos/rainbird_logo.png" },
    { name: "IRRITROL", logo: "/images/photos/irritrol_logo.png" },
    { name: "TORO", logo: "/images/photos/toro_logo.jpg" }
  ];

  const models = [
    { 
      name: "PRO-VAN8", 
      radius: "2,4 м", 
      image: "/images/photos/pro_van8.png",
      description: "регулируемый сектор полива"
    },
    { 
      name: "PRO-VAN10", 
      radius: "3,0 м", 
      image: "/images/photos/pro_van10.png",
      description: "регулируемый сектор полива"
    },
    { 
      name: "PRO-VAN12", 
      radius: "3,6 м", 
      image: "/images/photos/pro_van12.png",
      description: "регулируемый сектор полива"
    },
    { 
      name: "PRO-VAN15", 
      radius: "4,5 м", 
      image: "/images/photos/pro_van15.png",
      description: "регулируемый сектор полива"
    },
    { 
      name: "PRO-VAN17", 
      radius: "5,1 м", 
      image: "/images/photos/pro_van17.png",
      description: "регулируемый сектор полива"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8 text-center">
              Форсунки и сопла
            </h1>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
              Регулируемые сопла и форсунки
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-12 text-center">
              HUNTER • RAIN BIRD • IRRITROL • TORO
            </h3>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={300}>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Подходят ко всем корпусам всех известных мировых брендов. Обеспечивают возможность регулировки сектора и радиуса полива зависимости от размеров и конфигурации участка. Незаменимы для быстрого и обильного полива.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Характеристики моделей
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {models.map((model, index) => (
              <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-white flex items-center justify-center">
                    {model.image ? (
                      <img 
                        src={model.image} 
                        alt={model.name}
                        className={`w-full h-full object-contain ${model.name === "PRO-VAN8" ? "scale-150 p-4" : "p-4"}`}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400">{model.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{model.name}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">Максимальный радиус:</span> {model.radius}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Features and Codification Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Особенности */}
            <AnimatedElement animationType="fade-right" delay={100}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Особенности</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Регулируемое веерное сопло, регулировка от 0-360 градусов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Регулировка сектора поворотом верхней части сопла вручную</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Поставляется в положении 0 градусов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Указатель сектора на верхней части сопла</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Цветная кодировка для легкой идентификации</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Фильтр</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Винты для регулировки радиуса из нержавеющей стали позволяют регулировать радиус до 25%</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Кодификация */}
            <AnimatedElement animationType="fade-left" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Кодификация</h3>
                </div>
                <div className="p-6">
                  <p className="text-xl text-gray-700">
                    <span className="font-semibold">PRO-VANXX</span> Регулируемые сопла от 0° до 360°
                  </p>
                </div>
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
      <footer className="bg-green-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase border-b border-green-700 pb-2">О НАС</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                ООО «Политехника» — динамично развивающееся предприятие в г. Волжский, специализирующееся на проектировании и монтаже систем автоматического полива, ландшафтном строительстве и благоустройстве территории в целом. Многолетний опыт работы позволяет нашим сотрудникам выполнять работы по проектам различной сложности — от нескольких сотен квадратных метров до нескольких гектаров.
              </p>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase border-b border-green-700 pb-2">КОНТАКТЫ</h3>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p>г. Волжский, Фонтанная, 6</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:+79876417868" className="hover:text-green-300 transition-colors">8-987-641-78-68</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:polytekhnika@gmail.com" className="hover:text-green-300 transition-colors break-all">polytekhnika@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase border-b border-green-700 pb-2">ПОЛЕЗНОЕ</h3>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <p className="hover:text-green-300 cursor-pointer transition-colors">СОВЕТЫ ПО ПРОЕКТИРОВАНИЮ</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-1 ГЕОМЕТРИЯ УЧАСТКА</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-2 ИСТОЧНИКИ ВОДОСНАБЖЕНИЯ</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-3. АГРОНОМИЧЕСКИЙ, ГЕОГРАФИЧЕСКИЙ, КЛИМАТИЧЕСКИЙ.</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-4. ВЫБОР ТИПА ДОЖДЕВАТЕЛЕЙ.</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-5. РАСПРЕДЕЛЕНИЕ ДОЖДЕВАТЕЛЕЙ ПО ТЕРРИТОРИИ УЧАСТКА И ДЕЛЕНИЕ ИХ ПО КАНАЛАМ.</p>
                <p className="hover:text-green-300 cursor-pointer transition-colors">ЭТАП-6. ГИДРАВЛИЧЕСКИЙ РАСЧЕТ И ПОДБОР ДИАМЕТРОВ ТРУБ.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NozzlesPage;

