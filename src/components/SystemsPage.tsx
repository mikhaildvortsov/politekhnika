import React from 'react';
import AnimatedElement from './AnimatedElement';

const SystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/sistema-avtopoliva.jpg"
            alt="Системы автополива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  СИСТЕМЫ АВТОПОЛИВА
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Профессиональные решения для вашего участка
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Несмотря на то, что многие дачники и садоводы выполняют орошение самостоятельно, специалисты настоятельно рекомендуют пользоваться специальными системами автополива.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Преимущества использования автополива
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="max-w-2xl mx-auto lg:mx-0">
                <ul className="space-y-3">
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">1</span>
                  <span className="text-lg text-gray-700">Выполняется скрытое функционирование всей системы</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">2</span>
                  <span className="text-lg text-gray-700">Качественное орошение всего участка</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">3</span>
                  <span className="text-lg text-gray-700">В автополиве имеются встроенные водяные розетки</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">4</span>
                  <span className="text-lg text-gray-700">В системах автоматического полива предусмотрен высокий уровень надежности</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">5</span>
                  <span className="text-lg text-gray-700">Присутствуют дополнительные блоки, что делают работу системы еще более совершенной</span>
                </li>
              </ul>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/photos/avtopoliv-hunter-pro-hc-wi-fi-1.webp"
                  alt="Контроллеры для автополива"
                  className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Стоит обратить внимание на то, что без использования системы автополива нельзя хорошо выходить газон. Ведь из-за человеческого фактора бывает не только несвоевременный уход, но и несвоевременный полив. В свою очередь автополив имеет множество плюсов, это значительная экономия воды, времени и электричества. <span className="text-green-600 font-semibold">Используя систему автоматического полива, можно сэкономить более 2000 рублей на 10 соток в месяц.</span>
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Автополив – это лучший способ провести орошение своего участка даже в самых труднодоступных местах. Воспользуйтесь этой системой и вы сможете самостоятельно убедиться в множестве ее преимуществ.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Example Work Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <div className="max-w-5xl mx-auto">
              <img
                src="/images/photos/20150607171547.jpg"
                alt="Пример работы на турбазе Лазурит"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <p className="text-center text-gray-600 mt-4 text-lg">
                Пример нашей работы на турбазе "Лазурит"
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Оборудование для автополива
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Составляющие, что присутствуют в автополиве:
                </h3>

                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Специальный пульт управления устройством</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Датчик дождя</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Качественные электромагнитные клапаны</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Профессиональные водяные розетки</span>
                  </li>
                </ul>

                <p className="text-xl text-gray-700 leading-relaxed mt-6">
                  Многие знают, что для нормального роста растений, необходимо выполнять регулярный автополив. Когда работа выполняется самостоятельно, нет точной уверенности в том, что орошение будет выполнено качественно, именно по этой причине обязательно стоит пользоваться устройством автоматического полива.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/photos/oborudovanie-no-bg.png"
                  alt="Оборудование для автополива"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemsPage;
