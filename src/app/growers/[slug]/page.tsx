import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { growerTypes } from '@/data/grower-types';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return growerTypes.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const grower = growerTypes.find(g => g.slug === slug);
  if (!grower) return {};
  return {
    title: `${grower.shortName} Crop Insurance NZ | CropInsurance.co.nz`,
    description: grower.description,
    alternates: { canonical: `https://www.cropinsurance.co.nz/growers/${grower.slug}/` },
    openGraph: {
      title: `${grower.shortName} Crop Insurance NZ | CropInsurance.co.nz`,
      description: grower.description,
      url: `https://www.cropinsurance.co.nz/growers/${grower.slug}/`,
      siteName: 'CropInsurance.co.nz',
      images: [{ url: grower.heroImage, width: 1200, height: 630, alt: `${grower.name} Crop Insurance NZ` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${grower.shortName} Crop Insurance NZ | CropInsurance.co.nz`,
      description: grower.description,
      images: [grower.heroImage],
    },
  };
}

export default async function GrowerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const grower = growerTypes.find(g => g.slug === slug);
  if (!grower) notFound();
  const others = growerTypes.filter(g => g.slug !== slug);

  const faqSchema = grower.faqs && grower.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: grower.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cropinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Grower Types', item: 'https://www.cropinsurance.co.nz/growers/' },
      { '@type': 'ListItem', position: 3, name: grower.name, item: `https://www.cropinsurance.co.nz/growers/${grower.slug}/` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${grower.name} Crop Insurance`,
    description: grower.longDescription,
    provider: {
      '@type': 'Organization',
      name: 'CropInsurance.co.nz',
      url: 'https://www.cropinsurance.co.nz',
    },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    serviceType: 'Crop Insurance Broker Referral',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NZD',
      description: 'Free broker referral — no obligation quote',
    },
  };

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="relative min-h-[360px] flex items-end pb-12" style={{ backgroundImage: `url(${grower.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 text-xs text-green-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/growers/" className="hover:text-white">Grower Types</Link><span>/</span>
            <span className="text-white">{grower.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{grower.icon}</span>
            <h1 className="text-4xl font-extrabold text-white">{grower.name}</h1>
          </div>
          <p className="text-green-100 text-lg max-w-2xl">{grower.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance for {grower.name}</h2>
                <p className="text-gray-700 leading-relaxed">{grower.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">🌾 Typical Crops</h3>
                  <ul className="space-y-1">
                    {grower.typicalCrops.map(c => (
                      <li key={c} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">🛡️ Key Insurance Needs</h3>
                  <ul className="space-y-1">
                    {grower.keyInsuranceNeeds.map(n => (
                      <li key={n} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />{n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">✅ Coverage Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {grower.coverageHighlights.map(c => (
                    <div key={c} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long-Form Authoritative Content */}
              {grower.longFormContent && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">CI</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">CropInsurance.co.nz Editorial Team</div>
                      <div className="text-xs text-gray-500">NZ Crop Insurance Specialists · Updated 2026</div>
                    </div>
                  </div>
                  <div
                    className="prose prose-green max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-ul:space-y-1 prose-li:text-gray-600 prose-strong:text-gray-800"
                    dangerouslySetInnerHTML={{ __html: grower.longFormContent }}
                  />
                </div>
              )}

              {/* FAQs */}
              {grower.faqs && grower.faqs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {grower.faqs.map((faq, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gray-50 hover:bg-green-50 transition-colors list-none">
                          <h3 className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</h3>
                          <svg className="w-4 h-4 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 py-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="sticky top-24">
                <QuoteForm variant="sidebar" />
                <div className="mt-5 bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Grower Types</h3>
                  <ul className="space-y-2">
                    {others.map(o => (
                      <li key={o.slug}>
                        <Link href={`/growers/${o.slug}/`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
                          <span>{o.icon}</span>{o.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
