import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function PhysicsIndex() {
  // Complete list of physics articles
  const physicsArticles = [
    { id: &apos;quantum-entanglement-macro-scale&apos;, title: &apos;Quantum Entanglement at Macro Scale: Bridging Micro and Macro Universes&apos;, date: &apos;Dec 21, 2025&apos;, excerpt: &apos;Groundbreaking research demonstrates quantum entanglement effects observable at human scales, challenging our understanding of reality.&apos; },
    { id: &apos;quantum-field-theory-advances&apos;, title: &apos;Advances in Quantum Field Theory: Unifying Forces at Planck Scale&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;New mathematical frameworks bring us closer to a unified theory of all fundamental forces in nature.&apos; },
    { id: &apos;dark-matter-detection-breakthrough&apos;, title: &apos;Dark Matter Detection Breakthrough: Direct Evidence Confirmed&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Experimental physicists report the first direct detection of dark matter particles using novel detector arrays.&apos; },
    { id: &apos;time-crystals-stability-analysis&apos;, title: &apos;Time Crystals Stability Analysis: Periodic Structures in Time&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Long-term stability studies reveal the potential for time crystals in quantum computing applications.&apos; },
    { id: &apos;gravitational-wave-astronomy&apos;, title: &apos;Gravitational Wave Astronomy: Listening to the Universe\&apos;s Secrets&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;Next-generation detectors promise to revolutionize our understanding of black holes and neutron stars.&apos; },
    { id: &apos;string-theory-compactification&apos;, title: &apos;String Theory Compactification: Hidden Dimensions Revealed&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;New compactification models provide insights into the geometry of extra spatial dimensions.&apos; },
    { id: &apos;superconductivity-room-temperature&apos;, title: &apos;Room Temperature Superconductivity: Materials Breakthrough&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;Researchers achieve superconductivity at ambient temperatures, opening doors to lossless power transmission.&apos; },
    { id: &apos;antimatter-containment-systems&apos;, title: &apos;Antimatter Containment Systems: Storing Pure Energy&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;Advanced magnetic containment enables practical storage of antimatter for propulsion and energy applications.&apos; },
    { id: &apos;quantum-computing-error-correction&apos;, title: &apos;Quantum Computing Error Correction: Fault-Tolerant Architectures&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Breakthrough error correction codes bring scalable quantum computers closer to reality.&apos; },
    { id: &apos;particle-accelerator-next-gen&apos;, title: &apos;Next-Generation Particle Accelerators: Compact Colliders&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;Plasma-based acceleration promises to miniaturize particle colliders while increasing collision energies.&apos; },
    { id: &apos;quantum-gravity-experimental-evidence&apos;, title: &apos;Quantum Gravity Experimental Evidence: Loop Quantum Gravity Validated&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;Observational data from black hole mergers provides supporting evidence for loop quantum gravity theories.&apos; },
    { id: &apos;condensed-matter-exotic-states&apos;, title: &apos;Exotic States in Condensed Matter: Emergent Phenomena&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;Discovery of new phases of matter with potential applications in quantum devices and materials science.&apos; },
    { id: &apos;neutrino-oscillation-precision&apos;, title: &apos;Neutrino Oscillation Precision Measurements: Mass Hierarchy Determined&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;Ultra-precise measurements finally settle the question of neutrino mass ordering and implications for cosmology.&apos; },
    { id: &apos;thermodynamics-quantum-scale&apos;, title: &apos;Thermodynamics at Quantum Scale: Information and Energy&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;Fundamental limits of energy extraction and information processing at the quantum level revealed.&apos; },
    { id: &apos;relativity-tests-extreme-conditions&apos;, title: &apos;Relativity Tests Under Extreme Conditions: Neutron Star Observations&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;Observations of neutron star binaries provide the most stringent tests of general relativity in strong fields.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Physics | Discovery Nexus</title>
        <meta name="description&quot; content="Explore cutting-edge physics research, from quantum mechanics to cosmology.&quot; />
        <meta name="keywords&quot; content="physics, quantum mechanics, cosmology, particle physics, theoretical physics&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Physics
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore cutting-edge physics research, from quantum mechanics to cosmology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {physicsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/physics/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/physics/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/science&quot;
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300&quot;
            >
              ← Back to Science Frontier
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}