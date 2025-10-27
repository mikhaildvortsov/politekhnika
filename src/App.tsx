import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
import Stage1GeometryPage from './components/Stage1GeometryPage';
import Stage2WaterSupplyPage from './components/Stage2WaterSupplyPage';
import Stage3AgronomyPage from './components/Stage3AgronomyPage';
import Stage4SprinklersPage from './components/Stage4SprinklersPage';
import Stage5DistributionPage from './components/Stage5DistributionPage';
import Stage6HydraulicPage from './components/Stage6HydraulicPage';
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
          <Route path="/установка-систем-автополива/" element={<SystemsPage />} />
          <Route path="/установка-систем-автополива/автополив-для-дома/" element={<HomeIrrigationPage />} />
          <Route path="/установка-систем-автополива/автополив-для-бизнеса/" element={<BusinessIrrigationPage />} />
          <Route path="/установка-систем-автополива/автополив-для-парков-и-скверов/" element={<ParksIrrigationPage />} />
          <Route path="/оборудование-для-полива/" element={<EquipmentPage />} />
          <Route path="/оборудование-для-полива/контроллеры-для-автополива/" element={<ControllersPage />} />
          <Route path="/оборудование-для-полива/электромагнитные-клапаны-для-полива/" element={<ValvesPage />} />
          <Route path="/оборудование-для-полива/форсунки-сопла/" element={<NozzlesPage />} />
          <Route path="/оборудование-для-полива/роторные-дождеватели/" element={<RotorsPage />} />
          <Route path="/оборудование-для-полива/корпуса-дождевателей/" element={<CorpusPage />} />
          <Route path="/оборудование-для-полива/mp-rotator-ротаторные-головки/" element={<MPRotatorPage />} />
          <Route path="/полимерные-емкости-для-автополива/" element={<div>Емкости - страница в разработке</div>} />
          <Route path="/рулонные-газоны-из-московских-питомн/" element={<LawnsPage />} />
          <Route path="/проектирование-и-монтаж-автополива" element={<DesignPage />} />
          <Route path="/советы-по-проектированию/этап-1-геометрия-участка/" element={<Stage1GeometryPage />} />
          <Route path="/советы-по-проектированию/этап-2-источник-водоснабжения/" element={<Stage2WaterSupplyPage />} />
          <Route path="/советы-по-проектированию/этап-3-агрономия-география-климат/" element={<Stage3AgronomyPage />} />
          <Route path="/советы-по-проектированию/этап-4-выбор-типа-дождевателей/" element={<Stage4SprinklersPage />} />
          <Route path="/советы-по-проектированию/этап-5-распределение-дождевателей/" element={<Stage5DistributionPage />} />
          <Route path="/советы-по-проектированию/этап-6-гидравлический-расчет/" element={<Stage6HydraulicPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
