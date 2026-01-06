import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function StrategyIndex() {
  // Complete list of strategy articles
  const strategyArticles = [
    { id: &apos;ai-disruption-index-2025&apos;, title: &apos;AI Disruption Index 2025: Which Industries Will Transform Next?&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Analyzing how artificial intelligence is reshaping traditional business models and creating new market opportunities.&apos; },
    { id: &apos;quantum-economics-new-paradigm&apos;, title: &apos;Quantum Economics: The New Paradigm for Financial Markets&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;How quantum computing principles are being applied to create more accurate financial models and predictions.&apos; },
    { id: &apos;strategic-inflection-points&apos;, title: &apos;Strategic Inflection Points: Navigating Business Transformation&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Identifying and responding to critical moments that reshape industries and competitive landscapes.&apos; },
    { id: &apos;platform-economics-2025&apos;, title: &apos;Platform Economics 2025: Network Effects in the Digital Age&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Understanding how platform businesses create and capture value in interconnected ecosystems.&apos; },
    { id: &apos;scenario-planning-futures&apos;, title: &apos;Scenario Planning for Uncertain Futures&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Advanced techniques for preparing organizations for multiple possible future states.&apos; },
    { id: &apos;ai-powered-decision-making&apos;, title: &apos;AI-Powered Decision Making: Transforming Strategic Choices in 2025&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;How artificial intelligence is revolutionizing executive decision-making processes and strategic planning in modern enterprises.&apos; },
    { id: &apos;blockchain-enterprise-transformation&apos;, title: &apos;Blockchain for Enterprise Transformation: Beyond Cryptocurrency&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;How blockchain technology is revolutionizing supply chain management, digital identity, and smart contracts in enterprise environments.&apos; },
    { id: &apos;circular-economy-business-models&apos;, title: &apos;Circular Economy Business Models: Redefining Value Creation in 2025&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;How circular economy principles are transforming traditional linear business models into sustainable value networks that eliminate waste and regenerate natural systems.&apos; },
    { id: &apos;cybersecurity-risk-management&apos;, title: &apos;Cybersecurity Risk Management: Protecting Digital Assets in 2025&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;How modern enterprises are implementing comprehensive cybersecurity frameworks to protect against evolving threats while enabling business innovation and growth.&apos; },
    { id: &apos;data-governance-strategy&apos;, title: &apos;Data Governance Strategy: Maximizing Value While Ensuring Compliance in 2025&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;How organizations are implementing comprehensive data governance frameworks to unlock business value while maintaining regulatory compliance and stakeholder trust.&apos; },
    { id: &apos;digital-transformation-playbook&apos;, title: &apos;Digital Transformation Playbook: Navigating Enterprise Modernization in 2025&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;A comprehensive guide to successful digital transformation covering strategy, technology adoption, cultural change, and measurable business outcomes.&apos; },
    { id: &apos;esg-strategy-integration&apos;, title: &apos;ESG Strategy Integration: Building Sustainable Competitive Advantages in 2025&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;How organizations are integrating Environmental, Social, and Governance principles into core business strategy to drive long-term value creation and stakeholder trust.&apos; },
    { id: &apos;global-expansion-strategies&apos;, title: &apos;Global Expansion Strategies: Navigating International Markets in 2025&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Comprehensive guide to successful international expansion covering market entry strategies, cultural adaptation, regulatory compliance, and cross-border operational excellence.&apos; },
    { id: &apos;innovation-portfolio-management&apos;, title: &apos;Innovation Portfolio Management: Balancing Risk and Reward in 2025&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;How organizations are managing diverse innovation portfolios to drive sustainable growth while balancing short-term performance with long-term transformation initiatives.&apos; },
    { id: &apos;mastering-competitive-landscape-2025&apos;, title: &apos;Business Strategy Insights: Mastering 2025\&apos;s Competitive Landscape&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Comprehensive guide to modern business strategy in 2025, covering adaptive planning, digital transformation, and sustainable competitive advantage.&apos; },
    { id: &apos;merger-acquisition-strategy&apos;, title: &apos;Merger & Acquisition Strategy: Driving Growth Through Strategic Consolidation in 2025&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;Comprehensive guide to successful M&A strategies covering deal sourcing, due diligence, integration planning, and post-merger value realization in today\&apos;s dynamic market environment.&apos; },
    { id: &apos;organizational-design-excellence&apos;, title: &apos;Organizational Design Excellence: Building High-Performance Structures in 2025&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;How modern organizations are designing agile, adaptive structures that drive performance, innovation, and employee engagement in today\&apos;s dynamic business environment.&apos; },
    { id: &apos;performance-management-systems&apos;, title: &apos;Performance Management Systems: Driving Excellence Through Strategic Measurement in 2025&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;How organizations are implementing modern performance management systems that align individual contributions with strategic objectives while fostering engagement, development, and continuous improvement.&apos; },
    { id: &apos;supply-chain-resilience&apos;, title: &apos;Supply Chain Resilience: Building Adaptive Networks in 2025&apos;, date: &apos;Nov 22, 2025&apos;, excerpt: &apos;How organizations are designing resilient supply chains that withstand disruption while maintaining efficiency, sustainability, and competitive advantage in today\&apos;s volatile global marketplace.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Business Strategy | Corporate Consciousness</title>
        <meta name="description&quot; content="Explore strategic frameworks, business transformation, and competitive advantage in the modern economy.&quot; />
        <meta name="keywords&quot; content="business strategy, competitive advantage, transformation, strategic planning&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/business&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Business Strategy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore strategic frameworks, business transformation, and competitive advantage in the modern economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {strategyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors&quot;>
                    <Link href={`/blog/business/strategy/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/business/strategy/${article.id}`}
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