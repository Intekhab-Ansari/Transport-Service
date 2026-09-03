import CareersContent from '../../components/CareersContent';

export const metadata = {
  title: 'Driver Jobs & Vehicle Fleet Attachment | Vanguard Roadways',
  description:
    'Join Vanguard Roadways as a commercial vehicle driver or attach your Tata Ace, Bolero, or truck to our fleet. Timely weekly/monthly payouts, fuel advances, and accident insurance.',
  alternates: {
    canonical: 'https://transport-service-six.vercel.app/careers',
  },
  openGraph: {
    title: 'Commercial Driver Jobs & Fleet Attachment | Vanguard Roadways',
    description:
      'Guaranteed monthly settlements, fuel advances, and medical insurance for commercial vehicle drivers and owners.',
    url: 'https://transport-service-six.vercel.app/careers',
  },
};

export default function CareersPage() {
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
        name: 'Careers & Attachment',
        item: 'https://transport-service-six.vercel.app/careers',
      },
    ],
  };

  return (
    <div className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-tag">FLEET ATTACHMENT & CAREERS</span>
          <h1 className="section-title">JOIN OUR FLEET AS A DRIVER OR VEHICLE PARTNER</h1>
          <p className="section-subtitle">
            We offer guaranteed monthly payouts, timely fuel advances, route bonuses, and full medical accident insurance. Drive with respect and job security.
          </p>
        </div>

        <CareersContent />
      </div>
    </div>
  );
}
