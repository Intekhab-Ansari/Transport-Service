import React from 'react';
import Link from 'next/link';
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
import { BUSINESS_CONFIG } from '../../data/transportData';

export const metadata = {
  title: 'Commercial Goods Transport & Logistics Services | Mumbai & All India',
  description:
    'Comprehensive transport services: Tata Ace tempo rental, local house shifting, intercity full truckload (FTL), Bhiwandi warehouse logistics, JNPT port freight, and industrial machinery haulage.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/services',
  },
  openGraph: {
    title: 'Commercial Goods Transport & Logistics Services | Vanguard Roadways',
    description:
      'From 1BHK house shifting to 32ft container industrial freight. Company-owned fleet, transparent pricing, verified drivers.',
    url: 'https://transport-service-six.vercel.app/services',
  },
};

export default function ServicesPage() {
  const iconMap = {
    Truck: <Truck size={32} />,
    PackageCheck: <PackageCheck size={32} />,
    Navigation: <Navigation size={32} />,
    Building2: <Building2 size={32} />,
    ShieldAlert: <ShieldAlert size={32} />,
    Zap: <Zap size={32} />
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://transport-service-six.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://transport-service-six.vercel.app/services',
      },
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: BUSINESS_CONFIG.services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.tagline,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Vanguard Roadways & Tempo Logistics',
      },
      areaServed: {
        '@type': 'State',
        name: 'Maharashtra',
      },
    })),
  };

  return (
    <div className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

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
                    backgroundColor: 'rgba(249, 87, 0, 0.15)',
                    border: '1px solid rgba(249, 87, 0, 0.3)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)'
                  }}>
                    {iconMap[service.iconName] || <Truck size={28} />}
                  </div>
                  <div>
                    <span className="badge badge-yellow" style={{ fontSize: '0.72rem' }}>
                      {service.vehicles}
                    </span>
                    <h2 style={{ fontSize: '1.65rem', color: '#ffffff', marginTop: '0.2rem' }}>
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--text-cream)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {service.tagline}
                </p>

                <div style={{
                  backgroundColor: 'var(--bg-steel)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '6px',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <strong style={{ color: 'var(--accent-orange)' }}>Ideal For: </strong>
                  <span>{service.idealFor}</span>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.6rem'
                }}>
                  {service.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--accent-green)" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/quote"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Instant Tariff Calculator</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-yellow)',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={15} />
                    <span>Call Dispatch</span>
                  </a>
                </div>
              </div>

              {/* Technical Capability Specs */}
              <div style={{
                order: index % 2 === 0 ? 2 : 1,
                backgroundColor: 'var(--bg-steel)',
                border: '1px solid var(--border-dark)',
                borderRadius: '8px',
                padding: '1.75rem'
              }}>
                <h3 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
                  SERVICE CAPACITY & LOGISTICS SPECS
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Standard Price Guide</span>
                    <div style={{ fontSize: '1.15rem', color: 'var(--accent-yellow)', fontWeight: 'bold' }}>
                      {service.priceGuide}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Deployment Vehicles</span>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: '500' }}>
                      {service.vehicles}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Guaranteed Dispatch Window</span>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={15} color="var(--accent-green)" />
                      <span>{service.dispatchWindow}</span>
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Transit Coverage</span>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <ShieldCheck size={15} color="var(--accent-orange)" />
                      <span>Standard Marine Transit Insurance Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-dark)',
          borderRadius: '8px',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
            NEED A CUSTOM LOGISTICS ROUTE OR MONTHLY FLEET CONTRACT?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
            We provide customized monthly billing, dedicated account managers, and dedicated vehicles for industrial manufacturers, retailers, and distributors.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Discuss Corporate Contract
            </Link>
            <a 
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Dispatch Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
