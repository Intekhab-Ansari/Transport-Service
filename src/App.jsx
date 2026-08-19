import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StickyActions from './components/StickyActions';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import QuotePage from './pages/QuotePage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedFleetId, setSelectedFleetId] = useState('bolero-pickup');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'services', 'fleet', 'quote', 'tracking', 'about', 'careers', 'contact'];
      if (hash && validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage changes
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Navigation */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Page Body */}
      <main id="main-content">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange} 
            setSelectedFleetId={setSelectedFleetId} 
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            setActivePage={handlePageChange} 
            setSelectedFleetId={setSelectedFleetId} 
          />
        )}

        {activePage === 'fleet' && (
          <FleetPage 
            setActivePage={handlePageChange} 
            setSelectedFleetId={setSelectedFleetId} 
          />
        )}

        {activePage === 'quote' && (
          <QuotePage 
            selectedFleetId={selectedFleetId} 
          />
        )}

        {activePage === 'tracking' && (
          <TrackingPage />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={handlePageChange} 
          />
        )}

        {activePage === 'careers' && (
          <CareersPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Sticky Mobile Actions & Desktop WhatsApp */}
      <StickyActions />
    </div>
  );
}
