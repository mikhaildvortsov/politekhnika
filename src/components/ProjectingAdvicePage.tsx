import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const ProjectingAdvicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Green Header */}
      <section className="py-16" style={{
        background: 'linear-gradient(90deg, rgba(42, 155, 119, 1) 0%, rgba(111, 199, 87, 1) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Советы по проектированию
            </h1>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <AnimatedElement animationType="fade-up" delay={150}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Вот перечень всех этапов расчета СИСТЕМ АВТОПОЛИВА:
            </h2>
          </div>
        </AnimatedElement>

        {/* Этап 1 */}
        <AnimatedElement animationType="fade-up" delay={200}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №1 «Геометрия участка»
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              На этом этапе проектирования измеряются и наносятся на бумагу: геометрическое положение, 
              ширина и конфигурация зданий и строений, дорожек, беседок, садовых диванов и т.д., 
              а также положение и глубина залегания всевозможных инженерных сетей (водопровод, 
              канализация, газ, электрические и телефонные кабели).
            </p>
            <Link 
              to="/советы-по-проектированию/этап-1-геометрия-участка/" 
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

        {/* Этап 2 */}
        <AnimatedElement animationType="fade-up" delay={250}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №2 «Источник водоснабжения» - Обзор всех возможных вариантов
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              На данном этапе определяемся, способны ли существующие источники водоснабжения обеспечить 
              потребности будущей системы автополива. И при необходимости подбираем насосное оборудование.
            </p>
            <Link 
              to="/советы-по-проектированию/этап-2-источник-водоснабжения/" 
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

        {/* Этап 3 */}
        <AnimatedElement animationType="fade-up" delay={300}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №3 «Агрономия, география, климат»
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Выделяем зоны, одновременный полив которых по агрономическим или другим причинам недопустим.
            </p>
            <Link 
              to="/советы-по-проектированию/этап-3-агрономия-география-климат/" 
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

        {/* Этап 4 */}
        <AnimatedElement animationType="fade-up" delay={350}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №4 «Выбор типа(-ов) дождевателя(-ей)»
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Хотя существуют несколько способов полива, здесь мы будем говорить исключительно о дождевании 
              как о наиболее сложном методе в смысле проектирования, а также разберемся в огромном 
              разнообразии всевозможных дождевателей, насадок, форсунок и т. д.
            </p>
            <Link 
              to="/советы-по-проектированию/этап-4-выбор-типа-дождевателей/" 
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

        {/* Этап 5 */}
        <AnimatedElement animationType="fade-up" delay={400}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №5 «Распределение дождевателей по территории участка и деление их на каналы»
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Один из наиболее ответственных моментов при проектировании.
            </p>
            <Link
              to="/советы-по-проектированию/этап-5-распределение-дождевателей/"
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

        {/* Этап 6 */}
        <AnimatedElement animationType="fade-up" delay={450}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Этап №6 «Гидравлический расчет и подбор диаметров труб»
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Узнаем принцип и алгоритм гидравлического расчета трубопроводов, физических процессов, 
              происходящих в них при течении жидкости, и научимся подбирать диаметр труб будущей 
              системы автоматического полива.
            </p>
            <Link
              to="/советы-по-проектированию/этап-6-гидравлический-расчет/"
              className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </AnimatedElement>

      </div>
    </div>
  );
};

export default ProjectingAdvicePage;

