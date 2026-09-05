import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import HomePage from "./pages/HomePage";
import SoftOpenPage from "./pages/SoftOpenPage";
import CafePage from "./pages/CafePage";
import LifePage from "./pages/LifePage";
import CookingPage from "./pages/CookingPage";
import TravelPage from "./pages/TravelPage";
import FashionPage from "./pages/FashionPage";
import MusicPage from "./pages/MusicPage";
import DishPage from "./pages/DishPage";
import TripPage from "./pages/TripPage";
import ReservePage from "./pages/ReservePage";
import AdminPage from "./pages/AdminPage";
import ArchivePage from "./pages/ArchivePage";
import ArchiveSeasonPage from "./pages/ArchiveSeasonPage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appLayout}>
        <TopNav />
        <main className={styles.mainContent}>
          <Routes>
            <Route
              path="/"
              element={
                new Date() < new Date("2026-07-13") ? (
                  <SoftOpenPage />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/archive/:seasonId" element={<ArchiveSeasonPage />} />
            <Route path="/cafe" element={<CafePage />} />
            <Route path="/cafe/reserve" element={<ReservePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/life" element={<LifePage />} />
            <Route path="/life/cooking" element={<CookingPage />} />
            <Route path="/life/cooking/:id" element={<DishPage />} />
            <Route path="/life/travel" element={<TravelPage />} />
            <Route path="/life/travel/:id" element={<TripPage />} />
            <Route path="/life/fashion" element={<FashionPage />} />
            <Route path="/life/music" element={<MusicPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
