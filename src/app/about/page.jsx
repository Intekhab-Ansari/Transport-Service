import React from 'react';
import Link from 'next/link';
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
  MapPin,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/transportData';

export const metadata = {
  title: 'About Us | 18+ Years Direct Fleet Logistics | Vanguard Roadways',
  description:
    'Learn about Vanguard Roadways: Est. 2008 in Pune & Mumbai. 65+ company-owned commercial vehicles, full-time verified drivers, dedicated maintenance yards, and corporate GST compliance.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | Vanguard Roadways & Logistics',
    description:
      'From a single Tata Ace in 2008 to an asset-heavy 65+ commercial vehicle fleet across Western India.',
    url: 'https://transport-service-six.vercel.app/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://transport-service-six.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Vanguard Roadways',
        item: 'https://transport-service-six.vercel.app/about',
      },
    ],
  };

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Vanguard Roadways & Tempo Logistics',
    description: '18 years of asset-owned commercial road freight across Mumbai, Pune, and Pan-India corridors.',
    publisher: {
      '@type': 'Organization',
      name: 'Vanguard Roadways & Tempo Logistics',
      url: 'https://transport-service-six.vercel.app',
    },
  };

  return (
    <div className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>Our Founding Journey</span>
            <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1rem' }}>
              FROM A SINGLE TATA ACE IN 2008 TO A 65+ COMMERCIAL FLEET
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              In 2008, we started with a single second-hand Tata Ace, personally driving goods from Pune's timber market to local industrial fabrication units. Over the last 18 years, while tech companies built booking apps that act as brokers, we chose to invest in what actually moves cargo: <strong>our own vehicles, our own mechanics, and our own loyal drivers</strong>.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Today, Vanguard Roadways operates over 65 commercial vehicles ranging from nimble 750kg mini-trucks for narrow city lanes to heavy 32ft multi-axle highway haulers. We serve over 12,000 satisfied corporate and retail customers annually across Maharashtra and major interstate corridors.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/fleet" className="btn btn-primary btn-sm">
                <span>View Our Fleet</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/quote" className="btn btn-outline btn-sm">
                Get Instant Tariff
              </Link>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-steel)',
            border: '1px solid var(--border-dark)',
            borderRadius: '12px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-yellow)', marginBottom: '1.5rem' }}>
              OUR FOUR OPERATING PILLARS
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <ShieldCheck size={22} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.2rem' }}>100% Asset Accountability</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We do not auction your consignment to unknown third-party drivers. The vehicle dispatched is company inspected.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Users size={22} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.2rem' }}>Permanent Vetted Drivers</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Our drivers undergo police background verification, drug/alcohol screenings, and customer handling training.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Wrench size={22} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.2rem' }}>In-House Maintenance Yards</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Our dedicated workshops in Nigdi, Bhosari, and Vashi keep downtime below 1.2% through weekly preventive maintenance.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <Award size={22} color="var(--accent-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.2rem' }}>Transparent Honest Tariffs</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No rainy day surcharges, no hidden toll markups. What our calculator estimates is what you pay.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Yard Credentials Strip */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-dark)',
          borderRadius: '8px',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-orange)', fontFamily: 'var(--font-heading)' }}>
              18+
            </div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 'bold' }}>Years of Operation</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Serving industry since 2008</div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-yellow)', fontFamily: 'var(--font-heading)' }}>
              65+
            </div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 'bold' }}>Company Owned Vehicles</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tempos to 32ft Containers</div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-green)', fontFamily: 'var(--font-heading)' }}>
              48,000+
            </div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 'bold' }}>Consignments Completed</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>99.2% on-time delivery record</div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-orange)', fontFamily: 'var(--font-heading)' }}>
              100%
            </div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 'bold' }}>GST & E-Way Compliant</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Valid institutional invoicing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
