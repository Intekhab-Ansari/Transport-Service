import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Truck, 
  Users, 
  Wrench, 
  HeartHandshake,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="section-py">
      <div className="container">
        {/* Page Header */}
        <div className="section-header text-center">
          <span className="section-tag">18 YEARS OF ON-ROAD EXCELLENCE</span>
          <h1 className="section-title">ABOUT VANGUARD ROADWAYS & LOGISTICS</h1>
          <p className="section-subtitle">
            Built by transport operators with grease on our hands and diesel in our veins. We believe honest pricing and direct fleet control are the only ways to run a true logistics company.
          </p>
        </div>

        {/* Story Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>Our Founding Journey</span>
            <h2 style={{ fontSize: '2.25rem', color: '#ffffff', marginBottom: '1rem' }}>
              FROM A SINGLE TATA ACE IN 2008 TO A 65+ COMMERCIAL FLEET
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              In 2008, we started with a single second-hand Tata Ace, personally driving goods from Pune's timber market to local industrial fabrication units. Over the last 18 years, while tech companies built booking apps that act as brokers, we chose to invest in what actually moves cargo: <strong>our own vehicles, our own mechanics, and our own loyal drivers</strong>.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Today, Vanguard Roadways operates 65+ owned vehicles ranging from Tata Ace tempos to 32ft heavy container rigs, serving over 42,000 satisfied retail clients, manufacturing corporations, and relocated families across Maharashtra, Gujarat, Karnataka, and Telangana.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-orange)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#ffffff' }}>42,800+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Safe Trips Completed</div>
              </div>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-yellow)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#ffffff' }}>Zero Loss</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>100% Insured Delivery Record</div>
              </div>
            </div>
          </div>

          {/* Right Yard & Fleet Visual Box */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '2px solid var(--border-dark)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{
              background: '#0b0f16',
              padding: '2rem 1.5rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px dashed var(--border-dark)',
              marginBottom: '1.5rem'
            }}>
              <Truck size={64} color="var(--accent-orange)" style={{ margin: '0 auto 0.75rem' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#ffffff' }}>
                VANGUARD FLEET TERMINAL YARD #7
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-yellow)', marginTop: '0.25rem' }}>
                Transport Nagar, Pune (40,000 sq.ft Yard & Workshop)
              </div>
              <div style={{ marginTop: '1rem' }}>
                <span className="replace-tag">[REPLACE: Real photo of Vanguard fleet yard, repair bay, & team]</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" />
                <span>In-house 6-bay mechanical maintenance garage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" />
                <span>24/7 Fuel station & automated tyre pressure check</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-cream)' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" />
                <span>Driver rest lounge and safety briefing room</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="section-header text-center" style={{ marginTop: '4rem' }}>
          <span className="section-tag">OUR OPERATIONAL STANDARDS</span>
          <h2 className="section-title">THE FOUR PILLARS OF OUR SERVICE</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div className="industrial-card">
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Driver Verification</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              100% of our drivers undergo police background verification, valid commercial badge checks, and strict zero-alcohol breath tests before every highway trip.
            </p>
          </div>

          <div className="industrial-card">
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', marginBottom: '1rem' }}>
              <Wrench size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Preventative Fleet Care</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              We never run bald tyres or skipped oil intervals. Every vehicle undergoes a 42-point mechanical check every 5,000 km to guarantee zero en-route breakdowns.
            </p>
          </div>

          <div className="industrial-card">
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', marginBottom: '1rem' }}>
              <HeartHandshake size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Fair Driver Pay</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Unlike gig apps that squeeze drivers, our crew receives fair monthly salaries, trip bonuses, and medical insurance, resulting in happy, polite, and dedicated service.
            </p>
          </div>

          <div className="industrial-card">
            <div style={{ width: '44px', height: '44px', backgroundColor: 'var(--bg-steel)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)', marginBottom: '1rem' }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>GST & Legal Compliance</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              100% compliance with digital E-Way bills, Lorry Receipts (LR), state transit permits, and verified Fastag toll billing for seamless corporate accounting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
