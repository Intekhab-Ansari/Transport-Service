import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function StickyActions() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.brandName}, I need an urgent tempo/truck booking. Please share the details.`
  )}`;

  return (
    <>
      {/* Mobile-first bottom bar */}
      <div className="sticky-mobile-bar" aria-label="Quick contact actions">
        <div className="sticky-actions-grid">
          <a
            href={`tel:${BUSINESS_CONFIG.phonePrimary.replace(/\s+/g, '')}`}
            className="sticky-btn sticky-btn-call"
          >
            <Phone size={18} />
            <span>Call Dispatch</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-btn sticky-btn-wa"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Floating Desktop WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat with Dispatch on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>WhatsApp Quote</span>
      </a>
    </>
  );
}
