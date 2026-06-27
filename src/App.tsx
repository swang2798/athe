import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import HomePage from "./pages/HomePage";
import SoftOpenPage from "./pages/SoftOpenPage";
import CafePage from "./pages/CafePage";
import CookingPage from "./pages/CookingPage";
import TravelPage from "./pages/TravelPage";
import FashionPage from "./pages/FashionPage";
import MusicPage from "./pages/MusicPage";
import DishPage from "./pages/DishPage";
import TripPage from "./pages/TripPage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appLayout}>
        <TopNav />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={new Date() < new Date("2026-07-13") ? <SoftOpenPage /> : <HomePage />} />
            <Route path="/cafe" element={<CafePage />} />
            <Route path="/cooking" element={<CookingPage />} />
            <Route path="/cooking/:id" element={<DishPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/travel/:id" element={<TripPage />} />
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
