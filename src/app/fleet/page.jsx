import React from 'react';
import Link from 'next/link';
import { 
  Truck, 
  Ruler, 
  Weight, 
  Box, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Fuel,
  Maximize2
} from 'lucide-react';
import { FLEET_VEHICLES } from '../../data/fleetData';
import { BUSINESS_CONFIG } from '../../data/transportData';

export const metadata = {
  title: 'Commercial Vehicle Fleet Specifications | Tata Ace, Bolero, 14ft to 32ft Trucks',
  description:
    'Explore Vanguard Roadways commercial fleet: Tata Ace (750kg), Mahindra Bolero Maxi Truck (1.5 Ton), 14ft Eicher (4 Ton), 19ft Container (7 Ton), and 32ft Multi-Axle (15 Ton). Detailed load dimensions, deck sizes, and per-km tariffs.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/fleet',
  },
  openGraph: {
    title: 'Commercial Vehicle Fleet Specifications | Vanguard Roadways Mumbai & Pune',
    description:
      'Inspect load body dimensions, payload capacities, and real vehicle photos of our company-owned fleet.',
    url: 'https://transport-service-six.vercel.app/fleet',
  },
};

export default function FleetPage() {
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
        name: 'Fleet Specifications',
        item: 'https://transport-service-six.vercel.app/fleet',
      },
    ],
  };

  return (
    <div className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
        {/* Page Header */}
        <div className="section-header text-center">
          <span className="section-tag">COMMERCIAL VEHICLE INVENTORY</span>
          <h1 className="section-title">OUR TRANSPORT FLEET SPECIFICATIONS</h1>
          <p className="section-subtitle">
            Every vehicle in our 65+ fleet is company-owned, GPS-tracked, and passes weekly mechanical fitness checks at our dedicated Nigdi & Bhosari maintenance yards.
          </p>
        </div>

        {/* Fleet Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2rem' }}>
          {FLEET_VEHICLES.map((veh) => (
            <div key={veh.id} className="vehicle-showcase-card">
              {/* Left Column: Visual & Dimensions */}
              <div className="vehicle-visual-col">
                <div className="vehicle-visual-badge">
                  <span className="badge badge-orange">{veh.badge}</span>
                </div>

                <div className="vehicle-photo-container">
                  <img 
                    src={veh.imageUrl} 
                    alt={veh.name}
                    className="vehicle-real-photo"
                    loading="lazy"
                  />
                </div>

                {/* Blueprint Dimension overlay */}
                <div className="blueprint-overlay-box">
                  <div className="dimension-chip">
                    <Ruler size={13} />
                    <span>L: {veh.dimensions.length}</span>
                  </div>
                  <div className="dimension-chip">
                    <Maximize2 size={13} />
                    <span>W: {veh.dimensions.width}</span>
                  </div>
                  <div className="dimension-chip">
                    <Maximize2 size={13} />
                    <span>H: {veh.dimensions.height}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Specs & Use-Cases */}
              <div className="vehicle-details-col">
                <div className="vehicle-title-strip">
                  <div>
                    <h2 className="vehicle-name">{veh.name}</h2>
                    <span className="vehicle-category">{veh.category}</span>
                  </div>
                  <div className="payload-tag">
                    <Weight size={15} />
                    <span>{veh.payloadCapacity}</span>
                  </div>
                </div>

                <p className="vehicle-description">{veh.description}</p>

                {/* Quick Specs Grid */}
                <div className="specs-mini-grid">
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Deck Length</span>
                    <span className="spec-mini-val">{veh.dimensions.length}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Deck Width</span>
                    <span className="spec-mini-val">{veh.dimensions.width}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Payload Capacity</span>
                    <span className="spec-mini-val">{veh.payloadCapacity}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Box Volume</span>
                    <span className="spec-mini-val">{veh.volumeCuFt}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Turning Radius</span>
                    <span className="spec-mini-val">{veh.specs.turningRadius.split('(')[0]}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Fuel / Engine</span>
                    <span className="spec-mini-val">{veh.specs.fuelType}</span>
                  </div>
                </div>

                {/* Best For Items */}
                <div style={{ marginTop: '1rem' }}>
                  <div className="best-for-title">
                    RECOMMENDED USES & CARGO:
                  </div>
                  <ul className="best-for-list">
                    {veh.bestFor.map((item, idx) => (
                      <li key={idx} className="best-for-item">
                        <CheckCircle2 size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Booking Footer */}
                <div className="vehicle-pricing-strip">
                  <div className="vehicle-rate-display">
                    <span className="rate-sub">Standard Tariff:</span>
                    <span className="rate-num">
                      ₹{veh.basePrice} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ base + ₹{veh.ratePerKm}/km</span>
                    </span>
                  </div>

                  <Link
                    href={`/quote?fleet=${veh.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Book {veh.name.split('(')[0]}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
