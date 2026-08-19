import React from 'react';
import { 
  Navigation, 
  Search, 
  Truck, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Phone,
  HelpCircle
} from 'lucide-react';
import TrackingWidget from '../components/TrackingWidget';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function TrackingPage() {
  return (
    <div className="section-py">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">LIVE FLEET GPS INTELLIGENCE</span>
          <h1 className="section-title">TRACK YOUR CONSIGNMENT & VEHICLE</h1>
          <p className="section-subtitle">
            Enter your Lorry Receipt (LR) or Booking Reference number below to get live highway telemetry, current checkpoint updates, driver direct contact, and electronic delivery slips.
          </p>
        </div>

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <TrackingWidget initialDocket="VG-84920" />

          {/* Tracking Help Box */}
          <div style={{
            marginTop: '2.5rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                backgroundColor: 'var(--bg-steel)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-yellow)'
              }}>
                <HelpCircle size={22} />
              </div>
              <div>
                <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Need assistance with your LR number?</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Our 24/7 Dispatch Desk is available to help you locate any active vehicle.
                </div>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
              className="btn btn-primary btn-sm"
            >
              <Phone size={16} />
              <span>Call Control Room</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
