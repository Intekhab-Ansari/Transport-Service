import React from 'react';
import Link from 'next/link';
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

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Legacy */}
          <div>
            <Link href="/" className="brand-logo" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              <div className="logo-icon-box" style={{ width: '40px', height: '40px' }}>
                <Truck size={22} />
              </div>
              <div className="logo-text-group">
                <div className="logo-title" style={{ fontSize: '1.3rem' }}>
                  VANGUARD <span>LOGISTICS</span>
                </div>
                <div className="logo-tagline">Est. {BUSINESS_CONFIG.establishedYear} • Direct Fleet</div>
              </div>
            </Link>

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
                <Link href="/">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services">
                  Our Transport Services
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  Fleet Specifications
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  Instant Fare Estimator
                </Link>
              </li>
              <li>
                <Link href="/tracking">
                  Live Consignment Tracking
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About Vanguard Roadways
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  Attach Vehicle / Driver Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Yard Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <div className="footer-col-title">Services Offered</div>
            <ul className="footer-links">
              <li><Link href="/services">Local Tempo Hire (Tata Ace)</Link></li>
              <li><Link href="/services">House & Office Shifting</Link></li>
              <li><Link href="/services">Intercity Full Truckload (FTL)</Link></li>
              <li><Link href="/services">B2B Dedicated Fleet Contract</Link></li>
              <li><Link href="/services">Heavy Industrial Machinery Freight</Link></li>
              <li><Link href="/services">Express Same-Day Parcel Runs</Link></li>
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

        {/* SEO Keywords Strip for Mumbai & Pan-India Search Engines */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-dark)',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          lineHeight: '1.7'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--text-cream)' }}>Mumbai & MMR Service Hubs: </strong>
            <span>Andheri East/West • Bandra Kurla Complex (BKC) • Dadar • Borivali • Powai • Ghatkopar • Vashi APMC Terminal • Nerul • Belapur • Mahape MIDC • Taloja • JNPT Nhava Sheva Port • Thane Wagle Estate • Bhiwandi Warehousing Hub • Panvel • Kalyan • Dombivli</span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-cream)' }}>National Freight Corridors from Mumbai: </strong>
            <span>Mumbai to Pune Express FTL • Mumbai to Surat/Ahmedabad • Mumbai to Bangalore • Mumbai to Hyderabad • Mumbai to Delhi NCR • Mumbai to Nashik/Dhule • Mumbai to Goa • Tata Ace on rent Mumbai • Packers and movers Mumbai</span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved. Direct Fleet Logistics Mumbai & India.
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
