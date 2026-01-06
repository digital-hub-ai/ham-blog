import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function GuidesReality() {
  // Sub-realities within the guides dimension
  const subRealities = [
    { id: &apos;tech-guides&apos;, name: &apos;Technology Guides&apos;, icon: &apos;💻&apos; },
    { id: &apos;life-skills&apos;, name: &apos;Life Skills&apos;, icon: &apos;🛠️&apos; },
    { id: &apos;career&apos;, name: &apos;Career Development&apos;, icon: &apos;📈&apos; },
    { id: &apos;health&apos;, name: &apos;Health & Fitness&apos;, icon: &apos;💪&apos; },
    { id: &apos;finance&apos;, name: &apos;Personal Finance&apos;, icon: &apos;💰&apos; },
    { id: &apos;creativity&apos;, name: &apos;Creative Skills&apos;, icon: &apos;🎨&apos; }
  ];

  // Featured comprehensive guides
  const featuredGuides = [
    {
      id: &apos;ai-mastery&apos;,
      title: &apos;Mastering AI Tools: A Comprehensive Guide to 2025\&apos;s Essential Technologies&apos;,
      excerpt: &apos;Navigate the complex landscape of artificial intelligence with this step-by-step guide to the most powerful AI tools and platforms.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;AI Educator Dr. Nova Tech&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;AI&apos;, &apos;Technology&apos;, &apos;Tutorial&apos;]
    },
    {
      id: &apos;digital-detox&apos;,
      title: &apos;Digital Wellness Mastery: Creating Healthy Boundaries in a Connected World&apos;,
      excerpt: &apos;Reclaim your attention and mental clarity with proven strategies for managing digital overwhelm and cultivating mindfulness.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Wellness Expert Maya Balance&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Wellness&apos;, &apos;Digital Health&apos;, &apos;Mindfulness&apos;]
    },
    {
      id: &apos;financial-freedom&apos;,
      title: &apos;Path to Financial Freedom: Building Wealth Through Strategic Investment&apos;,
      excerpt: &apos;A comprehensive roadmap to achieving financial independence through diversified investment strategies and smart money management.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Financial Advisor Alex Wealth&apos;,
      readTime: &apos;25 min read&apos;,
      tags: [&apos;Finance&apos;, &apos;Investment&apos;, &apos;Wealth Building&apos;]
    }
  ];

  // Recent tutorials
  const recentTutorials = [
    { id: &apos;1&apos;, title: &apos;Beginner\&apos;s Guide to Cryptocurrency Trading&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;2&apos;, title: &apos;Home Workout Routine for Busy Professionals&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;3&apos;, title: &apos;Learning a New Language in 30 Days&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;4&apos;, title: &apos;Setting Up a Home Office for Maximum Productivity&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;5&apos;, title: &apos;Basic Car Maintenance Every Driver Should Know&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Knowledge Compendium - Guides & Tutorials Realm</title>
        <meta name="description&quot; content="Master new skills with comprehensive guides, step-by-step tutorials, and expert insights.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="guides&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white overflow-hidden&quot;>
        {/* Educational background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-green-500/10 animate-pulse&quot;></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-teal-500/10 animate-pulse&quot; style={{animationDelay: &apos;1s}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500/10 animate-pulse&quot; style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>Knowledge Compendium</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>Guides & Tutorials Realm - Master new skills with comprehensive guides, step-by-step tutorials, and expert insights.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/guides/${sub.id}`}
                  className="px-4 py-2 bg-green-900/30 rounded-full text-green-300 border border-green-700/50 hover:bg-green-800/50 hover:border-green-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Comprehensive Guides Grid */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📚</span>
              Masterclass Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredGuides.map((guide) => (
                <article 
                  key={guide.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                        📘
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
                      <Link href={`/blog/guides/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
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
          </div>

          {/* Tutorial-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Skill Tracker */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>🎯</span>
                Personal Learning Path
              </h3>
              <div className="bg-gray-900 rounded-xl p-4&quot;>
                <div className="mb-6&quot;>
                  <div className="flex justify-between mb-2&quot;>
                    <span className="text-green-400&quot;>Current Learning Goal</span>
                    <span className="text-gray-400&quot;>3/5 completed</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3&quot;>
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full&quot; style={{width: &apos;60%}}></div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6&quot;>
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30&quot;>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3&quot;>
                      <span className="text-xs&quot;>✓</span>
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-medium&quot;>Introduction to AI Concepts</h4>
                      <p className="text-sm text-gray-400&quot;>Completed Dec 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30&quot;>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3&quot;>
                      <span className="text-xs&quot;>✓</span>
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-medium&quot;>Machine Learning Basics</h4>
                      <p className="text-sm text-gray-400&quot;>Completed Dec 18, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30&quot;>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3&quot;>
                      <span className="text-xs&quot;>✓</span>
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-medium&quot;>Neural Networks Fundamentals</h4>
                      <p className="text-sm text-gray-400&quot;>Completed Dec 20, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700&quot;>
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center mr-3&quot;>
                      <span className="text-xs&quot;>4</span>
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-medium&quot;>Deep Learning Applications</h4>
                      <p className="text-sm text-gray-400&quot;>In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700&quot;>
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center mr-3&quot;>
                      <span className="text-xs&quot;>5</span>
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-medium&quot;>AI Project Implementation</h4>
                      <p className="text-sm text-gray-400&quot;>Not Started</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg transition-colors&quot;>
                  Continue Learning
                </button>
              </div>
            </div>

            {/* Learning Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Knowledge Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Learning Completion</span>
                    <span className="text-green-400&quot;>78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-green-500 h-2 rounded-full&quot; style={{width: &apos;78%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Skill Acquisition</span>
                    <span className="text-green-400&quot;>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-teal-500 h-2 rounded-full&quot; style={{width: &apos;85%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Knowledge Retention</span>
                    <span className="text-green-400&quot;>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-emerald-500 h-2 rounded-full&quot; style={{width: &apos;92%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Tutorial Articles</span>
                  <span className="text-green-400 font-bold&quot;>612</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Learning Paths</span>
                  <span className="text-green-400 font-bold&quot;>87</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Expert Instructors</span>
                  <span className="text-green-400 font-bold&quot;>34</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tutorials */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📜</span>
              Recent Tutorials
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/guides/tutorial-${tutorial.id}`} className="hover:text-green-300 transition-colors&quot;>
                          {tutorial.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{tutorial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center&quot;>
            <Link 
              href="/blog&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105&quot;
            >
              <span className="mr-2&quot;>🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}