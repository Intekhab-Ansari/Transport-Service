import React, { useState } from 'react';
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

export default function HomePage({ setActivePage, setSelectedFleetId }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const handleSelectFleetForBooking = (vehicleId) => {
    if (setSelectedFleetId) setSelectedFleetId(vehicleId);
    if (setActivePage) setActivePage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I want to book a tempo/truck. Please share rates.`
  )}`;

  return (
    <div className="home-wrapper">
      {/* 1. REBUILT HERO: Full-Bleed Road Photography with Dark Scrim & Docked Fare Bar */}
      <section className="hero-section-photo">
        <div className="hero-photo-bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')`
        }}>
          <div className="hero-photo-scrim"></div>
        </div>

        <div className="container hero-photo-container">
          <div className="hero-photo-content">
            <div className="hero-pill-badge">
              <Truck size={14} />
              <span>DIRECT FLEET OWNERS • NO BROKERAGE</span>
            </div>

            <h1 className="hero-headline-compact">
              RELIABLE TEMPO & TRUCK TRANSPORT. <span className="highlight-orange">ON TIME, EVERY TRIP.</span>
            </h1>

            <p className="hero-subline-compact">
              Company-owned fleet of 65+ commercial tempos (Tata Ace, Bolero) and heavy trucks (14ft to 32ft) for local shifting, warehouse logistics, and intercity freight.
            </p>

            <div className="hero-photo-ctas">
              <a
                href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
                className="btn btn-primary"
              >
                <Phone size={17} />
                <span>Call Dispatch: {BUSINESS_CONFIG.phonePrimary}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
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

      {/* 2. TRUST STATS STRIP (Dark Asphalt) */}
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

      {/* 3. SERVICES SECTION: CRISP LIGHT BACKGROUND (Breaks dark monotony) */}
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
                  <button
                    type="button"
                    className="card-light-btn"
                    onClick={() => setActivePage('services')}
                  >
                    <span>Details</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FLEET SECTION: REAL VEHICLE PHOTOGRAPHY (Dark Asphalt Section) */}
      <section className="section-py section-dark" id="fleet-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">INSPECT OUR COMMERCIAL FLEET</span>
            <h2 className="section-title">THE VANGUARD FLEET: READY FOR IMMEDIATE DISPATCH</h2>
            <p className="section-subtitle">
              Company-owned vehicles with regular mechanical fitness checks at our dedicated Pune & Mumbai terminals. Click below to view dimensions and hire rates.
            </p>
          </div>

          <FleetCard onSelectVehicle={handleSelectFleetForBooking} />
        </div>
      </section>

      {/* 5. WHY CHOOSE US: SIDE-BY-SIDE PHOTO + COMPARISON TABLE (Crisp Light Background) */}
      <section className="section-py section-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag-light">THE FLEET OWNER DIFFERENCE</span>
            <h2 className="section-title-light">DIRECT FLEET OPERATOR VS AGGREGATOR APPS</h2>
            <p className="section-subtitle-light">
              Booking apps take commission cuts and assign unknown third-party drivers who frequently cancel. We own our trucks, train our drivers, and guarantee on-time arrival.
            </p>
          </div>

          <div className="comparison-wrapper-grid">
            {/* Left: Real Loading & Driver Photo */}
            <div className="operational-photo-card">
              <img 
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80" 
                alt="Vanguard loading crew in action"
                className="operational-img"
              />
              <div className="operational-caption">
                <div style={{ fontWeight: 'bold', color: '#ffffff' }}>Verified Loading Crew & Direct Drivers</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-yellow)' }}>Trained hamal labor • Zero transshipment loss</div>
                <span className="replace-tag" style={{ marginTop: '4px', display: 'inline-block' }}>[REPLACE: Real photo of loading crew at site]</span>
              </div>
            </div>

            {/* Right: Clean Comparison Table */}
            <div className="comparison-container-light">
              <table className="comparison-table-light">
                <thead>
                  <tr>
                    <th>Commitment</th>
                    <th className="highlight-th">★ Vanguard Direct Fleet</th>
                    <th>App Aggregators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dispatch Reliability</strong></td>
                    <td className="highlight-td">✔ 100% Guaranteed dispatch from yard</td>
                    <td className="bad-td">✖ High cancellation during peak hours</td>
                  </tr>
                  <tr>
                    <td><strong>Pricing Structure</strong></td>
                    <td className="highlight-td">✔ Fixed upfront quote. Zero rain surge</td>
                    <td className="bad-td">✖ Dynamic surge multiplier (up to 2.5x)</td>
                  </tr>
                  <tr>
                    <td><strong>Driver & Crew</strong></td>
                    <td className="highlight-td">✔ Verified full-time drivers with police records</td>
                    <td className="bad-td">✖ Unknown gig contractors</td>
                  </tr>
                  <tr>
                    <td><strong>Cargo Safety</strong></td>
                    <td className="highlight-td">✔ Heavy tarpaulins + ₹50L Transit Policy</td>
                    <td className="bad-td">✖ Excludes commercial goods</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Line</strong></td>
                    <td className="highlight-td">✔ 24/7 Phone call to Yard Manager</td>
                    <td className="bad-td">✖ Automated chatbot with no call access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS: ROAD-ROUTE TIMELINE (Dark Slate Section) */}
      <section className="section-py section-asphalt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">SEAMLESS 4-STEP DISPATCH</span>
            <h2 className="section-title">HOW YOUR GOODS MOVE WITH VANGUARD</h2>
            <p className="section-subtitle">
              Simple, transparent, and completely stress-free from the first phone call to final doorstep delivery.
            </p>
          </div>

          <div className="process-grid-compact">
            <div className="process-card-compact">
              <div className="process-num-compact">01</div>
              <h3 className="process-title-compact">Book & Lock Fare</h3>
              <p className="process-desc-compact">
                Calculate fare online or WhatsApp us your route. We lock your vehicle with fixed pricing.
              </p>
            </div>

            <div className="process-card-compact">
              <div className="process-num-compact">02</div>
              <h3 className="process-title-compact">Arrival & Loading</h3>
              <p className="process-desc-compact">
                Vehicle arrives in 30-45 mins. Our hamal crew wraps and secures items with heavy ropes.
              </p>
            </div>

            <div className="process-card-compact">
              <div className="process-num-compact">03</div>
              <h3 className="process-title-compact">Live GPS Transit</h3>
              <p className="process-desc-compact">
                Receive live tracking on WhatsApp. Monitor truck speed, toll checkpoints, and driver ETA.
              </p>
            </div>

            <div className="process-card-compact">
              <div className="process-num-compact">04</div>
              <h3 className="process-title-compact">Doorstep Delivery</h3>
              <p className="process-desc-compact">
                Safe unloading at destination. Inspect cargo, sign digital POD slip, and pay transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACTIVE HIGHWAY CORRIDORS & TESTIMONIALS (Warm Light Section) */}
      <section className="section-py section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag-light">DAILY ACTIVE ROUTES</span>
            <h2 className="section-title-light">MAJOR COMMERCIAL CORRIDORS SERVED</h2>
            <p className="section-subtitle-light">
              Daily round-the-clock runs across key manufacturing and retail corridors with guaranteed return availability.
            </p>
          </div>

          <div className="corridor-grid-light" style={{ marginBottom: '3rem' }}>
            {BUSINESS_CONFIG.corridors.map((c, idx) => (
              <div key={idx} className="corridor-card-light">
                <div className="corridor-route-light">
                  <span>{c.from}</span>
                  <ArrowRight size={16} color="var(--accent-orange)" />
                  <span>{c.to}</span>
                </div>
                <div className="corridor-meta-light">
                  <span>Avg: <strong>{c.time}</strong></span>
                  <span className="corridor-freq">{c.frequency}</span>
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

      {/* 8. FAQ ACCORDION (Dark Section) */}
      <section className="section-py section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">COMMON QUESTIONS</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="section-subtitle">
              Clear answers on tempo hire, vehicle capacities, transit insurance, and billing terms.
            </p>
          </div>

          <div className="faq-list">
            {BUSINESS_CONFIG.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight 
                    size={18} 
                    color="var(--accent-orange)"
                    style={{
                      transform: openFaqIdx === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>

                {openFaqIdx === idx && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
