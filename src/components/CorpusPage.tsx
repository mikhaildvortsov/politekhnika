import React from 'react';
import AnimatedElement from './AnimatedElement';

const CorpusPage: React.FC = () => {
  const products = [
    { 
      model: "PROS-00",
      description: "Корпус дождевателя Pro-Spray, переходник для кустарников со впускным отверстием ½\"; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-00-R",
      description: "Корпус дождевателя Pro-Spray, переходник для кустарников со впускным отверстием ½\", указатель применения технической воды; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-02",
      description: "Корпус дождевателя Pro-Spray, выдвижение на 5 см, впускное отверстие ½\"; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-03",
      description: "Корпус дождевателя Pro-Spray, выдвижение на 7,5 см, обратный клапан и впускное отверстие ½\"; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-04",
      description: "Корпус дождевателя Pro-Spray, выдвижение на 10 см, впускное отверстие ½\"; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-04-CV-R",
      description: "Корпус дождевателя Pro-Spray, выдвижение на 10 см, обратный клапан, впускное отверстие ½\", указатель применения технической воды; совместим с форсунками с внутренней резьбой"
    },
    { 
      model: "PROS-06",
      description: "Корпус дождевателя Pro-Spray, выдвижение на 15 см, впускное отверстие ½\"; без бокового впуска, совместим с форсунками с внутренней резьбой"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative">
        <div 
          className="relative h-96 md:h-[32rem] overflow-hidden bg-gray-800"
          style={{
            backgroundImage: 'url(/images/photos/korpus.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 75%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Корпусы дождевателей
                </h1>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Особенности и преимущества
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
                    Предустановленный регулятор давления в штоке(опция)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
                    Предварительно установленный обратный клапан (опционально)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
                    Храповой механизм поворота штока
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
                    Прочный и надежный, текстурированный корпус
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
                    Боковое и нижнее подключение на модели 6" и 12" (15 см и 30 см)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl text-gray-700 leading-relaxed">
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
                <ul className="space-y-3 text-gray-700 text-lg">
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
                <ul className="space-y-2 text-base text-gray-700">
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
                <ul className="space-y-3 text-gray-700 text-lg">
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

      {/* Products Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Модели корпусов дождевателей
            </h2>
          </AnimatedElement>

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-green-700">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-lg font-semibold text-white uppercase tracking-wider">
                        Модель
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-lg font-semibold text-white uppercase tracking-wider">
                        Описание
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-5 whitespace-nowrap text-lg font-medium text-gray-900">
                          {product.model}
                        </td>
                        <td className="px-6 py-5 text-base text-gray-700 leading-relaxed">
                          {product.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default CorpusPage;

