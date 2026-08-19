import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Truck, 
  ChevronRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Short single-word labels, max 6 items to prevent wrapping
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'quote', label: 'Fares' },
    { id: 'tracking', label: 'Track' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I would like to inquire about a tempo/truck booking.`
  )}`;

  return (
    <>
      {/* 1. Thin Clean Utility Top Bar (No gimmick badges, right-aligned) */}
      <div className="top-bar-clean">
        <div className="container top-bar-clean-inner">
          <span className="top-yard-note">Fleet Yard: Nigdi / Bhosari MIDC, Pune</span>
          <div className="top-links-right">
            <span>24/7 Dispatch Hotline:</span>
            <a href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`} className="top-phone-link">
              <Phone size={13} />
              <span>{BUSINESS_CONFIG.phonePrimary}</span>
            </a>
            <span className="top-divider">|</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-wa-link"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header (Compact, 60px fixed height, no wrapping) */}
      <header className="main-header">
        <div className="container nav-container">
          {/* Logo */}
          <a 
            href="#home" 
            className="brand-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            <div className="logo-icon-box">
              <Truck size={22} strokeWidth={2.4} />
            </div>
            <div className="logo-text-group">
              <div className="logo-title">
                VANGUARD <span>ROADWAYS</span>
              </div>
              <div className="logo-tagline">
                Direct Fleet • Tempo & Trucks
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="nav-desktop">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Nav CTA Action */}
          <div className="nav-actions">
            <button
              className="btn btn-primary btn-sm nav-cta-btn"
              onClick={() => handleNavClick('quote')}
            >
              Instant Fare
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="logo-icon-box" style={{ width: '34px', height: '34px' }}>
              <Truck size={18} />
            </div>
            <div className="logo-title" style={{ fontSize: '1.15rem' }}>
              VANGUARD <span>ROADWAYS</span>
            </div>
          </div>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--accent-orange)" />
              </button>
            </li>
          ))}
          {/* Secondary Mobile links */}
          <li>
            <button
              className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              <span>About Us</span>
              <ChevronRight size={16} color="var(--accent-orange)" />
            </button>
          </li>
          <li>
            <button
              className={`mobile-nav-link ${activePage === 'careers' ? 'active' : ''}`}
              onClick={() => handleNavClick('careers')}
            >
              <span>Join as Driver</span>
              <ChevronRight size={16} color="var(--accent-orange)" />
            </button>
          </li>
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
            className="btn btn-primary btn-sm"
          >
            <Phone size={16} />
            <span>Call: {BUSINESS_CONFIG.phonePrimary}</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Dispatch</span>
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
