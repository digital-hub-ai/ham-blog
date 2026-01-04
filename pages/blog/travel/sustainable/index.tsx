import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SustainableTravelIndex() {
  // Sample sustainable travel articles
  const sustainableArticles = [
    { id: 'eco-friendly-accommodations-2025', title: 'Eco-Friendly Accommodations: Green Hotels Leading the Way', date: 'Dec 21, 2025', excerpt: 'Discover hotels and resorts implementing sustainable practices that minimize environmental impact while maximizing guest comfort.' },
    { id: 'carbon-neutral-travel-2025', title: 'Achieving Carbon Neutral Travel in 2025', date: 'Dec 20, 2025', excerpt: 'Practical strategies for offsetting travel emissions and choosing low-carbon transportation options.' },
    { id: 'zero-waste-travel-guide', title: 'Zero Waste Travel: Packing and Living Sustainably on the Road', date: 'Dec 19, 2025', excerpt: 'Comprehensive guide to reducing waste while traveling through mindful packing and conscious consumption.' },
    { id: 'sustainable-tourism-certifications', title: 'Understanding Sustainable Tourism Certifications', date: 'Dec 18, 2025', excerpt: 'Navigate the landscape of eco-labels and certifications to make informed choices about sustainable travel providers.' },
    { id: 'plant-based-travel-eating', title: 'Plant-Based Eating While Traveling: A Sustainable Choice', date: 'Dec 17, 2025', excerpt: 'How adopting plant-forward eating habits while traveling reduces environmental impact and supports local communities.' }
  ];

  return (
    <>
      <Head>
        <title>Sustainable Travel | Chrono-Wanderer&rsquo;s Atlas</title>
        <meta name="description" content="Explore sustainable travel practices and eco-friendly tourism options for responsible adventurers in 2025." />
        <meta name="keywords" content="sustainable travel, eco-friendly tourism, carbon neutral travel, green hotels, responsible tourism" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer&rsquo;s Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Sustainable Travel
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore sustainable travel practices and eco-friendly tourism options for responsible adventurers in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainableArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-green-700 transition-colors">
                    <Link href={`/blog/travel/sustainable/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/travel/sustainable/${article.id}`}
                      className="text-green-600 hover:text-green-800 text-sm"
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
              href="/blog/travel"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}