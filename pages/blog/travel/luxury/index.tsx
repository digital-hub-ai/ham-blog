import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LuxuryTravelIndex() {
  // Sample luxury travel articles
  const luxuryArticles = [
    { id: 'private-island-getaways-2025', title: 'Private Island Getaways: Ultimate Luxury Retreats', date: 'Dec 21, 2025', excerpt: 'Exclusive private island experiences offering unparalleled privacy, bespoke services, and pristine natural environments.' },
    { id: 'superyacht-charters-2025', title: 'Superyacht Charters: Sailing in Style Around the Globe', date: 'Dec 20, 2025', excerpt: 'Experience the world\'s most stunning coastlines aboard luxury yachts with personalized crews and amenities.' },
    { id: 'ultra-luxury-resorts-2025', title: 'Ultra-Luxury Resorts Redefining Hospitality Standards', date: 'Dec 19, 2025', excerpt: 'Discover resorts that exceed expectations with innovative architecture, Michelin-starred dining, and transformative wellness experiences.' },
    { id: 'first-class-travel-experiences', title: 'First-Class Travel Experiences Beyond the Cabin', date: 'Dec 18, 2025', excerpt: 'How premium airlines are extending luxury from departure to destination with exclusive lounges and concierge services.' },
    { id: 'bespoke-travel-itineraries', title: 'Bespoke Travel Itineraries: Personalized Luxury Journeys', date: 'Dec 17, 2025', excerpt: 'Custom-designed travel experiences crafted by expert planners to match individual interests and preferences.' }
  ];

  return (
    <>
      <Head>
        <title>Luxury Travel Experiences | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Explore exclusive luxury travel experiences and premium accommodations for discerning travelers seeking exceptional adventures in 2025." />
        <meta name="keywords" content="luxury travel, premium travel, exclusive vacations, private island getaways, superyacht charters, ultra-luxury resorts" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Luxury Travel Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore exclusive luxury travel experiences and premium accommodations for discerning travelers seeking exceptional adventures in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-purple-700 transition-colors">
                    <Link href={`/blog/travel/luxury/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/travel/luxury/${article.id}`}
                      className="text-purple-600 hover:text-purple-800 text-sm"
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
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}