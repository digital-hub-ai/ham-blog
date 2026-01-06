import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function AstronomyIndex() {
  // Complete list of astronomy articles
  const astronomyArticles = [
    { id: &apos;exoplanet-biosignatures&apos;, title: &apos;Biosignatures Detected on 12 New Exoplanets: Signs of Extraterrestrial Life?&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Advanced spectroscopy reveals atmospheric compositions suggesting biological activity on distant worlds.&apos; },
    { id: &apos;gravitational-wave-multimessenger&apos;, title: &apos;Gravitational Wave Multimessenger Astronomy: Cosmic Events&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Simultaneous detection of gravitational waves and electromagnetic radiation provides unprecedented insights into cosmic events.&apos; },
    { id: &apos;dark-energy-survey-results&apos;, title: &apos;Dark Energy Survey Results: Universe Expansion&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Latest observations refine our understanding of the accelerating expansion of the universe.&apos; },
    { id: &apos;neutron-star-merger-insights&apos;, title: &apos;Neutron Star Merger Insights: Heavy Element Formation&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;Detailed analysis of merger events explains the origin of gold, platinum, and other heavy elements.&apos; },
    { id: &apos;james-webb-telescope-discoveries&apos;, title: &apos;James Webb Telescope Discoveries: Early Galaxy Formation&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;Observations of the earliest galaxies challenge theories about cosmic evolution and star formation.&apos; },
    { id: &apos;black-hole-imaging-advances&apos;, title: &apos;Black Hole Imaging Advances: Event Horizon Details&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;Enhanced imaging techniques reveal new details about the environment around supermassive black holes.&apos; },
    { id: &apos;cosmic-microwave-background&apos;, title: &apos;Cosmic Microwave Background Anomalies: Primordial Secrets&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;Subtle variations in the afterglow of the Big Bang hint at physics beyond the Standard Model.&apos; },
    { id: &apos;asteroid-mining-feasibility&apos;, title: &apos;Asteroid Mining Feasibility Study: Space Resources&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Economic analysis shows profitable extraction of rare metals from near-Earth asteroids.&apos; },
    { id: &apos;solar-coronal-heating-solved&apos;, title: &apos;Solar Coronal Heating Mystery Solved: Magnetic Nanoflares&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;New evidence confirms that nanoflares are responsible for heating the Sun\&apos;s corona to millions of degrees.&apos; },
    { id: &apos;fast-radio-bursts-localized&apos;, title: &apos;Fast Radio Bursts Localized: Extragalactic Sources&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;Multiple FRBs traced to specific galaxies, helping astronomers understand these mysterious signals.&apos; },
    { id: &apos;interstellar-object-study&apos;, title: &apos;Interstellar Object Detailed Study: \&apos;Oumuamua Analysis&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;Comprehensive analysis reveals the true nature and origin of our first known interstellar visitor.&apos; },
    { id: &apos;milky-way-satellite-galaxies&apos;, title: &apos;Milky Way Satellite Galaxies: Dark Matter Clues&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;Discovery of ultra-faint dwarf galaxies provides new constraints on dark matter distribution.&apos; },
    { id: &apos;exomoons-habitability-assessment&apos;, title: &apos;Exomoons Habitability Assessment: Life Beyond Earth&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;Models suggest that large moons around gas giants could support life even in the habitable zone.&apos; },
    { id: &apos;stellar-evolution-supernova&apos;, title: &apos;Stellar Evolution Supernova Models: Explosion Mechanisms&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;Advanced simulations reveal the complex processes leading to stellar explosions and element synthesis.&apos; },
    { id: &apos;galaxy-cluster-formation&apos;, title: &apos;Galaxy Cluster Formation Dynamics: Large Scale Structure&apos;, date: &apos;Nov 21, 2025&apos;, excerpt: &apos;Observations trace the evolution of galaxy clusters from the early universe to present day.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Astronomy | Discovery Nexus</title>
        <meta name="description&quot; content="Explore astronomical discoveries, from exoplanets to the edge of the universe.&quot; />
        <meta name="keywords&quot; content="astronomy, astrophysics, cosmology, exoplanets, space exploration&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Astronomy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore astronomical discoveries, from exoplanets to the edge of the universe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {astronomyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/astronomy/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/astronomy/${article.id}`}
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