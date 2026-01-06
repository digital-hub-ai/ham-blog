import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CookingTechIndex() {
  // Cooking technology articles
  const techArticles = [
    { 
      id: &apos;sous-vide&apos;, 
      title: &apos;Sous Vide Mastery: Precision Cooking at Home&apos;, 
      excerpt: &apos;Learn how to achieve restaurant-quality results with sous vide cooking techniques.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Chef Thomas Precision&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;induction&apos;, 
      title: &apos;Induction Cooking: The Science of Magnetic Heat&apos;, 
      excerpt: &apos;Understanding the benefits and techniques of induction cooking technology.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Tech Chef Alex Heat&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;pressure-cooking&apos;, 
      title: &apos;Modern Pressure Cooking: Speed Meets Flavor&apos;, 
      excerpt: &apos;Exploring how modern pressure cookers enhance flavor while reducing cooking time.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Chef Rapid Flavor&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;smart-ovens&apos;, 
      title: &apos;Smart Ovens: Connected Cooking for the Modern Kitchen&apos;, 
      excerpt: &apos;How artificial intelligence is revolutionizing traditional oven functions.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Tech Gourmet Neo&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;fermentation-tech&apos;, 
      title: &apos;Fermentation Technology: Ancient Techniques, Modern Tools&apos;, 
      excerpt: &apos;Using modern equipment to enhance traditional fermentation processes.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Fermentation Expert Maya Culture&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;dehydrators&apos;, 
      title: &apos;Food Dehydrators: Preserving Flavor and Nutrition&apos;, 
      excerpt: &apos;Advanced techniques for using dehydrators to create healthy snacks and ingredients.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Preservation Specialist Kim Dry&apos;,
      readTime: &apos;15 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Cooking Technology | Culinary Chronicles</title>
        <meta name="description&quot; content="Exploring the intersection of technology and culinary arts.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4&quot;>
              Cooking Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Exploring the intersection of technology and culinary arts. From precision cooking equipment to smart appliances, discover how innovation enhances traditional cooking methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {techArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl&quot;>
                      👨‍🍳
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors&quot;>
                    <Link href={`/blog/food/cooking-tech/${article.id}`} className="hover:text-orange-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}