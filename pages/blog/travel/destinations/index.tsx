import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DestinationsIndex() {
  // Sample destinations
  const destinations = [
    { id: 'neo-tokyo-2025', title: 'Neo-Tokyo 2025: A Cyberpunk Odyssey', date: 'Dec 21, 2025', excerpt: 'Experience the fusion of ancient traditions and futuristic technology in the world\'s most dynamic city.' },
    { id: 'icelandic-highlands-explorer', title: 'Icelandic Highlands: Untouched Wilderness and Geothermal Wonders', date: 'Dec 18, 2025', excerpt: 'Discover Iceland\'s most spectacular natural wonders from the Golden Circle to the South Coast.' },
    { id: 'moroccan-desert-adventures', title: 'Moroccan Desert Adventures', date: 'Dec 19, 2025', excerpt: 'Journey through the golden dunes of the Sahara with Berber guides and traditional camps.' },
    { id: 'new-zealand-south-island', title: 'New Zealand South Island Explorer', date: 'Dec 18, 2025', excerpt: 'Experience the dramatic landscapes of New Zealand from fjords to glaciers.' },
    { id: 'peruvian-amazon', title: 'Peruvian Amazon Eco-Tour', date: 'Dec 17, 2025', excerpt: 'Explore the biodiversity hotspot of the Amazon rainforest with expert naturalists.' }
  ];

  return (
    <>
      <Head>
        <title>Destinations | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Explore destinations around the world through our curated travel guides." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Destinations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore destinations around the world through our curated travel guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <article 
                key={destination.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-emerald-700 transition-colors">
                    <Link href={`/blog/travel/destinations/${destination.id}`} className="hover:text-emerald-300 transition-colors">
                      {destination.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {destination.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{destination.date}</span>
                    <Link 
                      href={`/blog/travel/destinations/${destination.id}`}
                      className="text-emerald-600 hover:text-emerald-800 text-sm"
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
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}