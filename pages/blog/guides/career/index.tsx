import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CareerIndex() {
  // Career development guides data
  const careerGuides = [
    {
      id: 'resume-mastery-2025',
      title: 'Resume Mastery: Crafting the Perfect Resume for 2025',
      excerpt: 'Learn how to create a compelling resume that stands out in today\'s competitive job market.',
      date: 'Dec 22, 2025',
      author: 'Career Expert Alex Career',
      readTime: '22 min read',
      tags: ['Resume', 'Job Search', '2025']
    },
    {
      id: 'interview-success-strategies',
      title: 'Interview Success: Proven Strategies for Landing Your Dream Job',
      excerpt: 'Master the interview process with techniques that will set you apart from other candidates.',
      date: 'Dec 21, 2025',
      author: 'Interview Coach Maya Hire',
      readTime: '20 min read',
      tags: ['Interview', 'Job Search', 'Success']
    },
    {
      id: 'networking-in-the-digital-age',
      title: 'Networking in the Digital Age: Building Professional Relationships Online',
      excerpt: 'Learn effective networking strategies for the modern professional landscape.',
      date: 'Dec 20, 2025',
      author: 'Networking Specialist Sam Connect',
      readTime: '18 min read',
      tags: ['Networking', 'Digital', 'Professional']
    },
    {
      id: 'salary-negotiation-essentials',
      title: 'Salary Negotiation: Essential Techniques for Getting What You Deserve',
      excerpt: 'Master the art of salary negotiation to maximize your compensation and career growth.',
      date: 'Dec 19, 2025',
      author: 'Negotiation Expert Dr. Jordan Pay',
      readTime: '24 min read',
      tags: ['Salary', 'Negotiation', 'Compensation']
    },
    {
      id: 'career-transition-strategies',
      title: 'Career Transition: Strategic Approaches to Changing Paths',
      excerpt: 'Navigate career changes with confidence using proven transition strategies.',
      date: 'Dec 18, 2025',
      author: 'Transition Coach Taylor Shift',
      readTime: '26 min read',
      tags: ['Career', 'Transition', 'Change']
    },
    {
      id: 'leadership-development-journey',
      title: 'Leadership Development: Your Journey to Becoming an Effective Leader',
      excerpt: 'Develop essential leadership skills that will inspire teams and drive results.',
      date: 'Dec 17, 2025',
      author: 'Leadership Expert Casey Lead',
      readTime: '28 min read',
      tags: ['Leadership', 'Development', 'Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Career Development - Knowledge Compendium</title>
        <meta name="description" content="Advance your career with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Career Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advance your career with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    📈
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
                  <Link href={`/blog/guides/career/${guide.id}`} className="hover:text-green-300 transition-colors">
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