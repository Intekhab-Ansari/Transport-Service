import React, { useState } from 'react';
import { 
  Truck, 
  Users, 
  CheckCircle2, 
  DollarSign, 
  ShieldCheck, 
  Phone, 
  MessageCircle,
  FileCheck,
  Send
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';
import confetti from 'canvas-confetti';

export default function CareersPage() {
  const [applicantType, setApplicantType] = useState('driver'); // 'driver' or 'owner'
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [drivingExperience, setDrivingExperience] = useState('3-5');
  const [cityBase, setCityBase] = useState('Pune / Pimpri-Chinchwad');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) {
      alert('Please fill in your name and phone number');
      return;
    }
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60 });
  };

  return (
    <div className="section-py">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-tag">FLEET ATTACHMENT & CAREERS</span>
          <h1 className="section-title">JOIN OUR FLEET AS A DRIVER OR VEHICLE PARTNER</h1>
          <p className="section-subtitle">
            We offer guaranteed monthly payouts, timely fuel advances, route bonuses, and full medical accident insurance. Drive with respect and job security.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3.5rem'
        }}>
          <div className="industrial-card" style={{ padding: '1.25rem' }}>
            <div style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Timely Monthly Payouts</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Direct bank transfer on the 1st of every month without deduction delays.
            </p>
          </div>

          <div className="industrial-card" style={{ padding: '1.25rem' }}>
            <div style={{ color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Instant Fuel Advances</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Fastag & diesel cards provided upfront for all long-distance trips.
            </p>
          </div>

          <div className="industrial-card" style={{ padding: '1.25rem' }}>
            <div style={{ color: 'var(--accent-green)', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Medical & Life Cover</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              ₹5 Lakhs accident policy and hospital cover for driver & family.
            </p>
          </div>

          <div className="industrial-card" style={{ padding: '1.25rem' }}>
            <div style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Regular Return Loads</strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Zero empty running on major return corridors from Mumbai, Nashik, Kolhapur.
            </p>
          </div>
        </div>

        {/* Application Form Box */}
        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--border-dark)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={64} color="var(--accent-green)" style={{ margin: '0 auto 1rem' }} />
              <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>Application Submitted!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Thank you, <strong>{fullName}</strong>. Our Fleet Recruitment Manager will call you at <strong>{phoneNumber}</strong> within 24 hours to schedule document verification at our Nigdi/Bhosari Yard.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-dark)',
                paddingBottom: '1rem'
              }}>
                <button
                  type="button"
                  className={`btn ${applicantType === 'driver' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setApplicantType('driver')}
                  style={{ flex: 1 }}
                >
                  <Users size={18} />
                  <span>Apply as Full-Time Driver</span>
                </button>
                <button
                  type="button"
                  className={`btn ${applicantType === 'owner' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setApplicantType('owner')}
                  style={{ flex: 1 }}
                >
                  <Truck size={18} />
                  <span>Attach Your Vehicle / Fleet</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Ramesh Babar"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="e.g. 9876543210"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">
                    {applicantType === 'driver' ? 'Commercial License Category' : 'Vehicle Model & Year'}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={applicantType === 'driver' ? 'e.g. LMV / Transport HMV Badge' : 'e.g. 2022 Tata Ace / Eicher 19ft'}
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Driving / Transport Experience</label>
                  <select
                    className="form-control"
                    value={drivingExperience}
                    onChange={(e) => setDrivingExperience(e.target.value)}
                  >
                    <option value="1-2">1 to 2 Years</option>
                    <option value="3-5">3 to 5 Years (Preferred)</option>
                    <option value="5+">5+ Years (Senior Highway Driver)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Current City / Preferred Base Yard</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Pune, Navi Mumbai, Nashik, Kolhapur"
                  value={cityBase}
                  onChange={(e) => setCityBase(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                <Send size={18} />
                <span>Submit Recruitment Application</span>
              </button>

              <div style={{
                textAlign: 'center',
                marginTop: '1.25rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                Or walk in directly at our Nigdi Yard between 10:00 AM - 5:00 PM with your Driving License, Aadhaar, and Police Verification.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
