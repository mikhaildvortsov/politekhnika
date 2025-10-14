import React from 'react';
import AnimatedElement from './AnimatedElement';

const ControllersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/sys.jpg"
            alt="Контроллеры автополива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  КОНТРОЛЛЕРЫ АВТОПОЛИВА
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Умные системы автополива
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  Настройте зоны полива
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  С Wi-Fi контроллером Hunter вы легко настроите расписание полива для каждой зоны вашего участка. Система автоматически адаптируется под погодные условия и сэкономит воду.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/photos/rainbird_system.jpg" 
                  alt="Система управления поливом"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* СОЗДАЙТЕ СВОЙ ГРАФИК Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/photos/system.jpg" 
                  alt="Контроллер Hunter"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  СОЗДАЙТЕ СВОЙ ГРАФИК
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Система управления поливом Hunter Wi-Fi позволяет вам создавать индивидуальные графики полива для каждой зоны. 
                  Вы можете устанавливать время начала, продолжительность и частоту полива, учитывая тип растений и особенности почвы. 
                  Контроллер автоматически корректирует график в зависимости от погодных условий, экономя воду и обеспечивая оптимальный уход за вашим садом.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* ИСПОЛЬЗУЙТЕ ЛОГИЧНО Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedElement animationType="fade-right" delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  ИСПОЛЬЗУЙТЕ ЛОГИЧНО
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Мобильное приложение Hunter предоставляет полный контроль над системой автополива прямо с вашего смартфона. 
                  Вы можете запускать и останавливать полив, изменять настройки зон, получать уведомления о состоянии системы и даже 
                  управлять несколькими контроллерами из одного места. Интуитивный интерфейс делает управление поливом простым и удобным, 
                  где бы вы ни находились.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/photos/interface.jpg" 
                  alt="Мобильное приложение"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* ДЕЛИТЕСЬ ДОСТУПОМ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                ДЕЛИТЕСЬ ДОСТУПОМ
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Функция совместного доступа позволяет предоставить членам семьи или садовнику возможность управлять системой полива. 
                Вы можете легко добавлять и удалять пользователей, а также устанавливать разные уровни доступа. 
                Это особенно удобно, когда вы в отпуске или когда за садом ухаживают несколько человек. 
                Все изменения синхронизируются в реальном времени между всеми устройствами.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">О НАС</h3>
              <p className="text-sm leading-relaxed">
                ООО «Политехника» — динамично развивающееся предприятие в г. Волжский, специализирующееся на проектировании и монтаже систем автоматического полива, ландшафтном строительстве и благоустройстве территории в целом. Многолетний опыт работы позволяет нашим сотрудникам выполнять работы по проектам различной сложности — от нескольких сотен квадратных метров до нескольких гектаров.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">КОНТАКТЫ</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p>г. Волжский, Фонтанная, 6</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p>8-987-641-78-68</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>polytekhnika@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">ПОЛЕЗНОЕ</h3>
              <div className="space-y-2 text-sm">
                <p>СОВЕТЫ ПО ПРОЕКТИРОВАНИЮ</p>
                <p>ЭТАП-1 ГЕОМЕТРИЯ УЧАСТКА</p>
                <p>ЭТАП-2 ИСТОЧНИКИ ВОДОСНАБЖЕНИЯ</p>
                <p>ЭТАП-3. АГРОНОМИЧЕСКИЙ, ГЕОГРАФИЧЕСКИЙ, КЛИМАТИЧЕСКИЙ.</p>
                <p>ЭТАП-4. ВЫБОР ТИПА ДОЖДЕВАТЕЛЕЙ.</p>
                <p>ЭТАП-5. РАСПРЕДЕЛЕНИЕ ДОЖДЕВАТЕЛЕЙ ПО ТЕРРИТОРИИ УЧАСТКА И ДЕЛЕНИЕ ИХ ПО КАНАЛАМ.</p>
                <p>ЭТАП-6. ГИДРАВЛИЧЕСКИЙ РАСЧЕТ И ПОДБОР ДИАМЕТРОВ ТРУБ.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ControllersPage;
