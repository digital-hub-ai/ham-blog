import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function TechReality() {
  // Sub-realities within the technology dimension
  const subRealities = [
    { id: &apos;ai-ml&apos;, name: &apos;AI & Machine Learning&apos;, icon: &apos;🤖&apos; },
    { id: &apos;web-dev&apos;, name: &apos;Web Development&apos;, icon: &apos;🌐&apos; },
    { id: &apos;cybersecurity&apos;, name: &apos;Cybersecurity&apos;, icon: &apos;🔒&apos; },
    { id: &apos;hardware&apos;, name: &apos;Hardware & IoT&apos;, icon: &apos;⚙️&apos; },
    { id: &apos;web3&apos;, name: &apos;Blockchain & Web3&apos;, icon: &apos;⛓️&apos; },
    { id: &apos;cloud&apos;, name: &apos;Cloud Computing&apos;, icon: &apos;☁️&apos; }
  ];

  // Sample of actual blog posts we know exist (first 20)
  const allTechPosts = [
    { id: &apos;ai-quantum-computing-2025&apos;, title: &apos;AI in Quantum Computing 2025&apos;, date: &apos;2025-12-21&apos;, author: &apos;Dr. Alex Quantum&apos;, readTime: &apos;15 min read&apos; },
    { id: &apos;ai-cybersecurity-2025&apos;, title: &apos;AI in Cybersecurity 2025&apos;, date: &apos;2025-12-20&apos;, author: &apos;Prof. Sarah Entangle&apos;, readTime: &apos;14 min read&apos; },
    { id: &apos;ai-healthcare-2025&apos;, title: &apos;AI in Healthcare 2025&apos;, date: &apos;2025-12-19&apos;, author: &apos;Dr. Michael Synapse&apos;, readTime: &apos;16 min read&apos; },
    { id: &apos;ai-urban-planning-2025&apos;, title: &apos;AI in Urban Planning 2025&apos;, date: &apos;2025-12-18&apos;, author: &apos;AI Vault Urban Innovation Team&apos;, readTime: &apos;13 min read&apos; },
    { id: &apos;ai-mental-health-revolution-2025&apos;, title: &apos;AI in Mental Health Revolution 2025&apos;, date: &apos;2025-12-17&apos;, author: &apos;AI Vault Health Team&apos;, readTime: &apos;12 min read&apos; },
    { id: &apos;ai-archaeology-nextgen-2025&apos;, title: &apos;AI in Archaeology Next Generation 2025&apos;, date: &apos;2025-12-16&apos;, author: &apos;AI Vault Archaeology Team&apos;, readTime: &apos;14 min read&apos; },
    { id: &apos;ai-space-exploration-nextgen-2025&apos;, title: &apos;AI in Space Exploration Next Generation 2025&apos;, date: &apos;2025-12-15&apos;, author: &apos;AI Vault Space Team&apos;, readTime: &apos;17 min read&apos; },
    { id: &apos;ai-retail-revolution-2025&apos;, title: &apos;AI in Retail Revolution 2025&apos;, date: &apos;2025-12-14&apos;, author: &apos;AI Vault Retail Team&apos;, readTime: &apos;11 min read&apos; },
    { id: &apos;ai-education-future-2025&apos;, title: &apos;AI in Education Future 2025&apos;, date: &apos;2025-12-13&apos;, author: &apos;AI Vault Education Team&apos;, readTime: &apos;15 min read&apos; },
    { id: &apos;ai-finance-revolution-2025&apos;, title: &apos;AI in Finance Revolution 2025&apos;, date: &apos;2025-12-12&apos;, author: &apos;AI Vault Finance Team&apos;, readTime: &apos;13 min read&apos; },
    { id: &apos;ai-climate-science-2025&apos;, title: &apos;AI in Climate Science 2025&apos;, date: &apos;2025-12-11&apos;, author: &apos;AI Vault Environmental Team&apos;, readTime: &apos;16 min read&apos; },
    { id: &apos;ai-healthcare-future-2025&apos;, title: &apos;AI in Healthcare Future 2025&apos;, date: &apos;2025-12-10&apos;, author: &apos;AI Vault Healthcare Team&apos;, readTime: &apos;18 min read&apos; },
    { id: &apos;ml-model-explainability-2025&apos;, title: &apos;ML Model Explainability 2025&apos;, date: &apos;2025-12-09&apos;, author: &apos;AI Vault Research Team&apos;, readTime: &apos;14 min read&apos; },
    { id: &apos;ai-aerospace-2025&apos;, title: &apos;AI in Aerospace 2025&apos;, date: &apos;2025-12-08&apos;, author: &apos;AI Vault Aerospace Team&apos;, readTime: &apos;15 min read&apos; },
    { id: &apos;ai-agriculture-2025&apos;, title: &apos;AI in Agriculture 2025&apos;, date: &apos;2025-12-07&apos;, author: &apos;AI Vault Agriculture Team&apos;, readTime: &apos;12 min read&apos; },
    { id: &apos;ai-automotive-2025&apos;, title: &apos;AI in Automotive 2025&apos;, date: &apos;2025-12-06&apos;, author: &apos;AI Vault Automotive Team&apos;, readTime: &apos;13 min read&apos; },
    { id: &apos;ai-banking-2025&apos;, title: &apos;AI in Banking 2025&apos;, date: &apos;2025-12-05&apos;, author: &apos;AI Vault Banking Team&apos;, readTime: &apos;14 min read&apos; },
    { id: &apos;ai-biotechnology-2025&apos;, title: &apos;AI in Biotechnology 2025&apos;, date: &apos;2025-12-04&apos;, author: &apos;AI Vault Biotech Team&apos;, readTime: &apos;16 min read&apos; },
    { id: &apos;ai-construction-2025&apos;, title: &apos;AI in Construction 2025&apos;, date: &apos;2025-12-03&apos;, author: &apos;AI Vault Construction Team&apos;, readTime: &apos;11 min read&apos; },
    { id: &apos;ai-customer-service-2025&apos;, title: &apos;AI in Customer Service 2025&apos;, date: &apos;2025-12-02&apos;, author: &apos;AI Vault Service Team&apos;, readTime: &apos;10 min read&apos; }
  ];

  // Featured articles (first 3)
  const featuredArticles = allTechPosts.slice(0, 3);

  // Recent articles (next 5)
  const recentArticles = allTechPosts.slice(3, 8);

  return (
    <>
      <Head>
        <title>Quantum Codex - Technology Universe</title>
        <meta name="description&quot; content="Dive into the digital cosmos where code flows like stardust and algorithms shape reality.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="tech&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden&quot;>
        {/* Binary particle background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-cyan-500/20 font-mono text-xs&quot;
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? &apos;0&apos; : &apos;1&apos;}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4&quot;>Quantum Codex</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Technology Universe - Where code flows like stardust and algorithms shape reality.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/tech/${sub.id}`}
                  className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 border border-cyan-700/50 hover:bg-cyan-800/50 hover:border-cyan-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Articles in Circuit Layout */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>⚡</span>
              Featured in the Circuit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-700/50 hover:border-cyan-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-700/50&quot;>
                        AI
                      </span>
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/50&quot;>
                        Technology
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors&quot;>
                      <Link href={`/blog/tech/ai-ml/${article.id}`} className="hover:text-cyan-300 transition-colors&quot;>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      Explore this comprehensive guide on {article.title.toLowerCase()}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {article.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{article.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tech-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Code Playground */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>⌨️</span>
                Live Code Playground
              </h3>
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm&quot;>
                <div className="flex items-center mb-2&quot;>
                  <div className="flex space-x-2&quot;>
                    <div className="w-3 h-3 rounded-full bg-red-500&quot;></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500&quot;></div>
                    <div className="w-3 h-3 rounded-full bg-green-500&quot;></div>
                  </div>
                  <div className="ml-4 text-gray-400&quot;>quantum-script.js</div>
                </div>
                <pre className="text-cyan-400 overflow-x-auto&quot;>
                  {`// Quantum Entanglement Algorithm
function entangle(qubits) {
  return qubits.map(qubit => ({
    state: superposition(qubit),
    entangled: true
  }));
}

// Execute quantum computation
const result = quantumCompute(data);
console.log(&quot;Reality processed:&quot;, result);`}
                </pre>
              </div>
              <button className="mt-4 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors&quot;>
                Run Simulation
              </button>
            </div>

            {/* Tech Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Reality Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Quantum Processing</span>
                    <span className="text-cyan-400&quot;>98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-cyan-500 h-2 rounded-full&quot; style={{width: &apos;98%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Neural Network Depth</span>
                    <span className="text-cyan-400&quot;>42 layers</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-blue-500 h-2 rounded-full&quot; style={{width: &apos;85%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Algorithm Efficiency</span>
                    <span className="text-cyan-400&quot;>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-purple-500 h-2 rounded-full&quot; style={{width: &apos;92%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Total Articles</span>
                  <span className="text-cyan-400 font-bold&quot;>1,247</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Active Developers</span>
                  <span className="text-cyan-400 font-bold&quot;>24.8k</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Code Repositories</span>
                  <span className="text-cyan-400 font-bold&quot;>842</span>
                </div>
              </div>
            </div>
          </div>

          {/* All Blog Posts */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📡</span>
              All Technology Articles
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {allTechPosts.map((article) => (
                  <div key={article.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between items-center&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/tech/ai-ml/${article.id}`} className="hover:text-cyan-300 transition-colors&quot;>
                          {article.title}
                        </Link>
                      </h3>
                      <div className="flex items-center space-x-4&quot;>
                        <span className="text-gray-500 text-sm&quot;>{article.author}</span>
                        <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center&quot;>
              <div className="flex space-x-2&quot;>
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors&quot;>
                  Previous
                </button>
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors&quot;>
                  1
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors&quot;>
                  2
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors&quot;>
                  3
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors&quot;>
                  ...
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors&quot;>
                  18
                </button>
                <button className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors&quot;>
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center&quot;>
            <Link 
              href="/blog&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
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