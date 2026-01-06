import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function WellnessIndex() {
  // Wellness articles
  const wellnessArticles = [
    { 
      id: &apos;holistic-wellness-guide&apos;, 
      title: &apos;Holistic Wellness: Integrating Mind, Body, and Spirit for Optimal Health&apos;, 
      excerpt: &apos;A comprehensive guide to achieving balance and vitality through integrated approaches to physical, mental, and spiritual well-being.&apos;,
      date: &apos;Dec 15, 2025&apos;,
      author: &apos;Wellness Expert Sam Harmony&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;morning-routine-optimization&apos;, 
      title: &apos;Optimizing Your Morning Routine for Peak Performance&apos;, 
      excerpt: &apos;Science-backed strategies to design a morning routine that boosts energy, focus, and overall well-being throughout the day.&apos;,
      date: &apos;Dec 14, 2025&apos;,
      author: &apos;Wellness Coach Dawn Maxwell&apos;,
      readTime: &apos;11 min read&apos;
    },
    { 
      id: &apos;sleep-optimization&apos;, 
      title: &apos;Sleep Optimization: Mastering Your Body\&apos;s Recovery Cycle&apos;, 
      excerpt: &apos;Evidence-based techniques to improve sleep quality and duration for enhanced cognitive function, mood stability, and physical recovery.&apos;,
      date: &apos;Dec 13, 2025&apos;,
      author: &apos;Sleep Specialist Dr. Luna Rest&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;stress-management&apos;, 
      title: &apos;Stress Management Mastery: Building Resilience in a Demanding World&apos;, 
      excerpt: &apos;Practical techniques and mindset shifts to transform stress from a hindrance into a catalyst for growth and performance.&apos;,
      date: &apos;Dec 12, 2025&apos;,
      author: &apos;Resilience Coach Calm Strong&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;emotional-intelligence&apos;, 
      title: &apos;Emotional Intelligence: The Foundation of Authentic Relationships&apos;, 
      excerpt: &apos;Developing emotional awareness and regulation skills to enhance personal relationships, professional success, and overall well-being.&apos;,
      date: &apos;Dec 11, 2025&apos;,
      author: &apos;EQ Expert Dr. Heart Wise&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;nutritional-wellness&apos;, 
      title: &apos;Nutritional Wellness: Fueling Your Body for Optimal Energy&apos;, 
      excerpt: &apos;Evidence-based approaches to nutrition that support sustained energy, mental clarity, and long-term health without restrictive dieting.&apos;,
      date: &apos;Dec 10, 2025&apos;,
      author: &apos;Nutritionist Dr. Vitality Bloom&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;physical-fitness&apos;, 
      title: &apos;Physical Fitness Fundamentals: Building Strength and Endurance&apos;, 
      excerpt: &apos;Science-backed approaches to exercise that improve physical health, mental well-being, and longevity without extreme training regimens.&apos;,
      date: &apos;Dec 9, 2025&apos;,
      author: &apos;Fitness Expert Dr. Motion Strong&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;social-wellness&apos;, 
      title: &apos;Social Wellness: Cultivating Meaningful Connections&apos;, 
      excerpt: &apos;Building and maintaining healthy relationships that provide support, belonging, and mutual growth throughout life\&apos;s journey.&apos;,
      date: &apos;Dec 8, 2025&apos;,
      author: &apos;Relationship Expert Dr. Connect Well&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;spiritual-wellness&apos;, 
      title: &apos;Spiritual Wellness: Connecting with Purpose and Meaning&apos;, 
      excerpt: &apos;Exploring personal beliefs, values, and practices that provide direction, peace, and connection to something greater than oneself.&apos;,
      date: &apos;Dec 7, 2025&apos;,
      author: &apos;Spiritual Guide Dr. Soul Seek&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;environmental-wellness&apos;, 
      title: &apos;Environmental Wellness: Living in Harmony with Nature&apos;, 
      excerpt: &apos;Creating healthy living spaces and sustainable practices that support personal well-being while protecting the planet for future generations.&apos;,
      date: &apos;Dec 6, 2025&apos;,
      author: &apos;Eco Wellness Expert Dr. Green Life&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;financial-wellness&apos;, 
      title: &apos;Financial Wellness: Achieving Security and Freedom&apos;, 
      excerpt: &apos;Building financial literacy, security, and freedom through mindful money management and strategic planning for present needs and future goals.&apos;,
      date: &apos;Dec 5, 2025&apos;,
      author: &apos;Financial Wellness Expert Dr. Money Wise&apos;,
      readTime: &apos;14 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Wellness | Lifestyle Dimension</title>
        <meta name="description&quot; content="Holistic approaches to physical, mental, and emotional well-being for a balanced life.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/lifestyle&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Wellness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Holistic approaches to physical, mental, and emotional well-being for a balanced life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {wellnessArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/lifestyle/wellness/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/wellness/${article.id}`}
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