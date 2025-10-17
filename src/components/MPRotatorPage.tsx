import React from 'react';
import AnimatedElement from './AnimatedElement';

const MPRotatorPage: React.FC = () => {
  const models = [
    { 
      name: "MP1000-90", 
      radius: "радиус 2,5—4,5 м", 
      angle: "угол 90—210°",
      image: "/images/photos/MP1000-90.webp"
    },
    { 
      name: "MP1000-210", 
      radius: "радиус 2,5—4,5м", 
      angle: "угол 210—270°",
      image: "/images/photos/MP1000-210.jpg"
    },
    { 
      name: "MP1000-360", 
      radius: "радиус 2,5—4,5 м", 
      angle: "угол 360°",
      image: "/images/photos/MP1000-360.jpg"
    },
    { 
      name: "MP2000-90", 
      radius: "радиус 4—6,7 м", 
      angle: "угол 90—210°",
      image: "/images/photos/MP2000-90.webp"
    },
    { 
      name: "MP2000-210", 
      radius: "радиус 4—6,7 м", 
      angle: "угол 210—270°",
      image: "/images/photos/MP2000-210.jpg"
    },
    { 
      name: "MP2000-360", 
      radius: "радиус 4—6,7 м", 
      angle: "угол 360°",
      image: "/images/photos/MP2000-360.jpg"
    },
    { 
      name: "MP3000-90", 
      radius: "радиус 6,7—9,1 м", 
      angle: "угол 90—210°",
      image: "/images/photos/MP3000-90.jpg"
    },
    { 
      name: "MP3000-210", 
      radius: "радиус 6,7—9,1 м", 
      angle: "угол 210—270°",
      image: "/images/photos/MP3000-210_new.jpg"
    },
    { 
      name: "MP3000-360", 
      radius: "радиус 6,7—9,1 м", 
      angle: "угол 360°",
      image: "/images/photos/MP3000-360.png"
    },
    { 
      name: "MP3500-90", 
      radius: "радиус 10—11 м", 
      angle: "угол 90—210°",
      image: "/images/photos/MP3500-90.jpg"
    },
    { 
      name: "MPLCS515", 
      radius: "полоса с левой стороны", 
      angle: "1,5—4,6 м",
      image: "/images/photos/MPLCS515.webp"
    },
    { 
      name: "MPRCS515", 
      radius: "полоса с правой стороны", 
      angle: "1,5—4,6 м",
      image: "/images/photos/MPSS530.jpg"
    },
    { 
      name: "MPSS530", 
      radius: "боковая полоса", 
      angle: "1,5—4,6 м",
      image: "/images/photos/MPSS530_2.jpg"
    },
    { 
      name: "MPCORNER", 
      radius: "радиус 2,5—4,5 м", 
      angle: "угол 45—105°",
      image: "/images/photos/MPCORNER.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-80 md:h-96 overflow-hidden bg-white">
          <img
            src="/images/photos/rotators.jpg"
            alt="MP Rotator. Ротаторные головки"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  MP Rotator. Ротаторные головки
                </h1>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedElement animationType="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Подходит к корпусу дождевателя любого производителя Hunter, Rain Bird, Irritrol, превращая его в ораситель с высоким показателем равномерности покрытия и низким расходом воды.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Важно: MP Rotator обеспечивает равномерное распределение осадков на любом секторе и при любом радиусе. Вода разбрызгивается медленно и равномерно, что значительно сокращает просачивание в грунт и потери.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Двойное выталкивание */}
            <AnimatedElement animationType="fade-up" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Двойное выталкивание</h3>
                <p className="text-gray-700 leading-relaxed">
                  MP Rotator имеет механизм, позволяющий защитить сопло от попадания внутрь загрязняющих частиц в то время, когда не осуществляется полив. Пружина сопла, более сильная, чем пружина выдвижной штанги, удерживает сопло некоторое время в сложенном положении в момент активации системы. После завершения цикла полива, функция двойного выталкивания срабатывает снова, обеспечивая защиту сопла до следующего цикла.
                </p>
              </div>
            </AnimatedElement>

            {/* Автоматически точная норма осадков */}
            <AnimatedElement animationType="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Автоматически точная норма осадков</h3>
                <p className="text-gray-700 leading-relaxed">
                  MP Rotator® обладает уникальной способностью контролировать количество воды, проходящей через сопло при различных настройках сектора и радиуса полива, обеспечивая согласованный полив вне зависимости от установленных параметров.
                </p>
              </div>
            </AnimatedElement>

            {/* Равномерность полива */}
            <AnimatedElement animationType="fade-up" delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Равномерность полива</h3>
                <p className="text-gray-700 leading-relaxed">
                  Различные потоки дождевателя MP Rotator позволяют ему равномерно покрывать все участки ландшафта, обеспечивая равномерность распределения, значительно превышающую равномерность стандартного сопла. Каждый поток направлен на конкретные участки для достижения высокой эффективности полива и равномерного покрытия.
                </p>
              </div>
            </AnimatedElement>

            {/* Низкий уровень осадков */}
            <AnimatedElement animationType="fade-up" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Низкий уровень осадков</h3>
                <p className="text-gray-700 leading-relaxed">
                  Поскольку большинство видов почвы отличается скоростью впитывания менее 25 мм/ч, низкая норма полива обеспечивает его наивысшую эффективность. Стандартный дождеватель MP Rotator подает воду с нормой 10 мм/ч, а дождеватель серии SR – 20 мм/ч. Оба этих варианта позволяют избежать стока воды и предотвратить эрозию почвы.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
              MP ROTATOR - ТАБЛИЦА ТЕХНИЧЕСКИХ ХАРАКТЕРИСТИК
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {models.map((model, index) => (
              <AnimatedElement key={index} animationType="fade-up" delay={200 + index * 50}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-white flex items-center justify-center p-4">
                    {model.image ? (
                      <img 
                        src={model.image} 
                        alt={model.name}
                        className={`w-full h-full object-contain ${
                          model.name === "MPSS530" ? "scale-[2.25] translate-x-1" : 
                          model.name === "MPLCS515" ? "scale-150 translate-x-4" : 
                          ["MP1000-90", "MP1000-360", "MP2000-210", "MP2000-360", "MP3000-90", "MP3000-210", "MP3500-90", "MPCORNER"].includes(model.name) ? "scale-125" : ""
                        }`}
                      />
                    ) : (
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs text-gray-400">{model.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{model.name}</h3>
                    <div className="space-y-1 text-sm text-gray-700 text-center">
                      <p>{model.radius}</p>
                      <p>{model.angle}</p>
                    </div>
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

export default MPRotatorPage;

