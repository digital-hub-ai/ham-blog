import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function FoodIndex() {
  // Food & Nutrition articles
  const foodArticles = [
    { 
      id: &apos;nutritional-genomics&apos;, 
      title: &apos;Nutritional Genomics: Eating Based on Your DNA Blueprint&apos;, 
      excerpt: &apos;How personalized nutrition based on genetic profiling is revolutionizing dietary approaches for optimal health.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Nutritionist Dr. Leo Genome&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;microbiome-nutrition&apos;, 
      title: &apos;Gut Microbiome and Nutrition: The Digestive Ecosystem&apos;, 
      excerpt: &apos;How the trillions of microorganisms in your gut influence nutrient absorption, immune function, and overall health.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Microbiologist Dr. Flora Balance&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;intermittent-fasting&apos;, 
      title: &apos;Intermittent Fasting: Metabolic Benefits and Longevity&apos;, 
      excerpt: &apos;Scientific evidence supporting time-restricted eating for weight management, cellular repair, and lifespan extension.&apos;,
      date: &apos;Dec 15, 2025&apos;,
      author: &apos;Nutrition Scientist Dr. Metabo Lite&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;plant-based-nutrition&apos;, 
      title: &apos;Plant-Based Nutrition: Optimizing Health with Whole Foods&apos;, 
      excerpt: &apos;Evidence-based approaches to plant-centered eating for disease prevention, longevity, and environmental sustainability.&apos;,
      date: &apos;Dec 13, 2025&apos;,
      author: &apos;Nutritionist Dr. Green Leaf&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;functional-foods&apos;, 
      title: &apos;Functional Foods: Bioactive Compounds for Health Optimization&apos;, 
      excerpt: &apos;Harnessing the therapeutic potential of phytonutrients, probiotics, and other bioactive compounds in everyday foods.&apos;,
      date: &apos;Dec 11, 2025&apos;,
      author: &apos;Nutrition Biochemist Dr. Phyto Rich&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;hydration-science&apos;, 
      title: &apos;Hydration Science: Optimizing Fluid Balance for Peak Performance&apos;, 
      excerpt: &apos;Evidence-based strategies for maintaining optimal hydration to support cognitive function, physical performance, and cellular health.&apos;,
      date: &apos;Dec 9, 2025&apos;,
      author: &apos;Sports Nutritionist Dr. Aqua Flow&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;anti-inflammatory-diet&apos;, 
      title: &apos;Anti-Inflammatory Diet: Reducing Chronic Inflammation Through Food&apos;, 
      excerpt: &apos;Scientific approaches to combating chronic inflammation, a root cause of many modern diseases, through strategic food choices.&apos;,
      date: &apos;Dec 7, 2025&apos;,
      author: &apos;Inflammation Specialist Dr. Quencher Flame&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;sports-nutrition&apos;, 
      title: &apos;Sports Nutrition: Fueling Athletic Performance and Recovery&apos;, 
      excerpt: &apos;Evidence-based strategies for optimizing energy availability, enhancing performance, and accelerating recovery through strategic nutrition.&apos;,
      date: &apos;Dec 5, 2025&apos;,
      author: &apos;Sports Dietitian Dr. Peak Performance&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;gut-healing-nutrition&apos;, 
      title: &apos;Gut Healing Nutrition: Restoring Digestive Health Through Diet&apos;, 
      excerpt: &apos;Therapeutic dietary approaches for repairing intestinal permeability, balancing gut flora, and resolving digestive disorders.&apos;,
      date: &apos;Dec 3, 2025&apos;,
      author: &apos;Gastroenterologist Dr. Heal Thy Gut&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;bone-health-nutrition&apos;, 
      title: &apos;Bone Health Nutrition: Building Strong Bones Throughout Life&apos;, 
      excerpt: &apos;Comprehensive strategies for optimizing bone density, preventing osteoporosis, and maintaining skeletal integrity through targeted nutrition.&apos;,
      date: &apos;Dec 1, 2025&apos;,
      author: &apos;Bone Health Specialist Dr. Skeletal Strong&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;immune-support-nutrition&apos;, 
      title: &apos;Immune Support Nutrition: Strengthening Defenses Through Diet&apos;, 
      excerpt: &apos;Evidence-based strategies for optimizing immune function, preventing infections, and reducing inflammation through targeted nutritional interventions.&apos;,
      date: &apos;Nov 29, 2025&apos;,
      author: &apos;Immunologist Dr. Defense Strong&apos;,
      readTime: &apos;15 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Food & Nutrition | Lifestyle Dimension</title>
        <meta name="description&quot; content="Explore the intersection of nutrition, science, and personalized health.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/lifestyle&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Food & Nutrition
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore the intersection of nutrition, science, and personalized health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {foodArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/lifestyle/food/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/food/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm&quot;
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
              href="/blog/lifestyle&quot;
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300&quot;
            >
              ← Back to Lifestyle Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}