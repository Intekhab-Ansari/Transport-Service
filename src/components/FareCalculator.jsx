import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Truck, 
  MapPin, 
  Users, 
  Shield, 
  MessageCircle, 
  PhoneCall, 
  CheckCircle2, 
  X,
  ArrowRight,
  Info
} from 'lucide-react';
import { FLEET_VEHICLES, LOAD_TYPES, POPULAR_ROUTES } from '../data/fleetData';
import { BUSINESS_CONFIG } from '../data/transportData';
import confetti from 'canvas-confetti';

export default function FareCalculator({ defaultVehicleId = 'bolero-pickup', variant = 'full', onQuoteCalculated }) {
  // Calculator State
  const [selectedVehicleId, setSelectedVehicleId] = useState(defaultVehicleId);
  const [pickupCity, setPickupCity] = useState('Pune');
  const [dropCity, setDropCity] = useState('Navi Mumbai');
  const [distanceKm, setDistanceKm] = useState(135);
  const [selectedLoadType, setSelectedLoadType] = useState('house-1bhk');
  const [helpersCount, setHelpersCount] = useState(2);
  const [includeInsurance, setIncludeInsurance] = useState(true);

  // Callback Modal State
  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Selected vehicle object
  const vehicle = useMemo(() => {
    return FLEET_VEHICLES.find(v => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  }, [selectedVehicleId]);

  // Pricing Calculation
  const calculation = useMemo(() => {
    const basePrice = vehicle.basePrice;
    const baseKm = vehicle.baseKm;
    const ratePerKm = vehicle.ratePerKm;
    
    // Extra km charge
    const extraKm = Math.max(0, distanceKm - baseKm);
    const distanceCharge = extraKm * ratePerKm;
    
    // Helper charge
    const helperRate = distanceKm > 80 ? 650 : 450;
    const laborCharge = helpersCount * helperRate;
    
    // Insurance
    const insuranceFee = includeInsurance ? (distanceKm > 100 ? 350 : 199) : 0;
    const subtotal = basePrice + distanceCharge + laborCharge + insuranceFee;
    
    return {
      basePrice,
      baseKm,
      extraKm,
      ratePerKm,
      distanceCharge,
      laborCharge,
      insuranceFee,
      subtotal
    };
  }, [vehicle, distanceKm, helpersCount, includeInsurance]);

  // Pre-filled WhatsApp message
  const generateWhatsAppMessage = () => {
    const text = `*Transport Booking Request — ${BUSINESS_CONFIG.brandName}*
---------------------------------------
🚛 *Vehicle:* ${vehicle.name} (${vehicle.payloadCapacity})
📍 *Pickup:* ${pickupCity}
🏁 *Drop:* ${dropCity}
🛣️ *Distance:* ~${distanceKm} km
📦 *Load:* ${LOAD_TYPES.find(l => l.id === selectedLoadType)?.label || 'General Goods'}
👷 *Helpers:* ${helpersCount} Persons
🛡️ *Insurance:* ${includeInsurance ? 'Yes' : 'No'}
---------------------------------------
💰 *Est. Fare:* ₹${calculation.subtotal.toLocaleString('en-IN')}
---------------------------------------
Please confirm driver availability.`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your name and phone number');
      return;
    }
    setBookingSubmitted(true);
    confetti({ particleCount: 75, spread: 60 });
  };

  // Compact Docked Bar Variant for Hero Section
  if (variant === 'compact-bar') {
    return (
      <div className="hero-fare-bar">
        <div className="fare-bar-field">
          <label className="fare-bar-label">Pickup Location</label>
          <input
            type="text"
            className="fare-bar-input"
            placeholder="e.g. Pune (Kothrud / Bhosari)"
            value={pickupCity}
            onChange={(e) => setPickupCity(e.target.value)}
          />
        </div>

        <div className="fare-bar-field">
          <label className="fare-bar-label">Drop Location</label>
          <input
            type="text"
            className="fare-bar-input"
            placeholder="e.g. Navi Mumbai / Nashik"
            value={dropCity}
            onChange={(e) => setDropCity(e.target.value)}
          />
        </div>

        <div className="fare-bar-field">
          <label className="fare-bar-label">Vehicle Size</label>
          <select
            className="fare-bar-select"
            value={selectedVehicleId}
            onChange={(e) => setSelectedVehicleId(e.target.value)}
          >
            {FLEET_VEHICLES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name.split('(')[0]} ({v.payloadCapacity})
              </option>
            ))}
          </select>
        </div>

        <div className="fare-bar-field">
          <label className="fare-bar-label">Est. Distance</label>
          <div className="fare-bar-dist-group">
            <input
              type="number"
              min="5"
              max="1500"
              className="fare-bar-input dist-input"
              value={distanceKm}
              onChange={(e) => setDistanceKm(Number(e.target.value) || 5)}
            />
            <span className="dist-unit">KM</span>
          </div>
        </div>

        <div className="fare-bar-action">
          <button
            type="button"
            className="btn btn-primary fare-bar-btn"
            onClick={() => {
              setBookingSubmitted(false);
              setShowModal(true);
            }}
          >
            <span>Get Fare (₹{calculation.subtotal.toLocaleString('en-IN')})</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Callback / Instant Booking Modal */}
        {showModal && (
          <div className="modal-backdrop" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Trip Estimate & Driver Dispatch</h3>
                <button 
                  type="button" 
                  className="modal-close-btn"
                  onClick={() => setShowModal(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {bookingSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '1.25rem 0' }}>
                    <CheckCircle2 size={52} color="var(--accent-green)" style={{ margin: '0 auto 0.75rem' }} />
                    <h3 style={{ color: '#ffffff', marginBottom: '0.4rem' }}>Booking Request Received!</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      Our Duty Officer is assigning <strong>{vehicle.name}</strong> for route <strong>{pickupCity} ➔ {dropCity}</strong> (~{distanceKm} km). We will call <strong>{customerPhone}</strong> within 10 minutes.
                    </p>
                    <div style={{ background: '#0b0f16', padding: '0.85rem', borderRadius: '6px', marginBottom: '1.25rem', textAlign: 'left' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Trip Total Estimate:</div>
                      <div style={{ fontSize: '1.1rem', color: 'var(--accent-yellow)', fontWeight: 'bold' }}>
                        ₹{calculation.subtotal.toLocaleString('en-IN')} (Fixed Fleet Rate)
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setShowModal(false)}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit}>
                    <div style={{ background: '#0b0f16', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1rem', borderLeft: '3px solid var(--accent-orange)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Fleet Rate:</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#ffffff' }}>
                        {vehicle.name} • {pickupCity} ➔ {dropCity} (~{distanceKm} km)
                      </div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--accent-yellow)', fontWeight: 'bold', marginTop: '0.2rem' }}>
                        Est. Upfront Fare: ₹{calculation.subtotal.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Sunil Deshmukh"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="e.g. 9876543210"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                      <button type="submit" className="btn btn-primary">
                        Confirm Callback
                      </button>
                      <a
                        href={generateWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                      >
                        <MessageCircle size={16} />
                        <span>Book on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full Detailed Estimator Variant
  return (
    <div className="calc-card-clean" id="fare-calculator">
      <div className="calc-card-header-clean">
        <div className="calc-header-title">
          <Calculator size={20} />
          <span>Fare & Distance Estimator</span>
        </div>
        <span className="badge badge-orange">Fixed Fleet Rates</span>
      </div>

      <div className="calc-body-clean">
        {/* Step 1: Vehicle Dropdown + Load Type */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">1. Vehicle Category</label>
            <select
              className="form-control"
              value={selectedVehicleId}
              onChange={(e) => setSelectedVehicleId(e.target.value)}
            >
              {FLEET_VEHICLES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({v.payloadCapacity})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">2. Cargo / Goods Type</label>
            <select
              className="form-control"
              value={selectedLoadType}
              onChange={(e) => {
                setSelectedLoadType(e.target.value);
                const matched = LOAD_TYPES.find(l => l.id === e.target.value);
                if (matched) {
                  setHelpersCount(matched.defaultHelpers);
                  if (matched.recommendedVehicle) setSelectedVehicleId(matched.recommendedVehicle);
                }
              }}
            >
              {LOAD_TYPES.map((load) => (
                <option key={load.id} value={load.id}>
                  {load.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 2: Pickup & Drop */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Pickup Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Pune (Kothrud / Bhosari)"
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Drop Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Navi Mumbai / Nashik"
              value={dropCity}
              onChange={(e) => setDropCity(e.target.value)}
            />
          </div>
        </div>

        {/* Presets */}
        <div className="form-group">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.35rem' }}>
            Quick Corridors:
          </span>
          <div className="route-presets">
            {POPULAR_ROUTES.slice(0, 4).map((route, idx) => (
              <button
                key={idx}
                type="button"
                className="preset-pill"
                onClick={() => {
                  setPickupCity(route.from);
                  setDropCity(route.to);
                  setDistanceKm(route.distanceKm);
                }}
              >
                {route.from.split('(')[0]} ➔ {route.to.split('(')[0]} ({route.distanceKm} km)
              </button>
            ))}
          </div>
        </div>

        {/* Distance Slider */}
        <div className="form-group">
          <div className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>One-Way Distance</span>
            <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>{distanceKm} Kilometers</span>
          </div>
          <div className="distance-row">
            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={distanceKm}
              onChange={(e) => setDistanceKm(Number(e.target.value))}
              className="range-slider"
            />
            <div className="distance-badge">{distanceKm} KM</div>
          </div>
        </div>

        {/* Helpers & Insurance */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
          <div className="helpers-selector" style={{ marginBottom: 0 }}>
            <div className="helpers-info">
              <span className="helpers-label">Labor (Helpers)</span>
              <span className="helpers-sub">₹{distanceKm > 80 ? '650' : '450'}/person</span>
            </div>
            <div className="counter-ctrls">
              <button
                type="button"
                className="counter-btn"
                onClick={() => setHelpersCount(Math.max(0, helpersCount - 1))}
                disabled={helpersCount <= 0}
              >
                -
              </button>
              <span className="counter-val">{helpersCount}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setHelpersCount(Math.min(6, helpersCount + 1))}
                disabled={helpersCount >= 6}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              id="transit-ins-full"
              checked={includeInsurance}
              onChange={(e) => setIncludeInsurance(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--accent-orange)' }}
            />
            <label htmlFor="transit-ins-full" style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)', cursor: 'pointer' }}>
              Transit Insurance (+₹{distanceKm > 100 ? '350' : '199'})
            </label>
          </div>
        </div>

        {/* Receipt Box */}
        <div className="fare-receipt-box-clean">
          <div className="fare-row-clean">
            <span>Base Fare ({vehicle.name.split('(')[0]} incl. {calculation.baseKm} km):</span>
            <strong>₹{calculation.basePrice.toLocaleString('en-IN')}</strong>
          </div>
          {calculation.extraKm > 0 && (
            <div className="fare-row-clean">
              <span>Distance ({calculation.extraKm} km @ ₹{calculation.ratePerKm}/km):</span>
              <strong>₹{calculation.distanceCharge.toLocaleString('en-IN')}</strong>
            </div>
          )}
          {calculation.laborCharge > 0 && (
            <div className="fare-row-clean">
              <span>Labor ({helpersCount} Helpers):</span>
              <strong>₹{calculation.laborCharge.toLocaleString('en-IN')}</strong>
            </div>
          )}
          <div className="fare-row-clean total-row-clean">
            <span>Total Estimated Fare:</span>
            <span className="total-amount-clean">₹{calculation.subtotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="calc-actions">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={17} />
            <span>Book via WhatsApp</span>
          </a>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setBookingSubmitted(false);
              setShowModal(true);
            }}
          >
            <PhoneCall size={17} />
            <span>Request Fast Callback</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Confirm Booking Callback</h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {bookingSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.25rem 0' }}>
                  <CheckCircle2 size={52} color="var(--accent-green)" style={{ margin: '0 auto 0.75rem' }} />
                  <h3 style={{ color: '#ffffff', marginBottom: '0.4rem' }}>Booking Request Received!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Our Dispatch Officer is reviewing vehicle availability for <strong>{vehicle.name}</strong>. We will call you within 10 minutes at <strong>{customerPhone}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowModal(false)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  <div style={{ background: '#0b0f16', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1rem', borderLeft: '3px solid var(--accent-orange)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Trip Quote:</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>
                      {vehicle.name} • {pickupCity} ➔ {dropCity} (~{distanceKm} km)
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--accent-yellow)', fontWeight: 'bold' }}>
                      Est. Fare: ₹{calculation.subtotal.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Sunil Deshmukh"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 9876543210"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Confirm & Request Driver Assignment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
