import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function FoodScienceIndex() {
  // Food science articles
  const scienceArticles = [
    { 
      id: &apos;maillard&apos;, 
      title: &apos;The Maillard Reaction: Creating Flavor Through Chemistry&apos;, 
      excerpt: &apos;Understanding how browning reactions create complex flavors in cooking.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Food Scientist Dr. Amy Reaction&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;emulsions&apos;, 
      title: &apos;Perfect Emulsions: The Science of Stable Mixtures&apos;, 
      excerpt: &apos;How oil and water can be combined through scientific principles.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Chemistry Chef Dr. Oliver Stable&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;fermentation&apos;, 
      title: &apos;Fermentation Fundamentals: Microbes as Culinary Tools&apos;, 
      excerpt: &apos;Exploring how beneficial bacteria and yeasts transform food.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Microbiologist Chef Dr. Maya Culture&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;texture&apos;, 
      title: &apos;Texture Engineering: From Liquid to Gel&apos;, 
      excerpt: &apos;How hydrocolloids and other ingredients modify food texture.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Texture Expert Dr. Sarah Mouthfeel&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;preservation&apos;, 
      title: &apos;Ancient Preservation, Modern Science&apos;, 
      excerpt: &apos;The scientific principles behind traditional food preservation methods.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Preservation Scientist Dr. James Longevity&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;flavor&apos;, 
      title: &apos;Flavor Chemistry: How Taste and Aroma Interact&apos;, 
      excerpt: &apos;The science behind how our senses perceive flavor in food.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Flavor Scientist Dr. Zoe Perception&apos;,
      readTime: &apos;15 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Food Science | Culinary Chronicles</title>
        <meta name="description&quot; content="Exploring the scientific principles behind cooking and food.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4&quot;>
              Food Science
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Exploring the scientific principles behind cooking and food. From chemical reactions to physical transformations, understand the fascinating science that makes cooking possible and delicious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {scienceArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-700/50 hover:border-cyan-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-3xl&quot;>
                      🔬
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors&quot;>
                    <Link href={`/blog/food/food-science/${article.id}`} className="hover:text-cyan-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}