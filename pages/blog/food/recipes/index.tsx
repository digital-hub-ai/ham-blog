import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function RecipesIndex() {
  // Recipe categories
  const recipeCategories = [
    { 
      id: &apos;mexican&apos;, 
      title: &apos;Authentic Mexican Street Tacos&apos;, 
      excerpt: &apos;Learn to make traditional street-style tacos with homemade corn tortillas and authentic fillings.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Chef Carlos Martinez&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;japanese&apos;, 
      title: &apos;Perfect Ramen Broth: The 18-Hour Process&apos;, 
      excerpt: &apos;Master the art of creating rich, flavorful ramen broth with this detailed guide.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Chef Hiroshi Tanaka&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;french&apos;, 
      title: &apos;Classic French Croissants from Scratch&apos;, 
      excerpt: &apos;Step-by-step guide to making flaky, buttery croissants at home.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Chef Marie Dubois&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;indian&apos;, 
      title: &apos;Homemade Garam Masala Blend&apos;, 
      excerpt: &apos;Create your own aromatic spice blend for authentic Indian curries.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Chef Priya Sharma&apos;,
      readTime: &apos;10 min read&apos;
    },
    { 
      id: &apos;italian&apos;, 
      title: &apos;Handmade Pasta: The Perfect Fettuccine&apos;, 
      excerpt: &apos;Traditional Italian technique for making silky, perfectly textured fettuccine.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Chef Giuseppe Romano&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;thai&apos;, 
      title: &apos;Pad Thai: Balancing Sweet, Sour, and Heat&apos;, 
      excerpt: &apos;Master the authentic flavors of Thailand\&apos;s most famous dish.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Chef Somchai Jaidee&apos;,
      readTime: &apos;14 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Recipes | Culinary Chronicles</title>
        <meta name="description&quot; content="Discover a world of delicious recipes from around the globe.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4&quot;>
              Recipes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Discover a world of delicious recipes from around the globe. From traditional family recipes to innovative fusion dishes, our collection celebrates the diversity of global cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {recipeCategories.map((recipe) => (
              <article 
                key={recipe.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl&quot;>
                      🍳
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors&quot;>
                    <Link href={`/blog/food/recipes/${recipe.id}`} className="hover:text-yellow-300 transition-colors&quot;>
                      {recipe.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4&quot;>
                    {recipe.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>By {recipe.author}</span>
                    <div className="text-right&quot;>
                      <span className="text-gray-500 text-sm block&quot;>{recipe.date}</span>
                      <span className="text-gray-500 text-sm&quot;>{recipe.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/food&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}