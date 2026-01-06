import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function SustainableTravelIndex() {
  // Sample sustainable travel articles
  const sustainableArticles = [
    { id: &apos;eco-friendly-accommodations-2025&apos;, title: &apos;Eco-Friendly Accommodations: Green Hotels Leading the Way&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Discover hotels and resorts implementing sustainable practices that minimize environmental impact while maximizing guest comfort.&apos; },
    { id: &apos;carbon-neutral-travel-2025&apos;, title: &apos;Achieving Carbon Neutral Travel in 2025&apos;, date: &apos;Dec 20, 2025&apos;, excerpt: &apos;Practical strategies for offsetting travel emissions and choosing low-carbon transportation options.&apos; },
    { id: &apos;zero-waste-travel-guide&apos;, title: &apos;Zero Waste Travel: Packing and Living Sustainably on the Road&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Comprehensive guide to reducing waste while traveling through mindful packing and conscious consumption.&apos; },
    { id: &apos;sustainable-tourism-certifications&apos;, title: &apos;Understanding Sustainable Tourism Certifications&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;Navigate the landscape of eco-labels and certifications to make informed choices about sustainable travel providers.&apos; },
    { id: &apos;plant-based-travel-eating&apos;, title: &apos;Plant-Based Eating While Traveling: A Sustainable Choice&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;How adopting plant-forward eating habits while traveling reduces environmental impact and supports local communities.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Sustainable Travel | Chrono-Wanderer&rsquo;s Atlas</title>
        <meta name="description&quot; content="Explore sustainable travel practices and eco-friendly tourism options for responsible adventurers in 2025.&quot; />
        <meta name="keywords&quot; content="sustainable travel, eco-friendly tourism, carbon neutral travel, green hotels, responsible tourism&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-green-600 hover:text-green-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&rsquo;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Sustainable Travel
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore sustainable travel practices and eco-friendly tourism options for responsible adventurers in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {sustainableArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-green-700 transition-colors&quot;>
                    <Link href={`/blog/travel/sustainable/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/travel/sustainable/${article.id}`}
                      className="text-green-600 hover:text-green-800 text-sm&quot;
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
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300&quot;
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}