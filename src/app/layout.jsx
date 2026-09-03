import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyActions from '../components/StickyActions';
import { BUSINESS_CONFIG } from '../data/transportData';

// Global Stylesheets
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/calculator.css';
import '../styles/fleet.css';
import '../styles/tracking.css';
import '../styles/pages.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://transport-service-six.vercel.app'),
  title: {
    default: 'Vanguard Roadways & Tempo Logistics | Mumbai & All India Truck Transport',
    template: '%s | Vanguard Roadways & Logistics',
  },
  description:
    'Top-rated goods transport and tempo hire in Mumbai, Navi Mumbai, Thane & All-India. Book Tata Ace, Bolero Pickup, 14ft to 32ft container trucks. Local house shifting, Bhiwandi warehouse logistics, JNPT port freight & intercity FTL with GPS live tracking.',
  keywords: [
    'tempo service in Mumbai',
    'Tata Ace on rent Mumbai',
    'truck transport Mumbai',
    'packers and movers Mumbai',
    'mini truck hire Navi Mumbai',
    'tempo hire Thane',
    'Bhiwandi warehouse transport',
    'JNPT container transport',
    'Mumbai to Pune truck transport',
    'tempo service Andheri',
    'goods transport India',
    'All India FTL freight',
    'house shifting Mumbai',
  ],
  authors: [{ name: 'Vanguard Roadways & Transport Co.' }],
  creator: 'Vanguard Roadways & Transport Co.',
  publisher: 'Vanguard Roadways & Transport Co.',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://transport-service-six.vercel.app/',
    siteName: 'Vanguard Roadways & Tempo Logistics Mumbai',
    title: 'Vanguard Logistics | Direct Tempo & Truck Transport in Mumbai & Pan-India',
    description:
      'Direct fleet tempo & truck transport across Mumbai (Andheri, BKC, Vashi, Thane, Bhiwandi) & Pan-India. Tata Ace, Bolero & 32ft FTL with instant fares & live GPS.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Vanguard Roadways Commercial Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard Logistics | Mumbai & All India Goods Transport',
    description:
      'Direct fleet tempo & truck transport across Mumbai, Navi Mumbai, Thane, Pune & Pan-India routes.',
    images: ['/favicon.svg'],
  },
  verification: {
    google: 'V8f0J8ZCCksA3QqysLVFYCU6PckCFFdtCt34JiR86vs',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai, Navi Mumbai, Thane, Maharashtra, India',
    'geo.position': '19.0760;72.8777',
    ICBM: '19.0760, 72.8777',
    target_country: 'in',
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://transport-service-six.vercel.app/#organization',
    name: 'Vanguard Roadways & Tempo Logistics',
    alternateName: 'Vanguard Goods Transport Mumbai',
    url: 'https://transport-service-six.vercel.app',
    logo: 'https://transport-service-six.vercel.app/favicon.svg',
    image: 'https://transport-service-six.vercel.app/favicon.svg',
    telephone: '+91-98765-43210',
    email: 'dispatch@vanguardlogistics.in',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, NEFT, RTGS, Credit Card, Corporate Invoicing',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gala 14, APMC Truck Terminal, Sector 19, Vashi',
      addressLocality: 'Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400705',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.076,
      longitude: 72.8777,
    },
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Navi Mumbai' },
      { '@type': 'City', name: 'Thane' },
      { '@type': 'City', name: 'Bhiwandi' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'Country', name: 'India' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="en" className={`${oswald.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <div className="app-layout">
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyActions />
        </div>
      </body>
    </html>
  );
}
