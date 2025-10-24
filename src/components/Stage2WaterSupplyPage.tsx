import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage2WaterSupplyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Green Header */}
      <section className="py-16" style={{
        background: 'linear-gradient(90deg, rgba(42, 155, 119, 1) 0%, rgba(111, 199, 87, 1) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Этап №2 «Источник водоснабжения»
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
              Задача этого этапа — оценка качественных и количественных характеристик источников водопотребления для полива.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              По каким параметрам оцениваются источники водоснабжения?
            </h2>
          </div>
        </AnimatedElement>

        {/* Параметры */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-10 bg-gray-50 p-6 rounded-xl">
            <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
              <li>• Доступный расход воды – <strong>"Q"</strong>, (м³/час)</li>
              <li>• Статическое и динамическое давление воды – <strong>"P"</strong>, (кгс/см²)</li>
              <li>• Физико-химический состав воды</li>
              <li>• Температура воды в поливной сезон</li>
              <li>• Удаленность от участка</li>
            </ul>
          </div>
        </AnimatedElement>

        {/* Расход воды */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Расход воды – "Q"
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Единица измерения – м³/час – как видно из единиц измерения, этот показатель определяет, какой объем в кубометрах мы сможем заполнить водой за 1 час. Иногда применяются другие единицы – л/с (литры в секунду) или л/мин (литры в минуту). Но все уважающие себя производители насосного оборудования (для перекачки воды) и поливочного оборудования оперируют именно в м³/час. Эта размерность будет также удобна при расчете проходной способности и потерь давления трубопроводов.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Расход воды является важнейшим показателем и, как мы убедимся, сыграет решающую роль при всех последующих расчетах.
            </p>
          </div>
        </AnimatedElement>

        {/* Давление воды */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Давление воды – "P"
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Давление воды можно представить как энергию, способную перемещать воду прямолинейно или вверх, и тем дальше или выше, чем выше наше давление. Показатель также крайне важный для работоспособности любой системы автоматического полива.
            </p>
          </div>
        </AnimatedElement>

        {/* Физико-химический состав */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Физико-химический состав воды
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Учитывает наличие примесей. По большей степени относится к скважинам с повышенным содержанием всевозможных включений, количество которых иногда достигает таких величин, что без специальной обработки воды способно вывести поливочное оборудование из строя в течение нескольких дней. Поэтому при проведении буровых работ у себя на участке принимайте работы у подрядчика вместе с удовлетворительными результатами химического анализа воды.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              При заборе воды из открытых водоемов в большинстве случаев достаточно применение сетчатых фильтров 150–200 мкм.
            </p>
          </div>
        </AnimatedElement>

        {/* Температура и удаленность */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              На двух следующих показателях мы останавливаться подробно не будем. Достаточно сказать, что <strong>температура воды</strong> будет важна при поливе определенных видов растений. Это к агрономам. <strong>Удаленность</strong> будет учтена при расчете потерь давления в трубопроводах.
            </p>
          </div>
        </AnimatedElement>

        {/* Централизованное водоснабжение */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              ЦЕНТРАЛИЗОВАННОЕ ВОДОСНАБЖЕНИЕ
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              То есть подключение к общему водоводу с хозяйственно-питьевой или технической водой.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Если вы уже врезаны в один из таких водоводов, то тут все просто – расход воды Q определяется по диаметру трубы из таблицы (см. ниже), а давление P – измерением статического давления в трубопроводе манометром. Тут может возникнуть законный вопрос — по диаметру какой трубы считать расход, если от врезки идет труба одного диаметра, затем переходит в другой, в доме в третий и т. д.?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-semibold">
              Ответ: учитывается труба с наименьшим диаметром.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Участками трубопроводов длиной меньше 1,5 м можно пренебречь. Объясняется это их способностью пропускать через себя больший объем жидкости за счет увеличения скорости ее движения. Но это не значит, что врезать наш полив необходимо в доме. Выберите трубу с максимальным диаметром вне дома, или в монтажном колодце вместе с общим вводом в дом, не забывая при этом уладить все формальности с местным водоканалом.
            </p>
          </div>
        </AnimatedElement>

        {/* Таблица */}
        <AnimatedElement animationType="fade-up" delay={500}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Таблица расходов "Q" труб различного диаметра
            </h3>
            <p className="text-lg text-gray-700 mb-4">Материалом труб можно пренебречь.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-2 border-gray-300">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-3 px-4 border-b-2 border-gray-300 text-left">Диаметр трубы, мм</th>
                    <th className="py-3 px-4 border-b-2 border-gray-300 text-left">
                      Доступный расход при нормальной скорости движения жидкости 1–1,5 м/с, м³/час
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">Ø20, 3/4″</td>
                    <td className="py-3 px-4 border-b border-gray-300">1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">Ø25, 1″</td>
                    <td className="py-3 px-4 border-b border-gray-300">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">Ø32, 1 1/4″</td>
                    <td className="py-3 px-4 border-b border-gray-300">3,2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">Ø40, 1 1/2″</td>
                    <td className="py-3 px-4 border-b border-gray-300">5,4</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300">Ø50, 2″</td>
                    <td className="py-3 px-4 border-b border-gray-300">10,5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <a 
                href="/losses1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-lg"
              >
                Полная таблица гидравлических сопротивлений (потерь) и расходов в полиэтиленовых трубах
              </a>
            </div>
          </div>
        </AnimatedElement>

        {/* Пример */}
        <AnimatedElement animationType="fade-up" delay={550}>
          <div className="mb-10 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Пример:</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Подключение к трубе диаметром 1 1/2″ (Ø40 мм) — обеспечит нам доступный расход Q = 5,4 м³/час.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Отмечаем этот параметр в свободном месте на чертеже.
            </p>
          </div>
        </AnimatedElement>

        {/* Измерение давления */}
        <AnimatedElement animationType="fade-up" delay={600}>
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Для определения статического давления в водопроводе, место подключения манометра необходимо выбирать максимально близко к месту будущего подключения системы автоматического полива. И поскольку мы измеряем статическое давление, все потребители, «сидящие» на этой трубе в момент измерения, обязательно должны быть отключены, т. е. расход в этот момент должен быть равен нулю.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Показания необходимо снимать в поливной сезон несколько раз в разное время суток. В результате мы получим ясную картину потребления воды в вашем районе и выберем для себя оптимальные часы полива. Как правило, это будут ночные и утренние часы.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наименьшее из полученных показаний будет являться доступным давлением "P". Также отмечаем этот параметр. В результате в свободном углу чертежа у нас появятся две строчки:
            </p>
          </div>
        </AnimatedElement>

        {/* Пример показателей */}
        <AnimatedElement animationType="fade-up" delay={650}>
          <div className="mb-10 bg-green-50 p-6 rounded-xl border-2 border-green-300">
            <p className="text-lg text-gray-700 mb-2">Например:</p>
            <p className="text-xl font-mono font-bold text-gray-800 mb-1">Q = 5,4 м³/час</p>
            <p className="text-xl font-mono font-bold text-gray-800 mb-3">P = 4,5 кгс/см²</p>
            <p className="text-lg text-gray-700 italic">
              (Я бы заказчиков с такими показаниями заносил в Красную Книгу.)
            </p>
          </div>
        </AnimatedElement>

        {/* О чем говорят цифры */}
        <AnimatedElement animationType="fade-up" delay={700}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              О чем могут сказать эти цифры уже на этом этапе?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Давление "P"</strong> – показывает, сможет ли наша система автополива работать без повышающего насоса. Для небольших и средних, плоских по рельефу участков, — давление в 4,5 кгс/см² определяют как минимально необходимое давление на входе или проектное входное давление — "P пр.вх".
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Почему именно 4,5 кгс/см²?</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Потому что, во-первых – это давление в начальной точке системы автополива, с учетом всех потерь, связанных с движением воды по трубопроводам, тройникам, отводам, поворотам, клапанам и т. д. — на выходе, т. е. на дождевателях, мы получим меньшую величину. На сколько? – покажут дальнейшие расчеты. Во-вторых – трубы зарастают – их гидравлическое сопротивление движению воды растет, соответственно давление на дождевателях со временем будет снижаться.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Минимально допустимое давление, необходимое для оптимальной работы дождевателей, мы обозначим "P пр.д". Для разных типов дождевателей этот показатель варьируется от 2,5 до 4,5 кгс/см², для некоторых типов роторных и импульсных дождевателей этот показатель может достигнуть 7 кгс/см².
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Расход "Q"</strong> – указывает, сколько дождевателей смогут работать одновременно. При среднем расходе одного дождевателя 0,5 м³/час в данном случае мы сможем подключить одновременно 10–12 шт.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Не стоит отчаиваться, если ваши показания гораздо меньше. Решение есть всегда. Какое? – в следующих главах.
            </p>
          </div>
        </AnimatedElement>

        {/* Скважина, колодец */}
        <AnimatedElement animationType="fade-up" delay={750}>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              СКВАЖИНА, КОЛОДЕЦ, ОТКРЫТЫЙ ВОДОЕМ
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В любом случае речь пойдет о насосном оборудовании.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Самый разумный вариант – отложить покупку насосного оборудования до момента окончания всех расчетов по водопотреблению на все хозяйственные нужды, не только на полив.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              И все же, если насос уже смонтирован, то нам для оценки производительности насоса, в отличие от предыдущего пункта, потребуется определить только одну из его характеристик — «Q» — т. е. доступный расход, при фиксированном, уже известном нам «проектном входном» давлении "P пр.вх" = 4,5 кгс/см². Другими словами, сколько кубометров воды сможет перекачать насос, поддерживая постоянным проектное входное давление.
            </p>
          </div>
        </AnimatedElement>

        {/* Определение производительности */}
        <AnimatedElement animationType="fade-up" delay={800}>
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Для определения расхода или производительности насоса нам понадобится техническая документация на ваш насос или насосную установку. Табличка на корпусе насоса, за исключением отечественных консольных насосов, нам не даст рабочих характеристик насоса, а лишь их максимальные значения.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 mb-4">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Например:</h4>
              <p className="text-lg text-gray-700 mb-2">
                На корпусе насоса указаны значения: расход Q<sub>max</sub> = 50 л/мин, высота подъема H<sub>max</sub> = 45 м.
              </p>
              <p className="text-lg text-gray-700 mb-2">Переведем эти значения в кубометры и килограммы:</p>
              <p className="text-lg font-mono text-gray-800 mb-1">Q<sub>max</sub> = 50 л/мин × 60 мин = 3000 л/час или 3 м³/час</p>
              <p className="text-lg font-mono text-gray-800">H<sub>max</sub> = 45 м = 45 м / 10 = 4,5 кгс/см²</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Это значит, что максимум расхода 3 м³/час мы получим при свободном выходе жидкости из напорного патрубка насоса, т. е. при давлении P, близком к нулю. И наоборот, давление в 4,5 кгс/см² насос сможет развить, работая в тупик, т. е. при нулевом расходе. Поэтому о данном конкретном насосе можно сказать, что в лучшем случае его можно использовать в качестве повышающего насоса.
            </p>
          </div>
        </AnimatedElement>

        {/* Напорная кривая */}
        <AnimatedElement animationType="fade-up" delay={850}>
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Для того чтобы получить реальные характеристики того или иного насоса, необходимо использовать <strong>«напорную кривую»</strong>, имеющуюся в паспорте на каждый насос. Кривая – это график зависимости давления, развиваемого насосом, от величины расхода. Как вы уже поняли из предыдущего примера, это обратно-пропорциональная зависимость.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Уважаемые компании, производящие насосы, предоставляют кривые, в точности которых сомневаться не приходится.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Если нет паспорта, достаточно забить марку насоса в Яндекс. Нет марки – измерьте диаметры впускного и выпускного патрубка, диаметр корпуса крыльчатки (для центробежных насосов), сделайте фото насоса, запишите мощность двигателя насоса и обратитесь к толковому менеджеру любой крупной организации, торгующей насосным оборудованием.
            </p>
          </div>
        </AnimatedElement>

        {/* Теория подъемных насосов */}
        <AnimatedElement animationType="fade-up" delay={900}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Теория «подъемных» насосов
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Т. е. насосов, которые будут поднимать воду из естественного водоема (река, озеро) или искусственного (скважина, колодец) на орошаемый участок.
            </p>
            
            {/* Заглушка для фото */}
            <div className="bg-gray-200 p-12 rounded-xl border-2 border-gray-300 mb-6 text-center">
              <p className="text-gray-500 text-lg">
                [Изображение: Схема подъемного насоса]
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Чуть выше мы уже определились, что проектное давление на дождевателях должно быть P пр.д = 2,5 ÷ 4,5 кгс/см².
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Следовательно, проектное входное давление "P пр.вх", которое должен развить насос для того, чтобы обеспечить работоспособность системы автополива, определяется следующим равенством:
            </p>

            {/* Формула */}
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-300 mb-6">
              <p className="text-xl font-mono text-gray-800 text-center mb-4">
                P пр.вх = P пр.д + (h<sub>под</sub> + h<sub>рел</sub> + h<sub>тр</sub> + h<sub>ф</sub>) / 10
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Где:</strong></p>
                <p>h<sub>под</sub> – высота подъема воды до точки подключения системы полива, м</p>
                <p>h<sub>рел</sub> – перепад высот рельефа участка, м</p>
                <p>h<sub>тр</sub> – потери давления в результате гидравлических сопротивлений в трубопроводе, м</p>
                <p>h<sub>ф</sub> – местные потери давления в фитингах, м</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              С первыми двумя членами формулы все должно быть понятно.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>«h<sub>тр</sub>»</strong> — определяется из таблиц потерь давления в трубопроводах. Этот параметр зависит от диаметра трубы, количества жидкости, проходящей через участок трубы в единицу времени, т. е. расхода, и от скорости движения жидкости.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>«h<sub>ф</sub>»</strong> – потери давления на преодоление фитингов, запорной арматуры и других местных сопротивлений, принимаем его равным эквиваленту 30% длины участка трубопровода, по которому ведется расчет, т. е.
            </p>
            <p className="text-lg font-mono text-gray-800 mb-4 text-center">
              h<sub>ф</sub> = 0,3 h<sub>тр</sub>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Окончательный вид равенства:
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300 mb-6">
              <p className="text-xl font-mono text-gray-800 text-center">
                P пр.вх = P пр.д + (h<sub>под</sub> + h<sub>рел</sub> + 1,3h<sub>тр</sub>) / 10
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Пример расчета */}
        <AnimatedElement animationType="fade-up" delay={950}>
          <div className="mb-10 bg-green-50 p-8 rounded-xl border-2 border-green-300">
            <h4 className="text-2xl font-bold text-green-800 mb-4">Пример расчета:</h4>
            <p className="text-lg text-gray-700 mb-4">
              Рассчитать проектное давление насоса при подъеме воды из водоема.
            </p>
            <div className="text-lg text-gray-700 space-y-2 mb-4">
              <p>• Проектное давление на дождевателях 3,5 кгс/см²</p>
              <p>• Высота насоса относительно минимального уровня воды в водоеме 3 м</p>
              <p>• Перепад рельефа участка 12 м</p>
              <p>• Длина всасывающей части трубопровода 10 м, напорного трубопровода 150 м</p>
              <p>• Необходимый расход для полива участка – 8,5 м³/час</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-lg font-mono text-gray-800">
                P пр.вх = 3,5 + (3 + 12 + (10 × 1,3) / 100 × 0,37 + (150 × 1,3) / 100 × 6,55) / 10
              </p>
            </div>

            <div className="text-lg text-gray-700 space-y-2 mb-4">
              <p>1,3 – коэффициент, учитывающий местные потери (явно завышенный для конкретного случая)</p>
              <p>0,37 м и 6,55 м – потери напора в метрах на участке 100 м при расходе 8,5 м³/час для труб Ø90 мм и Ø50 мм соответственно – табличные данные.</p>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-xl font-mono font-bold text-gray-800">
                P пр.вх = 6,28
              </p>
            </div>

            <div className="border-t-2 border-green-400 pt-4">
              <h5 className="text-xl font-bold text-green-800 mb-3">Результат:</h5>
              <p className="text-lg text-gray-700">
                Для обеспечения работоспособности системы автоматического полива с указанными выше входными данными необходима насосная установка, способная обеспечить расход 8,5 м³/час при давлении 6,3 кгс/см².
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Ссылка на следующий этап */}
        <AnimatedElement animationType="fade-up" delay={1000}>
          <div className="mt-12 p-8 bg-green-50 rounded-xl border-2 border-green-200">
            <p className="text-xl text-gray-800">
              Теперь переходим к следующему этапу <Link to="/советы-по-проектированию/этап-3-агрономия-география-климат/" className="text-green-600 font-bold hover:text-green-700 underline">проектирования</Link>.
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={1050}>
          <div className="mt-8">
            <Link 
              to="/советы-по-проектированию" 
              className="inline-block bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              ← Вернуться к списку этапов
            </Link>
          </div>
        </AnimatedElement>

      </div>
    </div>
  );
};

export default Stage2WaterSupplyPage;

