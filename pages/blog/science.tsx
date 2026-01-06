import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function ScienceReality() {
  // Sub-realities within the science dimension
  const subRealities = [
    { id: &apos;physics&apos;, name: &apos;Physics&apos;, icon: &apos;⚛️&apos; },
    { id: &apos;biology&apos;, name: &apos;Biology&apos;, icon: &apos;🧬&apos; },
    { id: &apos;chemistry&apos;, name: &apos;Chemistry&apos;, icon: &apos;🧪&apos; },
    { id: &apos;astronomy&apos;, name: &apos;Astronomy&apos;, icon: &apos;🔭&apos; },
    { id: &apos;environment&apos;, name: &apos;Environment&apos;, icon: &apos;🌍&apos; },
    { id: &apos;mathematics&apos;, name: &apos;Mathematics&apos;, icon: &apos;🔢&apos; }
  ];

  // Featured scientific discoveries
  const featuredDiscoveries = [
    {
      id: &apos;quantum-entanglement&apos;,
      title: &apos;Quantum Entanglement at Macro Scale: Bridging Micro and Macro Universes&apos;,
      excerpt: &apos;Groundbreaking research demonstrates quantum entanglement effects observable at human scales, challenging our understanding of reality.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Dr. Elena Quantum&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Quantum Physics&apos;, &apos;Research&apos;, &apos;Breakthrough&apos;]
    },
    {
      id: &apos;exoplanet-biosignatures&apos;,
      title: &apos;Biosignatures Detected on 12 New Exoplanets: Signs of Extraterrestrial Life?&apos;,
      excerpt: &apos;Advanced spectroscopy reveals atmospheric compositions suggesting biological activity on distant worlds.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Astrobiologist Dr. Kai Cosmos&apos;,
      readTime: &apos;15 min read&apos;,
      tags: [&apos;Astronomy&apos;, &apos;Exobiology&apos;, &apos;Discovery&apos;]
    },
    {
      id: &apos;crispr-evolution&apos;,
      title: &apos;CRISPR 3.0: Editing Evolution Itself&apos;,
      excerpt: &apos;Next-generation gene editing technology allows precise manipulation of evolutionary pathways in living organisms.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Geneticist Dr. Amara Gene&apos;,
      readTime: &apos;14 min read&apos;,
      tags: [&apos;Biology&apos;, &apos;Genetics&apos;, &apos;Biotech&apos;]
    }
  ];

  // Recent research papers
  const recentPapers = [
    { id: &apos;dark-matter-distribution-maps-2025&apos;, title: &apos;Dark Matter Distribution Maps 2025&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;synthetic-biology-creating-new-life-forms&apos;, title: &apos;Synthetic Biology: Creating New Life Forms&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;fusion-power-breakthrough-net-positive-achieved&apos;, title: &apos;Fusion Power Breakthrough: Net Positive Achieved&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;neuroplasticity-in-digital-environments&apos;, title: &apos;Neuroplasticity in Digital Environments&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;climate-engineering-atmospheric-co2-reduction&apos;, title: &apos;Climate Engineering: Atmospheric CO2 Reduction&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Discovery Nexus - Science Frontier</title>
        <meta name="description&quot; content="Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="science&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-black text-white overflow-hidden&quot;>
        {/* Molecular structure background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          {[...Array(60)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-violet-500/20&quot;
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4&quot;>Discovery Nexus</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Science Frontier - Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/science/${sub.id}`}
                  className="p-4 bg-violet-900/30 rounded-2xl text-violet-300 border border-violet-700/50 hover:bg-violet-800/50 hover:border-violet-600/50 transition-all duration-300 flex items-start&quot;
                >
                  <span className="text-2xl mr-3&quot;>{sub.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg&quot;>{sub.name}</h3>
                    <p className="text-violet-200/80 text-sm mt-1&quot;>{sub.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scientific Discoveries Grid */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🔭</span>
              Groundbreaking Discoveries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredDiscoveries.map((discovery) => (
                <article 
                  key={discovery.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-700/50 hover:border-violet-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-violet-600/20 to-purple-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-3xl&quot;>
                        🔬
                      </div>
                    </div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {discovery.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-violet-900/30 text-violet-300 text-xs rounded-full border border-violet-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors&quot;>
                      <Link href={`/blog/science/discovery-${discovery.id}`} className="hover:text-violet-300 transition-colors&quot;>
                        {discovery.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {discovery.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {discovery.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{discovery.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{discovery.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Science-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Research Lab Simulator */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>🧪</span>
                Virtual Lab Simulator
              </h3>
              <div className="bg-gray-900 rounded-xl p-4&quot;>
                <div className="flex mb-4&quot;>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3 mr-2&quot;>
                    <div className="text-violet-400 text-sm mb-2&quot;>Experiment</div>
                    <div className="text-white&quot;>Quantum Entanglement</div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3&quot;>
                    <div className="text-violet-400 text-sm mb-2&quot;>Status</div>
                    <div className="text-green-400&quot;>Completed</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center&quot;>
                  <div className="text-center&quot;>
                    <div className="text-violet-400 mb-2&quot;>Molecular Visualization</div>
                    <div className="flex justify-center space-x-1&quot;>
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-8 bg-gradient-to-t from-violet-500 to-purple-500 rounded-t animate-pulse&quot;
                          style={{animationDelay: `${i * 0.1}s`}}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-lg transition-colors&quot;>
                  Run New Experiment
                </button>
              </div>
            </div>

            {/* Science Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Research Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Discovery Rate</span>
                    <span className="text-violet-400&quot;>96%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-violet-500 h-2 rounded-full&quot; style={{width: &apos;96%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Peer Review</span>
                    <span className="text-violet-400&quot;>89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-purple-500 h-2 rounded-full&quot; style={{width: &apos;89%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Innovation Index</span>
                    <span className="text-violet-400&quot;>93%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-indigo-500 h-2 rounded-full&quot; style={{width: &apos;93%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Research Papers</span>
                  <span className="text-violet-400 font-bold&quot;>521</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Scientists Active</span>
                  <span className="text-violet-400 font-bold&quot;>15.6k</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Laboratories</span>
                  <span className="text-violet-400 font-bold&quot;>234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Papers */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📚</span>
              Recent Publications
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentPapers.map((paper) => (
                  <div key={paper.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/science/${paper.id}`} className="hover:text-violet-300 transition-colors&quot;>
                          {paper.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{paper.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
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