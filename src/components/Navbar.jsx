'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Truck, 
  ChevronRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/quote', label: 'Fares' },
    { href: '/tracking', label: 'Track' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I would like to inquire about a tempo/truck booking.`
  )}`;

  return (
    <>
      {/* 1. Thin Clean Utility Top Bar */}
      <div className="top-bar-clean">
        <div className="container top-bar-clean-inner">
          <span className="top-yard-note">Fleet Yard: Nigdi / Bhosari MIDC, Pune & APMC Vashi, Navi Mumbai</span>
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

      {/* 2. Main Navigation Header */}
      <header className="main-header">
        <div className="container nav-container">
          {/* Logo */}
          <Link 
            href="/" 
            className="brand-logo"
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
          </Link>

          {/* Desktop Nav Items */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Nav CTA Action */}
          <div className="nav-actions">
            <Link
              href="/quote"
              className="btn btn-primary btn-sm nav-cta-btn"
            >
              Instant Fare
            </Link>

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
            <li key={link.href}>
              <Link
                href={link.href}
                className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--accent-orange)" />
              </Link>
            </li>
          ))}
          {/* Secondary Mobile links */}
          <li>
            <Link
              href="/about"
              className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About Us</span>
              <ChevronRight size={16} color="var(--accent-orange)" />
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className={`mobile-nav-link ${isActive('/careers') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Join as Driver</span>
              <ChevronRight size={16} color="var(--accent-orange)" />
            </Link>
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
