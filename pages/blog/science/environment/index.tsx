import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EnvironmentIndex() {
  // Complete list of environment articles
  const environmentArticles = [
    { id: 'climate-engineering-co2-reduction', title: 'Climate Engineering: Atmospheric CO2 Reduction', date: 'Dec 16, 2025', excerpt: 'Large-scale deployment of carbon capture technologies begins to show measurable impact on global CO2 levels.' },
    { id: 'biodiversity-conservation-success', title: 'Biodiversity Conservation Success Stories: Species Recovery', date: 'Dec 14, 2025', excerpt: 'Targeted conservation efforts lead to population recovery of critically endangered species worldwide.' },
    { id: 'ocean-plastic-cleanup-tech', title: 'Ocean Plastic Cleanup Technology: Marine Restoration', date: 'Dec 12, 2025', excerpt: 'Autonomous vessels equipped with advanced filtration systems remove plastic waste from ocean gyres.' },
    { id: 'renewable-energy-storage', title: 'Renewable Energy Storage Breakthrough: Grid Stability', date: 'Dec 10, 2025', excerpt: 'Massive-scale energy storage solutions enable 100% renewable electricity grids in multiple countries.' },
    { id: 'urban-sustainability-models', title: 'Urban Sustainability Models: Green City Design', date: 'Dec 8, 2025', excerpt: 'Cities implement closed-loop systems for water, waste, and energy achieving net-zero environmental impact.' },
    { id: 'ecosystem-restoration-techniques', title: 'Ecosystem Restoration Techniques: Rewilding Success', date: 'Dec 6, 2025', excerpt: 'Large-scale rewilding projects demonstrate effective methods for restoring degraded landscapes.' },
    { id: 'pollution-monitoring-networks', title: 'Pollution Monitoring Networks: Real-Time Tracking', date: 'Dec 4, 2025', excerpt: 'Global sensor networks provide instant alerts and predictive modeling for air and water quality.' },
    { id: 'sustainable-agriculture-practices', title: 'Sustainable Agriculture Practices: Soil Health', date: 'Dec 2, 2025', excerpt: 'Regenerative farming techniques increase crop yields while improving soil carbon sequestration.' },
    { id: 'water-security-solutions', title: 'Water Security Solutions: Desalination Advances', date: 'Nov 30, 2025', excerpt: 'Next-generation desalination plants provide fresh water with minimal energy consumption and environmental impact.' },
    { id: 'forest-conservation-drones', title: 'Forest Conservation Using Drones: Illegal Logging Prevention', date: 'Nov 28, 2025', excerpt: 'AI-powered drone surveillance systems effectively prevent illegal deforestation in protected areas.' },
    { id: 'circular-economy-implementation', title: 'Circular Economy Implementation: Waste Elimination', date: 'Nov 26, 2025', excerpt: 'Businesses adopt zero-waste models through innovative recycling and product lifecycle extension.' },
    { id: 'coral-reef-restoration', title: 'Coral Reef Restoration: Assisted Evolution', date: 'Nov 24, 2025', excerpt: 'Genetically enhanced coral varieties show resilience to warming oceans and acidification.' },
    { id: 'greenhouse-gas-accounting', title: 'Greenhouse Gas Accounting Standards: Corporate Transparency', date: 'Nov 22, 2025', excerpt: 'Mandatory reporting requirements drive significant emissions reductions across industries.' },
    { id: 'permafrost-thaw-monitoring', title: 'Permafrost Thaw Monitoring: Methane Release Tracking', date: 'Nov 20, 2025', excerpt: 'Satellite monitoring systems track permafrost degradation and associated greenhouse gas releases.' },
    { id: 'wildlife-corridor-creation', title: 'Wildlife Corridor Creation: Habitat Connectivity', date: 'Nov 18, 2025', excerpt: 'Continental-scale wildlife corridors enable species migration and genetic diversity preservation.' }
  ];

  return (
    <>
      <Head>
        <title>Environment | Discovery Nexus</title>
        <meta name="description" content="Explore environmental science and sustainability solutions for Earth's future." />
        <meta name="keywords" content="environment, sustainability, climate change, conservation, ecology" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Environment
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore environmental science and sustainability solutions for Earth's future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environmentArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/environment/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/environment/${article.id}`}
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