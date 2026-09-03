'use client';

import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Truck, 
  Phone, 
  Navigation, 
  ShieldCheck, 
  FileText, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  X
} from 'lucide-react';
import { getTrackingDetails, MOCK_SHIPMENTS } from '../data/trackingData';

export default function TrackingWidget({ initialDocket = 'VG-84920' }) {
  const [docketInput, setDocketInput] = useState(initialDocket);
  const [currentTracking, setCurrentTracking] = useState(() => getTrackingDetails(initialDocket));
  const [showPodModal, setShowPodModal] = useState(false);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!docketInput.trim()) return;
    const result = getTrackingDetails(docketInput);
    setCurrentTracking(result);
  };

  const handleSampleClick = (code) => {
    setDocketInput(code);
    const result = getTrackingDetails(code);
    setCurrentTracking(result);
  };

  const progressPercent = Math.min(
    100, 
    Math.round((currentTracking.distanceCoveredKm / currentTracking.totalDistanceKm) * 100)
  );

  return (
    <div className="tracking-wrapper" id="live-tracking">
      {/* Search Input Box */}
      <div className="tracking-search-box">
        <form onSubmit={handleSearch} className="tracking-input-group">
          <input
            type="text"
            className="tracking-input"
            placeholder="ENTER LR / DOCKET NUMBER (e.g. VG-84920)"
            value={docketInput}
            onChange={(e) => setDocketInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-lg">
            <Search size={20} />
            <span>Track Consignment</span>
          </button>
        </form>

        <div className="sample-dockets">
          <span>Try Sample Dockets:</span>
          <button
            type="button"
            className="docket-pill"
            onClick={() => handleSampleClick('VG-84920')}
          >
            VG-84920 (Highway FTL)
          </button>
          <button
            type="button"
            className="docket-pill"
            onClick={() => handleSampleClick('VG-55102')}
          >
            VG-55102 (Local Shifting)
          </button>
          <button
            type="button"
            className="docket-pill"
            onClick={() => handleSampleClick('VG-99231')}
          >
            VG-99231 (Delivered & POD)
          </button>
        </div>
      </div>

      {/* Tracking Result Dashboard Card */}
      {currentTracking && (
        <div className="tracking-card">
          {/* Top Bar with Docket and Live Status */}
          <div className="tracking-card-top">
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                Lorry Receipt (LR) #
              </div>
              <div className="tracking-docket-title">{currentTracking.lrNumber}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Booked on: {currentTracking.bookingDate}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div 
                className="tracking-status-chip"
                style={{
                  backgroundColor: `${currentTracking.statusColor}20`,
                  color: currentTracking.statusColor,
                  border: `1px solid ${currentTracking.statusColor}`
                }}
              >
                <span className="status-pulse" style={{ backgroundColor: currentTracking.statusColor }}></span>
                <span>{currentTracking.statusLabel}</span>
              </div>

              {currentTracking.status === 'DELIVERED' && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setShowPodModal(true)}
                >
                  <FileText size={16} color="var(--accent-green)" />
                  <span>View Signed POD</span>
                </button>
              )}
            </div>
          </div>

          {/* Route Progression Graphic */}
          <div className="route-progress-panel">
            <div className="route-endpoints">
              <div className="route-node">
                <span className="route-node-label">Origin / Pickup Hub</span>
                <span className="route-node-city">{currentTracking.origin}</span>
              </div>
              <div className="route-node" style={{ textAlign: 'right' }}>
                <span className="route-node-label">Destination / Delivery</span>
                <span className="route-node-city">{currentTracking.destination}</span>
              </div>
            </div>

            <div className="progress-track-bg">
              <div 
                className="progress-track-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="route-stats-strip">
              <div>
                <strong>Current Waypoint:</strong> {currentTracking.currentLocation}
              </div>
              <div>
                <strong>Transit Speed:</strong> {currentTracking.currentSpeed}
              </div>
              <div>
                <strong>Est. Delivery:</strong> {currentTracking.estDeliveryTime}
              </div>
            </div>
          </div>

          {/* Bottom Grid: Cargo Details + Checkpoint Timeline */}
          <div className="tracking-content-grid">
            {/* Left Column: Driver & Cargo Details */}
            <div className="cargo-details-panel">
              {/* Driver Contact Box */}
              <div className="driver-id-card">
                <div className="driver-avatar">
                  {currentTracking.driverName.charAt(0)}
                </div>
                <div className="driver-meta">
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Assigned On-Duty Driver</div>
                  <div className="driver-name">{currentTracking.driverName}</div>
                  <div className="driver-veh">{currentTracking.vehicleType}</div>
                </div>
                <a
                  href={`tel:${currentTracking.driverPhone.replace(/\s+/g, '')}`}
                  className="btn btn-primary btn-sm"
                  style={{ padding: '0.4rem 0.75rem' }}
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>
              </div>

              {/* Cargo Information Table */}
              <div className="cargo-meta-table">
                <div className="cargo-meta-row">
                  <span className="meta-label">Consignment Cargo:</span>
                  <span className="meta-value">{currentTracking.cargoDescription}</span>
                </div>
                <div className="cargo-meta-row">
                  <span className="meta-label">Gross Cargo Weight:</span>
                  <span className="meta-value">{currentTracking.weight}</span>
                </div>
                <div className="cargo-meta-row">
                  <span className="meta-label">Total Highway Distance:</span>
                  <span className="meta-value">{currentTracking.totalDistanceKm} km</span>
                </div>
                <div className="cargo-meta-row">
                  <span className="meta-label">Goods-in-Transit Policy:</span>
                  <span className="meta-value" style={{ color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={16} /> Covered & Active
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Checkpoint Timeline */}
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                color: '#ffffff',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Clock size={18} color="var(--accent-orange)" />
                <span>TRANSIT CHECKPOINT LOGS</span>
              </div>

              <ul className="timeline-list">
                {currentTracking.timeline.map((step, idx) => (
                  <li 
                    key={idx} 
                    className={`timeline-step ${step.completed ? 'completed' : ''} ${step.current ? 'active' : ''}`}
                  >
                    <div className="step-marker"></div>
                    <div className="step-time">{step.time}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Electronic POD Slip Modal */}
      {showPodModal && (
        <div className="modal-backdrop" onClick={() => setShowPodModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Electronic Proof of Delivery (E-POD)</h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowPodModal(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{
                border: '2px dashed var(--border-dark)',
                padding: '1.5rem',
                background: '#ffffff',
                color: '#0f172a',
                borderRadius: '6px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0f172a', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <strong style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>VANGUARD LOGISTICS POD</strong>
                  <span style={{ fontFamily: 'monospace', color: '#f95700', fontWeight: 'bold' }}>{currentTracking.lrNumber}</span>
                </div>
                <div style={{ fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  <div><strong>Delivered to:</strong> {currentTracking.destination}</div>
                  <div><strong>Cargo:</strong> {currentTracking.cargoDescription} ({currentTracking.weight})</div>
                  <div><strong>Vehicle:</strong> {currentTracking.vehicleType}</div>
                  <div><strong>Delivered On:</strong> {currentTracking.podTime || 'Yesterday, 11:40 PM'}</div>
                  <div><strong>Received & Signed By:</strong> {currentTracking.podReceiverName || 'Store In-Charge'}</div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #cbd5e1', paddingTop: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Digital Verification Stamp • Fastag & GPS Verified</div>
                  <div style={{ textAlign: 'center', border: '1px solid #16a34a', padding: '0.25rem 0.75rem', color: '#16a34a', fontWeight: 'bold', fontSize: '0.8rem', borderRadius: '4px' }}>
                    ✔ GOODS RECEIVED IN GOOD ORDER
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1.25rem' }}
                onClick={() => {
                  alert('E-POD copy downloaded to device.');
                  setShowPodModal(false);
                }}
              >
                Download E-POD Slip (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
