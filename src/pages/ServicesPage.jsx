import React from 'react';
import { 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageCircle,
  PackageCheck,
  Building2,
  Navigation,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function ServicesPage({ setActivePage, setSelectedFleetId }) {
  const iconMap = {
    Truck: <Truck size={32} />,
    PackageCheck: <PackageCheck size={32} />,
    Navigation: <Navigation size={32} />,
    Building2: <Building2 size={32} />,
    ShieldAlert: <ShieldAlert size={32} />,
    Zap: <Zap size={32} />
  };

  const handleBookService = () => {
    if (setActivePage) setActivePage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section-py">
      <div className="container">
        {/* Page Header */}
        <div className="section-header text-center">
          <span className="section-tag">COMPREHENSIVE TRANSPORT SOLUTIONS</span>
          <h1 className="section-title">OUR GOODS TRANSPORT & LOGISTICS SERVICES</h1>
          <p className="section-subtitle">
            Whether moving a single refrigerator across town, shifting a 3BHK bungalow, or managing 500 tonnes of monthly industrial factory output, we have the fleet, labor, and experience to get it done safely.
          </p>
        </div>

        {/* Services List with Rich Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
          {BUSINESS_CONFIG.services.map((service, index) => (
            <div 
              key={service.id} 
              className="industrial-card"
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2.5rem'
              }}
            >
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    backgroundColor: 'var(--bg-steel)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)'
                  }}>
                    {iconMap[service.icon] || <Truck size={32} />}
                  </div>
                  <div>
                    <span className="badge badge-orange">Service #{index + 1}</span>
                    <h2 style={{ fontSize: '1.85rem', color: '#ffffff' }}>{service.title}</h2>
                  </div>
                </div>

                <p style={{ fontSize: '1.05rem', color: 'var(--accent-yellow)', fontWeight: '600', marginBottom: '1rem' }}>
                  {service.tagline}
                </p>

                <div style={{
                  backgroundColor: 'var(--bg-asphalt-dark)',
                  padding: '1rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-dark)',
                  marginBottom: '1.25rem',
                  fontSize: '0.9rem'
                }}>
                  <strong style={{ color: '#ffffff' }}>Ideal Cargo & Use Cases:</strong>
                  <div style={{ color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {service.idealFor}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                    SERVICE INCLUSIONS & HIGHLIGHTS:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                        <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleBookService}
                  >
                    <span>Book This Service</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello, I would like to inquire about *${service.title}*.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right/Left Pricing & Operational Box */}
              <div 
                style={{ 
                  order: index % 2 === 0 ? 2 : 1,
                  backgroundColor: '#0c1017',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Transparent Pricing Basis</span>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--accent-yellow)', marginTop: '0.25rem' }}>
                    {service.priceGuide}
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed var(--border-dark)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                    <ShieldCheck size={16} color="var(--accent-green)" />
                    <span>Transit Insurance available on demand</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                    <Clock size={16} color="var(--accent-yellow)" />
                    <span>Standard Free Loading Window Included</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                    <Truck size={16} color="var(--accent-orange)" />
                    <span>GPS Tracking & Direct Driver Phone</span>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(249, 87, 0, 0.08)',
                  border: '1px solid rgba(249, 87, 0, 0.25)',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  <strong style={{ color: 'var(--accent-orange)' }}>No Hidden Charges:</strong> All prices include vehicle, fuel, driver, and GST invoice on request.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
