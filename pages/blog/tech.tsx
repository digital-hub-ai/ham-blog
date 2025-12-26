import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function TechReality() {
  // Sub-realities within the technology dimension
  const subRealities = [
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: '🤖' },
    { id: 'web-dev', name: 'Web Development', icon: '🌐' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'hardware', name: 'Hardware & IoT', icon: '⚙️' },
    { id: 'web3', name: 'Blockchain & Web3', icon: '⛓️' },
    { id: 'cloud', name: 'Cloud Computing', icon: '☁️' }
  ];

  // Sample of actual blog posts we know exist (first 20)
  const allTechPosts = [
    { id: 'ai-quantum-computing-2025', title: 'AI in Quantum Computing 2025', date: '2025-12-21', author: 'Dr. Alex Quantum', readTime: '15 min read' },
    { id: 'ai-cybersecurity-2025', title: 'AI in Cybersecurity 2025', date: '2025-12-20', author: 'Prof. Sarah Entangle', readTime: '14 min read' },
    { id: 'ai-healthcare-2025', title: 'AI in Healthcare 2025', date: '2025-12-19', author: 'Dr. Michael Synapse', readTime: '16 min read' },
    { id: 'ai-urban-planning-2025', title: 'AI in Urban Planning 2025', date: '2025-12-18', author: 'AI Vault Urban Innovation Team', readTime: '13 min read' },
    { id: 'ai-mental-health-revolution-2025', title: 'AI in Mental Health Revolution 2025', date: '2025-12-17', author: 'AI Vault Health Team', readTime: '12 min read' },
    { id: 'ai-archaeology-nextgen-2025', title: 'AI in Archaeology Next Generation 2025', date: '2025-12-16', author: 'AI Vault Archaeology Team', readTime: '14 min read' },
    { id: 'ai-space-exploration-nextgen-2025', title: 'AI in Space Exploration Next Generation 2025', date: '2025-12-15', author: 'AI Vault Space Team', readTime: '17 min read' },
    { id: 'ai-retail-revolution-2025', title: 'AI in Retail Revolution 2025', date: '2025-12-14', author: 'AI Vault Retail Team', readTime: '11 min read' },
    { id: 'ai-education-future-2025', title: 'AI in Education Future 2025', date: '2025-12-13', author: 'AI Vault Education Team', readTime: '15 min read' },
    { id: 'ai-finance-revolution-2025', title: 'AI in Finance Revolution 2025', date: '2025-12-12', author: 'AI Vault Finance Team', readTime: '13 min read' },
    { id: 'ai-climate-science-2025', title: 'AI in Climate Science 2025', date: '2025-12-11', author: 'AI Vault Environmental Team', readTime: '16 min read' },
    { id: 'ai-healthcare-future-2025', title: 'AI in Healthcare Future 2025', date: '2025-12-10', author: 'AI Vault Healthcare Team', readTime: '18 min read' },
    { id: 'ml-model-explainability-2025', title: 'ML Model Explainability 2025', date: '2025-12-09', author: 'AI Vault Research Team', readTime: '14 min read' },
    { id: 'ai-aerospace-2025', title: 'AI in Aerospace 2025', date: '2025-12-08', author: 'AI Vault Aerospace Team', readTime: '15 min read' },
    { id: 'ai-agriculture-2025', title: 'AI in Agriculture 2025', date: '2025-12-07', author: 'AI Vault Agriculture Team', readTime: '12 min read' },
    { id: 'ai-automotive-2025', title: 'AI in Automotive 2025', date: '2025-12-06', author: 'AI Vault Automotive Team', readTime: '13 min read' },
    { id: 'ai-banking-2025', title: 'AI in Banking 2025', date: '2025-12-05', author: 'AI Vault Banking Team', readTime: '14 min read' },
    { id: 'ai-biotechnology-2025', title: 'AI in Biotechnology 2025', date: '2025-12-04', author: 'AI Vault Biotech Team', readTime: '16 min read' },
    { id: 'ai-construction-2025', title: 'AI in Construction 2025', date: '2025-12-03', author: 'AI Vault Construction Team', readTime: '11 min read' },
    { id: 'ai-customer-service-2025', title: 'AI in Customer Service 2025', date: '2025-12-02', author: 'AI Vault Service Team', readTime: '10 min read' }
  ];

  // Featured articles (first 3)
  const featuredArticles = allTechPosts.slice(0, 3);

  // Recent articles (next 5)
  const recentArticles = allTechPosts.slice(3, 8);

  return (
    <>
      <Head>
        <title>Quantum Codex - Technology Universe</title>
        <meta name="description" content="Dive into the digital cosmos where code flows like stardust and algorithms shape reality." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="tech" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        {/* Binary particle background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-500/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Quantum Codex</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Technology Universe - Where code flows like stardust and algorithms shape reality.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/tech/${sub.id}`}
                  className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 border border-cyan-700/50 hover:bg-cyan-800/50 hover:border-cyan-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Articles in Circuit Layout */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">⚡</span>
              Featured in the Circuit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-700/50 hover:border-cyan-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-700/50">
                        AI
                      </span>
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/50">
                        Technology
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      <Link href={`/blog/tech/ai-ml/${article.id}`} className="hover:text-cyan-300 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Explore this comprehensive guide on {article.title.toLowerCase()}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {article.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{article.date}</span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tech-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Code Playground */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">⌨️</span>
                Live Code Playground
              </h3>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-gray-400">quantum-script.js</div>
                </div>
                <pre className="text-cyan-400 overflow-x-auto">
                  {`// Quantum Entanglement Algorithm
function entangle(qubits) {
  return qubits.map(qubit => ({
    state: superposition(qubit),
    entangled: true
  }));
}

// Execute quantum computation
const result = quantumCompute(data);
console.log("Reality processed:", result);`}
                </pre>
              </div>
              <button className="mt-4 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors">
                Run Simulation
              </button>
            </div>

            {/* Tech Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Reality Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Quantum Processing</span>
                    <span className="text-cyan-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Neural Network Depth</span>
                    <span className="text-cyan-400">42 layers</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Algorithm Efficiency</span>
                    <span className="text-cyan-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Articles</span>
                  <span className="text-cyan-400 font-bold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Developers</span>
                  <span className="text-cyan-400 font-bold">24.8k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Code Repositories</span>
                  <span className="text-cyan-400 font-bold">842</span>
                </div>
              </div>
            </div>
          </div>

          {/* All Blog Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📡</span>
              All Technology Articles
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {allTechPosts.map((article) => (
                  <div key={article.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/tech/ai-ml/${article.id}`} className="hover:text-cyan-300 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500 text-sm">{article.author}</span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  ...
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  18
                </button>
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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