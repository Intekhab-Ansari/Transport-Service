import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Truck,
  Building,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('tempo-hire');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      alert('Please enter your name and phone number');
      return;
    }
    setIsSent(true);
    confetti({ particleCount: 75, spread: 60 });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I am reaching out from your website contact page.`
  )}`;

  return (
    <div className="section-py">
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
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Phone Hotlines</h3>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.25rem' }}>
              <a href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`} style={{ color: 'var(--accent-yellow)' }}>
                {BUSINESS_CONFIG.phonePrimary}
              </a>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-cream)', marginBottom: '0.75rem' }}>
              Secondary: {BUSINESS_CONFIG.phoneSecondary}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {BUSINESS_CONFIG.operatingHours}
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="industrial-card" style={{ borderTop: '3px solid #25D366' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', marginBottom: '1rem' }}>
              <MessageCircle size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>WhatsApp Direct</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Send cargo photos, pickup/drop live location pins, or get an immediate price quote.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ width: '100%' }}
            >
              Start WhatsApp Chat
            </a>
          </div>

          {/* Card 3: Head Office & Yard */}
          <div className="industrial-card" style={{ borderTop: '3px solid var(--accent-yellow)' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', marginBottom: '1rem' }}>
              <MapPin size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Yard & Office</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-cream)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
              {BUSINESS_CONFIG.headOfficeAddress}
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-orange)' }}>
              Parking Yard: {BUSINESS_CONFIG.parkingYardAddress}
            </div>
          </div>

          {/* Card 4: Email & Corporate Billing */}
          <div className="industrial-card" style={{ borderTop: '3px solid var(--text-cream)' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-cream)', marginBottom: '1rem' }}>
              <Mail size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Email & GST Invoicing</h3>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              <a href={`mailto:${BUSINESS_CONFIG.emailBooking}`} style={{ color: 'var(--accent-yellow)' }}>
                {BUSINESS_CONFIG.emailBooking}
              </a>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Support: {BUSINESS_CONFIG.emailSupport}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              GST & Monthly Vendor Vendor Registration
            </div>
          </div>
        </div>

        {/* 2-Column Section: Inquiry Form + Branch Offices */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left: Contact Form */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              SEND A DISPATCH INQUIRY
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill this quick form and our Duty Officer will call you back within 15 minutes.
            </p>

            {isSent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={60} color="var(--accent-green)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Message Dispatched to Yard Desk!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formName}</strong>. Our dispatch officer has received your inquiry and will call you on <strong>{formPhone}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsSent(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Anand Kulkarni"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 9876543210"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Category</label>
                  <select
                    className="form-control"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                  >
                    <option value="tempo-hire">Local Tempo Hire (Tata Ace / Bolero)</option>
                    <option value="shifting">House / Office Shifting with Labor</option>
                    <option value="intercity">Intercity Full Truckload (14ft - 32ft)</option>
                    <option value="corporate">Monthly B2B Corporate Contract</option>
                    <option value="general">Other Question / General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Trip Details (Optional)</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Tell us about your cargo, pickup location, drop location, or date..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Regional Branch Offices & Map Simulation */}
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

            {/* Map Location Box */}
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
                fontSize: '0.8rem'
              }}>
                <MapPin size={32} color="var(--accent-orange)" />
                <span>[REPLACE: Embedded Google Map iframe or coordinates]</span>
                <span style={{ color: 'var(--accent-yellow)' }}>Coordinates: 18.6502° N, 73.7801° E (Nigdi Yard)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
