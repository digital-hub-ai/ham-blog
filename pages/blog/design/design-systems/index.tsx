import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DesignSystemsIndex() {
  // Sample design systems articles
  const designSystemsArticles = [
    { id: 'ai-powered-design-systems', title: 'AI-Powered Design Systems: The Next Evolution', date: 'Dec 15, 2025', excerpt: 'How artificial intelligence is revolutionizing design systems and component libraries for more consistent and efficient UI development.' },
    { id: 'cross-platform-design-systems', title: 'Cross-Platform Design Systems: Unified Experiences', date: 'Dec 10, 2025', excerpt: 'Creating cohesive design systems that work seamlessly across web, mobile, desktop, and emerging platform ecosystems.' },
    { id: 'design-tokens-scalability', title: 'Design Tokens for Scalability: Managing Visual Consistency', date: 'Dec 5, 2025', excerpt: 'Implementing design tokens to maintain visual consistency across large-scale products and distributed design teams.' },
    { id: 'component-architecture-patterns', title: 'Component Architecture Patterns: Building Flexible UIs', date: 'Nov 30, 2025', excerpt: 'Effective patterns for organizing and structuring UI components to maximize reusability and maintainability.' },
    { id: 'design-system-governance', title: 'Design System Governance: Ensuring Adoption and Evolution', date: 'Nov 25, 2025', excerpt: 'Strategies for managing design system governance, stakeholder alignment, and continuous improvement processes.' }
  ];

  return (
    <>
      <Head>
        <title>Design Systems | Aesthetic Forge</title>
        <meta name="description" content="Explore design system methodologies, component libraries, and scalable design practices for consistent and efficient product development." />
        <meta name="keywords" content="design systems, component libraries, design tokens, scalability, consistency" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Design Systems
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore design system methodologies, component libraries, and scalable design practices for consistent and efficient product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designSystemsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/design-systems/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/design-systems/${article.id}`}
                      className="text-rose-600 hover:text-rose-800 text-sm"
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
              href="/blog/design"
              className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-all duration-300"
            >
              ← Back to Design Cosmos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}