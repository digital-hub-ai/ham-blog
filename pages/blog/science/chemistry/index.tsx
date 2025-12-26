import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ChemistryIndex() {
  // Complete list of chemistry articles
  const chemistryArticles = [
    { id: 'molecular-self-assembly', title: 'Molecular Self-Assembly: Programming Matter', date: 'Dec 12, 2025', excerpt: 'Scientists create complex nanostructures that assemble themselves from simple molecular building blocks.' },
    { id: 'catalysis-green-chemistry', title: 'Catalysis in Green Chemistry: Sustainable Reactions', date: 'Dec 10, 2025', excerpt: 'New catalysts enable chemical reactions with zero waste and minimal energy input.' },
    { id: 'supramolecular-chemistry', title: 'Supramolecular Chemistry: Beyond the Molecule', date: 'Dec 8, 2025', excerpt: 'Non-covalent interactions create dynamic materials with programmable properties.' },
    { id: 'computational-chemistry-ai', title: 'Computational Chemistry with AI: Molecular Discovery', date: 'Dec 6, 2025', excerpt: 'Machine learning accelerates the discovery of new compounds and reaction pathways.' },
    { id: 'electrochemistry-energy-storage', title: 'Electrochemistry for Energy Storage: Next-Gen Batteries', date: 'Dec 4, 2025', excerpt: 'Advanced electrode materials enable batteries with unprecedented capacity and charging speed.' },
    { id: 'photochemistry-solar-fuels', title: 'Photochemistry and Solar Fuels: Artificial Photosynthesis', date: 'Dec 2, 2025', excerpt: 'Devices that convert sunlight directly into liquid fuels rival natural photosynthesis efficiency.' },
    { id: 'materials-science-nanotech', title: 'Materials Science Nanotechnology: Atomic Precision', date: 'Nov 30, 2025', excerpt: 'Fabrication techniques achieve atomic-level precision in material construction.' },
    { id: 'analytical-chemistry-sensors', title: 'Analytical Chemistry Sensors: Molecular Detection', date: 'Nov 28, 2025', excerpt: 'Ultrasensitive detectors identify single molecules in complex mixtures.' },
    { id: 'organic-electronics', title: 'Organic Electronics: Flexible Circuits', date: 'Nov 26, 2025', excerpt: 'Carbon-based semiconductors enable bendable electronics and wearable devices.' },
    { id: 'bioinorganic-chemistry', title: 'Bioinorganic Chemistry: Metal Ions in Life', date: 'Nov 24, 2025', excerpt: 'Role of metal ions in biological processes leads to new therapeutic approaches.' },
    { id: 'physical-chemistry-quantum', title: 'Physical Chemistry Quantum Phenomena: Molecular Quantum', date: 'Nov 22, 2025', excerpt: 'Quantum effects in chemical reactions enable new synthetic pathways.' },
    { id: 'polymer-science-advanced', title: 'Polymer Science Advanced Materials: Smart Plastics', date: 'Nov 20, 2025', excerpt: 'Polymers with responsive properties adapt to environmental conditions.' },
    { id: 'surface-chemistry-catalysts', title: 'Surface Chemistry Catalysts: Interface Reactions', date: 'Nov 18, 2025', excerpt: 'Understanding surface reactions leads to more efficient industrial catalysts.' },
    { id: 'medicinal-chemistry-drug-design', title: 'Medicinal Chemistry Drug Design: Precision Therapeutics', date: 'Nov 16, 2025', excerpt: 'Computer-aided drug design creates targeted therapies with minimal side effects.' },
    { id: 'environmental-chemistry-pollution', title: 'Environmental Chemistry Pollution Solutions: Cleanup Tech', date: 'Nov 14, 2025', excerpt: 'Chemical solutions for removing persistent pollutants from air, water, and soil.' }
  ];

  return (
    <>
      <Head>
        <title>Chemistry | Discovery Nexus</title>
        <meta name="description" content="Explore advances in chemistry, from materials science to pharmaceuticals." />
        <meta name="keywords" content="chemistry, materials science, pharmaceuticals, chemical reactions, nanotechnology" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Chemistry
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore advances in chemistry, from materials science to pharmaceuticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemistryArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/chemistry/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/chemistry/${article.id}`}
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