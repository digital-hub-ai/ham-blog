import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function EntrepreneurshipIndex() {
  // Complete list of entrepreneurship articles
  const entrepreneurshipArticles = [
    { id: &apos;startup-scaling-playbook&apos;, title: &apos;Startup Scaling Playbook: From Seed to Series C&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Essential strategies for growing a startup through funding rounds and market expansion.&apos; },
    { id: &apos;venture-capital-landscape-2025&apos;, title: &apos;Venture Capital Landscape 2025: Funding Trends and Investor Perspectives&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;How VC investing is evolving with new fund structures and emerging market opportunities.&apos; },
    { id: &apos;social-entrepreneurship-impact&apos;, title: &apos;Social Entrepreneurship: Creating Profitable Solutions for Global Challenges&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Building ventures that generate both financial returns and measurable social impact.&apos; },
    { id: &apos;side-hustle-to-business&apos;, title: &apos;From Side Hustle to Business: Systematic Approach to Launching Ventures&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Transforming passion projects into sustainable businesses with proven methodologies.&apos; },
    { id: &apos;startup-valuation-methods&apos;, title: &apos;Startup Valuation Methods: How Investors Price Early-Stage Companies&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;Understanding the various approaches to valuing startups at different growth stages.&apos; },
    { id: &apos;startup-exit-strategies-ma-tactics&apos;, title: &apos;Startup Exit Strategies and M&A Tactics: Maximizing Value&apos;, date: &apos;Dec 20, 2025&apos;, excerpt: &apos;Essential strategies for maximizing startup value through acquisitions, IPOs, and alternative exit paths.&apos; },
    { id: &apos;bootstrapping-vs-venture-capital-funding&apos;, title: &apos;Bootstrapping vs. Venture Capital Funding: Capital Strategy Showdown&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;Comparing self-funded growth with external investment to determine optimal capital strategies for startups.&apos; },
    { id: &apos;building-high-performance-startup-teams&apos;, title: &apos;Building High-Performance Startup Teams: Talent Strategies&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;Essential strategies for recruiting, developing, and retaining top talent in fast-growing startup environments.&apos; },
    { id: &apos;product-market-fit-strategies-validation&apos;, title: &apos;Product-Market Fit Strategies and Validation: Achieving Market Success&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;Proven methodologies for identifying, validating, and achieving sustainable product-market fit in competitive markets.&apos; },
    { id: &apos;digital-marketing-for-startups&apos;, title: &apos;Digital Marketing for Startups: Growth Strategies on a Budget&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;Cost-effective digital marketing strategies that drive startup growth without breaking the bank.&apos; },
    { id: &apos;financial-planning-forecasting-for-startups&apos;, title: &apos;Financial Planning and Forecasting for Startups: Cash Flow Mastery&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Essential financial planning strategies that keep startups solvent and positioned for growth.&apos; },
    { id: &apos;legal-considerations-for-growing-businesses&apos;, title: &apos;Legal Considerations for Growing Businesses: Compliance Foundations&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Essential legal frameworks and compliance strategies that protect growing businesses and enable scalable operations.&apos; },
    { id: &apos;international-expansion-strategies&apos;, title: &apos;International Expansion Strategies: Global Market Penetration&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Proven strategies for successfully expanding business operations into international markets while mitigating risks.&apos; },
    { id: &apos;crisis-management-for-startups&apos;, title: &apos;Crisis Management for Startups: Navigating Business Disruptions&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Essential crisis management strategies that help startups survive disruptions and emerge stronger from challenging situations.&apos; },
    { id: &apos;building-sustainable-competitive-advantages&apos;, title: &apos;Building Sustainable Competitive Advantages: Long-Term Market Dominance&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;Strategies for creating durable competitive advantages that withstand market changes and competitor challenges.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Entrepreneurship | Corporate Consciousness</title>
        <meta name="description&quot; content="Explore startup strategies, venture capital, and entrepreneurial journeys in the modern business landscape.&quot; />
        <meta name="keywords&quot; content="entrepreneurship, startups, venture capital, business creation&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/business&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Entrepreneurship
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore startup strategies, venture capital, and entrepreneurial journeys in the modern business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {entrepreneurshipArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors&quot;>
                    <Link href={`/blog/business/entrepreneurship/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/business/entrepreneurship/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/business&quot;
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300&quot;
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}