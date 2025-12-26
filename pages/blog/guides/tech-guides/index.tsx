import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TechGuidesIndex() {
  // Tech guides data
  const techGuides = [
    {
      id: 'the-ethics-of-code-a-developers-guide-to-responsible-tool-selection',
      title: 'The Ethics of Code: A Developer\'s Guide to Responsible Tool Selection',
      excerpt: 'Navigate the complex landscape of technology choices with this comprehensive guide to ethical development practices.',
      date: 'Dec 22, 2025',
      author: 'Tech Ethicist Dr. Maya Code',
      readTime: '24 min read',
      tags: ['Ethics', 'Development', 'Technology']
    },
    {
      id: 'mastering-cloud-architecture-2025',
      title: 'Mastering Cloud Architecture: Essential Patterns for 2025',
      excerpt: 'Deep dive into the most important cloud architecture patterns that will define the next year of development.',
      date: 'Dec 21, 2025',
      author: 'Cloud Architect Alex Cloud',
      readTime: '22 min read',
      tags: ['Cloud', 'Architecture', '2025']
    },
    {
      id: 'devops-mastery-advanced-techniques',
      title: 'DevOps Mastery: Advanced Techniques for Modern Deployment',
      excerpt: 'Learn advanced DevOps strategies that will streamline your deployment pipeline and improve system reliability.',
      date: 'Dec 20, 2025',
      author: 'DevOps Engineer Sam Pipeline',
      readTime: '20 min read',
      tags: ['DevOps', 'Deployment', 'CI/CD']
    },
    {
      id: 'cybersecurity-fundamentals-2025',
      title: 'Cybersecurity Fundamentals: Protecting Systems in 2025',
      excerpt: 'Essential cybersecurity practices every developer should know to build secure applications.',
      date: 'Dec 19, 2025',
      author: 'Security Expert Jordan Shield',
      readTime: '18 min read',
      tags: ['Security', 'Cybersecurity', '2025']
    },
    {
      id: 'ai-integration-patterns',
      title: 'AI Integration Patterns: Seamlessly Adding Intelligence to Apps',
      excerpt: 'Practical patterns for integrating AI capabilities into existing applications without architectural disruption.',
      date: 'Dec 18, 2025',
      author: 'AI Engineer Casey Neural',
      readTime: '26 min read',
      tags: ['AI', 'Integration', 'Patterns']
    },
    {
      id: 'quantum-computing-readiness',
      title: 'Quantum Computing Readiness: Preparing for the Next Revolution',
      excerpt: 'Understand how quantum computing will impact development practices and how to prepare for this paradigm shift.',
      date: 'Dec 17, 2025',
      author: 'Quantum Specialist Taylor Qubit',
      readTime: '28 min read',
      tags: ['Quantum', 'Future', 'Preparation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Technology Guides - Knowledge Compendium</title>
        <meta name="description" content="Master essential technology skills with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Technology Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master essential technology skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    💻
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                  <Link href={`/blog/guides/tech-guides/${guide.id}`} className="hover:text-green-300 transition-colors">
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">By {guide.author}</span>
                  <div className="text-right">
                    <span className="text-gray-500 text-sm block">{guide.date}</span>
                    <span className="text-gray-500 text-sm">{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog/guides"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}