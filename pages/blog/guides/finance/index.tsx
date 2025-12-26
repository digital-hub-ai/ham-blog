import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FinanceIndex() {
  // Personal finance guides data
  const financeGuides = [
    {
      id: 'investment-basics-guide',
      title: 'Investment Basics: Your Complete Guide to Building Wealth',
      excerpt: 'Learn fundamental investment principles and strategies for long-term wealth building.',
      date: 'Dec 22, 2025',
      author: 'Investment Advisor Alex Wealth',
      readTime: '26 min read',
      tags: ['Investment', 'Wealth', 'Basics']
    },
    {
      id: 'debt-elimination-strategies',
      title: 'Debt Elimination: Proven Strategies for Financial Freedom',
      excerpt: 'Discover effective approaches to eliminate debt and regain financial control.',
      date: 'Dec 21, 2025',
      author: 'Financial Coach Maya DebtFree',
      readTime: '24 min read',
      tags: ['Debt', 'Financial Freedom', 'Strategy']
    },
    {
      id: 'retirement-planning-essentials',
      title: 'Retirement Planning: Essential Steps for a Secure Future',
      excerpt: 'Build a comprehensive retirement plan that will ensure financial security in your golden years.',
      date: 'Dec 20, 2025',
      author: 'Retirement Planner Dr. Jordan Future',
      readTime: '22 min read',
      tags: ['Retirement', 'Planning', 'Security']
    },
    {
      id: 'tax-optimization-strategies',
      title: 'Tax Optimization: Legal Strategies to Minimize Your Tax Burden',
      excerpt: 'Learn legitimate tax strategies that will keep more money in your pocket.',
      date: 'Dec 19, 2025',
      author: 'Tax Specialist Taylor Save',
      readTime: '20 min read',
      tags: ['Tax', 'Optimization', 'Strategy']
    },
    {
      id: 'real-estate-investment-guide',
      title: 'Real Estate Investment: Building Wealth Through Property',
      excerpt: 'Navigate the real estate market with strategies for successful property investment.',
      date: 'Dec 18, 2025',
      author: 'Real Estate Expert Casey Property',
      readTime: '28 min read',
      tags: ['Real Estate', 'Investment', 'Property']
    },
    {
      id: 'passive-income-creation',
      title: 'Passive Income Creation: Multiple Streams for Financial Independence',
      excerpt: 'Develop multiple income streams that will provide financial security and freedom.',
      date: 'Dec 17, 2025',
      author: 'Income Strategist Sam Passive',
      readTime: '30 min read',
      tags: ['Passive Income', 'Financial Independence', 'Strategy']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Personal Finance - Knowledge Compendium</title>
        <meta name="description" content="Master personal finance with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Personal Finance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master personal finance with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financeGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    💰
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  <Link href={`/blog/guides/finance/${guide.id}`} className="hover:text-green-300 transition-colors">
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">By {guide.author}</span>
                  <div className="text-right">
                    <span className="text-gray-500 text-sm block">{guide.date}</span>
                    <span className="text-gray-500 text-sm">{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog/guides"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}