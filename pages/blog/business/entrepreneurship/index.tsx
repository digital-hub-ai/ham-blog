import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EntrepreneurshipIndex() {
  // Complete list of entrepreneurship articles
  const entrepreneurshipArticles = [
    { id: 'startup-scaling-playbook', title: 'Startup Scaling Playbook: From Seed to Series C', date: 'Dec 15, 2025', excerpt: 'Essential strategies for growing a startup through funding rounds and market expansion.' },
    { id: 'venture-capital-landscape-2025', title: 'Venture Capital Landscape 2025: Funding Trends and Investor Perspectives', date: 'Dec 10, 2025', excerpt: 'How VC investing is evolving with new fund structures and emerging market opportunities.' },
    { id: 'social-entrepreneurship-impact', title: 'Social Entrepreneurship: Creating Profitable Solutions for Global Challenges', date: 'Dec 5, 2025', excerpt: 'Building ventures that generate both financial returns and measurable social impact.' },
    { id: 'side-hustle-to-business', title: 'From Side Hustle to Business: Systematic Approach to Launching Ventures', date: 'Nov 30, 2025', excerpt: 'Transforming passion projects into sustainable businesses with proven methodologies.' },
    { id: 'startup-valuation-methods', title: 'Startup Valuation Methods: How Investors Price Early-Stage Companies', date: 'Nov 25, 2025', excerpt: 'Understanding the various approaches to valuing startups at different growth stages.' },
    { id: 'startup-exit-strategies-ma-tactics', title: 'Startup Exit Strategies and M&A Tactics: Maximizing Value', date: 'Dec 20, 2025', excerpt: 'Essential strategies for maximizing startup value through acquisitions, IPOs, and alternative exit paths.' },
    { id: 'bootstrapping-vs-venture-capital-funding', title: 'Bootstrapping vs. Venture Capital Funding: Capital Strategy Showdown', date: 'Dec 18, 2025', excerpt: 'Comparing self-funded growth with external investment to determine optimal capital strategies for startups.' },
    { id: 'building-high-performance-startup-teams', title: 'Building High-Performance Startup Teams: Talent Strategies', date: 'Dec 16, 2025', excerpt: 'Essential strategies for recruiting, developing, and retaining top talent in fast-growing startup environments.' },
    { id: 'product-market-fit-strategies-validation', title: 'Product-Market Fit Strategies and Validation: Achieving Market Success', date: 'Dec 14, 2025', excerpt: 'Proven methodologies for identifying, validating, and achieving sustainable product-market fit in competitive markets.' },
    { id: 'digital-marketing-for-startups', title: 'Digital Marketing for Startups: Growth Strategies on a Budget', date: 'Dec 12, 2025', excerpt: 'Cost-effective digital marketing strategies that drive startup growth without breaking the bank.' },
    { id: 'financial-planning-forecasting-for-startups', title: 'Financial Planning and Forecasting for Startups: Cash Flow Mastery', date: 'Dec 10, 2025', excerpt: 'Essential financial planning strategies that keep startups solvent and positioned for growth.' },
    { id: 'legal-considerations-for-growing-businesses', title: 'Legal Considerations for Growing Businesses: Compliance Foundations', date: 'Dec 8, 2025', excerpt: 'Essential legal frameworks and compliance strategies that protect growing businesses and enable scalable operations.' },
    { id: 'international-expansion-strategies', title: 'International Expansion Strategies: Global Market Penetration', date: 'Dec 6, 2025', excerpt: 'Proven strategies for successfully expanding business operations into international markets while mitigating risks.' },
    { id: 'crisis-management-for-startups', title: 'Crisis Management for Startups: Navigating Business Disruptions', date: 'Dec 4, 2025', excerpt: 'Essential crisis management strategies that help startups survive disruptions and emerge stronger from challenging situations.' },
    { id: 'building-sustainable-competitive-advantages', title: 'Building Sustainable Competitive Advantages: Long-Term Market Dominance', date: 'Dec 2, 2025', excerpt: 'Strategies for creating durable competitive advantages that withstand market changes and competitor challenges.' }
  ];

  return (
    <>
      <Head>
        <title>Entrepreneurship | Corporate Consciousness</title>
        <meta name="description" content="Explore startup strategies, venture capital, and entrepreneurial journeys in the modern business landscape." />
        <meta name="keywords" content="entrepreneurship, startups, venture capital, business creation" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Entrepreneurship
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore startup strategies, venture capital, and entrepreneurial journeys in the modern business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrepreneurshipArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/entrepreneurship/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/entrepreneurship/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/business"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}