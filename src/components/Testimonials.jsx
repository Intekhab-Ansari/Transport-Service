import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function Testimonials() {
  return (
    <div className="testimonials-grid">
      {BUSINESS_CONFIG.testimonials.map((item) => (
        <div key={item.id} className="testimonial-card">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
                ))}
              </div>
              <span className="badge badge-yellow" style={{ fontSize: '0.7rem' }}>
                {item.serviceUsed}
              </span>
            </div>

            <p className="testimonial-quote">
              "{item.text}"
            </p>
          </div>

          <div className="testimonial-author">
            <div className="author-name">
              <span>{item.name}</span>
              {item.verified && (
                <ShieldCheck size={16} color="var(--accent-green)" title="Verified Customer" />
              )}
            </div>
            <div className="author-role">{item.role}</div>
            <div className="author-city">{item.city}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
