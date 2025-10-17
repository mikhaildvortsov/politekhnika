import React from 'react';
import AnimatedElement from './AnimatedElement';

const CorpusPage: React.FC = () => {
  const products = [
    { height: "5 см", price: "50 руб.", image: "/images/photos/d5.jpg" },
    { height: "10 см", price: "180 руб.", image: "/images/photos/d10.jpg" },
    { height: "15 см", price: "500 руб.", image: "/images/photos/d15.jpg" },
    { height: "30 см", price: "800 руб.", image: "/images/photos/d30.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-12 text-center">
              Корпуса дождевателей
            </h1>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Предустановленный регулятор давления в штоке(опция)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Предварительно установленный обратный клапан (опционально)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Храповой механизм поворота штока
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Прочный и надежный, текстурированный корпус
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Боковое и нижнее подключение на модели 6" и 12" (15 см и 30 см)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700 leading-relaxed">
                    Прочная пружина редукции из нержавеющей стали
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Характеристики */}
            <AnimatedElement animationType="fade-up" delay={100}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Характеристики</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Размер впускного отверстия: ½"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Внутренняя резьба</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Рабочее давление 1,5-3,5 бар (максимум 5 бар)</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Спецификация */}
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Спецификация</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>i-PRO300 3"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO400 4"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO400-CV 4" (обратный клапан)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO400-PR 4" (регулятор давления)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO600 6"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO600-CV 6" (обратный клапан)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO600-SI 6" (боковое подключение)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO1200-SI 12" (боковое подключение)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>I-PRO400R 4" (сменная форсунка)</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            {/* Применение */}
            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Применение</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Орошение коммерческих объектов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Орошение частных объектов</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Цены на корпуса дождевателей
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 100}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-64 bg-white flex items-center justify-center p-8">
                    <img 
                      src={product.image} 
                      alt={`Корпус ${product.height}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      Высота: {product.height}
                    </h3>
                    <p className="text-2xl font-bold text-green-600 text-center">
                      {product.price}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorpusPage;

