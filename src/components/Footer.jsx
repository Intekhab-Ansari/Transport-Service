import React from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId) => {
    if (setActivePage) {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Legacy */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <div className="logo-icon-box" style={{ width: '40px', height: '40px' }}>
                <Truck size={22} />
              </div>
              <div className="logo-text-group">
                <div className="logo-title" style={{ fontSize: '1.3rem' }}>
                  VANGUARD <span>LOGISTICS</span>
                </div>
                <div className="logo-tagline">Est. {BUSINESS_CONFIG.establishedYear} • Direct Fleet</div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Professional goods transport, local tempo rental (Tata Ace / Bolero), packers and movers, and full truckload (14ft to 32ft) highway logistics across Western India corridors.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              <div><strong style={{ color: 'var(--text-cream)' }}>GSTIN:</strong> 27AABCV1234F1Z8 <span className="replace-tag">[REPLACE: Actual GSTIN]</span></div>
              <div><strong style={{ color: 'var(--text-cream)' }}>Fleet Permit:</strong> All India Commercial Goods Carrier Permit</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="footer-col-title">Quick Navigation</div>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>
                  Our Transport Services
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => { e.preventDefault(); handleNav('fleet'); }}>
                  Fleet Specifications
                </a>
              </li>
              <li>
                <a href="#quote" onClick={(e) => { e.preventDefault(); handleNav('quote'); }}>
                  Instant Fare Estimator
                </a>
              </li>
              <li>
                <a href="#tracking" onClick={(e) => { e.preventDefault(); handleNav('tracking'); }}>
                  Live Consignment Tracking
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => { e.preventDefault(); handleNav('careers'); }}>
                  Attach Vehicle / Driver Jobs
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>
                  Yard Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <div className="footer-col-title">Services Offered</div>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Local Tempo Hire (Tata Ace)</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>House & Office Shifting</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Intercity Full Truckload (FTL)</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>B2B Dedicated Fleet Contract</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Heavy Industrial Machinery Freight</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Express Same-Day Parcel Runs</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Yard */}
          <div>
            <div className="footer-col-title">Control Room & Yard</div>
            
            <div className="footer-contact-item">
              <Phone size={16} />
              <div>
                <a href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`} style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  {BUSINESS_CONFIG.phonePrimary}
                </a>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-yellow)' }}>24/7 Dispatch Desk</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} />
              <div>
                <strong style={{ color: '#ffffff' }}>Head Yard:</strong>
                <div>{BUSINESS_CONFIG.headOfficeAddress}</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={16} />
              <div>
                <strong style={{ color: '#ffffff' }}>Hours:</strong>
                <div>{BUSINESS_CONFIG.operatingHours}</div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ width: '100%' }}
              >
                WhatsApp Direct Dispatch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved. Direct Fleet Logistics.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Carriage</span>
            <span>GST Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
