import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import HomePage from './pages/HomePage';
import CafePage from './pages/CafePage';
import CookingPage from './pages/CookingPage';
import TravelPage from './pages/TravelPage';
import FashionPage from './pages/FashionPage';
import DishPage from './pages/DishPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <SideNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cafe" element={<CafePage />} />
            <Route path="/cooking" element={<CookingPage />} />
            <Route path="/cooking/:id" element={<DishPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
