import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CareerIndex() {
  // Career development guides data
  const careerGuides = [
    {
      id: &apos;resume-mastery-2025&apos;,
      title: &apos;Resume Mastery: Crafting the Perfect Resume for 2025&apos;,
      excerpt: &apos;Learn how to create a compelling resume that stands out in today\&apos;s competitive job market.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Career Expert Alex Career&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Resume&apos;, &apos;Job Search&apos;, &apos;2025&apos;]
    },
    {
      id: &apos;interview-success-strategies&apos;,
      title: &apos;Interview Success: Proven Strategies for Landing Your Dream Job&apos;,
      excerpt: &apos;Master the interview process with techniques that will set you apart from other candidates.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Interview Coach Maya Hire&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;Interview&apos;, &apos;Job Search&apos;, &apos;Success&apos;]
    },
    {
      id: &apos;networking-in-the-digital-age&apos;,
      title: &apos;Networking in the Digital Age: Building Professional Relationships Online&apos;,
      excerpt: &apos;Learn effective networking strategies for the modern professional landscape.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Networking Specialist Sam Connect&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Networking&apos;, &apos;Digital&apos;, &apos;Professional&apos;]
    },
    {
      id: &apos;salary-negotiation-essentials&apos;,
      title: &apos;Salary Negotiation: Essential Techniques for Getting What You Deserve&apos;,
      excerpt: &apos;Master the art of salary negotiation to maximize your compensation and career growth.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Negotiation Expert Dr. Jordan Pay&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Salary&apos;, &apos;Negotiation&apos;, &apos;Compensation&apos;]
    },
    {
      id: &apos;career-transition-strategies&apos;,
      title: &apos;Career Transition: Strategic Approaches to Changing Paths&apos;,
      excerpt: &apos;Navigate career changes with confidence using proven transition strategies.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Transition Coach Taylor Shift&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;Career&apos;, &apos;Transition&apos;, &apos;Change&apos;]
    },
    {
      id: &apos;leadership-development-journey&apos;,
      title: &apos;Leadership Development: Your Journey to Becoming an Effective Leader&apos;,
      excerpt: &apos;Develop essential leadership skills that will inspire teams and drive results.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Leadership Expert Casey Lead&apos;,
      readTime: &apos;28 min read&apos;,
      tags: [&apos;Leadership&apos;, &apos;Development&apos;, &apos;Management&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Career Development - Knowledge Compendium</title>
        <meta name="description&quot; content="Advance your career with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Career Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Advance your career with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {careerGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    📈
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
                  <Link href={`/blog/guides/career/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
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