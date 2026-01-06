import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function ChemistryIndex() {
  // Complete list of chemistry articles
  const chemistryArticles = [
    { id: &apos;molecular-self-assembly&apos;, title: &apos;Molecular Self-Assembly: Programming Matter&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;Scientists create complex nanostructures that assemble themselves from simple molecular building blocks.&apos; },
    { id: &apos;catalysis-green-chemistry&apos;, title: &apos;Catalysis in Green Chemistry: Sustainable Reactions&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;New catalysts enable chemical reactions with zero waste and minimal energy input.&apos; },
    { id: &apos;supramolecular-chemistry&apos;, title: &apos;Supramolecular Chemistry: Beyond the Molecule&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Non-covalent interactions create dynamic materials with programmable properties.&apos; },
    { id: &apos;computational-chemistry-ai&apos;, title: &apos;Computational Chemistry with AI: Molecular Discovery&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Machine learning accelerates the discovery of new compounds and reaction pathways.&apos; },
    { id: &apos;electrochemistry-energy-storage&apos;, title: &apos;Electrochemistry for Energy Storage: Next-Gen Batteries&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Advanced electrode materials enable batteries with unprecedented capacity and charging speed.&apos; },
    { id: &apos;photochemistry-solar-fuels&apos;, title: &apos;Photochemistry and Solar Fuels: Artificial Photosynthesis&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;Devices that convert sunlight directly into liquid fuels rival natural photosynthesis efficiency.&apos; },
    { id: &apos;materials-science-nanotech&apos;, title: &apos;Materials Science Nanotechnology: Atomic Precision&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Fabrication techniques achieve atomic-level precision in material construction.&apos; },
    { id: &apos;analytical-chemistry-sensors&apos;, title: &apos;Analytical Chemistry Sensors: Molecular Detection&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;Ultrasensitive detectors identify single molecules in complex mixtures.&apos; },
    { id: &apos;organic-electronics&apos;, title: &apos;Organic Electronics: Flexible Circuits&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;Carbon-based semiconductors enable bendable electronics and wearable devices.&apos; },
    { id: &apos;bioinorganic-chemistry&apos;, title: &apos;Bioinorganic Chemistry: Metal Ions in Life&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;Role of metal ions in biological processes leads to new therapeutic approaches.&apos; },
    { id: &apos;physical-chemistry-quantum&apos;, title: &apos;Physical Chemistry Quantum Phenomena: Molecular Quantum&apos;, date: &apos;Nov 22, 2025&apos;, excerpt: &apos;Quantum effects in chemical reactions enable new synthetic pathways.&apos; },
    { id: &apos;polymer-science-advanced&apos;, title: &apos;Polymer Science Advanced Materials: Smart Plastics&apos;, date: &apos;Nov 20, 2025&apos;, excerpt: &apos;Polymers with responsive properties adapt to environmental conditions.&apos; },
    { id: &apos;surface-chemistry-catalysts&apos;, title: &apos;Surface Chemistry Catalysts: Interface Reactions&apos;, date: &apos;Nov 18, 2025&apos;, excerpt: &apos;Understanding surface reactions leads to more efficient industrial catalysts.&apos; },
    { id: &apos;medicinal-chemistry-drug-design&apos;, title: &apos;Medicinal Chemistry Drug Design: Precision Therapeutics&apos;, date: &apos;Nov 16, 2025&apos;, excerpt: &apos;Computer-aided drug design creates targeted therapies with minimal side effects.&apos; },
    { id: &apos;environmental-chemistry-pollution&apos;, title: &apos;Environmental Chemistry Pollution Solutions: Cleanup Tech&apos;, date: &apos;Nov 14, 2025&apos;, excerpt: &apos;Chemical solutions for removing persistent pollutants from air, water, and soil.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Chemistry | Discovery Nexus</title>
        <meta name="description&quot; content="Explore advances in chemistry, from materials science to pharmaceuticals.&quot; />
        <meta name="keywords&quot; content="chemistry, materials science, pharmaceuticals, chemical reactions, nanotechnology&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Chemistry
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore advances in chemistry, from materials science to pharmaceuticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {chemistryArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/chemistry/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/chemistry/${article.id}`}
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