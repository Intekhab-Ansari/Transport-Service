'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
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

  return (
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
  );
}
