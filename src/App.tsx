import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Breadcrumbs from './components/Breadcrumbs';
import HomePage from './pages/HomePage';
import CafePage from './pages/CafePage';
import CookingPage from './pages/CookingPage';
import TravelPage from './pages/TravelPage';
import FashionPage from './pages/FashionPage';
import MusicPage from './pages/MusicPage';
import DishPage from './pages/DishPage';
import TripPage from './pages/TripPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HashRouter basename="/">
      <div className="app-layout">
        <TopNav/>
        {/*TODO: Fix breadcrumb spacing.*/}
        {/*<Breadcrumbs />*/}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cafe" element={<CafePage/>}/>
            <Route path="/cooking" element={<CookingPage/>}/>
            <Route path="/cooking/:id" element={<DishPage/>}/>
            <Route path="/travel" element={<TravelPage/>}/>
            <Route path="/travel/:id" element={<TripPage/>}/>
            <Route path="/fashion" element={<FashionPage/>}/>
            <Route path="/music" element={<MusicPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
