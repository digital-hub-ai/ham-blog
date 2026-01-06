import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function LuxuryTravelIndex() {
  // Sample luxury travel articles
  const luxuryArticles = [
    { id: &apos;private-island-getaways-2025&apos;, title: &apos;Private Island Getaways: Ultimate Luxury Retreats&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Exclusive private island experiences offering unparalleled privacy, bespoke services, and pristine natural environments.&apos; },
    { id: &apos;superyacht-charters-2025&apos;, title: &apos;Superyacht Charters: Sailing in Style Around the Globe&apos;, date: &apos;Dec 20, 2025&apos;, excerpt: &apos;Experience the world\&apos;s most stunning coastlines aboard luxury yachts with personalized crews and amenities.&apos; },
    { id: &apos;ultra-luxury-resorts-2025&apos;, title: &apos;Ultra-Luxury Resorts Redefining Hospitality Standards&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Discover resorts that exceed expectations with innovative architecture, Michelin-starred dining, and transformative wellness experiences.&apos; },
    { id: &apos;first-class-travel-experiences&apos;, title: &apos;First-Class Travel Experiences Beyond the Cabin&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;How premium airlines are extending luxury from departure to destination with exclusive lounges and concierge services.&apos; },
    { id: &apos;bespoke-travel-itineraries&apos;, title: &apos;Bespoke Travel Itineraries: Personalized Luxury Journeys&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Custom-designed travel experiences crafted by expert planners to match individual interests and preferences.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Luxury Travel Experiences | Chrono-Wanderer&rsquo;s Atlas</title>
        <meta name="description&quot; content="Explore exclusive luxury travel experiences and premium accommodations for discerning travelers seeking exceptional adventures in 2025.&quot; />
        <meta name="keywords&quot; content="luxury travel, premium travel, exclusive vacations, private island getaways, superyacht charters, ultra-luxury resorts&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&rsquo;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Luxury Travel Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore exclusive luxury travel experiences and premium accommodations for discerning travelers seeking exceptional adventures in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {luxuryArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-purple-700 transition-colors&quot;>
                    <Link href={`/blog/travel/luxury/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/travel/luxury/${article.id}`}
                      className="text-purple-600 hover:text-purple-800 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/travel&quot;
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300&quot;
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}