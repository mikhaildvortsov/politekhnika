import React from 'react';
import AnimatedElement from './AnimatedElement';

const SystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/avtopoliv_systems.png"
            alt="Системы автополива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center bottom' }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
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
              <p className="text-2xl text-gray-700 leading-relaxed">
                Сегодня не нужно никого убеждать, что системы автоматического полива газонов и клумб способны высвободить значительное количество вашего времени и сил. Грязные, тяжелые шланги, необходимость их где-то хранить и прочие неудобства, связанные с ручным поливом — с этим вы обязательно столкнетесь. И это при том, что при поливе вручную вы никогда не добьетесь оптимального по расходу и по равномерности полива различных участков.
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
                  <span className="text-lg text-gray-700">Система автополива монтируется скрытым способом и не нарушает целостность ландшафта участка</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">2</span>
                  <span className="text-lg text-gray-700">Качественный и равномерный полив по всем зонам с необходимым расходом воды на единицу площади</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">3</span>
                  <span className="text-lg text-gray-700">Система автоматического полива имеет гибкую структуру и может надстраиваться с добавлением новых зон или изменением существующих</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">4</span>
                  <span className="text-lg text-gray-700">Возможность установки гидрантов для подключения шлангов – водяных розеток, а также подключение к системе других потребителей воды</span>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold text-sm">5</span>
                  <span className="text-lg text-gray-700">Возможность подключать множество датчиков и устройств – автоматический впрыск удобрений и пр., что делает систему более продвинутой с технической стороны</span>
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
              <p className="text-2xl text-gray-700 leading-relaxed">
                Современное оборудование, грамотный проект и качественный монтаж на долгие годы позволят вам снять с себя эту трудоемкую задачу и все проблемы с этим связанные.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Автополив — это лучший способ провести орошение своего участка даже в самых труднодоступных местах. Закажите проект системы автоматического полива у нас, и вы сможете самостоятельно убедиться в множестве её преимуществ.
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
                  Основные компоненты:
                </h3>

                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Контроллер управления системой автополива</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Качественные электромагнитные клапаны</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Корпусы и форсунки дождевателей</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Надежные трубопроводные системы и фитинги</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Датчик дождя</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>Профессиональные гидранты (водяные розетки)</span>
                  </li>
                </ul>
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
