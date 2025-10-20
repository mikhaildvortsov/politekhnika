import React from 'react';
import AnimatedElement from './AnimatedElement';

const DesignPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/architect.jpeg"
            alt="Проектирование систем автополива"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  ПРОЕКТИРОВАНИЕ СИСТЕМ АВТОПОЛИВА
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Профессиональное проектирование от экспертов
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Content - Single Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* First Block with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-6">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-700">
                  Если Вы зашли на эту страницу, то, в большинстве случаев, Вы либо заказчик, либо застройщик крупного объекта с целью определения бюджета на озеленение прилегающих к объекту территорий.
                </p>
                
                <p className="text-xl leading-relaxed text-gray-700">
                  Нередки случаи, когда у Вас уже есть проект, но Вас смущает сумма и Вам нужно альтернативное предложение.
                </p>

                <h3 className="text-3xl md:text-4xl font-bold text-green-700 mt-6">Вы по адресу</h3>
                
                <p className="text-xl leading-relaxed text-gray-700">
                  Проектирование систем автоматического полива на больших площадях и промышленных объектах требует времени – от недели до трех – и значительного количества согласований. В результате мы гарантируем, что Вы получите максимально проработанный проект и смету. Более того – наличие собственной техники, обученного персонала и огромного опыта обеспечат проведение монтажных работ в самые сжатые сроки. По окончании которых мы передадим Вам полный комплект исполнительной документации.
                </p>
              </div>

              {/* Image - Project */}
              <div className="lg:sticky lg:top-8 mt-24">
                <img 
                  src="/images/photos/5.jpg" 
                  alt="Проектирование систем автополива" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Project Details Section with Image and Text */}
            <div className="my-12">
              {/* First Row: Image and First Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Image - Plan */}
                <div className="mt-[30px]">
                  <img 
                    src="/images/photos/plan.png" 
                    alt="План системы автополива" 
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                {/* First Text Block */}
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-6">Что необходимо для начала работ по проектированию:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                      <span className="text-xl text-gray-700">Тех.задание с указанием площади и границ озеленения</span>
                    </div>
                    <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                      <span className="text-xl text-gray-700">Тех.условия на подключение к сетям водоснабжения</span>
                    </div>
                    <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                      <span className="text-xl text-gray-700">Дендроплан, с указанием количества и номенклатуры зеленых насаждений. (в любом формате)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Block - Full Width */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">В итоге вы получаете проект со следующими разделами:</h3>
                <div className="space-y-4">
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                    <span className="text-xl text-gray-700">Общие данные – описание структуры системы автоматического полива, типов полива, наличие накопительных резервуаров, насосных, расчет суточного водопотребления.</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                    <span className="text-xl text-gray-700">Гидравлический расчет, расчет диаметров труб по каждой линии, расчет характеристик насосных станций и подбор насосов.</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                    <span className="text-xl text-gray-700">Выбор типов дождевателей с указанием радиусов, секторов полива и удельного расхода воды.</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">4</span>
                    <span className="text-xl text-gray-700">Описание системы управления автоматическим поливом с выбором контроллера(ов) расчет протяженности и сечения кабелей управления – слаботочная система – 24В</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">5</span>
                    <span className="text-xl text-gray-700">Рекомендации по обслуживанию и сезонным работам</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">6</span>
                    <span className="text-xl text-gray-700">Смета</span>
                  </div>
                </div>
              </div>

              {/* Third Block - Full Width */}
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-6">Графическая часть:</h3>
                <div className="space-y-4">
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                    <span className="text-xl text-gray-700">Трассировка канальных трубопроводов с расстановкой дождевателей и детализировкой основных узлов и оборудования</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                    <span className="text-xl text-gray-700">Трассировка магистрального трубопровода с расстановкой электромагнитных клапанов управления.</span>
                  </div>
                  <div className="flex items-start border-l-4 border-green-600 bg-green-50 p-6 rounded-xl shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                    <span className="text-xl text-gray-700">Слаботочная система управления клапанами</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-gray-700 mt-6">
              Чтобы заказать проект системы полива, обращайтесь в наш офис в Волгограде по указанному 
              на сайте адресу или звоните <span className="font-bold text-green-600 text-2xl">8-987-641-78-68</span>. 
              Мы вышлем к вам специалиста, который замеряет участок, проконсультирует по всем вопросам, 
              связанным с автополивом газона и даст ценные рекомендации по благоустройству территории в целом.
            </p>
            
            <div className="mt-8 p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <p className="text-lg text-gray-800 text-center">
                <span className="font-bold text-green-800">При заключении договора на монтаж систем полива</span>
                <br />
                <span className="text-xl font-bold text-green-600">
                  проектирование (графика проекта, расчеты, согласование) – бесплатно
                </span>
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default DesignPage;


