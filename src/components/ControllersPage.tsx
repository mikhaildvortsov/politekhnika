import React from 'react';
import AnimatedElement from './AnimatedElement';

const ControllersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[32rem] overflow-hidden">
          <img
            src="/images/photos/photo_29.wide.jpeg"
            alt="Контроллеры для автополива"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 5%' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  КОНТРОЛЛЕРЫ ДЛЯ АВТОПОЛИВА
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
                <p className="text-2xl text-gray-700 leading-relaxed">
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
                  src="/images/photos/avtopoliv-hunter-pro-hc-wi-fi-1.webp" 
                  alt="Контроллеры для автополива"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fade-left" delay={300}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                  СОЗДАЙТЕ СВОЙ ГРАФИК
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Система управления поливом Wi-Fi контроллерами позволяет вам создавать индивидуальные графики полива для каждой зоны. Вы можете устанавливать время начала, продолжительность и периодичность полива, учитывая расположение зоны, тип растений и особенности почвы.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Есть возможность подключать различные датчики и сенсоры с обратной связью – например в реальном времени отслеживать расход воды в той или иной зоне системы.
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
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Мобильное приложение wi-fi контроллера, предоставляет Вам полный контроль над системой автополива прямо с вашего смартфона. Вы можете запускать и останавливать полив, изменять настройки зон, получать уведомления о состоянии системы и даже управлять несколькими контроллерами из одного места. Интуитивный интерфейс делает управление поливом простым и удобным, где бы вы ни находились.
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
              <p className="text-2xl text-gray-700 leading-relaxed">
                Функция совместного доступа позволяет предоставить членам семьи или работнику на участке возможность управлять системой полива. Вы можете легко добавлять и удалять пользователей, а также устанавливать разные уровни доступа. Это особенно удобно, когда вы в отпуске или когда за садом ухаживают несколько человек. Все изменения синхронизируются в реальном времени между всеми устройствами.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default ControllersPage;
