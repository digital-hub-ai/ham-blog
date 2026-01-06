import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function DestinationsIndex() {
  // Sample destinations
  const destinations = [
    { id: &apos;neo-tokyo-2025&apos;, title: &apos;Neo-Tokyo 2025: A Cyberpunk Odyssey&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Experience the fusion of ancient traditions and futuristic technology in the world\&apos;s most dynamic city.&apos; },
    { id: &apos;icelandic-highlands-explorer&apos;, title: &apos;Icelandic Highlands: Untouched Wilderness and Geothermal Wonders&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;Discover Iceland\&apos;s most spectacular natural wonders from the Golden Circle to the South Coast.&apos; },
    { id: &apos;moroccan-desert-adventures&apos;, title: &apos;Moroccan Desert Adventures&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Journey through the golden dunes of the Sahara with Berber guides and traditional camps.&apos; },
    { id: &apos;new-zealand-south-island&apos;, title: &apos;New Zealand South Island Explorer&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;Experience the dramatic landscapes of New Zealand from fjords to glaciers.&apos; },
    { id: &apos;peruvian-amazon&apos;, title: &apos;Peruvian Amazon Eco-Tour&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Explore the biodiversity hotspot of the Amazon rainforest with expert naturalists.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Destinations | Chrono-Wanderer&rsquo;s Atlas</title>
        <meta name="description&quot; content="Explore destinations around the world through our curated travel guides.&quot; />
        <script type="application/ld+json&quot;>
          {JSON.stringify({
            &quot;@context&quot;: &quot;https://schema.org&quot;,
            &quot;@type&quot;: &quot;CollectionPage&quot;,
            &quot;headline&quot;: &quot;Destinations&quot;,
            &quot;description&quot;: &quot;Explore destinations around the world through our curated travel guides.&quot;,
            &quot;publisher&quot;: {
              &quot;@type&quot;: &quot;Organization&quot;,
              &quot;name&quot;: &quot;Chrono-Wanderer&apos;s Atlas&quot;,
              &quot;logo&quot;: {
                &quot;@type&quot;: &quot;ImageObject&quot;,
                &quot;url&quot;: &quot;https://ai-tools-directory.com/images/logo.png&quot;
              }
            },
            &quot;datePublished&quot;: &quot;2025-12-27&quot;,
            &quot;dateModified&quot;: &quot;2025-12-27&quot;
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&rsquo;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Destinations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore destinations around the world through our curated travel guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {destinations.map((destination) => (
              <article 
                key={destination.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-emerald-700 transition-colors&quot;>
                    <Link href={`/blog/travel/destinations/${destination.id}`} className="hover:text-emerald-300 transition-colors&quot;>
                      {destination.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {destination.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{destination.date}</span>
                    <Link 
                      href={`/blog/travel/destinations/${destination.id}`}
                      className="text-emerald-600 hover:text-emerald-800 text-sm&quot;
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
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300&quot;
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}