'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/transportData';

export default function FaqAccordion() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  return (
    <div className="faq-list">
      {BUSINESS_CONFIG.faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
            aria-expanded={openFaqIdx === idx}
          >
            <span>{faq.q}</span>
            <ChevronRight 
              size={18} 
              color="var(--accent-orange)"
              style={{
                transform: openFaqIdx === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            />
          </button>

          {openFaqIdx === idx && (
            <div className="faq-answer">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
