import React from 'react';
import AnimatedElement from './AnimatedElement';

const DesignPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/photos/ukladka.jpg')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedElement animationType="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 uppercase tracking-wide">
              Проектирование систем автополива
            </h1>
          </AnimatedElement>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Text */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-xl leading-relaxed text-gray-700">
              С каждым годом число желающих установить на участке автоматическую систему полива растет. 
              И это не только владельцы частных домов и дач, но и корпоративные застройщики, которым 
              выгодна эффективная организация полива зеленых насаждений и газона.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 mt-6">
              Такой ажиотаж вызван, в первую очередь, постепенным снижением цен на оборудование для 
              системы автополива, которые тянут за собой уменьшение стоимости проекта системы полива 
              в целом. Система автополива экономит финансовые средства за счет оптимизации (по сравнению 
              с ручным поливом) потребления энергии и воды, а также обеспечивает полноценный равномерный 
              полив без пересыхания и переувлажнения. Главное – правильно сделать проект и настроить 
              систему полива, и растения всегда будут радовать глаз своим цветущим видом.
            </p>
          </div>
        </AnimatedElement>

        {/* Highlighted Section - Our Company */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-l-8 border-green-600">
            <p className="text-xl leading-relaxed text-gray-800 mb-6">
              <span className="font-bold text-green-800">ООО «Политехника»</span> - это команда специалистов, 
              которые знают, как правильно осуществить проектирование и монтаж автополива. Мы работаем 
              на всех объектах:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Для дома */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Автополив для дома</h3>
                <p className="text-gray-600 text-center">
                  Проектирование и монтаж систем полива для частных домов, коттеджей и дачных участков
                </p>
              </div>

              {/* Для бизнеса */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Автополив для бизнеса</h3>
                <p className="text-gray-600 text-center">
                  Системы полива для торговых центров, офисных зданий, гостиниц и других коммерческих объектов
                </p>
              </div>

              {/* Для парков */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18c-2.5 0-4.5 2-4.5 4.5 0 1.5.8 2.8 2 3.5-1.5.5-2.5 2-2.5 3.5 0 2 1.5 3.5 3.5 3.5h3c2 0 3.5-1.5 3.5-3.5 0-1.5-1-3-2.5-3.5 1.2-.7 2-2 2-3.5C16.5 5 14.5 3 12 3z"/>
                    <ellipse cx="12" cy="5.5" rx="4" ry="3" fill="currentColor" opacity="0.3"/>
                    <ellipse cx="12" cy="10.5" rx="4.5" ry="3.5" fill="currentColor" opacity="0.3"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Автополив для парков</h3>
                <p className="text-gray-600 text-center">
                  Проектирование систем полива для парков, скверов, спортивных площадок и общественных территорий
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Contact Section */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-xl leading-relaxed text-gray-700">
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

