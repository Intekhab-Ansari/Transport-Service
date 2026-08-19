import React, { useState } from 'react';
import { 
  Truck, 
  CheckCircle2, 
  Ruler, 
  Weight, 
  Box, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { FLEET_VEHICLES } from '../data/fleetData';

export default function FleetCard({ onSelectVehicle }) {
  const [activeVehicleId, setActiveVehicleId] = useState(FLEET_VEHICLES[0].id);

  const activeVehicle = FLEET_VEHICLES.find(v => v.id === activeVehicleId) || FLEET_VEHICLES[0];

  return (
    <div className="fleet-showcase-wrapper" id="fleet-section">
      {/* Vehicle Category Selector Tabs */}
      <div className="fleet-tabs-row" role="tablist">
        {FLEET_VEHICLES.map((veh) => (
          <button
            key={veh.id}
            role="tab"
            aria-selected={activeVehicleId === veh.id}
            className={`fleet-tab-btn ${activeVehicleId === veh.id ? 'active' : ''}`}
            onClick={() => setActiveVehicleId(veh.id)}
          >
            <Truck size={17} />
            <span>{veh.name.split('(')[0]}</span>
            <span className="fleet-tab-cap">({veh.payloadCapacity})</span>
          </button>
        ))}
      </div>

      {/* Active Vehicle Showcase Card */}
      <div className="vehicle-showcase-card">
        {/* Left Column: Real Commercial Photography & Visual Dimensions */}
        <div className="vehicle-visual-col">
          <div className="vehicle-visual-badge">
            <span className="badge badge-orange">{activeVehicle.badge}</span>
          </div>

          <div className="vehicle-photo-container">
            <img 
              src={activeVehicle.imageUrl} 
              alt={activeVehicle.name}
              className="vehicle-real-photo"
              loading="lazy"
            />
            <div className="vehicle-photo-overlay">
              <span className="vehicle-overlay-name">{activeVehicle.name}</span>
            </div>
          </div>

          <div className="vehicle-dimension-callout">
            <div>
              <strong>Box:</strong> {activeVehicle.dimensions}
            </div>
            <div>
              <strong>Vol:</strong> {activeVehicle.volumeCuFt}
            </div>
            <div>
              <strong>Deck:</strong> {activeVehicle.floorHeight}
            </div>
          </div>

          <div className="vehicle-photo-caption">
            <span className="replace-tag">{activeVehicle.samplePhotoPlaceholder}</span>
          </div>
        </div>

        {/* Right Column: Full Specifications & Use Cases */}
        <div className="vehicle-specs-col">
          <div>
            <div className="vehicle-category-sub">{activeVehicle.category}</div>
            <div className="vehicle-title-group">
              <h3>{activeVehicle.name}</h3>
            </div>
            <p className="vehicle-desc">
              Dedicated commercial transport rig with heavy tarpaulin, reinforced floor, and company-verified driver.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="specs-mini-grid">
            <div className="spec-mini-item">
              <span className="spec-mini-label">Rated Payload</span>
              <span className="spec-mini-val">{activeVehicle.payloadCapacity}</span>
            </div>
            <div className="spec-mini-item">
              <span className="spec-mini-label">Box Volume</span>
              <span className="spec-mini-val">{activeVehicle.volumeCuFt}</span>
            </div>
            <div className="spec-mini-item">
              <span className="spec-mini-label">Turning Radius</span>
              <span className="spec-mini-val">{activeVehicle.specs.turningRadius.split('(')[0]}</span>
            </div>
          </div>

          {/* Best For Items */}
          <div>
            <div className="best-for-title">
              RECOMMENDED USES & CARGO:
            </div>
            <ul className="best-for-list">
              {activeVehicle.bestFor.map((item, idx) => (
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
                ₹{activeVehicle.basePrice} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ base + ₹{activeVehicle.ratePerKm}/km</span>
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => onSelectVehicle && onSelectVehicle(activeVehicle.id)}
            >
              <span>Book {activeVehicle.name.split('(')[0]}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
