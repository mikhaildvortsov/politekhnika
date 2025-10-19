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
                  С каждым годом число желающих установить на участке автоматическую систему полива растет. 
                  И это не только владельцы частных домов и дач, но и корпоративные застройщики, которым 
                  выгодна эффективная организация полива зеленых насаждений и газона.
                </p>
                
                <p className="text-xl leading-relaxed text-gray-700">
                  Такой ажиотаж вызван, в первую очередь, постепенным снижением цен на оборудование для 
                  системы автополива, которые тянут за собой уменьшение стоимости проекта системы полива 
                  в целом. Система автополива экономит финансовые средства за счет оптимизации (по сравнению 
                  с ручным поливом) потребления энергии и воды, а также обеспечивает полноценный равномерный 
                  полив без пересыхания и переувлажнения. Главное – правильно сделать проект и настроить 
                  систему полива, и растения всегда будут радовать глаз своим цветущим видом.
                </p>
              </div>

              {/* Image - Project */}
              <div className="lg:sticky lg:top-8 mt-16">
                <img 
                  src="/images/photos/project2.jpeg" 
                  alt="Проектирование систем автополива" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Image Section - Base */}
            <div className="my-12">
              <img 
                src="/images/photos/ukladka.jpg" 
                alt="База отдыха Лотос" 
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-center text-gray-600 italic mt-3 text-lg">База отдыха Лотос</p>
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

