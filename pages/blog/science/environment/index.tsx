import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function EnvironmentIndex() {
  // Complete list of environment articles
  const environmentArticles = [
    { id: &apos;climate-engineering-co2-reduction&apos;, title: &apos;Climate Engineering: Atmospheric CO2 Reduction&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;Large-scale deployment of carbon capture technologies begins to show measurable impact on global CO2 levels.&apos; },
    { id: &apos;biodiversity-conservation-success&apos;, title: &apos;Biodiversity Conservation Success Stories: Species Recovery&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;Targeted conservation efforts lead to population recovery of critically endangered species worldwide.&apos; },
    { id: &apos;ocean-plastic-cleanup-tech&apos;, title: &apos;Ocean Plastic Cleanup Technology: Marine Restoration&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;Autonomous vessels equipped with advanced filtration systems remove plastic waste from ocean gyres.&apos; },
    { id: &apos;renewable-energy-storage&apos;, title: &apos;Renewable Energy Storage Breakthrough: Grid Stability&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Massive-scale energy storage solutions enable 100% renewable electricity grids in multiple countries.&apos; },
    { id: &apos;urban-sustainability-models&apos;, title: &apos;Urban Sustainability Models: Green City Design&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Cities implement closed-loop systems for water, waste, and energy achieving net-zero environmental impact.&apos; },
    { id: &apos;ecosystem-restoration-techniques&apos;, title: &apos;Ecosystem Restoration Techniques: Rewilding Success&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Large-scale rewilding projects demonstrate effective methods for restoring degraded landscapes.&apos; },
    { id: &apos;pollution-monitoring-networks&apos;, title: &apos;Pollution Monitoring Networks: Real-Time Tracking&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Global sensor networks provide instant alerts and predictive modeling for air and water quality.&apos; },
    { id: &apos;sustainable-agriculture-practices&apos;, title: &apos;Sustainable Agriculture Practices: Soil Health&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;Regenerative farming techniques increase crop yields while improving soil carbon sequestration.&apos; },
    { id: &apos;water-security-solutions&apos;, title: &apos;Water Security Solutions: Desalination Advances&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Next-generation desalination plants provide fresh water with minimal energy consumption and environmental impact.&apos; },
    { id: &apos;forest-conservation-drones&apos;, title: &apos;Forest Conservation Using Drones: Illegal Logging Prevention&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;AI-powered drone surveillance systems effectively prevent illegal deforestation in protected areas.&apos; },
    { id: &apos;circular-economy-implementation&apos;, title: &apos;Circular Economy Implementation: Waste Elimination&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;Businesses adopt zero-waste models through innovative recycling and product lifecycle extension.&apos; },
    { id: &apos;coral-reef-restoration&apos;, title: &apos;Coral Reef Restoration: Assisted Evolution&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;Genetically enhanced coral varieties show resilience to warming oceans and acidification.&apos; },
    { id: &apos;greenhouse-gas-accounting&apos;, title: &apos;Greenhouse Gas Accounting Standards: Corporate Transparency&apos;, date: &apos;Nov 22, 2025&apos;, excerpt: &apos;Mandatory reporting requirements drive significant emissions reductions across industries.&apos; },
    { id: &apos;permafrost-thaw-monitoring&apos;, title: &apos;Permafrost Thaw Monitoring: Methane Release Tracking&apos;, date: &apos;Nov 20, 2025&apos;, excerpt: &apos;Satellite monitoring systems track permafrost degradation and associated greenhouse gas releases.&apos; },
    { id: &apos;wildlife-corridor-creation&apos;, title: &apos;Wildlife Corridor Creation: Habitat Connectivity&apos;, date: &apos;Nov 18, 2025&apos;, excerpt: &apos;Continental-scale wildlife corridors enable species migration and genetic diversity preservation.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Environment | Discovery Nexus</title>
        <meta name="description&quot; content="Explore environmental science and sustainability solutions for Earth's future.&quot; />
        <meta name="keywords&quot; content="environment, sustainability, climate change, conservation, ecology&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Environment
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore environmental science and sustainability solutions for Earth&apos;s future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {environmentArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/environment/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/environment/${article.id}`}
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