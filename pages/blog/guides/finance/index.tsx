import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function FinanceIndex() {
  // Personal finance guides data
  const financeGuides = [
    {
      id: &apos;investment-basics-guide&apos;,
      title: &apos;Investment Basics: Your Complete Guide to Building Wealth&apos;,
      excerpt: &apos;Learn fundamental investment principles and strategies for long-term wealth building.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Investment Advisor Alex Wealth&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;Investment&apos;, &apos;Wealth&apos;, &apos;Basics&apos;]
    },
    {
      id: &apos;debt-elimination-strategies&apos;,
      title: &apos;Debt Elimination: Proven Strategies for Financial Freedom&apos;,
      excerpt: &apos;Discover effective approaches to eliminate debt and regain financial control.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Financial Coach Maya DebtFree&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Debt&apos;, &apos;Financial Freedom&apos;, &apos;Strategy&apos;]
    },
    {
      id: &apos;retirement-planning-essentials&apos;,
      title: &apos;Retirement Planning: Essential Steps for a Secure Future&apos;,
      excerpt: &apos;Build a comprehensive retirement plan that will ensure financial security in your golden years.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Retirement Planner Dr. Jordan Future&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Retirement&apos;, &apos;Planning&apos;, &apos;Security&apos;]
    },
    {
      id: &apos;tax-optimization-strategies&apos;,
      title: &apos;Tax Optimization: Legal Strategies to Minimize Your Tax Burden&apos;,
      excerpt: &apos;Learn legitimate tax strategies that will keep more money in your pocket.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Tax Specialist Taylor Save&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;Tax&apos;, &apos;Optimization&apos;, &apos;Strategy&apos;]
    },
    {
      id: &apos;real-estate-investment-guide&apos;,
      title: &apos;Real Estate Investment: Building Wealth Through Property&apos;,
      excerpt: &apos;Navigate the real estate market with strategies for successful property investment.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Real Estate Expert Casey Property&apos;,
      readTime: &apos;28 min read&apos;,
      tags: [&apos;Real Estate&apos;, &apos;Investment&apos;, &apos;Property&apos;]
    },
    {
      id: &apos;passive-income-creation&apos;,
      title: &apos;Passive Income Creation: Multiple Streams for Financial Independence&apos;,
      excerpt: &apos;Develop multiple income streams that will provide financial security and freedom.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Income Strategist Sam Passive&apos;,
      readTime: &apos;30 min read&apos;,
      tags: [&apos;Passive Income&apos;, &apos;Financial Independence&apos;, &apos;Strategy&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Personal Finance - Knowledge Compendium</title>
        <meta name="description&quot; content="Master personal finance with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Personal Finance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Master personal finance with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {financeGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    💰
                  </div>
                </div>
              </div>
              <div className="p-6&quot;>
                <div className="flex flex-wrap gap-2 mb-4&quot;>
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors&quot;>
                  <Link href={`/blog/guides/finance/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4&quot;>
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between&quot;>
                  <span className="text-gray-500 text-sm&quot;>By {guide.author}</span>
                  <div className="text-right&quot;>
                    <span className="text-gray-500 text-sm block&quot;>{guide.date}</span>
                    <span className="text-gray-500 text-sm&quot;>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center&quot;>
          <Link 
            href="/blog/guides&quot;
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300&quot;
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}