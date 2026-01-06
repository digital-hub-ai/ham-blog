import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function LifeSkillsIndex() {
  // Life skills guides data
  const lifeSkillsGuides = [
    {
      id: &apos;mastering-personal-finance-2025&apos;,
      title: &apos;Mastering Personal Finance: A Complete Guide to Financial Freedom&apos;,
      excerpt: &apos;Learn essential financial skills to build wealth, manage debt, and secure your financial future.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Financial Advisor Alex Wealth&apos;,
      readTime: &apos;25 min read&apos;,
      tags: [&apos;Finance&apos;, &apos;Money&apos;, &apos;Wealth&apos;]
    },
    {
      id: &apos;time-management-mastery&apos;,
      title: &apos;Time Management Mastery: Productivity Techniques That Actually Work&apos;,
      excerpt: &apos;Discover proven time management strategies that will transform your daily productivity and efficiency.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Productivity Expert Maya Focus&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Productivity&apos;, &apos;Time&apos;, &apos;Efficiency&apos;]
    },
    {
      id: &apos;effective-communication-skills&apos;,
      title: &apos;Effective Communication: Building Stronger Relationships Through Better Dialogue&apos;,
      excerpt: &apos;Master the art of communication to improve personal and professional relationships.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Communication Coach Sam Connect&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;Communication&apos;, &apos;Relationships&apos;, &apos;Skills&apos;]
    },
    {
      id: &apos;stress-management-techniques&apos;,
      title: &apos;Stress Management: Proven Techniques for Mental Well-being&apos;,
      excerpt: &apos;Learn practical strategies to manage stress and maintain mental health in challenging times.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Wellness Expert Dr. Jordan Balance&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Wellness&apos;, &apos;Stress&apos;, &apos;Mental Health&apos;]
    },
    {
      id: &apos;home-organization-systems&apos;,
      title: &apos;Home Organization: Creating Systems for a Clutter-Free Life&apos;,
      excerpt: &apos;Build sustainable home organization systems that will keep your space tidy and functional.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Organization Specialist Taylor Order&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Organization&apos;, &apos;Home&apos;, &apos;Systems&apos;]
    },
    {
      id: &apos;cooking-essentials-beginners&apos;,
      title: &apos;Cooking Essentials: A Beginner\&apos;s Guide to Kitchen Mastery&apos;,
      excerpt: &apos;Master fundamental cooking techniques and build confidence in the kitchen with this comprehensive guide.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Chef Expert Casey Kitchen&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;Cooking&apos;, &apos;Kitchen&apos;, &apos;Basics&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Life Skills - Knowledge Compendium</title>
        <meta name="description&quot; content="Master essential life skills with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Life Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Master essential life skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {lifeSkillsGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    🛠️
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
                  <Link href={`/blog/guides/life-skills/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
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