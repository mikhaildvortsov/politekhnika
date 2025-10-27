import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage1GeometryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Green Header */}
      <section className="py-16" style={{
        background: 'linear-gradient(90deg, rgba(42, 155, 119, 1) 0%, rgba(111, 199, 87, 1) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Этап №1 «Геометрия участка»
            </h1>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <AnimatedElement animationType="fade-up" delay={150}>
          <div className="mb-12">
            <p className="text-2xl text-gray-800 leading-relaxed mb-8">
              Вот несколько советов, которые помогут выполнить графическую часть нашего проекта быстрее и проще:
            </p>
          </div>
        </AnimatedElement>

        {/* Совет 1 */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              1. Заблаговременно подготовьте все, что необходимо для чертежных работ:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 leading-relaxed ml-4">
              <li>Лист миллиметровой бумаги формата А1 или А2</li>
              <li>Простой карандаш</li>
              <li>Набор цветных карандашей</li>
              <li>Циркуль</li>
              <li>Ластик</li>
              <li>Калькулятор</li>
              <li>Рулетка от 10 м</li>
            </ul>
          </div>
        </AnimatedElement>

        {/* Совет 2 */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              2. Измерение и нанесение на чертеж начните с внешних границ участка.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Скорее всего, это будет ограждение. Отмечаем ворота, калитки и другие характерные детали — они нам помогут привязать к местности другие объекты. Если ограждение выполнено из пролетов одинакового размера, то считаем пролетами. Это относится ко всем линейным размерам объектов, выполненных с применением унифицированных элементов. Например: длину дорожек измеряем бортовыми камнями (бордюрами по-простому), заборы – пролетами, дороги – опорами ЛЭП и т. д.
            </p>
          </div>
        </AnimatedElement>

        {/* Совет 3 */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              3. После границ участка наносятся все крупные строения.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Жилой дом, дом прислуги, здание бассейна и т. д.
            </p>
          </div>
        </AnimatedElement>

        {/* Совет 4 */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              4. При нанесении объектов проверяйте их положение по отношению к границам участка и зданиям.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Это необходимо для более точного определения их положения в пространстве.
            </p>
          </div>
        </AnimatedElement>

        {/* Совет 5 */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              5. При нанесении зеленых насаждений должны быть учтены не их текущие размеры (высота и диаметр), а их максимальные.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Если вы планируете еще какие-нибудь посадки — определитесь с ними сейчас и нанесите на чертеж.
            </p>
          </div>
        </AnimatedElement>

        {/* Совет 6 */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              6. Обозначьте все инженерные сети, проходящие под землей, с указанием глубины их залегания.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Это очень пригодится, если вы все же решите нанять профессиональную организацию для выполнения работ по монтажу систем автоматического полива.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Если вам удастся добиться погрешности в пределах 1% (0,5 м на длине 50 м), это можно считать отличным результатом.
            </p>
          </div>
        </AnimatedElement>

        {/* Заключение и ссылка на следующий этап */}
        <AnimatedElement animationType="fade-up" delay={500}>
          <div className="mt-12 p-8 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-xl text-gray-800">
              На <Link to="/советы-по-проектированию/этап-2-источник-водоснабжения/" className="text-green-600 font-bold hover:text-green-700 underline">следующем этапе</Link> мы поговорим о водоснабжении.
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={550}>
          <div className="mt-8">
            <button 
              onClick={() => {
                navigate(-1);
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              className="inline-block bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold cursor-pointer"
            >
              ← Назад
            </button>
          </div>
        </AnimatedElement>

      </div>
    </div>
  );
};

export default Stage1GeometryPage;

