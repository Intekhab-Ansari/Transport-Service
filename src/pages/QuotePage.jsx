import React from 'react';
import { 
  Calculator, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';
import FareCalculator from '../components/FareCalculator';

export default function QuotePage({ selectedFleetId }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I need a customized freight/shifting quotation.`
  )}`;

  return (
    <div className="section-py">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">TRANSPARENT TARIFF ESTIMATOR</span>
          <h1 className="section-title">CALCULATE FARE & BOOK YOUR VEHICLE</h1>
          <p className="section-subtitle">
            Get an instant, itemized estimate with zero hidden surcharges. Choose your vehicle, customize labor helpers, and book directly via WhatsApp or instant callback.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <FareCalculator defaultVehicleId={selectedFleetId || 'bolero-pickup'} />

          {/* Booking Terms Strip */}
          <div style={{
            marginTop: '2.5rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                <Clock size={18} />
                <span>Loading Time</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Includes 45 minutes free loading time for tempos and 90 minutes for full-size trucks.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-green)', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                <ShieldCheck size={18} />
                <span>Transit Security</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Waterproof tarpaulin and cargo lashing straps provided on all open deck vehicles.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-yellow)', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                <Phone size={18} />
                <span>Driver Contact</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Driver name, mobile number, and vehicle registration number shared via SMS/WhatsApp upon confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
