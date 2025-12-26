import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AstronomyIndex() {
  // Complete list of astronomy articles
  const astronomyArticles = [
    { id: 'exoplanet-biosignatures', title: 'Biosignatures Detected on 12 New Exoplanets: Signs of Extraterrestrial Life?', date: 'Dec 19, 2025', excerpt: 'Advanced spectroscopy reveals atmospheric compositions suggesting biological activity on distant worlds.' },
    { id: 'gravitational-wave-multimessenger', title: 'Gravitational Wave Multimessenger Astronomy: Cosmic Events', date: 'Dec 17, 2025', excerpt: 'Simultaneous detection of gravitational waves and electromagnetic radiation provides unprecedented insights into cosmic events.' },
    { id: 'dark-energy-survey-results', title: 'Dark Energy Survey Results: Universe Expansion', date: 'Dec 15, 2025', excerpt: 'Latest observations refine our understanding of the accelerating expansion of the universe.' },
    { id: 'neutron-star-merger-insights', title: 'Neutron Star Merger Insights: Heavy Element Formation', date: 'Dec 13, 2025', excerpt: 'Detailed analysis of merger events explains the origin of gold, platinum, and other heavy elements.' },
    { id: 'james-webb-telescope-discoveries', title: 'James Webb Telescope Discoveries: Early Galaxy Formation', date: 'Dec 11, 2025', excerpt: 'Observations of the earliest galaxies challenge theories about cosmic evolution and star formation.' },
    { id: 'black-hole-imaging-advances', title: 'Black Hole Imaging Advances: Event Horizon Details', date: 'Dec 9, 2025', excerpt: 'Enhanced imaging techniques reveal new details about the environment around supermassive black holes.' },
    { id: 'cosmic-microwave-background', title: 'Cosmic Microwave Background Anomalies: Primordial Secrets', date: 'Dec 7, 2025', excerpt: 'Subtle variations in the afterglow of the Big Bang hint at physics beyond the Standard Model.' },
    { id: 'asteroid-mining-feasibility', title: 'Asteroid Mining Feasibility Study: Space Resources', date: 'Dec 5, 2025', excerpt: 'Economic analysis shows profitable extraction of rare metals from near-Earth asteroids.' },
    { id: 'solar-coronal-heating-solved', title: 'Solar Coronal Heating Mystery Solved: Magnetic Nanoflares', date: 'Dec 3, 2025', excerpt: 'New evidence confirms that nanoflares are responsible for heating the Sun\'s corona to millions of degrees.' },
    { id: 'fast-radio-bursts-localized', title: 'Fast Radio Bursts Localized: Extragalactic Sources', date: 'Dec 1, 2025', excerpt: 'Multiple FRBs traced to specific galaxies, helping astronomers understand these mysterious signals.' },
    { id: 'interstellar-object-study', title: 'Interstellar Object Detailed Study: \'Oumuamua Analysis', date: 'Nov 29, 2025', excerpt: 'Comprehensive analysis reveals the true nature and origin of our first known interstellar visitor.' },
    { id: 'milky-way-satellite-galaxies', title: 'Milky Way Satellite Galaxies: Dark Matter Clues', date: 'Nov 27, 2025', excerpt: 'Discovery of ultra-faint dwarf galaxies provides new constraints on dark matter distribution.' },
    { id: 'exomoons-habitability-assessment', title: 'Exomoons Habitability Assessment: Life Beyond Earth', date: 'Nov 25, 2025', excerpt: 'Models suggest that large moons around gas giants could support life even in the habitable zone.' },
    { id: 'stellar-evolution-supernova', title: 'Stellar Evolution Supernova Models: Explosion Mechanisms', date: 'Nov 23, 2025', excerpt: 'Advanced simulations reveal the complex processes leading to stellar explosions and element synthesis.' },
    { id: 'galaxy-cluster-formation', title: 'Galaxy Cluster Formation Dynamics: Large Scale Structure', date: 'Nov 21, 2025', excerpt: 'Observations trace the evolution of galaxy clusters from the early universe to present day.' }
  ];

  return (
    <>
      <Head>
        <title>Astronomy | Discovery Nexus</title>
        <meta name="description" content="Explore astronomical discoveries, from exoplanets to the edge of the universe." />
        <meta name="keywords" content="astronomy, astrophysics, cosmology, exoplanets, space exploration" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Astronomy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore astronomical discoveries, from exoplanets to the edge of the universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {astronomyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/astronomy/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/astronomy/${article.id}`}
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