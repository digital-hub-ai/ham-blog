import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FinanceIndex() {
  // Sample finance articles
  const financeArticles = [
    { id: 'decentralized-finance-future', title: 'Decentralized Finance: The Future of Banking and Investments', date: 'Dec 16, 2025', excerpt: 'How blockchain technology is reshaping traditional financial services and creating new investment opportunities.' },
    { id: 'cryptocurrency-adoption-trends', title: 'Cryptocurrency Adoption Trends: Mainstream Integration in 2025', date: 'Dec 11, 2025', excerpt: 'Analyzing how digital currencies are becoming accepted payment methods across industries.' },
    { id: 'esg-investing-mainstream', title: 'ESG Investing Goes Mainstream: Sustainable Finance in 2025', date: 'Dec 6, 2025', excerpt: 'Environmental, Social, and Governance criteria becoming standard factors in investment decisions.' },
    { id: 'algorithmic-trading-evolution', title: 'Algorithmic Trading Evolution: AI-Driven Investment Strategies', date: 'Dec 1, 2025', excerpt: 'How machine learning is transforming portfolio management and trading strategies.' },
    { id: 'financial-inclusion-blockchain', title: 'Financial Inclusion Through Blockchain: Banking the Unbanked', date: 'Nov 26, 2025', excerpt: 'Using distributed ledger technology to provide financial services to underserved populations.' },
    { id: 'behavioral-finance-market-psychology-2025', title: 'Behavioral Finance and Market Psychology in 2025', date: 'Dec 21, 2025', excerpt: 'Understanding how cognitive biases and emotional factors influence investment decisions and market movements.' },
    { id: 'sustainable-investing-climate-finance-2025', title: 'Sustainable Investing and Climate Finance in 2025', date: 'Dec 21, 2025', excerpt: 'Exploring how environmental considerations are reshaping investment strategies and financing solutions for climate challenges.' },
    { id: 'wealth-management-digital-age-2025', title: 'Wealth Management in the Digital Age 2025', date: 'Dec 21, 2025', excerpt: 'How artificial intelligence, automation, and digital platforms are revolutionizing wealth management services.' },
    { id: 'venture-capital-startup-funding-trends-2025', title: 'Venture Capital and Startup Funding Trends in 2025', date: 'Dec 21, 2025', excerpt: 'Analyzing how venture capital investment strategies and startup funding models are evolving in 2025.' },
    { id: 'fixed-income-markets-bond-innovation-2025', title: 'Fixed Income Markets and Bond Innovation in 2025', date: 'Dec 21, 2025', excerpt: 'Exploring how fixed income markets are adapting to digital transformation, ESG integration, and evolving investor demands.' },
    { id: 'insurance-technology-digital-risk-management-2025', title: 'Insurance Technology and Digital Risk Management in 2025', date: 'Dec 21, 2025', excerpt: 'How insurtech innovations and digital risk assessment tools are transforming the insurance industry.' },
    { id: 'international-trade-finance-global-markets-2025', title: 'International Trade Finance and Global Markets in 2025', date: 'Dec 21, 2025', excerpt: 'Analyzing how digital platforms, blockchain technology, and sustainable finance are reshaping international trade.' },
    { id: 'personal-finance-automation-robo-advisors-2025', title: 'Personal Finance Automation and Robo-Advisors in 2025', date: 'Dec 21, 2025', excerpt: 'How artificial intelligence, machine learning, and automation are revolutionizing personal financial management.' },
    { id: 'merger-acquisition-strategies-2025', title: 'Merger and Acquisition Strategies in 2025', date: 'Dec 21, 2025', excerpt: 'How artificial intelligence, ESG considerations, and digital transformation are reshaping M&A strategies.' },
    { id: 'commodity-trading-resource-investing-2025', title: 'Commodity Trading and Resource Investing in 2025', date: 'Dec 21, 2025', excerpt: 'How artificial intelligence, sustainable practices, and digital platforms are transforming commodity markets.' }
  ];

  return (
    <>
      <Head>
        <title>Finance & Investment | Corporate Consciousness</title>
        <meta name="description" content="Explore financial markets, investment strategies, and emerging technologies in finance." />
        <meta name="keywords" content="finance, investment, banking, cryptocurrency, ESG investing" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Finance & Investment
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore financial markets, investment strategies, and emerging technologies in finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/finance/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/finance/${article.id}`}
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