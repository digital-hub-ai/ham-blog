import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CulturesIndex() {
  // Sample cultural guides
  const culturalGuides = [
    { id: 'amazon-expedition', title: 'Into the Green Heart: Amazon Rainforest Expedition', date: 'Dec 17, 2025', excerpt: 'An immersive journey into the lungs of the Earth with indigenous communities and wildlife.' },
    { id: 'japanese-traditions', title: 'Japanese Traditions: From Tea Ceremony to Zen', date: 'Dec 16, 2025', excerpt: 'Discover the profound cultural practices that define Japanese society and spirituality.' },
    { id: 'moroccan-hospitality', title: 'Moroccan Hospitality and Customs', date: 'Dec 15, 2025', excerpt: 'Experience the warmth of Moroccan culture through traditional meals and social customs.' },
    { id: 'indian-festivals', title: 'Indian Festivals: A Celebration of Diversity', date: 'Dec 14, 2025', excerpt: 'Explore the vibrant festivals that showcase India's rich cultural tapestry.' },
    { id: 'native-american-heritage', title: 'Native American Heritage Sites', date: 'Dec 13, 2025', excerpt: 'Visit sacred sites and learn about the enduring traditions of Native American tribes.' }
  ];

  return (
    <>
      <Head>
        <title>Cultures | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Immerse yourself in diverse cultures and traditions around the world." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
              Cultures
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Immerse yourself in diverse cultures and traditions around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalGuides.map((guide) => (
              <article 
                key={guide.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                    <Link href={`/blog/travel/cultures/${guide.id}`} className="hover:text-emerald-300 transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{guide.date}</span>
                    <Link 
                      href={`/blog/travel/cultures/${guide.id}`}
                      className="text-emerald-400 hover:text-emerald-300 text-sm"
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}