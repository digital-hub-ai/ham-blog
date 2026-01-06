import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function HealthIndex() {
  // Health & fitness guides data
  const healthGuides = [
    {
      id: &apos;fitness-fundamentals-beginners&apos;,
      title: &apos;Fitness Fundamentals: A Complete Guide for Beginners&apos;,
      excerpt: &apos;Start your fitness journey with essential exercises, routines, and mindset strategies.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Fitness Coach Alex Strong&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Fitness&apos;, &apos;Beginners&apos;, &apos;Health&apos;]
    },
    {
      id: &apos;nutrition-science-basics&apos;,
      title: &apos;Nutrition Science: Understanding the Building Blocks of Health&apos;,
      excerpt: &apos;Learn the scientific principles behind healthy eating and optimal nutrition.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Nutritionist Dr. Maya Fuel&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Nutrition&apos;, &apos;Science&apos;, &apos;Health&apos;]
    },
    {
      id: &apos;mental-health-matters&apos;,
      title: &apos;Mental Health Matters: Building Emotional Resilience&apos;,
      excerpt: &apos;Develop strategies for maintaining mental wellness and emotional balance.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Psychologist Dr. Jordan Mind&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;Mental Health&apos;, &apos;Wellness&apos;, &apos;Resilience&apos;]
    },
    {
      id: &apos;sleep-optimization-guide&apos;,
      title: &apos;Sleep Optimization: The Science of Restorative Rest&apos;,
      excerpt: &apos;Master the art and science of getting quality sleep for better health and performance.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Sleep Expert Taylor Rest&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Sleep&apos;, &apos;Optimization&apos;, &apos;Health&apos;]
    },
    {
      id: &apos;home-workout-routines&apos;,
      title: &apos;Home Workout Routines: Effective Exercise Without Equipment&apos;,
      excerpt: &apos;Achieve your fitness goals with bodyweight exercises and creative home workout strategies.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Personal Trainer Casey Move&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;Workout&apos;, &apos;Home&apos;, &apos;Exercise&apos;]
    },
    {
      id: &apos;mindfulness-meditation-guide&apos;,
      title: &apos;Mindfulness Meditation: A Beginner\&apos;s Path to Inner Peace&apos;,
      excerpt: &apos;Learn meditation techniques that will reduce stress and improve mental clarity.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Meditation Teacher Sam Zen&apos;,
      readTime: &apos;28 min read&apos;,
      tags: [&apos;Mindfulness&apos;, &apos;Meditation&apos;, &apos;Wellness&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Health & Fitness - Knowledge Compendium</title>
        <meta name="description&quot; content="Improve your health and fitness with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Health & Fitness
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Improve your health and fitness with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {healthGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    💪
                  </div>
                </div>
              </div>
              <div className="p-6&quot;>
                <div className="flex flex-wrap gap-2 mb-4&quot;>
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors&quot;>
                  <Link href={`/blog/guides/health/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4&quot;>
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between&quot;>
                  <span className="text-gray-500 text-sm&quot;>By {guide.author}</span>
                  <div className="text-right&quot;>
                    <span className="text-gray-500 text-sm block&quot;>{guide.date}</span>
                    <span className="text-gray-500 text-sm&quot;>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center&quot;>
          <Link 
            href="/blog/guides&quot;
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300&quot;
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}