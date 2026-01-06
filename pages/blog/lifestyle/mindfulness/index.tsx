import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function MindfulnessIndex() {
  // Mindfulness articles
  const mindfulnessArticles = [
    { 
      id: &apos;mindful-living&apos;, 
      title: &apos;Mindful Living in the Digital Age: Finding Balance Amid Constant Connectivity&apos;, 
      excerpt: &apos;Practical strategies for maintaining mental clarity and emotional well-being in our hyperconnected world.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;meditation-beginners&apos;, 
      title: &apos;Meditation Techniques for Beginners: A Complete Guide&apos;, 
      excerpt: &apos;Learn essential meditation techniques for beginners. Start your mindfulness journey with simple, effective practices for stress relief and mental clarity.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;stress-reduction&apos;, 
      title: &apos;Stress Reduction Through Mindfulness: Evidence-Based Techniques&apos;, 
      excerpt: &apos;Discover scientifically-backed mindfulness techniques for stress reduction. Learn practical strategies to manage stress and enhance well-being.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;mindful-breathing&apos;, 
      title: &apos;Mindful Breathing Practices: Transform Your Daily Life&apos;, 
      excerpt: &apos;Master mindful breathing techniques to reduce stress, enhance focus, and cultivate inner peace. Simple practices for everyday well-being.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;gratitude-mindfulness&apos;, 
      title: &apos;Gratitude and Mindfulness: Cultivating Appreciation for Everyday Life&apos;, 
      excerpt: &apos;Learn how combining gratitude practices with mindfulness enhances well-being, relationships, and life satisfaction. Practical techniques for daily appreciation.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;mindful-eating&apos;, 
      title: &apos;Mindful Eating Practices: Transform Your Relationship with Food&apos;, 
      excerpt: &apos;Discover how mindful eating enhances digestion, satisfaction, and overall well-being. Learn practical techniques to develop a healthier relationship with food.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;sleep-mindfulness&apos;, 
      title: &apos;Sleep and Mindfulness Connection: Restorative Nights for Better Days&apos;, 
      excerpt: &apos;Discover how mindfulness practices improve sleep quality and create a foundation for better mental and physical health. Learn techniques for peaceful nights.&apos;,
      date: &apos;Dec 15, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;emotional-regulation&apos;, 
      title: &apos;Mindfulness for Emotional Regulation: Navigate Feelings with Wisdom&apos;, 
      excerpt: &apos;Learn evidence-based mindfulness techniques for emotional regulation. Develop skills to navigate difficult emotions with greater ease and wisdom.&apos;,
      date: &apos;Dec 14, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;nature-mindfulness&apos;, 
      title: &apos;Nature-Based Mindfulness Practices: Reconnect with the Natural World&apos;, 
      excerpt: &apos;Discover powerful nature-based mindfulness practices that enhance well-being and deepen your connection with the natural world. Simple techniques for outdoor awareness.&apos;,
      date: &apos;Dec 13, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;productivity-mindfulness&apos;, 
      title: &apos;Mindfulness for Productivity: Work Smarter, Not Harder&apos;, 
      excerpt: &apos;Learn how mindfulness enhances productivity, focus, and work satisfaction. Discover practical techniques to integrate mindfulness into your daily workflow.&apos;,
      date: &apos;Dec 12, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;compassion-meditation&apos;, 
      title: &apos;Compassion Meditation Practices: Cultivate Loving-Kindness&apos;, 
      excerpt: &apos;Master compassion meditation techniques that enhance empathy, reduce stress, and improve relationships. Learn practices for developing loving-kindness toward yourself and others.&apos;,
      date: &apos;Dec 11, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;16 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Mindfulness | Lifestyle Dimension</title>
        <meta name="description&quot; content="Cultivate presence, awareness, and mental well-being through mindful practices.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/lifestyle&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Mindfulness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Cultivate presence, awareness, and mental well-being through mindful practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {mindfulnessArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/lifestyle/mindfulness/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/mindfulness/${article.id}`}
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