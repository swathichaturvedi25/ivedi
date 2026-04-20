
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import LokFlowAICaseStudy from './pages/LokFlowAICaseStudy.jsx';
import ProdVaultCaseStudy from './pages/ProdVaultCaseStudy.jsx';
import AppsPage from './pages/AppsPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-study/lokflow-ai" element={<LokFlowAICaseStudy />} />
        <Route path="/case-study/prodvault" element={<ProdVaultCaseStudy />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
