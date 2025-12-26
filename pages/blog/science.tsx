import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function ScienceReality() {
  // Sub-realities within the science dimension
  const subRealities = [
    { id: 'physics', name: 'Physics', icon: '⚛️' },
    { id: 'biology', name: 'Biology', icon: '🧬' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪' },
    { id: 'astronomy', name: 'Astronomy', icon: '🔭' },
    { id: 'environment', name: 'Environment', icon: '🌍' },
    { id: 'mathematics', name: 'Mathematics', icon: '🔢' }
  ];

  // Featured scientific discoveries
  const featuredDiscoveries = [
    {
      id: 'quantum-entanglement',
      title: 'Quantum Entanglement at Macro Scale: Bridging Micro and Macro Universes',
      excerpt: 'Groundbreaking research demonstrates quantum entanglement effects observable at human scales, challenging our understanding of reality.',
      date: 'Dec 21, 2025',
      author: 'Dr. Elena Quantum',
      readTime: '18 min read',
      tags: ['Quantum Physics', 'Research', 'Breakthrough']
    },
    {
      id: 'exoplanet-biosignatures',
      title: 'Biosignatures Detected on 12 New Exoplanets: Signs of Extraterrestrial Life?',
      excerpt: 'Advanced spectroscopy reveals atmospheric compositions suggesting biological activity on distant worlds.',
      date: 'Dec 19, 2025',
      author: 'Astrobiologist Dr. Kai Cosmos',
      readTime: '15 min read',
      tags: ['Astronomy', 'Exobiology', 'Discovery']
    },
    {
      id: 'crispr-evolution',
      title: 'CRISPR 3.0: Editing Evolution Itself',
      excerpt: 'Next-generation gene editing technology allows precise manipulation of evolutionary pathways in living organisms.',
      date: 'Dec 17, 2025',
      author: 'Geneticist Dr. Amara Gene',
      readTime: '14 min read',
      tags: ['Biology', 'Genetics', 'Biotech']
    }
  ];

  // Recent research papers
  const recentPapers = [
    { id: 'dark-matter-distribution-maps-2025', title: 'Dark Matter Distribution Maps 2025', date: 'Dec 20, 2025' },
    { id: 'synthetic-biology-creating-new-life-forms', title: 'Synthetic Biology: Creating New Life Forms', date: 'Dec 19, 2025' },
    { id: 'fusion-power-breakthrough-net-positive-achieved', title: 'Fusion Power Breakthrough: Net Positive Achieved', date: 'Dec 18, 2025' },
    { id: 'neuroplasticity-in-digital-environments', title: 'Neuroplasticity in Digital Environments', date: 'Dec 17, 2025' },
    { id: 'climate-engineering-atmospheric-co2-reduction', title: 'Climate Engineering: Atmospheric CO2 Reduction', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Discovery Nexus - Science Frontier</title>
        <meta name="description" content="Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="science" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-black text-white overflow-hidden">
        {/* Molecular structure background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-violet-500/20"
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

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4">Discovery Nexus</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Science Frontier - Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/science/${sub.id}`}
                  className="p-4 bg-violet-900/30 rounded-2xl text-violet-300 border border-violet-700/50 hover:bg-violet-800/50 hover:border-violet-600/50 transition-all duration-300 flex items-start"
                >
                  <span className="text-2xl mr-3">{sub.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{sub.name}</h3>
                    <p className="text-violet-200/80 text-sm mt-1">{sub.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scientific Discoveries Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🔭</span>
              Groundbreaking Discoveries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDiscoveries.map((discovery) => (
                <article 
                  key={discovery.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-700/50 hover:border-violet-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-violet-600/20 to-purple-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-3xl">
                        🔬
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discovery.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-violet-900/30 text-violet-300 text-xs rounded-full border border-violet-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
                      <Link href={`/blog/science/discovery-${discovery.id}`} className="hover:text-violet-300 transition-colors">
                        {discovery.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {discovery.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {discovery.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{discovery.date}</span>
                        <span className="text-gray-500 text-sm">{discovery.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Science-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Research Lab Simulator */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🧪</span>
                Virtual Lab Simulator
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="flex mb-4">
                  <div className="flex-1 bg-gray-800 rounded-lg p-3 mr-2">
                    <div className="text-violet-400 text-sm mb-2">Experiment</div>
                    <div className="text-white">Quantum Entanglement</div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <div className="text-violet-400 text-sm mb-2">Status</div>
                    <div className="text-green-400">Completed</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-violet-400 mb-2">Molecular Visualization</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-8 bg-gradient-to-t from-violet-500 to-purple-500 rounded-t animate-pulse"
                          style={{animationDelay: `${i * 0.1}s`}}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-lg transition-colors">
                  Run New Experiment
                </button>
              </div>
            </div>

            {/* Science Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Research Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Discovery Rate</span>
                    <span className="text-violet-400">96%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-violet-500 h-2 rounded-full" style={{width: '96%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Peer Review</span>
                    <span className="text-violet-400">89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Innovation Index</span>
                    <span className="text-violet-400">93%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{width: '93%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Research Papers</span>
                  <span className="text-violet-400 font-bold">521</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Scientists Active</span>
                  <span className="text-violet-400 font-bold">15.6k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Laboratories</span>
                  <span className="text-violet-400 font-bold">234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Papers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📚</span>
              Recent Publications
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-violet-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentPapers.map((paper) => (
                  <div key={paper.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/science/${paper.id}`} className="hover:text-violet-300 transition-colors">
                          {paper.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{paper.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}