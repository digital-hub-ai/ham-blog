import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function BusinessIndex() {
  // Business categories
  const categories = [
    { 
      id: &apos;strategy&apos;, 
      name: &apos;Business Strategy&apos;, 
      icon: &apos;🧭&apos;, 
      description: &apos;Navigate competitive landscapes and plan for future success&apos;,
      articles: [
        { id: &apos;ai-disruption-index-2025&apos;, title: &apos;AI Disruption Index 2025: Which Industries Will Transform Next?&apos; }
      ]
    },
    { 
      id: &apos;marketing&apos;, 
      name: &apos;Digital Marketing&apos;, 
      icon: &apos;📢&apos;, 
      description: &apos;Connect with audiences through cutting-edge marketing approaches&apos;,
      articles: [
        { id: &apos;metaverse-commerce-building-economy&apos;, title: &apos;Metaverse Commerce: Building the Economy of Virtual Worlds&apos; }
      ]
    },
    { 
      id: &apos;finance&apos;, 
      name: &apos;Finance & Investment&apos;, 
      icon: &apos;💰&apos;, 
      description: &apos;Manage resources and capitalize on emerging opportunities&apos;,
      articles: [
        { id: &apos;decentralized-finance-future&apos;, title: &apos;Decentralized Finance: The Future of Banking and Investments&apos; }
      ]
    },
    { 
      id: &apos;leadership&apos;, 
      name: &apos;Leadership&apos;, 
      icon: &apos;👑&apos;, 
      description: &apos;Inspire teams and drive organizational excellence&apos;,
      articles: [
        { id: &apos;distributed-leadership-remote-teams&apos;, title: &apos;Distributed Leadership: Managing Remote and Hybrid Teams&apos; }
      ]
    },
    { 
      id: &apos;innovation&apos;, 
      name: &apos;Innovation&apos;, 
      icon: &apos;💡&apos;, 
      description: &apos;Foster creativity and develop breakthrough solutions&apos;,
      articles: [
        { id: &apos;open-innovation-networks&apos;, title: &apos;Open Innovation Networks: Collaborative R&D in the Digital Age&apos; }
      ]
    },
    { 
      id: &apos;entrepreneurship&apos;, 
      name: &apos;Entrepreneurship&apos;, 
      icon: &apos;🚀&apos;, 
      description: &apos;Launch ventures and scale impactful businesses&apos;,
      articles: [
        { id: &apos;startup-scaling-playbook&apos;, title: &apos;Startup Scaling Playbook: From Seed to Series C&apos; }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Business Realm | Corporate Consciousness</title>
        <meta name="description&quot; content="Navigate the economic galaxies where strategy meets innovation and markets evolve.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <div className="mb-8&quot;>
            <Link href="/blog&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-4&quot;>
              <span className="mr-2&quot;>←</span>
              Back to Library of Realities
            </Link>
          </div>

          <div className="text-center mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>Corporate Consciousness</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto&quot;>
              Navigate the economic galaxies where strategy meets innovation and markets evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12&quot;>
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-2xl border border-gray-200 p-6&quot;>
                <div className="flex items-center mb-4&quot;>
                  <span className="text-2xl mr-3&quot;>{category.icon}</span>
                  <h2 className="text-xl font-bold&quot;>{category.name}</h2>
                </div>
                <p className="text-gray-600 mb-4&quot;>{category.description}</p>
                
                <div className="space-y-3&quot;>
                  {category.articles.map((article) => (
                    <div key={article.id} className="border-l-4 border-amber-500 pl-3&quot;>
                      <Link 
                        href={`/blog/business/${category.id}/${article.id}`}
                        className="text-amber-700 hover:text-amber-900 font-medium&quot;
                      >
                        {article.title}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4&quot;>
                  <Link 
                    href={`/blog/business/${category.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium&quot;
                  >
                    View all articles <span className="ml-1&quot;>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center&quot;>
            <Link 
              href="/blog&quot;
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300&quot;
            >
              ← Return to Library
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}