import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RestaurantReviewsIndex() {
  // Restaurant review articles
  const reviewArticles = [
    { 
      id: 'tokyo-ramen', 
      title: 'Hidden Ramen Gem in Tokyo\'s Back Alleys', 
      excerpt: 'An intimate look at a 30-year-old ramen shop that locals consider a treasure.',
      date: 'Dec 22, 2025',
      author: 'Food Critic Kenji Noodle',
      readTime: '14 min read'
    },
    { 
      id: 'paris-bistro', 
      title: 'Revisited: The Bistro That Defines Parisian Dining', 
      excerpt: 'A decade later, we return to this iconic bistro to see if it still holds up.',
      date: 'Dec 21, 2025',
      author: 'Culinary Critic Marie Etoile',
      readTime: '16 min read'
    },
    { 
      id: 'mexico-tacos', 
      title: 'Taco Stand Excellence: A Mexico City Journey', 
      excerpt: 'Exploring the street food culture that makes Mexico City a UNESCO-recognized culinary destination.',
      date: 'Dec 20, 2025',
      author: 'Street Food Explorer Carlos Calle',
      readTime: '18 min read'
    },
    { 
      id: 'new-york-steakhouse', 
      title: 'The Last Traditional Steakhouse in Manhattan', 
      excerpt: 'A historic establishment that has maintained its original charm and quality for 80 years.',
      date: 'Dec 19, 2025',
      author: 'Meat Connoisseur Robert Prime',
      readTime: '15 min read'
    },
    { 
      id: 'thai-market', 
      title: 'Bangkok\'s Floating Market: A Culinary Adventure', 
      excerpt: 'Navigating the vibrant markets and discovering authentic Thai flavors.',
      date: 'Dec 18, 2025',
      author: 'Adventure Diner Sarah Spice',
      readTime: '20 min read'
    },
    { 
      id: 'italy-pasta', 
      title: 'The Nonna\'s Kitchen: Authentic Italian Pasta Experience', 
      excerpt: 'A family-run restaurant that has been serving traditional pasta dishes for four generations.',
      date: 'Dec 17, 2025',
      author: 'Pasta Expert Giuseppe Tradition',
      readTime: '12 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Restaurant Reviews | Culinary Chronicles</title>
        <meta name="description" content="In-depth reviews of exceptional dining experiences around the world." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Restaurant Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              In-depth reviews of exceptional dining experiences around the world. From hidden gems to renowned establishments, discover the stories behind memorable meals and exceptional cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-700/50 hover:border-purple-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600/20 to-pink-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                      🍷
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    <Link href={`/blog/food/restaurants/${article.id}`} className="hover:text-purple-300 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">By {article.author}</span>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm block">{article.date}</span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/food"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}