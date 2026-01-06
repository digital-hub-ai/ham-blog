import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function HobbyReality() {
  // Sub-realities within the hobby dimension
  const subRealities = [
    { id: &apos;diy&apos;, name: &apos;DIY Projects&apos;, icon: &apos;🔨&apos; },
    { id: &apos;crafts&apos;, name: &apos;Arts & Crafts&apos;, icon: &apos;✂️&apos; },
    { id: &apos;music&apos;, name: &apos;Music & Audio&apos;, icon: &apos;🎵&apos; },
    { id: &apos;gardening&apos;, name: &apos;Gardening&apos;, icon: &apos;🌱&apos; },
    { id: &apos;photography&apos;, name: &apos;Photography&apos;, icon: &apos;📸&apos; },
    { id: &apos;collecting&apos;, name: &apos;Collecting&apos;, icon: &apos;弆&apos; }
  ];
hgg
  // Featured hobby projects
  const featuredProjects = [
    {
      id: &apos;smart-home-diy&apos;,
      title: &apos;Smart Home DIY: Build Your Own Automated Lighting System&apos;,
      excerpt: &apos;Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Maker Alex Workshop&apos;,
      readTime: &apos;16 min read&apos;,
      tags: [&apos;DIY&apos;, &apos;Electronics&apos;, &apos;IoT&apos;]
    },
    {
      id: &apos;urban-garden&apos;,
      title: &apos;Urban Garden Oasis: Maximizing Small Spaces for Maximum Yield&apos;,
      excerpt: &apos;Transform your apartment balcony into a productive garden with vertical growing techniques.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Green Thumb Mia&apos;,
      readTime: &apos;13 min read&apos;,
      tags: [&apos;Gardening&apos;, &apos;Urban Living&apos;, &apos;Sustainability&apos;]
    },
    {
      id: &apos;vinyl-restoration&apos;,
      title: &apos;Vinyl Record Restoration: Bringing Old Music Back to Life&apos;,
      excerpt: &apos;Professional techniques for cleaning, repairing, and preserving vintage vinyl collections.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Audiophile Sam Groove&apos;,
      readTime: &apos;11 min read&apos;,
      tags: [&apos;Music&apos;, &apos;Restoration&apos;, &apos;Collecting&apos;]
    }
  ];

  // Recent hobby activities
  const recentActivities = [
    { id: &apos;1&apos;, title: &apos;Beginner\&apos;s Guide to Watercolor Painting&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;2&apos;, title: &apos;3D Printing: From Design to Finished Product&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;3&apos;, title: &apos;Indoor Herb Garden Setup&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;4&apos;, title: &apos;Building a Custom Mechanical Keyboard&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;5&apos;, title: &apos;Macro Photography Tips for Nature Shots&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Passion Projects - Hobby Dimension</title>
        <meta name="description&quot; content="Explore creative pursuits, DIY projects, and personal passions that enrich life.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="hobby&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white overflow-hidden&quot;>
        {/* Creative workshop background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-orange-500/10 animate-pulse&quot;></div>
          <div className="    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-red-500/10 animate-pulse&quot; style={{animationDelay: &apos;1s}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/10 animate-pulse&quot; style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4&quot;>Passion Projects</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Hobby Dimension - Explore creative pursuits, DIY projects, and personal passions that enrich life.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/hobby/${sub.id}`}
                  className="px-4 py-2 bg-orange-900/30 rounded-full text-orange-300 border border-orange-700/50 hover:bg-orange-800/50 hover:border-orange-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Hobby Projects Grid */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🔨</span>
              Featured Creations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl&quot;>
                        🎨
                      </div>
                    </div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors&quot;>
                      <Link href={`/blog/hobby/${project.id}`} className="hover:text-orange-300 transition-colors&quot;>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {project.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {project.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{project.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{project.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Hobby-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Project Planner */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📋</span>
                Project Planner
              </h3>
              <div className="bg-gray-900 rounded-xl p-4&quot;>
                <div className="grid grid-cols-2 gap-4 mb-4&quot;>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Project Name</label>
                    <input 
                      type="text&quot; 
                      placeholder="My Awesome Project&quot; 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Category</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>Select Category</option>
                      <option>DIY Electronics</option>
                      <option>Woodworking</option>
                      <option>Gardening</option>
                      <option>Art & Crafts</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4&quot;>
                  <label className="block text-gray-400 mb-2&quot;>Materials Needed</label>
                  <textarea 
                    placeholder="List all materials required...&quot; 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white h-24&quot;
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4&quot;>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Estimated Time</label>
                    <input 
                      type="text&quot; 
                      placeholder="10 hours&quot; 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Difficulty</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-lg transition-colors&quot;>
                  Save Project Plan
                </button>
              </div>
            </div>

            {/* Hobby Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Passion Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Projects Completed</span>
                    <span className="text-orange-400&quot;>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-orange-500 h-2 rounded-full&quot; style={{width: &apos;87%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Skill Development</span>
                    <span className="text-orange-400&quot;>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-red-500 h-2 rounded-full&quot; style={{width: &apos;92%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Creativity Boost</span>
                    <span className="text-orange-400&quot;>89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-yellow-500 h-2 rounded-full&quot; style={{width: &apos;89%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Hobby Articles</span>
                  <span className="text-orange-400 font-bold&quot;>327</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Creative Makers</span>
                  <span className="text-orange-400 font-bold&quot;>19.4k</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Project Ideas</span>
                  <span className="text-orange-400 font-bold&quot;>456</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🔥</span>
              Recent Activities
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/hobby/activity-${activity.id}`} className="hover:text-orange-300 transition-colors&quot;>
                          {activity.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{activity.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105&quot;
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