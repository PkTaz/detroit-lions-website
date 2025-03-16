import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import NewsPage from './pages/NewsPage';

// Import fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/team" element={
          <MainLayout>
            <TeamPage />
          </MainLayout>
        } />
        <Route path="/schedule" element={
          <MainLayout>
            <SchedulePage />
          </MainLayout>
        } />
        <Route path="/news" element={
          <MainLayout>
            <NewsPage />
          </MainLayout>
        } />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
