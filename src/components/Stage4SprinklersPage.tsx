import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage4SprinklersPage: React.FC = () => {
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
              Этап №4 «Выбор типа дождевателей»
            </h1>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <AnimatedElement animationType="fade-up" delay={150}>
          <div className="mb-12">
            <p className="text-2xl text-gray-800 leading-relaxed mb-6">
              В последующем мы будем рассматривать только те выбранные вами зоны, которые будут поливаться методом дождевания, то есть имитацией дождя. Для этого мы будем использовать специальные устройства – дождеватели – о типах которых мы и поговорим ниже.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Существует несколько видов дождевателей. Мы не будем разбирать детально каждый из них. Для этого есть достаточно много информации в интернете от компаний, занимающихся их продажей. Но принципы работы и целесообразность выбора того или иного дождевателя в том или ином случае мы рассмотрим.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Все дождеватели объединяет одно свойство – все они имеют составной телескопический корпус, основная часть которого – неподвижная — располагается ниже уровня земли. Вторая часть – подвижный шток, поднимающийся над уровнем земли под силой давления воды и возвращающийся назад в корпус при отсутствии давления под действием пружины. Высота вылета штока над землей обуславливается маркой дождевателя и варьируется от 5 см до 30 см.
            </p>
          </div>
        </AnimatedElement>

        {/* Заголовок типов */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
              Типы дождевателей
            </h2>
          </div>
        </AnimatedElement>

        {/* Роторные дождеватели */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-12 bg-green-50 p-8 rounded-xl border-l-8 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Роторные дождеватели
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Самый технически сложный и дорогой тип дождевателей. Вращение верхней, подвижной части штока – «головы» (см. рис.) обеспечивает планетарная зубчатая передача, приводимая в движение давлением воды. В «голове» есть гнездо для установки сменных сопел, поставляемых в комплекте. Путем замены сопел выбирается оптимальный радиус полива и расход воды.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Применение:</strong> Незаменимы при поливе больших территорий. Также устанавливаются на средних и малых участках прямоугольной формы.
            </p>

            <div className="bg-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Характеристики:</h4>
              <div className="space-y-3 text-lg text-gray-700">
                <p><strong>Радиус полива:</strong> от 5,5 до 30 м, оптимальный — 12–15 м</p>
                <p><strong>Расход воды:</strong> 0,5–2 м³/час</p>
                <p><strong>Рабочее давление:</strong> 3–7 кгс/см²</p>
                <p><strong>Диаметр резьбы входного отверстия:</strong> 3/4″ (внутр.)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h5 className="text-lg font-bold text-green-800 mb-3">Преимущества:</h5>
                <p className="text-gray-700">
                  Надежность, простота и точность регулировки. За счет большого радиуса уменьшается погонаж трубы и объем земляных работ. Взаимозаменяемость сопел разных производителей.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h5 className="text-lg font-bold text-red-800 mb-3">Недостатки:</h5>
                <p className="text-gray-700">
                  Высокая цена от 800 руб. до 4,5 тыс. руб. Требуют большого водного бюджета, высокого давления и, соответственно, труб больших диаметров. Сопла максимального радиуса некоторых производителей могут иметь «мертвую зону» в радиусе первых 2–3 метров.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Статические дождеватели */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-12 bg-green-50 p-8 rounded-xl border-l-8 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Статические дождеватели (дождеватели со статическими головками)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              В этих дождевателях ничего не вращается. Все детали находятся в статическом положении – отсюда и название. Они состоят из корпуса и штока с верхней резьбовой частью, на которую накручивается головка статического дождевания. Здесь очень важно разобраться с терминологией, чтобы при обращении в разные торгующие компании вы разговаривали с ними на одном языке.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Корпус вместе со штоком называется – «корпус дождевателя».
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Рабочий элемент, накручиваемый на шток – головка дождевателя.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Некоторые торгующие компании головки дождевателя могут называть: «соплами», «форсунками», «насадками» и пр.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Корпуса дождевателей различают по: высоте вылета штока: 5 см, 7,5 см, 10 см, 15 см, 30 см; качеству уплотнительного кольца штока; наличию запорного клапана, необходимого при установке дождевателей на участках с перепадами высот.
            </p>

            <div className="bg-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Статические головки разделяют по:</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Радиусу полива (в футах): от 2 (0,6 м) до 17 (5,1 м)</p>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Возможности регулировки сектора полива:</p>
                  <div className="ml-6 space-y-2 text-gray-700">
                    <p><strong>С фиксированным сектором:</strong></p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Q – четверть круга</li>
                      <li>Т – треть круга</li>
                      <li>ТТ – две трети круга</li>
                      <li>H – половина круга</li>
                      <li>F – полный круг</li>
                      <li>в форме полосы</li>
                    </ul>
                    <p className="mt-3"><strong>Регулируемые:</strong></p>
                    <ul className="list-disc ml-6">
                      <li>сектор полива регулируется от 0° до 360°</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-lg text-gray-700"><strong>Рабочее давление:</strong> 2,5–4,5 кгс/см²</p>
                  <p className="text-lg text-gray-700"><strong>Диаметр резьбы входного отверстия:</strong> 1/2″ (внутр.)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Применение:</p>
                  <p className="text-gray-700">
                    Устанавливаются в основном на участки малой и средней площади. Незаменимы при поливе узких полос от 1 м и небольших участков сложной геометрической формы. Удобны для полива отдельно стоящих деревьев.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h5 className="text-lg font-bold text-green-800 mb-3">Преимущества:</h5>
                <p className="text-gray-700">
                  Самая низкая цена, большой выбор головок различного радиуса, из всех видов дождевателей имеют наименьшее время полива.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h5 className="text-lg font-bold text-red-800 mb-3">Недостатки:</h5>
                <p className="text-gray-700">
                  Большой расход воды, самопроизвольное изменение сектора полива, мелкодисперсная струя сильно подвержена влиянию ветра.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Дождеватели с ротаторными головками */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-12 bg-green-50 p-8 rounded-xl border-l-8 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Дождеватели с ротаторными головками
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              В этих дождевателях используется стандартный корпус, но головка имеет вращающуюся шайбу. Тонкие струи воды, направленные под разными углами относительно земли, вращаясь, поливают заданный регулируемым кольцом сектор. Появившись в продаже в начале 2000-х годов, эти головки стали крайне популярны во всем мире из-за своей универсальности и экономичности и получили название – <strong>Ротаторные головки или MP ROTATOR</strong>.
            </p>

            <div className="bg-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Ротаторные головки различают:</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">По радиусу полива:</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>MP 1000 – до 4,5 м</li>
                    <li>MP 2000 – до 6 м</li>
                    <li>MP 3000 – до 9 м</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">По возможности регулировки сектора:</p>
                  <p className="text-gray-700 mb-2"><strong>Регулируемые:</strong></p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>с сектором полива 90°–210°</li>
                    <li>с сектором полива 210°–270°</li>
                  </ul>
                  <p className="text-gray-700 mt-3 mb-2"><strong>Нерегулируемые:</strong></p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>с сектором полива 360°</li>
                  </ul>
                  <p className="text-gray-700 mt-3 mb-2"><strong>Нестандартной формы:</strong></p>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>угловые, с сектором полива 45°–105°</li>
                    <li>полив полосой</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Применение:</p>
                  <p className="text-gray-700">
                    Устанавливаются практически на любых участках шириной от 2 м.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-lg border-2 border-green-600">
                <h5 className="text-lg font-bold text-green-800 mb-3">Преимущества:</h5>
                <p className="text-gray-700">
                  Надежность, низкое потребление воды, легкая регулировка сектора и возможность изменения радиуса полива.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h5 className="text-lg font-bold text-red-800 mb-3">Недостатки:</h5>
                <p className="text-gray-700">
                  Более высокая цена относительно статических головок, значительное несоответствие эффективного радиуса полива относительно заявленного производителем.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Заключение */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mt-12 p-8 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-xl text-gray-800">
              Теперь переходим к следующему этапу <Link to="/советы-по-проектированию/этап-5-распределение-дождевателей/" className="text-green-600 font-bold hover:text-green-700 underline">«Распределение дождевателей по территории участка и деление их на каналы»</Link>.
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={450}>
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

export default Stage4SprinklersPage;

