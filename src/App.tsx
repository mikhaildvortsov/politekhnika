import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhotoCardsSection from './components/PhotoCardsSection';
import SystemsSection from './components/SystemsSection';
import CatalogSection from './components/CatalogSection';
import BrandsSection from './components/BrandsSection';
import SystemsPage from './components/SystemsPage';
import DesignPage from './components/DesignPage';
import EquipmentPage from './components/EquipmentPage';
import HomeIrrigationPage from './components/HomeIrrigationPage';
import LawnsPage from './components/LawnsPage';
import BusinessIrrigationPage from './components/BusinessIrrigationPage';
import ParksIrrigationPage from './components/ParksIrrigationPage';
import ControllersPage from './components/ControllersPage';
import ValvesPage from './components/ValvesPage';
import NozzlesPage from './components/NozzlesPage';
import RotorsPage from './components/RotorsPage';
import CorpusPage from './components/CorpusPage';
import MPRotatorPage from './components/MPRotatorPage';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';

// Главная страница компонент
const HomePage = () => (
  <>
    <HeroSection />
    <SystemsSection />
    <PhotoCardsSection />
    <CatalogSection />
    <BrandsSection />

    {/* Footer */}
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
              <p>СОВЕТЫ ПО ПРОЕКТИРОВАНИЮ</p>
              <p>ЭТАП-1 ГЕОМЕТРИЯ УЧАСТКА</p>
              <p>ЭТАП-2 ИСТОЧНИКИ ВОДОСНАБЖЕНИЯ</p>
              <p>ЭТАП-3. АГРОНОМИЧЕСКИЙ, ГЕОГРАФИЧЕСКИЙ, КЛИМАТИЧЕСКИЙ.</p>
              <p>ЭТАП-4. ВЫБОР ТИПА ДОЖДЕВАТЕЛЕЙ.</p>
              <p>ЭТАП-5. РАСПРЕДЕЛЕНИЕ ДОЖДЕВАТЕЛЕЙ ПО ТЕРРИТОРИИ УЧАСТКА И ДЕЛЕНИЕ ИХ ПО КАНАЛАМ.</p>
              <p>ЭТАП-6. ГИДРАВЛИЧЕСКИЙ РАСЧЕТ И ПОДБОР ДИАМЕТРОВ ТРУБ.</p>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <SmoothScroll />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/установка-систем-автополива" element={<SystemsPage />} />
          <Route path="/проектирование-и-монтаж-автополива" element={<DesignPage />} />
          <Route path="/оборудование-для-полива" element={<EquipmentPage />} />
          <Route path="/автополив-для-дома" element={<HomeIrrigationPage />} />
          <Route path="/рулонные-газоны-из-московских-питомн" element={<LawnsPage />} />
          <Route path="/автополив-для-бизнеса" element={<BusinessIrrigationPage />} />
          <Route path="/автополив-для-парков-и-скверов" element={<ParksIrrigationPage />} />
          <Route path="/контроллеры-для-автополива" element={<ControllersPage />} />
          <Route path="/электромагнитные-клапаны-для-полива" element={<ValvesPage />} />
          <Route path="/форсунки-сопла" element={<NozzlesPage />} />
          <Route path="/роторные-дождеватели" element={<RotorsPage />} />
          <Route path="/корпуса-дождевателей" element={<CorpusPage />} />
          <Route path="/mp-rotator-ротаторные-головки" element={<MPRotatorPage />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
