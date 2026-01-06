import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function NutritionIndex() {
  // Nutrition articles
  const nutritionArticles = [
    { 
      id: &apos;macro-tracking&apos;, 
      title: &apos;Understanding Macronutrient Tracking&apos;, 
      excerpt: &apos;A comprehensive guide to tracking proteins, carbs, and fats for optimal health.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Nutritionist Sarah Balance&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;superfoods&apos;, 
      title: &apos;Debunking Superfood Myths and Facts&apos;, 
      excerpt: &apos;Separating scientific evidence from marketing claims about superfoods.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Dietitian Dr. James Truth&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;plant-proteins&apos;, 
      title: &apos;Complete Plant Protein Combinations&apos;, 
      excerpt: &apos;How to get all essential amino acids from plant-based sources.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Plant Expert Maya Green&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;gut-health&apos;, 
      title: &apos;The Microbiome Diet: Nourishing Your Gut&apos;, 
      excerpt: &apos;Foods and eating patterns that support digestive health and immunity.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Gut Specialist Dr. Emma Flora&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;antioxidants&apos;, 
      title: &apos;Antioxidant Power: Fighting Oxidative Stress&apos;, 
      excerpt: &apos;Understanding how antioxidants protect your body and which foods are richest in them.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Health Researcher Dr. Alex Defense&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;hydration&apos;, 
      title: &apos;Beyond Water: Optimal Hydration Strategies&apos;, 
      excerpt: &apos;How to maintain proper hydration through food, beverages, and timing.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Hydration Expert Dr. Chris Fluid&apos;,
      readTime: &apos;12 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Nutrition | Culinary Chronicles</title>
        <meta name="description&quot; content="Evidence-based nutrition information and healthy eating strategies.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-green-400 hover:text-green-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
              Nutrition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Evidence-based nutrition information and healthy eating strategies. Explore how food fuels your body, mind, and overall well-being with expert insights and practical advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {nutritionArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                      🥗
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors&quot;>
                    <Link href={`/blog/food/nutrition/${article.id}`} className="hover:text-green-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}