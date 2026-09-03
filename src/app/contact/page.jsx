import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Truck,
  Building,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/transportData';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us & 24/7 Control Room | Vanguard Roadways Dispatch Yard',
  description:
    'Contact Vanguard Roadways dispatch desk. APMC Truck Terminal, Vashi, Navi Mumbai & Nigdi/Bhosari MIDC, Pune. 24/7 hotline +91-98765-43210 & WhatsApp quote assistance.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Vanguard Roadways Dispatch Yard | 24/7 Logistics Desk',
    description:
      'Direct dispatch desk and maintenance yard locations in Mumbai, Navi Mumbai, Thane, and Pune.',
    url: 'https://transport-service-six.vercel.app/contact',
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I am reaching out from your website contact page.`
  )}`;

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
        name: 'Contact & Control Room',
        item: 'https://transport-service-six.vercel.app/contact',
      },
    ],
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Vanguard Roadways Dispatch & Yard Office Contact',
    url: 'https://transport-service-six.vercel.app/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Vanguard Roadways & Tempo Logistics',
      telephone: '+91-98765-43210',
      email: 'dispatch@vanguardlogistics.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gala 14, APMC Truck Terminal, Sector 19, Vashi',
        addressLocality: 'Navi Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400705',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="container">
        {/* Page Header */}
        <div className="section-header text-center">
          <span className="section-tag">24/7 DIRECT CONTROL ROOM</span>
          <h1 className="section-title">CONTACT OUR DISPATCH & YARD OFFICE</h1>
          <p className="section-subtitle">
            Need an urgent tempo right now, a corporate monthly contract, or a visit to our fleet maintenance yard? Connect directly with our team.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Card 1: 24/7 Phone Dispatch */}
          <div className="industrial-card" style={{ borderTop: '3px solid var(--accent-orange)' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              <Phone size={24} />
            </div>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              24/7 Dispatch Hotline
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Round-the-clock priority line for immediate vehicle bookings and live driver status.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <a href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`} style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-yellow)', textDecoration: 'none' }}>
                {BUSINESS_CONFIG.phonePrimary}
              </a>
              <a href={`tel:${BUSINESS_CONFIG.phoneSecondary.replace(/\s+/g, '')}`} style={{ fontSize: '0.9rem', color: 'var(--text-cream)', textDecoration: 'none' }}>
                {BUSINESS_CONFIG.phoneSecondary}
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Dispatch Desk */}
          <div className="industrial-card" style={{ borderTop: '3px solid var(--accent-green)' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', marginBottom: '1rem' }}>
              <MessageCircle size={24} />
            </div>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              Instant WhatsApp Desk
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Share pickup/drop locations, cargo photos, and get an immediate rate quotation.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={16} />
              <span>Chat with Duty Officer</span>
            </a>
          </div>

          {/* Card 3: Head Yard Location */}
          <div className="industrial-card" style={{ borderTop: '3px solid var(--accent-yellow)' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', marginBottom: '1rem' }}>
              <MapPin size={24} />
            </div>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              Head Fleet Terminal
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-cream)', marginBottom: '0.75rem', lineHeight: '1.5' }}>
              {BUSINESS_CONFIG.headOfficeAddress}
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              Maintenance yard, driver reporting bay, and customer inspection desk.
            </div>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="industrial-card" style={{ borderTop: '3px solid #38bdf8' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '1rem' }}>
              <Clock size={24} />
            </div>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              Working Hours
            </h2>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              Fleet Operations: 24/7 / 365 Days
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Accounts & Admin: 9:00 AM – 7:30 PM (Mon–Sat)
            </div>
            <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 'bold' }}>
              ● Control Room Currently Open
            </div>
          </div>
        </div>

        {/* 2-Column Section: Inquiry Form + Branch Offices */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left: Contact Form */}
          <ContactForm />

          {/* Right: Regional Branch Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="industrial-card">
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building size={20} color="var(--accent-orange)" />
                <span>REGIONAL BRANCH TERMINALS</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {BUSINESS_CONFIG.branchOffices.map((b, i) => (
                  <div key={i} style={{ borderBottom: i < BUSINESS_CONFIG.branchOffices.length - 1 ? '1px solid var(--border-dark)' : 'none', paddingBottom: '1rem' }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--accent-yellow)', fontSize: '0.95rem' }}>
                      {b.city} Branch
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-cream)', marginTop: '0.25rem' }}>
                      {b.address}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', marginTop: '0.35rem' }}>
                      <Phone size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      <a href={`tel:${b.phone.replace(/\s+/g, '')}`}>{b.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Yard Navigation */}
            <div className="industrial-card" style={{ padding: '1.5rem', backgroundColor: '#0c1017' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <MapPin size={18} color="var(--accent-orange)" />
                <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Direct Yard Navigation</strong>
              </div>
              <div style={{
                height: '140px',
                background: 'radial-gradient(circle, #1d2638 0%, #0d121a 100%)',
                border: '1px dashed var(--border-dark)',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                textAlign: 'center',
                padding: '1rem'
              }}>
                <MapPin size={32} color="var(--accent-orange)" />
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>APMC Truck Terminal, Sector 19, Vashi, Navi Mumbai</span>
                <span style={{ color: 'var(--accent-yellow)' }}>Coordinates: 19.0760° N, 72.8777° E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
