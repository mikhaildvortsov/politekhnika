import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О НАС */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">О НАС</h3>
            <p className="text-sm leading-relaxed">
              ООО «Политехника» — динамично развивающееся предприятие в г. Волжский, специализирующееся на проектировании и монтаже систем автоматического полива, ландшафтном строительстве и благоустройстве территории в целом. Многолетний опыт работы позволяет нашим сотрудникам выполнять работы по проектам различной сложности — от нескольких сотен квадратных метров до нескольких гектаров.
            </p>
          </div>

          {/* ПОЛЕЗНОЕ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">ПОЛЕЗНОЕ</h3>
            <div className="space-y-2 text-sm">
              <p className="block font-semibold text-white">
                СОВЕТЫ ПО ПРОЕКТИРОВАНИЮ
              </p>
              <Link 
                to="/советы-по-проектированию/этап-1-геометрия-участка/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-1 ГЕОМЕТРИЯ УЧАСТКА
              </Link>
              <Link 
                to="/советы-по-проектированию/этап-2-источник-водоснабжения/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-2 ИСТОЧНИКИ ВОДОСНАБЖЕНИЯ
              </Link>
              <Link 
                to="/советы-по-проектированию/этап-3-агрономия-география-климат/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-3. АГРОНОМИЧЕСКИЙ, ГЕОГРАФИЧЕСКИЙ, КЛИМАТИЧЕСКИЙ.
              </Link>
              <Link 
                to="/советы-по-проектированию/этап-4-выбор-типа-дождевателей/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-4. ВЫБОР ТИПА ДОЖДЕВАТЕЛЕЙ.
              </Link>
              <Link 
                to="/советы-по-проектированию/этап-5-распределение-дождевателей/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-5. РАСПРЕДЕЛЕНИЕ ДОЖДЕВАТЕЛЕЙ ПО ТЕРРИТОРИИ УЧАСТКА И ДЕЛЕНИЕ ИХ ПО КАНАЛАМ.
              </Link>
              <Link 
                to="/советы-по-проектированию/этап-6-гидравлический-расчет/" 
                className="text-gray-300 pl-4 block hover:text-teal-300 transition-colors duration-200"
              >
                ЭТАП-6. ГИДРАВЛИЧЕСКИЙ РАСЧЕТ И ПОДБОР ДИАМЕТРОВ ТРУБ.
              </Link>
            </div>
          </div>

          {/* КОНТАКТНАЯ ИНФОРМАЦИЯ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase border-b border-green-700 pb-2">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

