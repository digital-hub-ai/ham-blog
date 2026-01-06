import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function RestaurantReviewsIndex() {
  // Restaurant review articles
  const reviewArticles = [
    { 
      id: &apos;tokyo-ramen&apos;, 
      title: &apos;Hidden Ramen Gem in Tokyo\&apos;s Back Alleys&apos;, 
      excerpt: &apos;An intimate look at a 30-year-old ramen shop that locals consider a treasure.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Food Critic Kenji Noodle&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;paris-bistro&apos;, 
      title: &apos;Revisited: The Bistro That Defines Parisian Dining&apos;, 
      excerpt: &apos;A decade later, we return to this iconic bistro to see if it still holds up.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Culinary Critic Marie Etoile&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;mexico-tacos&apos;, 
      title: &apos;Taco Stand Excellence: A Mexico City Journey&apos;, 
      excerpt: &apos;Exploring the street food culture that makes Mexico City a UNESCO-recognized culinary destination.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Street Food Explorer Carlos Calle&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;new-york-steakhouse&apos;, 
      title: &apos;The Last Traditional Steakhouse in Manhattan&apos;, 
      excerpt: &apos;A historic establishment that has maintained its original charm and quality for 80 years.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Meat Connoisseur Robert Prime&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;thai-market&apos;, 
      title: &apos;Bangkok\&apos;s Floating Market: A Culinary Adventure&apos;, 
      excerpt: &apos;Navigating the vibrant markets and discovering authentic Thai flavors.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Adventure Diner Sarah Spice&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;italy-pasta&apos;, 
      title: &apos;The Nonna\&apos;s Kitchen: Authentic Italian Pasta Experience&apos;, 
      excerpt: &apos;A family-run restaurant that has been serving traditional pasta dishes for four generations.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Pasta Expert Giuseppe Tradition&apos;,
      readTime: &apos;12 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Restaurant Reviews | Culinary Chronicles</title>
        <meta name="description&quot; content="In-depth reviews of exceptional dining experiences around the world.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4&quot;>
              Restaurant Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              In-depth reviews of exceptional dining experiences around the world. From hidden gems to renowned establishments, discover the stories behind memorable meals and exceptional cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {reviewArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-700/50 hover:border-purple-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-purple-600/20 to-pink-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl&quot;>
                      🍷
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors&quot;>
                    <Link href={`/blog/food/restaurants/${article.id}`} className="hover:text-purple-300 transition-colors&quot;>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>By {article.author}</span>
                    <div className="text-right&quot;>
                      <span className="text-gray-500 text-sm block&quot;>{article.date}</span>
                      <span className="text-gray-500 text-sm&quot;>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/food&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}