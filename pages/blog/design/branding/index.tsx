import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BrandingIndex() {
  // Sample branding articles
  const brandingArticles = [
    { id: 'neural-branding-creating-identities-that-think', title: 'Neural Branding: Creating Identities That Think', date: 'Dec 18, 2025', excerpt: 'How AI-driven design is transforming brand identity creation and emotional connection through data-informed visual strategies.' },
    { id: 'sustainable-brand-identity', title: 'Sustainable Brand Identity: Eco-Conscious Visual Storytelling', date: 'Dec 12, 2025', excerpt: 'Building brand identities that communicate environmental responsibility and resonate with conscious consumers.' },
    { id: 'cultural-adaptation-strategies', title: 'Cultural Adaptation Strategies: Global Brands, Local Voices', date: 'Dec 8, 2025', excerpt: 'Effective approaches for adapting brand identities across diverse cultural contexts while maintaining core values.' },
    { id: 'brand-voice-consistency', title: 'Brand Voice Consistency: Speaking as One Across Channels', date: 'Dec 3, 2025', excerpt: 'Maintaining authentic brand voice across digital and physical touchpoints in an omnichannel world.' },
    { id: 'emotional-brand-architecture', title: 'Emotional Brand Architecture: Designing for Feelings', date: 'Nov 28, 2025', excerpt: 'Creating brand architectures that evoke specific emotional responses and build deeper customer relationships.' }
  ];  return (
    <>
      <Head>
        <title>Branding | Aesthetic Forge</title>
        <meta name="description" content="Explore brand identity, strategy, and visual communication techniques for building memorable and meaningful brands." />
        <meta name="keywords" content="branding, brand identity, brand strategy, visual communication, brand design" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Branding
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore brand identity, strategy, and visual communication techniques for building memorable and meaningful brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/branding/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/branding/${article.id}`}
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