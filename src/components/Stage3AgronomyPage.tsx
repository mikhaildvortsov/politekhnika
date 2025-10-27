import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const Stage3AgronomyPage: React.FC = () => {
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
              Этап №3 «Агрономия, география, климат»
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
              На данном этапе у вас должен быть окончательно решен вопрос с посадками. Т. е. либо все уже посажено, либо вы определились на 100%, какое растение и где будет расти.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Теперь определяемся, что мы будем поливать, а что нет.
            </h2>
          </div>
        </AnimatedElement>

        {/* Что не поливаем */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Мы точно не будем поливать стены зданий и сооружений, ограждения, парковки, детские площадки, беседки и другие архитектурные формы.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Садовые дорожки шириной до 2 м, как отдельный элемент, лучше не рассматривать. На них все равно будет попадать вода.
            </p>
          </div>
        </AnimatedElement>

        {/* Фото с примером */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <div className="bg-gray-200 p-12 rounded-xl border-2 border-gray-300 mb-6 text-center">
              <p className="text-gray-500 text-lg">
                [Изображение: Пример неправильного проектирования с дождевателями вдоль дорожки]
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Пример неправильного проектирования */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-10 bg-red-50 p-8 rounded-xl border-2 border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Пример неправильного проектирования
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              На фото мы наглядно видим, как не надо проектировать. Пойдя на поводу у заказчика, либо решив немного заработать на материалах, проектировщик размещает роторные дождеватели с эффективным радиусом полива не менее 9–10 м на расстоянии полутора метров друг от друга, «стараясь» не залить дорожку.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В результате 5 дождевателей стоимостью 800–1500 руб. каждый, электромагнитный клапан — 1500 руб., труба, присоединительные фитинги, монтаж — в общей сложности 15–20 тыс. рублей потрачены, а дорожка в воде. Кроме того, это лишний расход воды — приблизительно 4–6 м³/час.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              В условиях ограниченного бюджета водопотребления это – непозволительная роскошь.
            </p>
          </div>
        </AnimatedElement>

        {/* Нормы полива */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Сравнительный анализ норм полива
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Далее следует провести сравнительный анализ норм полива для всех видов растений на вашем участке. Для взрослых газонов эта норма составляет <strong>5 л/м² в сутки</strong>. Большинство цветов, деревьев, кустарников могут находиться в одной поливной зоне с газоном. Но все же стоит посоветоваться с агрономом по вопросу выделения некоторых видов растений в отдельную зону, как, например, сортового винограда.
            </p>
          </div>
        </AnimatedElement>

        {/* Затенение */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Важный фактор: затенение участков
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Также крайне важным фактором является затенение отдельных участков в течение большей части светового дня. Эти места следует выделить в отдельные зоны, чтобы не допустить переувлажнения этих участков из-за меньшего испарения на них.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Особенно это касается участков с тяжелыми глинистыми почвами с плохими дренажными свойствами.
            </p>
          </div>
        </AnimatedElement>

        {/* Ветер */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Обратите внимание:</strong> При сильном ветре распределение воды по участку во время полива может сильно измениться.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Заключение */}
        <AnimatedElement animationType="fade-up" delay={500}>
          <div className="mb-10">
            <p className="text-xl text-gray-800 leading-relaxed">
              После решения этих вопросов мы переходим к следующему этапу <Link to="/советы-по-проектированию/этап-4-выбор-типа-дождевателей/" className="text-green-600 font-bold hover:text-green-700 underline">проектирования</Link> систем автоматического полива.
            </p>
          </div>
        </AnimatedElement>

        {/* Ключевые моменты */}
        <AnimatedElement animationType="fade-up" delay={550}>
          <div className="mb-10 bg-green-50 p-8 rounded-xl border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Ключевые моменты этого этапа:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</span>
                <p className="text-lg text-gray-700">Определить окончательное расположение всех растений</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</span>
                <p className="text-lg text-gray-700">Исключить из зон полива архитектурные формы и сооружения</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</span>
                <p className="text-lg text-gray-700">Учесть нормы полива различных растений (газон: 5 л/м² в сутки)</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">4</span>
                <p className="text-lg text-gray-700">Выделить затененные участки в отдельные зоны</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">5</span>
                <p className="text-lg text-gray-700">Учитывать влияние ветра на распределение воды</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Кнопка назад */}
        <AnimatedElement animationType="fade-up" delay={600}>
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

export default Stage3AgronomyPage;

