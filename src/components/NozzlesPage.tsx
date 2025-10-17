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
    </div>
  );
};

export default NozzlesPage;

