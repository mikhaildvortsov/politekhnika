import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage5DistributionPage: React.FC = () => {
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
              Этап №5 «Распределение дождевателей по территории участка и деление их на каналы»
            </h1>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Заглушка для фото схемы участка */}
        <AnimatedElement animationType="fade-up" delay={150}>
          <div className="bg-gray-200 p-12 rounded-xl border-2 border-gray-300 mb-10 text-center">
            <p className="text-gray-500 text-lg">
              [Изображение: Схема участка с расположением дождевателей]
            </p>
          </div>
        </AnimatedElement>

        {/* Пример участка */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              В качестве примера взят участок неправильной формы с габаритными размерами: 38,5 м на 22,5 м, общей площадью 795 м². Диаметр врезки в водовод централизованного водоснабжения — Ø 32 мм. Участок планируется засеять газоном. Вся площадь участка отнесена к одной поливной зоне, т. е. требует одинаковой нормы полива.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Доступный водный бюджет, исходя из диаметра врезки, принимаем равным 3,2 м³/час.
            </p>
          </div>
        </AnimatedElement>

        {/* Выбор типа дождевателей */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Участок средних размеров, и при доступном водном бюджете от 5 м³/час и выше самым разумным было бы использовать роторные дождеватели. Но, исходя из доступного расхода 3,2 м³/час, мы будем использовать ротаторные головки MP ROTATOR 3000-й серии с радиусом полива до 9 м (по паспорту) и стандартные корпуса дождевателей с высотой подъема штока — 10 см.
            </p>
          </div>
        </AnimatedElement>

        {/* Расстояние между дождевателями */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              На каком расстоянии друг от друга расставлять дождеватели?
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Во время работы дождевателя количество воды, попадающее на землю, уменьшается по мере удаления от центра дождевателя, поэтому дождеватели необходимо распределить по участку так, чтобы каждая точка участка получала одинаковое количество воды. Это достигается путем взаимного перекрытия секторов полива смежных (соседних) дождевателей.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-4">
              <p className="text-xl text-gray-700 leading-relaxed mb-3">
                <strong>Перекрытие должно составлять от 80% до 100%.</strong>
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-3">
                Полное или 100%-е перекрытие означает, что струи максимальной длины достигают смежных дождевателей. Иными словами, радиус полива равен расстоянию между дождевателями.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                В зарубежной литературе полное перекрытие считается единственно правильным вариантом при проектировании систем автоматического полива.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              Исходя из вышесказанного, а также учитывая, что максимальный радиус головок МР 3000 далеко не 9 метров – выбираем расстояние между дождевателями равным 7 метрам.
            </p>
          </div>
        </AnimatedElement>

        {/* Расстановка дождевателей */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10 bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Порядок расстановки дождевателей:
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Расставлять дождеватели начинаем с углов участка. Циркулем, в масштабе, чертим секторы полива. Точки пересечения дуги с границей участка будут являться местом расположения следующих дождевателей. Когда все углы заполнены, замыкаем периметр. Затем внутреннюю часть.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              Всегда придерживайтесь правила, что лучше поставить лишний дождеватель, чем не поставить вообще. Его всегда можно будет или полностью заглушить, или уменьшить радиус полива регулировкой, или поставить головку меньшего радиуса полива.
            </p>
          </div>
        </AnimatedElement>

        {/* Деление на каналы */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Деление дождевателей на каналы
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Следующий этап – деление дождевателей на каналы, т. е. выделение дождевателей в группы, которые мы сможем включить одновременно, исходя из доступного расхода нашего источника водоснабжения – в данном случае 3,2 м³/час. Для этого нам необходимо знать, какой расход у каждого из дождевателей.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Все производители поливочного оборудования предоставляют <a href="/MP-ROTATOR.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">таблицы расходов MP ROTATOR</a> головок дождевателей в зависимости от типоразмера головки, рабочего давления и сектора полива. Применяя таблицы расходов MP ROTATOR 3000, мы сначала рассчитаем общее удельное (в единицу времени) водопотребление по всей площади участка.
            </p>
          </div>
        </AnimatedElement>

        {/* Расчет */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              После недолгих подсчетов определяем, что на нашем участке мы установим:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-lg text-gray-700 mb-6">
              <li>8 полноразворотных головок — 360°</li>
              <li>14 головок с сектором полива 180° или близким к нему</li>
              <li>1 головка с сектором 90°</li>
            </ul>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Из таблиц находим, что расход:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-lg text-gray-700 mb-6">
              <li>MP 3000 360° – 0,8 м³/час</li>
              <li>MP 3000 180° – 0,4 м³/час</li>
              <li>MP 3000 90° – 0,2 м³/час</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-300 mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Общее удельное водопотребление:</h4>
              <p className="text-xl font-mono text-gray-800 mb-2">
                8 × 0,8 + 14 × 0,4 + 1 × 0,2 = 12,2 м³/час
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Расчет каналов */}
        <AnimatedElement animationType="fade-up" delay={500}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Расчет количества каналов
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Разделив общий удельный расход 12,2 м³/час на доступный 3,2 м³/час, мы получим минимальное количество каналов, на которые нам необходимо разбить наш участок:
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-6">
              <p className="text-xl font-mono text-gray-800 mb-3">
                12,2 / 3,2 = 3,81
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Округлив в большую сторону до целого числа, получаем, что нам понадобится <strong>4 канала</strong>, чтобы полить участок, не выйдя за лимит.
              </p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              Необходимо отметить, что 4 – это минимальное количество каналов, никто не запрещает нам поделить участок на 5, 6 или более каналов.
            </p>
          </div>
        </AnimatedElement>

        {/* Преимущества и недостатки */}
        <AnimatedElement animationType="fade-up" delay={550}>
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h4 className="text-xl font-bold text-green-800 mb-4">
                  Преимущества большего количества каналов:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Меньший доступный водный бюджет</li>
                  <li>Использование труб меньшего диаметра</li>
                  <li>Возможность более точной регулировки нормы полива в разных местах участка за счет изменения времени полива</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h4 className="text-xl font-bold text-red-800 mb-4">
                  Недостатки:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Удорожание из-за большего количества электромагнитных клапанов и соединительных фитингов</li>
                  <li>Увеличенное время полива</li>
                  <li>Применение более дорогих контроллеров с большим количеством программируемых зон</li>
                </ul>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              В итоге необходимо учесть достаточно много факторов и просчитать несколько вариантов, прежде чем решить, на сколько каналов разбивать полив.
            </p>
          </div>
        </AnimatedElement>

        {/* Решение */}
        <AnimatedElement animationType="fade-up" delay={600}>
          <div className="mb-10 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
            <p className="text-xl text-gray-800 leading-relaxed mb-3">
              В нашем случае выбираем количество каналов равным четырем.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Выделяем различными цветами трубопроводы, соединяющие дождеватели разных каналов.
            </p>
          </div>
        </AnimatedElement>

        {/* Правила */}
        <AnimatedElement animationType="fade-up" delay={650}>
          <div className="mb-10 bg-green-50 p-8 rounded-xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Важные правила при делении на каналы:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                <p className="text-lg text-gray-700">Никогда не объединяйте в один канал дождеватели со статическими и ротаторными головками</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                <p className="text-lg text-gray-700">Тщательно рассчитывайте норму вылива при объединении роторных дождевателей и дождевателей с ротаторными головками</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                <p className="text-lg text-gray-700">При применении роторных дождевателей имейте в виду, что струя воды при секторе полива 90° будет проходить через определенную точку в четыре раза чаще, чем при секторе в 360°</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">4</span>
                <p className="text-lg text-gray-700">При возможности объединяйте в канал головки одного типоразмера и сектора полива</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">5</span>
                <p className="text-lg text-gray-700">Общий удельный расход канала не должен превышать доступный расход</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">6</span>
                <p className="text-lg text-gray-700">Располагайте клапаны (краны) включения с краю участка, чтобы не намокнуть при ручном включении и отключении каналов</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Заключение */}
        <AnimatedElement animationType="fade-up" delay={700}>
          <div className="mt-12 p-8 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-xl text-gray-800">
              Переходим к заключительному этапу проектирования — <Link to="/советы-по-проектированию/этап-6-гидравлический-расчет/" className="text-green-600 font-bold hover:text-green-700 underline">«Гидравлический расчет и подбор диаметров труб»</Link>.
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={750}>
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

export default Stage5DistributionPage;

