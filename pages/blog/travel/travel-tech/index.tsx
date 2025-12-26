import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TravelTechIndex() {
  // Sample travel tech articles
  const travelTechArticles = [
    { id: 'smart-luggage-2025', title: 'Smart Luggage Revolution: GPS Tracking and More', date: 'Dec 21, 2025', excerpt: 'Discover the latest innovations in smart luggage with GPS tracking, weight sensors, and built-in charging stations.' },
    { id: 'ar-travel-apps-2025', title: 'Augmented Reality Travel Apps Changing How We Explore', date: 'Dec 20, 2025', excerpt: 'How AR apps are transforming city exploration with real-time translations, historical overlays, and navigation assistance.' },
    { id: 'biometric-boarding', title: 'Biometric Boarding: The Future of Airport Security', date: 'Dec 19, 2025', excerpt: 'Facial recognition and fingerprint scanning are streamlining airport processes while enhancing security measures.' },
    { id: 'virtual-travel-experiences', title: 'Virtual Travel Experiences: Previews Before You Visit', date: 'Dec 18, 2025', excerpt: 'VR technology allows travelers to preview destinations and accommodations before booking their trips.' },
    { id: 'ai-travel-assistants', title: 'AI Travel Assistants: Personal Concierges in Your Pocket', date: 'Dec 17, 2025', excerpt: 'Artificial intelligence is powering personal travel assistants that plan itineraries and provide real-time recommendations.' }
  ];

  return (
    <>
      <Head>
        <title>Travel Technology | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Explore the latest travel technology innovations transforming how we plan, book, and experience our journeys around the world." />
        <meta name="keywords" content="travel technology, smart luggage, travel apps, AI travel, VR travel, biometric boarding" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Travel Technology
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore the latest travel technology innovations transforming how we plan, book, and experience our journeys around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelTechArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-blue-700 transition-colors">
                    <Link href={`/blog/travel/travel-tech/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/travel/travel-tech/${article.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/travel"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}