import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function RelationshipsIndex() {
  // Relationships articles
  const relationshipsArticles = [
    {
      id: &apos;effective-communication&apos;,
      title: &apos;Effective Communication in Relationships&apos;,
      excerpt: &apos;Master the art of meaningful dialogue to build stronger connections with your loved ones.&apos;,
      date: &apos;Dec 19, 2025&apos;
    },
    {
      id: &apos;building-trust&apos;,
      title: &apos;Building Trust and Intimacy&apos;,
      excerpt: &apos;Learn proven strategies to develop deeper trust and emotional closeness in your relationships.&apos;,
      date: &apos;Dec 18, 2025&apos;
    },
    {
      id: &apos;conflict-resolution&apos;,
      title: &apos;Conflict Resolution Skills&apos;,
      excerpt: &apos;Transform disagreements into opportunities for growth and deeper understanding.&apos;,
      date: &apos;Dec 17, 2025&apos;
    },
    {
      id: &apos;emotional-intelligence&apos;,
      title: &apos;Emotional Intelligence in Relationships&apos;,
      excerpt: &apos;Develop emotional intelligence to enhance relationship satisfaction and intimacy.&apos;,
      date: &apos;Dec 17, 2025&apos;
    },
    {
      id: &apos;long-distance&apos;,
      title: &apos;Maintaining Long-Distance Relationships&apos;,
      excerpt: &apos;Proven strategies for keeping love alive across miles and time zones.&apos;,
      date: &apos;Dec 16, 2025&apos;
    },
    {
      id: &apos;friendship-dynamics&apos;,
      title: &apos;Friendship Dynamics and Maintenance&apos;,
      excerpt: &apos;Nurture lifelong bonds through understanding and intentional connection.&apos;,
      date: &apos;Dec 15, 2025&apos;
    },
    {
      id: &apos;family-challenges&apos;,
      title: &apos;Family Relationship Challenges&apos;,
      excerpt: &apos;Navigate complex family dynamics with communication and healthy boundaries.&apos;,
      date: &apos;Dec 14, 2025&apos;
    },
    {
      id: &apos;workplace-boundaries&apos;,
      title: &apos;Workplace Relationship Boundaries&apos;,
      excerpt: &apos;Maintain professional connections while protecting your career and wellbeing.&apos;,
      date: &apos;Dec 13, 2025&apos;
    },
    {
      id: &apos;self-love&apos;,
      title: &apos;Self-Love and Healthy Relationships&apos;,
      excerpt: &apos;Discover how self-compassion forms the foundation for all healthy connections.&apos;,
      date: &apos;Dec 12, 2025&apos;
    },
    {
      id: &apos;navigating-transitions&apos;,
      title: &apos;Navigating Relationship Transitions&apos;,
      excerpt: &apos;Adapt to life changes and build stronger bonds through transformation.&apos;,
      date: &apos;Dec 11, 2025&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Relationships | Lifestyle Dimension</title>
        <meta name="description&quot; content="Build stronger connections through communication, empathy, and emotional intelligence.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/lifestyle&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Relationships
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Build stronger connections through communication, empathy, and emotional intelligence.
            </p>
          </div>

          {relationshipsArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {relationshipsArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
                >
                  <div className="p-6&quot;>
                    <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                      <Link href={`/blog/lifestyle/relationships/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4&quot;>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                      <Link 
                        href={`/blog/lifestyle/relationships/${article.id}`}
                        className="text-violet-600 hover:text-violet-800 text-sm&quot;
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12&quot;>
              <div className="text-5xl mb-4&quot;>❤️</div>
              <h3 className="text-2xl font-bold mb-2&quot;>Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto&quot;>
                We&apos;re working on bringing you the latest insights in building meaningful relationships.
              </p>
            </div>
          )}

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