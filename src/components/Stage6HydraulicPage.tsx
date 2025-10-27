import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage6HydraulicPage: React.FC = () => {
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
              Этап №6 «Гидравлический расчет и подбор диаметров труб»
            </h1>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Введение */}
        <AnimatedElement animationType="fade-up" delay={150}>
          <div className="mb-10">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <a href="/losses1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Полная таблица гидравлических сопротивлений (потерь) и расходов в полиэтиленовых трубах</a>.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Суть гидравлического расчета состоит в подборе условий, при которых самый отдаленный потребитель с наименьшими потерями и при минимальной стоимости трубопровода получает необходимое количество воды под необходимым давлением. Это значит, что при гидравлическом расчете принимается во внимание не общая длина трубопровода, а максимальное прямое расстояние (без ответвлений), которое проходит вода от источника водоснабжения до самого отдаленного дождевателя. Эту длину мы назовем L<sub>max</sub>.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              При выборе диаметра труб мы будем иметь ограничивающие нас предельные состояния, между которыми и будет находиться оптимальное решение.
            </p>
          </div>
        </AnimatedElement>

        {/* Предельные состояния */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Нижнее предельное состояние
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Скорость движения жидкости V не должна превышать 1,5 м/с, а потери на гидравлическое сопротивление в трубопроводе — h должны быть близкими к 10 м (1 кгс/см²) на 100 м трубопровода или меньше. Эти показатели тем ниже, чем больше диаметр трубы.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Верхнее предельное состояние
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Цена материалов. Стоимость труб и, особенно, стоимость соединительных фитингов значительно возрастает по мере увеличения диаметра проходного сечения трубы.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Подбор диаметра для Канала 1 */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Подберем диаметр трубы для Канала №1
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              На чертеже видно, что Канал №1 состоит из трех отрезков трубопровода:
            </p>
          </div>
        </AnimatedElement>

        {/* Заглушка для фото схемы */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="bg-gray-200 p-12 rounded-xl border-2 border-gray-300 mb-10 text-center">
            <p className="text-gray-500 text-lg">
              [Изображение: Схема канала №1 с участками трубопровода]
            </p>
          </div>
        </AnimatedElement>

        {/* Участки */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10">
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• участок 1.1 длиной 22,7 м, с расходом 3 м³/час</li>
              <li>• участок 1.2 длиной 22,9 м, с расходом 1,6 м³/час</li>
              <li>• участок 1.3 длиной 24,1 м, с расходом 1,4 м³/час</li>
            </ul>
            <p className="text-xl text-gray-700 leading-relaxed">
              Таким образом, по таблице гидравлических сопротивлений (потерь), выбираем диаметр проходного сечения по каждому участку:
            </p>
          </div>
        </AnimatedElement>

        {/* Расчеты по участкам */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>Участок 1.1</strong> – Ø32 мм, h – 9,25 м/100 м,<br />
                в пересчете на длину участка h<sub>1.1</sub> = 2,09 м
              </p>
              <p>
                <strong>Участок 1.2</strong> – Ø25 мм, h – 11,94 м/100 м,<br />
                в пересчете на длину участка h<sub>1.2</sub> = 2,73 м
              </p>
              <p>
                <strong>Участок 1.3</strong> – Ø25 мм, h – 9,65 м/100 м,<br />
                в пересчете на длину участка h<sub>1.3</sub> = 2,32 м
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Примечание */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <p className="text-xl text-gray-700 leading-relaxed italic">
              На участке 1.2 величина h больше 10 м/100 м, но, во-первых, дождеватели на этом участке расположены вдоль радиусной кривой, а значит, реальный сектор их полива будет меньше расчетного 180°, т. е. расход и гидравлические потери будут также меньше расчетных. Во-вторых, длина участка настолько мала, что это превышение можно считать несущественным.
            </p>
          </div>
        </AnimatedElement>

        {/* Сводная таблица */}
        <AnimatedElement animationType="fade-up" delay={500}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Сводная таблица всех каналов
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Аналогичным образом подбираем диаметр труб для всех каналов и помещаем их в сводную таблицу.
            </p>

            {/* Канал 1 */}
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mb-6">
              <h4 className="text-xl font-bold text-green-800 mb-3">Канал №1:</h4>
              <p className="text-lg text-gray-700 mb-3"><strong>Расход Q = 3 м³/час</strong></p>
              <ul className="space-y-2 text-gray-700">
                <li>L 1.1 – 22,7 м, Q<sub>1.1</sub> – 3 м³/час, Ø32 мм, h<sub>1.1</sub> – 2,09 м</li>
                <li>L 1.2 – 22,9 м, Q<sub>1.2</sub> – 1,6 м³/час, Ø25 мм, h<sub>1.2</sub> – 2,73 м</li>
                <li>L 1.3 – 24,1 м, Q<sub>1.3</sub> – 1,4 м³/час, Ø25 мм, h<sub>1.3</sub> – 2,32 м</li>
              </ul>
            </div>

            {/* Канал 2 */}
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mb-6">
              <h4 className="text-xl font-bold text-green-800 mb-3">Канал №2:</h4>
              <p className="text-lg text-gray-700 mb-3"><strong>Расход Q = 3,2 м³/час</strong></p>
              <ul className="space-y-2 text-gray-700">
                <li>L 2.1 – 15 м, Q<sub>2.1</sub> – 3,2 м³/час, Ø32 мм, h<sub>2.1</sub> – 1,38 м</li>
                <li>L 2.2 – 11,7 м, Q<sub>2.2</sub> – 1,6 м³/час, Ø25 мм, h<sub>2.2</sub> – 1,39 м</li>
                <li>L 2.3 – 11,7 м, Q<sub>2.3</sub> – 1,6 м³/час, Ø25 мм, h<sub>2.3</sub> – 1,39 м</li>
              </ul>
            </div>

            {/* Канал 3 */}
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mb-6">
              <h4 className="text-xl font-bold text-green-800 mb-3">Канал №3:</h4>
              <p className="text-lg text-gray-700 mb-3"><strong>Расход Q = 3,2 м³/час</strong></p>
              <ul className="space-y-2 text-gray-700">
                <li>L 3.1 – 7,9 м, Q<sub>3.1</sub> – 3,2 м³/час, Ø32 мм, h<sub>3.1</sub> – 0,73 м</li>
                <li>L 3.2 – 11,7 м, Q<sub>3.2</sub> – 1,6 м³/час, Ø25 мм, h<sub>3.2</sub> – 1,39 м</li>
                <li>L 3.3 – 11,7 м, Q<sub>3.3</sub> – 1,6 м³/час, Ø25 мм, h<sub>3.3</sub> – 1,39 м</li>
              </ul>
            </div>

            {/* Канал 4 */}
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mb-6">
              <h4 className="text-xl font-bold text-green-800 mb-3">Канал №4:</h4>
              <p className="text-lg text-gray-700 mb-3"><strong>Расход Q = 2,8 м³/час</strong></p>
              <ul className="space-y-2 text-gray-700">
                <li>L 4.1 – 1 м, Q<sub>4.1</sub> – 2,8 м³/час, Ø32 мм, h<sub>4.1</sub> – 0,09 м</li>
                <li>L 4.2 – 22,5 м, Q<sub>4.2</sub> – 1,6 м³/час, Ø25 мм, h<sub>4.2</sub> – 2,68 м</li>
                <li>L 4.3 – 21,6 м, Q<sub>4.3</sub> – 1,2 м³/час, Ø25 мм, h<sub>4.3</sub> – 1,63 м</li>
              </ul>
            </div>
          </div>
        </AnimatedElement>

        {/* О целесообразности уменьшения диаметра */}
        <AnimatedElement animationType="fade-up" delay={550}>
          <div className="mb-10 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
            <p className="text-xl text-gray-700 leading-relaxed">
              При подборе диаметра канальной трубы нужно также понимать, что по мере удаления от клапана количество дождевателей, а значит, и расход будет уменьшаться, следовательно, и диаметр труб по мере уменьшения количества дождевателей можно также уменьшать. Но уменьшение диаметра потребует дополнительных соединительных фитингов, которые, в свою очередь, во-первых, создадут дополнительные гидравлические сопротивления, а во-вторых, могут просто потечь. Поэтому на небольших участках целесообразность постепенного уменьшения диаметра труб определяется расчетами в каждом отдельном случае.
            </p>
          </div>
        </AnimatedElement>

        {/* Магистральная труба */}
        <AnimatedElement animationType="fade-up" delay={600}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Выбор диаметра магистральной трубы
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Расход воды при выборе диаметра магистральной, т. е. основной питающей трубы, выбираем равным расходу большего из каналов. Но он (диаметр) не должен быть меньше диаметра нагнетательного патрубка насоса.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Диаметр магистральной трубы в нашем случае выбираем по самым производительным каналам — Каналу №2 или Каналу №3 – 3,2 м³/час.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <p className="text-lg text-gray-700">
                Получаем — <strong>Ø32 мм</strong>, h<sub>маг</sub> – 2,56 м (в пересчете на длину магистральной трубы 25 м при показателе гидравлического сопротивления 10,27 м/100 м).
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Расчет проектного входного давления */}
        <AnimatedElement animationType="fade-up" delay={650}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Расчет проектного входного давления
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Таким образом, на данный момент мы имеем все данные для составления основного равенства (Этап-2 Источники Водоснабжения) для вычисления проектного входного давления воды — P<sub>пр.вх</sub>, необходимого для обеспечения работы нашей системы автоматического полива.
            </p>

            {/* Формула */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-300 mb-6">
              <p className="text-xl font-mono text-gray-800 text-center mb-4">
                P<sub>пр.вх</sub> = P<sub>пр.д</sub> + (h<sub>под</sub> + h<sub>рел</sub> + 1,3h<sub>тр</sub>) / 10
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Где:</strong></p>
                <p>P<sub>пр.д</sub> – проектное давление на дождевателях</p>
                <p>h<sub>под</sub> – высота подъема воды до точки подключения САП, м</p>
                <p>h<sub>рел</sub> – перепад высот рельефа участка, м</p>
                <p>h<sub>тр</sub> – потери давления в результате гидравлических сопротивлений в трубопроводе, м</p>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              В нашем случае h<sub>под</sub> = h<sub>рел</sub> = 0
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Для определения h<sub>тр</sub> мы берем в расчет не общую длину водопровода, а уже известный нам показатель L<sub>max</sub>, равный прямому пути воды без ответвлений от источника водоснабжения до самого отдаленного дождевателя. В нашем случае
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-6">
              <p className="text-lg font-mono text-gray-800 mb-2">L<sub>max</sub> = L<sub>маг</sub> + L<sub>1.1</sub> + L<sub>1.2</sub></p>
              <p className="text-lg text-gray-700 mb-4">А значит:</p>
              <p className="text-lg font-mono text-gray-800">h<sub>тр</sub> = h<sub>маг</sub> + h<sub>1.1</sub> + h<sub>1.2</sub></p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Подставляя это выражение в равенство, получаем:
            </p>

            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 mb-6">
              <div className="space-y-3 text-lg font-mono text-gray-800">
                <p>P<sub>пр.вх</sub> = P<sub>пр.д</sub> + 1,3 (h<sub>маг</sub> + h<sub>1.1</sub> + h<sub>1.2</sub>) / 10</p>
                <p>P<sub>пр.вх</sub> = 3,5 + 1,3 (2,56 + 2,09 + 2,73) / 10</p>
                <p className="text-2xl font-bold text-green-700">P<sub>пр.вх</sub> = 4,45 кгс/см²</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Результат */}
        <AnimatedElement animationType="fade-up" delay={700}>
          <div className="mb-10 bg-green-100 p-8 rounded-xl border-2 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Результат расчетной части проекта
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Таким образом, результатом расчетной части нашего проекта стали характеристики источника водоснабжения:
            </p>
            <div className="space-y-2 text-xl font-mono text-gray-800">
              <p><strong>Q = 3,2 м³/час</strong></p>
              <p><strong>P<sub>пр.вх</sub> = 4,45 кгс/см²</strong></p>
            </div>
          </div>
        </AnimatedElement>

        {/* Энергозатраты */}
        <AnimatedElement animationType="fade-up" delay={750}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Расчет энергозатрат насосной станции
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Также в том случае, если водоснабжение обеспечивается насосной станцией, необходимо понимать, что чем выше гидравлические сопротивления в трубопроводе, тем больше электроэнергии будет тратить двигатель вашего насоса на их преодоление. Эти затраты могут быть рассчитаны по формуле:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-300 mb-6">
              <p className="text-xl font-mono text-gray-800 text-center mb-4">
                N = 0,0027QH / ŋ
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Где:</strong></p>
                <p>Q – расход воды в м³/час</p>
                <p>Н – потеря напора в метрах</p>
                <p>ŋ — КПД электродвигателя и механической передачи на крыльчатку насоса (ŋ = 0,6–0,75 для центробежных насосов)</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
              <h4 className="text-xl font-bold text-yellow-800 mb-3">Пример:</h4>
              <p className="text-lg text-gray-700 mb-4">
                Мощность электродвигателя насоса, потраченная на преодоление гидравлических потерь, равных 10 м при расходе 3 м³/час, составит:
              </p>
              <div className="space-y-2 text-lg font-mono text-gray-800 mb-4">
                <p>N = 0,0027QH / ŋ</p>
                <p>N = 0,0027 × 3 × 10 / 0,65 = 0,124 кВт</p>
              </div>
              <p className="text-lg text-gray-700 italic">
                Цифра небольшая, но при необходимости «тащить» воду за сотни метров может вылиться в серьезные затраты.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Заключение */}
        <AnimatedElement animationType="fade-up" delay={800}>
          <div className="mt-12 p-8 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-xl text-gray-800 leading-relaxed">
              На этом проектную часть условного участка можно считать законченной. Нами получены все данные, необходимые для выбора материалов и насосного оборудования для обеспечения оптимальной работы системы автополива газона.
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={850}>
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

export default Stage6HydraulicPage;

