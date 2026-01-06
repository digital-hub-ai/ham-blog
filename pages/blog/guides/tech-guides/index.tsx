import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function TechGuidesIndex() {
  // Tech guides data
  const techGuides = [
    {
      id: &apos;the-ethics-of-code-a-developers-guide-to-responsible-tool-selection&apos;,
      title: &apos;The Ethics of Code: A Developer\&apos;s Guide to Responsible Tool Selection&apos;,
      excerpt: &apos;Navigate the complex landscape of technology choices with this comprehensive guide to ethical development practices.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Tech Ethicist Dr. Maya Code&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Ethics&apos;, &apos;Development&apos;, &apos;Technology&apos;]
    },
    {
      id: &apos;mastering-cloud-architecture-2025&apos;,
      title: &apos;Mastering Cloud Architecture: Essential Patterns for 2025&apos;,
      excerpt: &apos;Deep dive into the most important cloud architecture patterns that will define the next year of development.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Cloud Architect Alex Cloud&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Cloud&apos;, &apos;Architecture&apos;, &apos;2025&apos;]
    },
    {
      id: &apos;devops-mastery-advanced-techniques&apos;,
      title: &apos;DevOps Mastery: Advanced Techniques for Modern Deployment&apos;,
      excerpt: &apos;Learn advanced DevOps strategies that will streamline your deployment pipeline and improve system reliability.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;DevOps Engineer Sam Pipeline&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;DevOps&apos;, &apos;Deployment&apos;, &apos;CI/CD&apos;]
    },
    {
      id: &apos;cybersecurity-fundamentals-2025&apos;,
      title: &apos;Cybersecurity Fundamentals: Protecting Systems in 2025&apos;,
      excerpt: &apos;Essential cybersecurity practices every developer should know to build secure applications.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Security Expert Jordan Shield&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Security&apos;, &apos;Cybersecurity&apos;, &apos;2025&apos;]
    },
    {
      id: &apos;ai-integration-patterns&apos;,
      title: &apos;AI Integration Patterns: Seamlessly Adding Intelligence to Apps&apos;,
      excerpt: &apos;Practical patterns for integrating AI capabilities into existing applications without architectural disruption.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;AI Engineer Casey Neural&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;AI&apos;, &apos;Integration&apos;, &apos;Patterns&apos;]
    },
    {
      id: &apos;quantum-computing-readiness&apos;,
      title: &apos;Quantum Computing Readiness: Preparing for the Next Revolution&apos;,
      excerpt: &apos;Understand how quantum computing will impact development practices and how to prepare for this paradigm shift.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Quantum Specialist Taylor Qubit&apos;,
      readTime: &apos;28 min read&apos;,
      tags: [&apos;Quantum&apos;, &apos;Future&apos;, &apos;Preparation&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Technology Guides - Knowledge Compendium</title>
        <meta name="description&quot; content="Master essential technology skills with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Technology Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Master essential technology skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {techGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    💻
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
                  <Link href={`/blog/guides/tech-guides/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
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