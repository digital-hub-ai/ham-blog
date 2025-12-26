import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RecipesIndex() {
  // Recipe categories
  const recipeCategories = [
    { 
      id: 'mexican', 
      title: 'Authentic Mexican Street Tacos', 
      excerpt: 'Learn to make traditional street-style tacos with homemade corn tortillas and authentic fillings.',
      date: 'Dec 22, 2025',
      author: 'Chef Carlos Martinez',
      readTime: '12 min read'
    },
    { 
      id: 'japanese', 
      title: 'Perfect Ramen Broth: The 18-Hour Process', 
      excerpt: 'Master the art of creating rich, flavorful ramen broth with this detailed guide.',
      date: 'Dec 21, 2025',
      author: 'Chef Hiroshi Tanaka',
      readTime: '20 min read'
    },
    { 
      id: 'french', 
      title: 'Classic French Croissants from Scratch', 
      excerpt: 'Step-by-step guide to making flaky, buttery croissants at home.',
      date: 'Dec 20, 2025',
      author: 'Chef Marie Dubois',
      readTime: '18 min read'
    },
    { 
      id: 'indian', 
      title: 'Homemade Garam Masala Blend', 
      excerpt: 'Create your own aromatic spice blend for authentic Indian curries.',
      date: 'Dec 19, 2025',
      author: 'Chef Priya Sharma',
      readTime: '10 min read'
    },
    { 
      id: 'italian', 
      title: 'Handmade Pasta: The Perfect Fettuccine', 
      excerpt: 'Traditional Italian technique for making silky, perfectly textured fettuccine.',
      date: 'Dec 18, 2025',
      author: 'Chef Giuseppe Romano',
      readTime: '15 min read'
    },
    { 
      id: 'thai', 
      title: 'Pad Thai: Balancing Sweet, Sour, and Heat', 
      excerpt: 'Master the authentic flavors of Thailand\'s most famous dish.',
      date: 'Dec 17, 2025',
      author: 'Chef Somchai Jaidee',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Recipes | Culinary Chronicles</title>
        <meta name="description" content="Discover a world of delicious recipes from around the globe." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Recipes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover a world of delicious recipes from around the globe. From traditional family recipes to innovative fusion dishes, our collection celebrates the diversity of global cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipeCategories.map((recipe) => (
              <article 
                key={recipe.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl">
                      🍳
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    <Link href={`/blog/food/recipes/${recipe.id}`} className="hover:text-yellow-300 transition-colors">
                      {recipe.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {recipe.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">By {recipe.author}</span>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm block">{recipe.date}</span>
                      <span className="text-gray-500 text-sm">{recipe.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/food"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}