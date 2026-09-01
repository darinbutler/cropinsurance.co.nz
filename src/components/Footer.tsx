import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              Independent crop insurance information for NZ orchardists, viticulturists, arable farmers and horticulture producers.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-800">🌿 NZ Crop Specialists</span>
            </div>
          </div>

          {/* Crop Insurance */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Crop Insurance</h3>
            <ul className="space-y-1.5">
              {[
                ['Kiwifruit', '/crops/kiwifruit-insurance/'],
                ['Apples & Pears', '/crops/apple-pear-insurance/'],
                ['Grapes & Vineyards', '/crops/grape-vineyard-insurance/'],
                ['Stone Fruit', '/crops/stone-fruit-insurance/'],
                ['Avocado', '/crops/avocado-insurance/'],
                ['Hops', '/crops/hops-insurance/'],
                ['Wheat & Grain', '/crops/wheat-grain-insurance/'],
                ['Vegetables', '/crops/vegetable-crop-insurance/'],
                ['Berries', '/crops/berry-insurance/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Specialist crop insurance comparison for New Zealand growers. Connecting orchardists, viticulturists, arable farmers and horticulture producers with expert rural insurance advisers.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-800">🌿 NZ Crop Specialists</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">🤝 Free Advice</span>
            </div>
          </div>

          {/* Crops */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Crop Insurance</h3>
            <ul className="space-y-2">
              {[
                ['Kiwifruit Insurance', '/crops/kiwifruit-insurance/'],
                ['Apple & Pear Insurance', '/crops/apple-pear-insurance/'],
                ['Grape & Vineyard Insurance', '/crops/grape-vineyard-insurance/'],
                ['Stone Fruit Insurance', '/crops/stone-fruit-insurance/'],
                ['Avocado Insurance', '/crops/avocado-insurance/'],
                ['Hops Insurance', '/crops/hops-insurance/'],
                ['Wheat & Grain Insurance', '/crops/wheat-grain-insurance/'],
                ['Vegetable Crop Insurance', '/crops/vegetable-crop-insurance/'],
                ['Berry Crop Insurance', '/crops/berry-insurance/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
>>>>>>> a690908 (Initial commit: full source for cropinsurance.co.nz)
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Growers & Tools */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Growers</h3>
            <ul className="space-y-1.5">
              {[
                ['Orchardists', '/growers/orchardists/'],
                ['Viticulture Growers', '/growers/viticulture-growers/'],
                ['Arable Farmers', '/growers/arable-farmers/'],
                ['Hop Growers', '/growers/hop-growers/'],
                ['Vegetable Growers', '/growers/vegetable-growers/'],
                ['Contract Growers', '/growers/contract-growers/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 mt-5">Compare & Guides</h3>
            <ul className="space-y-1.5">
              {[
                ['Compare Providers', '/compare/'],
                ['Blog & Guides', '/blog/'],
                ['Making a Claim', '/claims/'],
                ['FAQs', '/faqs/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Grower Bodies */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">NZ Grower Bodies</h3>
            <ul className="space-y-1.5">
              {[
                ['NZ Apple & Pears', 'https://www.applesandpears.nz/'],
                ['NZ Winegrowers', 'https://www.nzwine.com/'],
                ['Horticulture NZ', 'https://www.hortnz.co.nz/'],
                ['Zespri (Kiwifruit)', 'https://www.zespri.com/'],
                ['Federated Farmers NZ', 'https://www.fedfarm.org.nz/'],
                ['Grains Industry NZ', 'https://www.grainsnz.co.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 mt-5">Industry &amp; Regulators</h3>
            <ul className="space-y-1.5">
              {[
                ['FSPR', 'https://www.companiesoffice.govt.nz/all-registers/financial-service-providers/'],
                ['FMA', 'https://www.fma.govt.nz/'],
                ['FSCL', 'https://www.fscl.org.nz/'],
                ['IFSO Scheme', 'https://www.ifso.nz/'],
              ].map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label} ↗</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-1.5">
              {[
                ['About Us', '/about/'],
                ['Contact Us', '/contact/'],
                ['Privacy Policy', '/privacy/'],
                ['Terms of Use', '/terms/'],
                ['Disclaimer', '/disclaimer/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-400 leading-relaxed">
                CropInsurance.co.nz may receive a referral fee from brokers when a user proceeds with a policy. This fee is paid by the broker — you pay no additional cost. Information is general in nature and does not constitute insurance advice. Read the PDS before deciding.
              </p>
=======
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Compare Providers', '/compare/'],
                ['Grower Types', '/growers/'],
                ['Blog & Guides', '/blog/'],
                ['About Us', '/about/'],
                ['Contact Us', '/contact/'],
                ['Making a Claim', '/claims/'],
                ['FAQs', '/faqs/'],
                ['Privacy Policy', '/privacy/'],
                ['Terms of Use', '/terms/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-6">Regions</h3>
            <ul className="space-y-2">
              {[
                ['Bay of Plenty', '/crop-insurance/bay-of-plenty/'],
                ["Hawke's Bay", '/crop-insurance/hawkes-bay/'],
                ['Marlborough', '/crop-insurance/marlborough/'],
                ['Canterbury', '/crop-insurance/canterbury/'],
                ['Central Otago', '/crop-insurance/central-otago/'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* How This Site Works */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">How This Site Works</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              CropInsurance.co.nz is committed to helping New Zealand growers find the right crop insurance through honest, transparent comparison. We may receive compensation from insurers, brokers or underwriters when we connect you with their services. This does not affect the independence of our advice or the information we provide.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The information on this website is general in nature and does not constitute financial or insurance advice. We recommend reading the relevant Product Disclosure Statement (PDS) before making any insurance decision. Our partner advisers are licensed under the Financial Markets Conduct Act 2013.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">© {currentYear} CropInsurance.co.nz is a trading style of Cover4You. All rights reserved.</p>
              <a href="https://www.fma.govt.nz/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs text-green-500 hover:text-green-400 transition-colors">FMA Regulated Brokers Network ↗</a>
>>>>>>> a690908 (Initial commit: full source for cropinsurance.co.nz)
            </div>
          </div>

        </div>
<<<<<<< HEAD
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">© {currentYear} CropInsurance.co.nz is a trading style of Cover4You. All rights reserved.</p>
        </div>
=======
>>>>>>> a690908 (Initial commit: full source for cropinsurance.co.nz)
      </div>
    </footer>
  );
}
