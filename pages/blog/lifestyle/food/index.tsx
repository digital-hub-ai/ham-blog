import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FoodIndex() {
  // Food & Nutrition articles
  const foodArticles = [
    { 
      id: 'nutritional-genomics', 
      title: 'Nutritional Genomics: Eating Based on Your DNA Blueprint', 
      excerpt: 'How personalized nutrition based on genetic profiling is revolutionizing dietary approaches for optimal health.',
      date: 'Dec 19, 2025',
      author: 'Nutritionist Dr. Leo Genome',
      readTime: '14 min read'
    },
    { 
      id: 'microbiome-nutrition', 
      title: 'Gut Microbiome and Nutrition: The Digestive Ecosystem', 
      excerpt: 'How the trillions of microorganisms in your gut influence nutrient absorption, immune function, and overall health.',
      date: 'Dec 17, 2025',
      author: 'Microbiologist Dr. Flora Balance',
      readTime: '13 min read'
    },
    { 
      id: 'intermittent-fasting', 
      title: 'Intermittent Fasting: Metabolic Benefits and Longevity', 
      excerpt: 'Scientific evidence supporting time-restricted eating for weight management, cellular repair, and lifespan extension.',
      date: 'Dec 15, 2025',
      author: 'Nutrition Scientist Dr. Metabo Lite',
      readTime: '15 min read'
    },
    { 
      id: 'plant-based-nutrition', 
      title: 'Plant-Based Nutrition: Optimizing Health with Whole Foods', 
      excerpt: 'Evidence-based approaches to plant-centered eating for disease prevention, longevity, and environmental sustainability.',
      date: 'Dec 13, 2025',
      author: 'Nutritionist Dr. Green Leaf',
      readTime: '16 min read'
    },
    { 
      id: 'functional-foods', 
      title: 'Functional Foods: Bioactive Compounds for Health Optimization', 
      excerpt: 'Harnessing the therapeutic potential of phytonutrients, probiotics, and other bioactive compounds in everyday foods.',
      date: 'Dec 11, 2025',
      author: 'Nutrition Biochemist Dr. Phyto Rich',
      readTime: '14 min read'
    },
    { 
      id: 'hydration-science', 
      title: 'Hydration Science: Optimizing Fluid Balance for Peak Performance', 
      excerpt: 'Evidence-based strategies for maintaining optimal hydration to support cognitive function, physical performance, and cellular health.',
      date: 'Dec 9, 2025',
      author: 'Sports Nutritionist Dr. Aqua Flow',
      readTime: '13 min read'
    },
    { 
      id: 'anti-inflammatory-diet', 
      title: 'Anti-Inflammatory Diet: Reducing Chronic Inflammation Through Food', 
      excerpt: 'Scientific approaches to combating chronic inflammation, a root cause of many modern diseases, through strategic food choices.',
      date: 'Dec 7, 2025',
      author: 'Inflammation Specialist Dr. Quencher Flame',
      readTime: '15 min read'
    },
    { 
      id: 'sports-nutrition', 
      title: 'Sports Nutrition: Fueling Athletic Performance and Recovery', 
      excerpt: 'Evidence-based strategies for optimizing energy availability, enhancing performance, and accelerating recovery through strategic nutrition.',
      date: 'Dec 5, 2025',
      author: 'Sports Dietitian Dr. Peak Performance',
      readTime: '16 min read'
    },
    { 
      id: 'gut-healing-nutrition', 
      title: 'Gut Healing Nutrition: Restoring Digestive Health Through Diet', 
      excerpt: 'Therapeutic dietary approaches for repairing intestinal permeability, balancing gut flora, and resolving digestive disorders.',
      date: 'Dec 3, 2025',
      author: 'Gastroenterologist Dr. Heal Thy Gut',
      readTime: '15 min read'
    },
    { 
      id: 'bone-health-nutrition', 
      title: 'Bone Health Nutrition: Building Strong Bones Throughout Life', 
      excerpt: 'Comprehensive strategies for optimizing bone density, preventing osteoporosis, and maintaining skeletal integrity through targeted nutrition.',
      date: 'Dec 1, 2025',
      author: 'Bone Health Specialist Dr. Skeletal Strong',
      readTime: '14 min read'
    },
    { 
      id: 'immune-support-nutrition', 
      title: 'Immune Support Nutrition: Strengthening Defenses Through Diet', 
      excerpt: 'Evidence-based strategies for optimizing immune function, preventing infections, and reducing inflammation through targeted nutritional interventions.',
      date: 'Nov 29, 2025',
      author: 'Immunologist Dr. Defense Strong',
      readTime: '15 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Food & Nutrition | Lifestyle Dimension</title>
        <meta name="description" content="Explore the intersection of nutrition, science, and personalized health." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Food & Nutrition
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore the intersection of nutrition, science, and personalized health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/lifestyle/food/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/food/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/lifestyle"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300"
            >
              ← Back to Lifestyle Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}