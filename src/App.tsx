import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import CafePage from './pages/CafePage';
import CookingPage from './pages/CookingPage';
import TravelPage from './pages/TravelPage';
import FashionPage from './pages/FashionPage';
import MusicPage from './pages/MusicPage';
import DishPage from './pages/DishPage';
import TripPage from './pages/TripPage';
import NotFoundPage from './pages/NotFoundPage';
import styles from './App.module.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className={styles.appLayout}>
        <TopNav/>
        <main className={styles.mainContent}>
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
