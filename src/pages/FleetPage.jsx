import React from 'react';
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
import { FLEET_VEHICLES } from '../data/fleetData';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function FleetPage({ setActivePage, setSelectedFleetId }) {
  const handleBookVehicle = (id) => {
    if (setSelectedFleetId) setSelectedFleetId(id);
    if (setActivePage) setActivePage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section-py">
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
          {FLEET_VEHICLES.map((veh, idx) => (
            <div key={veh.id} className="vehicle-showcase-card">
              {/* Left Column: Visual & Dimensions */}
              <div className="vehicle-visual-col">
                <div className="vehicle-visual-badge">
                  <span className="badge badge-orange">{veh.badge}</span>
                </div>

                <div className="vehicle-blueprint-preview">
                  <div className="vehicle-illustration-box">
                    <div style={{
                      background: 'linear-gradient(180deg, #1d2638 0%, #12161f 100%)',
                      border: '2px solid var(--border-dark)',
                      borderRadius: '8px',
                      padding: '2rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <Truck size={88} color="var(--accent-orange)" strokeWidth={1.5} />
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        color: '#ffffff',
                        letterSpacing: '1px'
                      }}>
                        {veh.name}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: 'var(--accent-yellow)',
                        background: 'rgba(255,183,3,0.1)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,183,3,0.2)'
                      }}>
                        Rated Capacity: {veh.payloadCapacity}
                      </div>
                    </div>
                  </div>

                  <div className="vehicle-dimension-callout">
                    <div>
                      <strong>Cargo Box Size:</strong> {veh.dimensions}
                    </div>
                    <div>
                      <strong>Cubic Volume:</strong> {veh.volumeCuFt}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-dim)',
                  textAlign: 'center',
                  borderTop: '1px solid var(--border-dark)',
                  paddingTop: '0.75rem'
                }}>
                  <span className="replace-tag">{veh.samplePhotoPlaceholder}</span>
                </div>
              </div>

              {/* Right Column: Complete Specs & Suitability */}
              <div className="vehicle-specs-col">
                <div>
                  <div className="vehicle-category-sub">{veh.category}</div>
                  <div className="vehicle-title-group">
                    <h2 style={{ fontSize: '2rem', color: '#ffffff' }}>{veh.name}</h2>
                  </div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Engineered for high cargo stability and efficient fuel mileage. Equipped with heavy tarpaulin, side railings, and certified driver.
                  </p>
                </div>

                {/* Detailed Spec Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', backgroundColor: 'var(--bg-asphalt-dark)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-dark)' }}>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Rated Payload</span>
                    <span className="spec-mini-val">{veh.payloadCapacity}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Loading Floor</span>
                    <span className="spec-mini-val">{veh.floorHeight}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Turning Radius</span>
                    <span className="spec-mini-val">{veh.specs.turningRadius}</span>
                  </div>
                  <div className="spec-mini-item">
                    <span className="spec-mini-label">Fuel Grade</span>
                    <span className="spec-mini-val" style={{ fontSize: '0.95rem' }}>{veh.fuelType}</span>
                  </div>
                </div>

                {/* Best For List */}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    color: '#ffffff',
                    marginBottom: '0.6rem',
                    letterSpacing: '0.5px'
                  }}>
                    IDEAL USE CASES & MATERIALS:
                  </div>
                  <ul className="best-for-list">
                    {veh.bestFor.map((item, i) => (
                      <li key={i} className="best-for-item">
                        <CheckCircle2 size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="vehicle-pricing-strip">
                  <div className="vehicle-rate-display">
                    <span className="rate-sub">Standard Tariff:</span>
                    <span className="rate-num">
                      ₹{veh.basePrice} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ base (incl. {veh.baseKm} km) + ₹{veh.ratePerKm}/km</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleBookVehicle(veh.id)}
                  >
                    <span>Hire {veh.name.split('(')[0]}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
