import React from 'react';
import AnimatedElement from './AnimatedElement';

const LawnsPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/how-it-works-bg-3.jpg"
            alt="Рулонный газон"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  РУЛОННЫЙ ГАЗОН
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Идеальная лужайка за один день
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Преимущества рулонного газона
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Очевидно, что ничего не может украсить территорию лучше, чем насыщенно-зеленый, яркий, ровный, ухоженный газон. Укладку газона заказывают владельцы и частных домов, и торговых предприятий, и офисов.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  В последние годы резко возросла актуальность рулонного газона, сейчас мы полностью изменили свои предложения в его пользу. Эта тенденция объясняется рядом преимуществ:
                </p>

                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>результат виден сразу, за несколько дней;</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>качество газона безупречно, благодаря особой семенной смеси, хорошо зарекомендовавшей себя в южной и центральной части страны;</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>посев газона можно проводить всего пару недель в году, а рулонный укладывают всю весну и осень, с мая по ноябрь.</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/photos/rulonnyj-gazon6-110617.jpg" 
                  alt="Рулонный газон"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animationType="fade-right" delay={200} className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/photos/hands.jpg" 
                  alt="Укладка газона"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300} className="order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                  Характеристики газона
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Газон в рулоне из московских питомников – это качественная посевная смесь, высокая адаптация к условиям средней полосы и Юга России и безупречное качество:
                </p>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Размер рулона:</strong> 40 см на 2 м; 0,8м²</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Толщина дерна:</strong> 2-5 см</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Наше предприятие еженедельно продает не менее <strong>1000 м²</strong> газона, клиенты могут купить рулонный газон и заказать его укладку.
                  </p>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  В Волгограде рулонный газон можно приобрести <strong>с конца апреля по ноябрь</strong> в объеме от 400 м². Постелить газон стоит от <strong className="text-green-600">100 руб. за м²</strong>.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Quick Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Получите газон уже завтра
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Время от заключения договора до укладки готового газона от 2х суток
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={250}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Не требует капитальных земельных работ
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold text-green-700">
                  Стоимость газона вместе с укладкой 250 – 350 руб/м²!
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-up" delay={350}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Продажа и укладка производится с конца апреля до ноября
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Price Includes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              Стоимость включает в себя:
            </h2>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedElement animationType="fade-up" delay={200}>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Подготовку грунта
                  </span>
                </div>
              </AnimatedElement>

              <AnimatedElement animationType="fade-up" delay={250}>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Стоимость газона с доставкой
                  </span>
                </div>
              </AnimatedElement>

              <AnimatedElement animationType="fade-up" delay={300}>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Укладка рулонного газона
                  </span>
                </div>
              </AnimatedElement>

              <AnimatedElement animationType="fade-up" delay={350}>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xl text-gray-700">
                    Стоимость органо-минеральных удобрений
                  </span>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawnsPage;
