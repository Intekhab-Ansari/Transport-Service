import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Navigation,
  PackageCheck,
  Building2,
  ShieldAlert,
  Zap,
  Users,
  Wrench
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';
import { FLEET_VEHICLES } from '../data/fleetData';
import FareCalculator from '../components/FareCalculator';
import FleetCard from '../components/FleetCard';
import Testimonials from '../components/Testimonials';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
  title: 'Vanguard Roadways & Tempo Logistics | Mumbai & All India Truck Transport | Tata Ace Hire & Shifting',
  description:
    'Top-rated goods transport and tempo hire in Mumbai, Navi Mumbai, Thane & All-India. Book Tata Ace, Bolero Pickup, 14ft to 32ft container trucks. Local house shifting, Bhiwandi warehouse logistics, JNPT port freight & intercity FTL with GPS live tracking.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/',
  },
  openGraph: {
    title: 'Vanguard Logistics | Direct Tempo & Truck Transport in Mumbai & Pan-India',
    description:
      'Direct fleet tempo & truck transport across Mumbai (Andheri, BKC, Vashi, Thane, Bhiwandi) & Pan-India. Tata Ace, Bolero & 32ft FTL with instant fares & live GPS.',
    url: 'https://transport-service-six.vercel.app/',
  },
};

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I want to book a tempo/truck. Please share rates.`
  )}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BUSINESS_CONFIG.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="home-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="hero-section-photo">
        <div 
          className="hero-photo-bg" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="hero-photo-scrim"></div>
        </div>

        <div className="container hero-photo-container">
          <div className="hero-photo-content">
            <div className="hero-pill-badge">
              <Truck size={14} />
              <span>DIRECT FLEET OWNERS • MUMBAI, MMR & ALL INDIA TRANSPORT</span>
            </div>

            <h1 className="hero-headline-compact">
              MUMBAI & ALL INDIA TEMPO & TRUCK TRANSPORT. <span className="highlight-orange">ON TIME, EVERY TRIP.</span>
            </h1>

            <p className="hero-subline-compact">
              Company-owned fleet of 65+ commercial tempos (Tata Ace, Bolero Pickup) and heavy trucks (14ft, 19ft, 32ft FTL) for house shifting, Bhiwandi warehousing, JNPT port freight, and intercity logistics.
            </p>

            <div className="hero-photo-ctas">
              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
                className="btn btn-primary"
                aria-label="Call Vanguard Logistics Mumbai Dispatch"
              >
                <Phone size={17} />
                <span>Call Dispatch: {BUSINESS_CONFIG.phonePrimary}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Get instant WhatsApp freight quote in Mumbai"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Docked Horizontal Instant Fare Calculation Bar */}
          <div className="hero-docked-calc">
            <FareCalculator variant="compact-bar" />
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            {BUSINESS_CONFIG.stats.map((st, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-num">{st.value}</div>
                <div className="trust-label">{st.label}</div>
                <div className="trust-sub">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="section-py section-light" id="services-overview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag-light">CARGO & LOGISTICS SOLUTIONS</span>
            <h2 className="section-title-light">TRANSPORT SERVICES BUILT FOR SPEED & SAFETY</h2>
            <p className="section-subtitle-light">
              From shop parcel drops to multi-ton factory machinery across state borders, we dispatch the exact right vehicle with experienced crew.
            </p>
          </div>

          <div className="services-light-grid">
            {BUSINESS_CONFIG.services.map((svc) => (
              <div key={svc.id} className="card-light">
                <div className="card-light-top">
                  <div className="service-icon-box">
                    <Truck size={22} />
                  </div>
                  <span className="badge-light-tag">Own Vehicles</span>
                </div>

                <h3 className="card-light-title">{svc.title}</h3>
                <p className="card-light-tagline">{svc.tagline}</p>

                <div className="card-light-ideal">
                  <strong>Best for:</strong> {svc.idealFor}
                </div>

                <ul className="card-light-list">
                  {svc.features.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} color="var(--accent-orange)" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-light-footer">
                  <span className="card-light-price">{svc.priceGuide.split('•')[0]}</span>
                  <Link
                    href="/services"
                    className="card-light-btn"
                  >
                    <span>Details</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLEET SECTION */}
      <section className="section-py section-dark" id="fleet-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">INSPECT OUR COMMERCIAL FLEET</span>
            <h2 className="section-title">THE VANGUARD FLEET: READY FOR IMMEDIATE DISPATCH</h2>
            <p className="section-subtitle">
              Company-owned vehicles with regular mechanical fitness checks at our dedicated Pune & Mumbai terminals. Click below to view dimensions and hire rates.
            </p>
          </div>

          <FleetCard />
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section-py section-light">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-visual">
              <div className="visual-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Vanguard Logistics Warehousing & Direct Commercial Fleet"
                  className="why-us-img"
                  loading="lazy"
                />
                <div className="visual-tag-card">
                  <ShieldCheck size={28} color="var(--accent-green)" />
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#0f172a' }}>100% Direct Fleet</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Zero third-party driver commissions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-us-info">
              <span className="section-tag-light">DIRECT FLEET ADVANTAGE</span>
              <h2 className="section-title-light">WHY MUMBAI & PUNE BUSINESSES TRUST VANGUARD</h2>
              <p className="section-subtitle-light" style={{ marginBottom: '1.75rem' }}>
                App aggregators act as middleman brokers who auction your booking to whoever is nearby. We are asset owners who maintain our own fleet, employ vetted drivers, and guarantee pickup.
              </p>

              <div className="comparison-table-wrap">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Service Guarantee</th>
                      <th className="th-vanguard">Vanguard Roadways</th>
                      <th className="th-aggregator">Booking Apps / Brokers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fleet Control</td>
                      <td className="td-highlight"><CheckCircle2 size={16} /> 65+ Company Owned</td>
                      <td className="td-muted">Random unverified drivers</td>
                    </tr>
                    <tr>
                      <td>Driver Cancellation</td>
                      <td className="td-highlight"><CheckCircle2 size={16} /> 0% — Guaranteed Turnout</td>
                      <td className="td-muted">Frequent last-minute cancels</td>
                    </tr>
                    <tr>
                      <td>Fare Pricing</td>
                      <td className="td-highlight"><CheckCircle2 size={16} /> Transparent Fixed Rates</td>
                      <td className="td-muted">Surge pricing & hidden fees</td>
                    </tr>
                    <tr>
                      <td>Billing & E-Way</td>
                      <td className="td-highlight"><CheckCircle2 size={16} /> Valid GST & Digital E-Way</td>
                      <td className="td-muted">Complicated corporate billing</td>
                    </tr>
                    <tr>
                      <td>Support Desk</td>
                      <td className="td-highlight"><CheckCircle2 size={16} /> 24/7 Yard Master Phone</td>
                      <td className="td-muted">Chatbot ticket queues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIGH-TRAFFIC INDUSTRIAL CORRIDORS */}
      <section className="section-py section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">HIGH FREQUENCY HIGHWAY RUNS</span>
            <h2 className="section-title">DAILY EXPRESS FREIGHT CORRIDORS</h2>
            <p className="section-subtitle">
              Daily dedicated departures connecting Maharashtra, Gujarat, and South India logistics belts.
            </p>
          </div>

          <div className="corridor-cards-grid">
            <div className="corridor-card">
              <div className="corridor-header">
                <span className="corridor-badge">Daily Express Runs</span>
                <span className="corridor-transit">3 - 5 Hours</span>
              </div>
              <h3 className="corridor-title">Mumbai ⇄ Pune Expressway</h3>
              <p className="corridor-desc">
                High-speed connectivity between APMC Vashi/Bhiwandi and Bhosari/Chakan MIDC industrial zones.
              </p>
              <div className="corridor-details">
                <div><strong>Capacity:</strong> Tata Ace to 32ft Multi-Axle</div>
                <div><strong>Departures:</strong> Hourly day & night slots</div>
              </div>
              <Link href="/quote" className="corridor-btn">
                <span>Check Corridor Tariff</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="corridor-card">
              <div className="corridor-header">
                <span className="corridor-badge">Port & Cargo Express</span>
                <span className="corridor-transit">Same-Day Port Clearance</span>
              </div>
              <h3 className="corridor-title">JNPT Nhava Sheva ⇄ Bhiwandi</h3>
              <p className="corridor-desc">
                Specialized container trailer and 19ft/24ft container transport from Nhava Sheva port to warehouse clusters.
              </p>
              <div className="corridor-details">
                <div><strong>Capacity:</strong> 20ft/40ft Port Containers & FTL</div>
                <div><strong>Documentation:</strong> Custom clearance handling</div>
              </div>
              <Link href="/quote" className="corridor-btn">
                <span>Check Port Rates</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="corridor-card">
              <div className="corridor-header">
                <span className="corridor-badge">Interstate National Corridor</span>
                <span className="corridor-transit">24 - 36 Hours</span>
              </div>
              <h3 className="corridor-title">Mumbai ⇄ Gujarat & Bangalore</h3>
              <p className="corridor-desc">
                Full Truckload (FTL) highway logistics connecting Mumbai/Navi Mumbai to Surat, Ahmedabad, and Bangalore.
              </p>
              <div className="corridor-details">
                <div><strong>Capacity:</strong> 14ft, 19ft & 32ft HQ Containers</div>
                <div><strong>Security:</strong> FastTag enabled, GPS tracked</div>
              </div>
              <Link href="/quote" className="corridor-btn">
                <span>Check FTL Pricing</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COVERAGE HUBS & REVIEWS */}
      <section className="section-py section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag-light">HYPERLOCAL PRESENCE</span>
            <h2 className="section-title-light">MUMBAI, MMR & PUNE DISPATCH HUBS</h2>
            <p className="section-subtitle-light">
              With yards stationed near major highway arteries, our vehicles reach your loading dock within 30 to 45 minutes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}>
            {(BUSINESS_CONFIG.mumbaiServiceZones || []).map((zone, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1.25rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: '#0f172a',
                  marginBottom: '0.85rem'
                }}>
                  <MapPin size={18} color="var(--accent-orange)" />
                  <span>{zone.region}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {zone.areas.map((area, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      background: '#f1f5f9',
                      color: '#334155',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: '500'
                    }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="section-header">
            <span className="section-tag-light">CUSTOMER EXPERIENCES</span>
            <h2 className="section-title-light">WHAT BUSINESSES & FAMILIES SAY</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="section-py section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">COMMON QUESTIONS</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="section-subtitle">
              Clear answers on tempo hire, vehicle capacities, transit insurance, and billing terms.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* 9. CALL TO ACTION BANNER */}
      <section className="section-py-sm section-asphalt">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-yellow" style={{ width: 'fit-content' }}>
                URGENT DISPATCH DESK
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#ffffff' }}>
                NEED A TEMPO OR TRUCK ON THE ROAD TODAY?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                Our nearest vehicle in your zone is ready for dispatch within 30 minutes. Fixed rates, zero cancellations.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                <a
                  href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
                  className="btn btn-primary btn-sm"
                >
                  <Phone size={17} />
                  <span>Call {BUSINESS_CONFIG.phonePrimary}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Immediate Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
