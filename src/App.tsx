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
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
