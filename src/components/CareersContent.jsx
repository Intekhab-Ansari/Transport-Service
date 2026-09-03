'use client';

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

export default function CareersContent() {
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2.5rem',
      marginTop: '2.5rem'
    }}>
      {/* Left: Driver Benefits */}
      <div>
        <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.25rem' }}>
          WHY DRIVE WITH VANGUARD ROADWAYS?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            background: 'var(--bg-steel)',
            border: '1px solid var(--border-dark)',
            borderRadius: '8px',
            padding: '1.25rem',
            display: 'flex',
            gap: '1rem'
          }}>
            <DollarSign size={24} color="var(--accent-green)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                Guaranteed Payouts on Time
              </strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Direct bank transfers on the 1st of every month. Vehicle attachment partners receive weekly settlements with zero commission deductions.
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-steel)',
            border: '1px solid var(--border-dark)',
            borderRadius: '8px',
            padding: '1.25rem',
            display: 'flex',
            gap: '1rem'
          }}>
            <ShieldCheck size={24} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                Accident & Medical Insurance
              </strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Comprehensive ₹5,00,000 personal accident coverage provided for all full-time Vanguard drivers and their families.
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-steel)',
            border: '1px solid var(--border-dark)',
            borderRadius: '8px',
            padding: '1.25rem',
            display: 'flex',
            gap: '1rem'
          }}>
            <Truck size={24} color="var(--accent-yellow)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                Continuous Business & Return Trips
              </strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Avoid empty return runs. Our dispatch network in Mumbai, Pune, and Gujarat secures backhaul loads to maximize daily earnings.
              </p>
            </div>
          </div>
        </div>

        {/* Direct HR Helpline */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem',
          backgroundColor: 'rgba(249, 87, 0, 0.1)',
          border: '1px solid rgba(249, 87, 0, 0.25)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: 'bold', marginBottom: '0.35rem' }}>
            <Phone size={18} />
            <span>Driver Recruitment Hotline</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#ffffff', marginBottom: '0.75rem' }}>
            Speak directly to our Yard Manager regarding salary structure or attachment terms:
          </p>
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
            className="btn btn-primary btn-sm"
          >
            Call {BUSINESS_CONFIG.phonePrimary}
          </a>
        </div>
      </div>

      {/* Right: Application Form */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dark)',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <CheckCircle2 size={54} color="var(--accent-green)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Application Submitted!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Thank you {fullName}. Our fleet recruitment officer will call you within 24 hours to schedule document verification at our yard.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                I AM APPLYING AS:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setApplicantType('driver')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: applicantType === 'driver' ? '2px solid var(--accent-orange)' : '1px solid var(--border-dark)',
                    backgroundColor: applicantType === 'driver' ? 'rgba(249, 87, 0, 0.15)' : 'var(--bg-steel)',
                    color: applicantType === 'driver' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Commercial Driver
                </button>
                <button
                  type="button"
                  onClick={() => setApplicantType('owner')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: applicantType === 'owner' ? '2px solid var(--accent-orange)' : '1px solid var(--border-dark)',
                    backgroundColor: applicantType === 'owner' ? 'rgba(249, 87, 0, 0.15)' : 'var(--bg-steel)',
                    color: applicantType === 'owner' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Attach Vehicle / Owner
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-steel)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  MOBILE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-steel)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              {applicantType === 'owner' ? (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    VEHICLE MODEL & YEAR *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tata Ace 2021 / Bolero Maxi 2022"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-steel)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    COMMERCIAL DRIVING EXPERIENCE
                  </label>
                  <select
                    value={drivingExperience}
                    onChange={(e) => setDrivingExperience(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-steel)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="1-2">1 - 2 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years (Heavy Commercial Badge)</option>
                  </select>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  PREFERRED HOME BASE / YARD
                </label>
                <select
                  value={cityBase}
                  onChange={(e) => setCityBase(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-steel)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '4px',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option value="Mumbai (Andheri / BKC)">Mumbai (Western & Eastern Suburbs)</option>
                  <option value="Navi Mumbai (Vashi APMC)">Navi Mumbai (Vashi APMC / Belapur)</option>
                  <option value="Thane / Bhiwandi">Thane / Bhiwandi Warehouses</option>
                  <option value="Pune / Pimpri-Chinchwad">Pune (Nigdi / Bhosari MIDC)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', width: '100%' }}
              >
                <Send size={16} />
                <span>Submit Details for Verification</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
