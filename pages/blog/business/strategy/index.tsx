import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function StrategyIndex() {
  // Complete list of strategy articles
  const strategyArticles = [
    { id: 'ai-disruption-index-2025', title: 'AI Disruption Index 2025: Which Industries Will Transform Next?', date: 'Dec 21, 2025', excerpt: 'Analyzing how artificial intelligence is reshaping traditional business models and creating new market opportunities.' },
    { id: 'quantum-economics-new-paradigm', title: 'Quantum Economics: The New Paradigm for Financial Markets', date: 'Dec 19, 2025', excerpt: 'How quantum computing principles are being applied to create more accurate financial models and predictions.' },
    { id: 'strategic-inflection-points', title: 'Strategic Inflection Points: Navigating Business Transformation', date: 'Dec 15, 2025', excerpt: 'Identifying and responding to critical moments that reshape industries and competitive landscapes.' },
    { id: 'platform-economics-2025', title: 'Platform Economics 2025: Network Effects in the Digital Age', date: 'Dec 10, 2025', excerpt: 'Understanding how platform businesses create and capture value in interconnected ecosystems.' },
    { id: 'scenario-planning-futures', title: 'Scenario Planning for Uncertain Futures', date: 'Dec 5, 2025', excerpt: 'Advanced techniques for preparing organizations for multiple possible future states.' },
    { id: 'ai-powered-decision-making', title: 'AI-Powered Decision Making: Transforming Strategic Choices in 2025', date: 'Dec 18, 2025', excerpt: 'How artificial intelligence is revolutionizing executive decision-making processes and strategic planning in modern enterprises.' },
    { id: 'blockchain-enterprise-transformation', title: 'Blockchain for Enterprise Transformation: Beyond Cryptocurrency', date: 'Dec 16, 2025', excerpt: 'How blockchain technology is revolutionizing supply chain management, digital identity, and smart contracts in enterprise environments.' },
    { id: 'circular-economy-business-models', title: 'Circular Economy Business Models: Redefining Value Creation in 2025', date: 'Dec 14, 2025', excerpt: 'How circular economy principles are transforming traditional linear business models into sustainable value networks that eliminate waste and regenerate natural systems.' },
    { id: 'cybersecurity-risk-management', title: 'Cybersecurity Risk Management: Protecting Digital Assets in 2025', date: 'Dec 12, 2025', excerpt: 'How modern enterprises are implementing comprehensive cybersecurity frameworks to protect against evolving threats while enabling business innovation and growth.' },
    { id: 'data-governance-strategy', title: 'Data Governance Strategy: Maximizing Value While Ensuring Compliance in 2025', date: 'Dec 10, 2025', excerpt: 'How organizations are implementing comprehensive data governance frameworks to unlock business value while maintaining regulatory compliance and stakeholder trust.' },
    { id: 'digital-transformation-playbook', title: 'Digital Transformation Playbook: Navigating Enterprise Modernization in 2025', date: 'Dec 8, 2025', excerpt: 'A comprehensive guide to successful digital transformation covering strategy, technology adoption, cultural change, and measurable business outcomes.' },
    { id: 'esg-strategy-integration', title: 'ESG Strategy Integration: Building Sustainable Competitive Advantages in 2025', date: 'Dec 6, 2025', excerpt: 'How organizations are integrating Environmental, Social, and Governance principles into core business strategy to drive long-term value creation and stakeholder trust.' },
    { id: 'global-expansion-strategies', title: 'Global Expansion Strategies: Navigating International Markets in 2025', date: 'Dec 4, 2025', excerpt: 'Comprehensive guide to successful international expansion covering market entry strategies, cultural adaptation, regulatory compliance, and cross-border operational excellence.' },
    { id: 'innovation-portfolio-management', title: 'Innovation Portfolio Management: Balancing Risk and Reward in 2025', date: 'Dec 2, 2025', excerpt: 'How organizations are managing diverse innovation portfolios to drive sustainable growth while balancing short-term performance with long-term transformation initiatives.' },
    { id: 'mastering-competitive-landscape-2025', title: 'Business Strategy Insights: Mastering 2025\'s Competitive Landscape', date: 'Nov 30, 2025', excerpt: 'Comprehensive guide to modern business strategy in 2025, covering adaptive planning, digital transformation, and sustainable competitive advantage.' },
    { id: 'merger-acquisition-strategy', title: 'Merger & Acquisition Strategy: Driving Growth Through Strategic Consolidation in 2025', date: 'Nov 28, 2025', excerpt: 'Comprehensive guide to successful M&A strategies covering deal sourcing, due diligence, integration planning, and post-merger value realization in today\'s dynamic market environment.' },
    { id: 'organizational-design-excellence', title: 'Organizational Design Excellence: Building High-Performance Structures in 2025', date: 'Nov 26, 2025', excerpt: 'How modern organizations are designing agile, adaptive structures that drive performance, innovation, and employee engagement in today\'s dynamic business environment.' },
    { id: 'performance-management-systems', title: 'Performance Management Systems: Driving Excellence Through Strategic Measurement in 2025', date: 'Nov 24, 2025', excerpt: 'How organizations are implementing modern performance management systems that align individual contributions with strategic objectives while fostering engagement, development, and continuous improvement.' },
    { id: 'supply-chain-resilience', title: 'Supply Chain Resilience: Building Adaptive Networks in 2025', date: 'Nov 22, 2025', excerpt: 'How organizations are designing resilient supply chains that withstand disruption while maintaining efficiency, sustainability, and competitive advantage in today\'s volatile global marketplace.' }
  ];

  return (
    <>
      <Head>
        <title>Business Strategy | Corporate Consciousness</title>
        <meta name="description" content="Explore strategic frameworks, business transformation, and competitive advantage in the modern economy." />
        <meta name="keywords" content="business strategy, competitive advantage, transformation, strategic planning" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Business Strategy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore strategic frameworks, business transformation, and competitive advantage in the modern economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/strategy/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/strategy/${article.id}`}
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