import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PhysicsIndex() {
  // Complete list of physics articles
  const physicsArticles = [
    { id: 'quantum-entanglement-macro-scale', title: 'Quantum Entanglement at Macro Scale: Bridging Micro and Macro Universes', date: 'Dec 21, 2025', excerpt: 'Groundbreaking research demonstrates quantum entanglement effects observable at human scales, challenging our understanding of reality.' },
    { id: 'quantum-field-theory-advances', title: 'Advances in Quantum Field Theory: Unifying Forces at Planck Scale', date: 'Dec 19, 2025', excerpt: 'New mathematical frameworks bring us closer to a unified theory of all fundamental forces in nature.' },
    { id: 'dark-matter-detection-breakthrough', title: 'Dark Matter Detection Breakthrough: Direct Evidence Confirmed', date: 'Dec 17, 2025', excerpt: 'Experimental physicists report the first direct detection of dark matter particles using novel detector arrays.' },
    { id: 'time-crystals-stability-analysis', title: 'Time Crystals Stability Analysis: Periodic Structures in Time', date: 'Dec 15, 2025', excerpt: 'Long-term stability studies reveal the potential for time crystals in quantum computing applications.' },
    { id: 'gravitational-wave-astronomy', title: 'Gravitational Wave Astronomy: Listening to the Universe\'s Secrets', date: 'Dec 13, 2025', excerpt: 'Next-generation detectors promise to revolutionize our understanding of black holes and neutron stars.' },
    { id: 'string-theory-compactification', title: 'String Theory Compactification: Hidden Dimensions Revealed', date: 'Dec 11, 2025', excerpt: 'New compactification models provide insights into the geometry of extra spatial dimensions.' },
    { id: 'superconductivity-room-temperature', title: 'Room Temperature Superconductivity: Materials Breakthrough', date: 'Dec 9, 2025', excerpt: 'Researchers achieve superconductivity at ambient temperatures, opening doors to lossless power transmission.' },
    { id: 'antimatter-containment-systems', title: 'Antimatter Containment Systems: Storing Pure Energy', date: 'Dec 7, 2025', excerpt: 'Advanced magnetic containment enables practical storage of antimatter for propulsion and energy applications.' },
    { id: 'quantum-computing-error-correction', title: 'Quantum Computing Error Correction: Fault-Tolerant Architectures', date: 'Dec 5, 2025', excerpt: 'Breakthrough error correction codes bring scalable quantum computers closer to reality.' },
    { id: 'particle-accelerator-next-gen', title: 'Next-Generation Particle Accelerators: Compact Colliders', date: 'Dec 3, 2025', excerpt: 'Plasma-based acceleration promises to miniaturize particle colliders while increasing collision energies.' },
    { id: 'quantum-gravity-experimental-evidence', title: 'Quantum Gravity Experimental Evidence: Loop Quantum Gravity Validated', date: 'Dec 1, 2025', excerpt: 'Observational data from black hole mergers provides supporting evidence for loop quantum gravity theories.' },
    { id: 'condensed-matter-exotic-states', title: 'Exotic States in Condensed Matter: Emergent Phenomena', date: 'Nov 29, 2025', excerpt: 'Discovery of new phases of matter with potential applications in quantum devices and materials science.' },
    { id: 'neutrino-oscillation-precision', title: 'Neutrino Oscillation Precision Measurements: Mass Hierarchy Determined', date: 'Nov 27, 2025', excerpt: 'Ultra-precise measurements finally settle the question of neutrino mass ordering and implications for cosmology.' },
    { id: 'thermodynamics-quantum-scale', title: 'Thermodynamics at Quantum Scale: Information and Energy', date: 'Nov 25, 2025', excerpt: 'Fundamental limits of energy extraction and information processing at the quantum level revealed.' },
    { id: 'relativity-tests-extreme-conditions', title: 'Relativity Tests Under Extreme Conditions: Neutron Star Observations', date: 'Nov 23, 2025', excerpt: 'Observations of neutron star binaries provide the most stringent tests of general relativity in strong fields.' }
  ];

  return (
    <>
      <Head>
        <title>Physics | Discovery Nexus</title>
        <meta name="description" content="Explore cutting-edge physics research, from quantum mechanics to cosmology." />
        <meta name="keywords" content="physics, quantum mechanics, cosmology, particle physics, theoretical physics" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Physics
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore cutting-edge physics research, from quantum mechanics to cosmology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physicsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/physics/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/physics/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/science"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300"
            >
              ← Back to Science Frontier
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}