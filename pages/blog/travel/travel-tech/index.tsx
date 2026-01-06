import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function TravelTechIndex() {
  // Sample travel tech articles
  const travelTechArticles = [
    { id: &apos;smart-luggage-2025&apos;, title: &apos;Smart Luggage Revolution: GPS Tracking and More&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Discover the latest innovations in smart luggage with GPS tracking, weight sensors, and built-in charging stations.&apos; },
    { id: &apos;ar-travel-apps-2025&apos;, title: &apos;Augmented Reality Travel Apps Changing How We Explore&apos;, date: &apos;Dec 20, 2025&apos;, excerpt: &apos;How AR apps are transforming city exploration with real-time translations, historical overlays, and navigation assistance.&apos; },
    { id: &apos;biometric-boarding&apos;, title: &apos;Biometric Boarding: The Future of Airport Security&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Facial recognition and fingerprint scanning are streamlining airport processes while enhancing security measures.&apos; },
    { id: &apos;virtual-travel-experiences&apos;, title: &apos;Virtual Travel Experiences: Previews Before You Visit&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;VR technology allows travelers to preview destinations and accommodations before booking their trips.&apos; },
    { id: &apos;ai-travel-assistants&apos;, title: &apos;AI Travel Assistants: Personal Concierges in Your Pocket&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Artificial intelligence is powering personal travel assistants that plan itineraries and provide real-time recommendations.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Travel Technology | Chrono-Wanderer&apos;s Atlas</title>
        <meta name="description&quot; content="Explore the latest travel technology innovations transforming how we plan, book, and experience our journeys around the world.&quot; />
        <meta name="keywords&quot; content="travel technology, smart luggage, travel apps, AI travel, VR travel, biometric boarding&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&apos;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Travel Technology
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore the latest travel technology innovations transforming how we plan, book, and experience our journeys around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {travelTechArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-blue-700 transition-colors&quot;>
                    <Link href={`/blog/travel/travel-tech/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/travel/travel-tech/${article.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm&quot;
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/travel&quot;
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300&quot;
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}