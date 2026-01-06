import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function BiologyIndex() {
  // Complete list of biology articles
  const biologyArticles = [
    { id: &apos;crispr-evolution-editing&apos;, title: &apos;CRISPR 3.0: Editing Evolution Itself&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Next-generation gene editing technology allows precise manipulation of evolutionary pathways in living organisms.&apos; },
    { id: &apos;synthetic-biology-life-creation&apos;, title: &apos;Synthetic Biology: Creating New Life Forms&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Scientists engineer entirely new organisms with custom genetic codes designed for specific industrial applications.&apos; },
    { id: &apos;microbiome-health-connections&apos;, title: &apos;Microbiome-Health Connections: The Gut-Brain Axis&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;Research reveals how intestinal bacteria influence mental health, immunity, and metabolic function.&apos; },
    { id: &apos;cellular-reprogramming-youth&apos;, title: &apos;Cellular Reprogramming for Youth: Reversing Aging&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;Breakthrough techniques restore youthful function to aged cells without genetic modification.&apos; },
    { id: &apos;neuroplasticity-digital-environments&apos;, title: &apos;Neuroplasticity in Digital Environments: Brain Adaptation&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;Studies show how virtual and augmented reality environments reshape neural pathways and cognitive abilities.&apos; },
    { id: &apos;epigenetics-environmental-influence&apos;, title: &apos;Epigenetics and Environmental Influence: Gene Expression Control&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;Environmental factors can alter gene expression patterns that persist across generations without changing DNA sequence.&apos; },
    { id: &apos;regenerative-medicine-organs&apos;, title: &apos;Regenerative Medicine: Growing Organs in Labs&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Bioengineered organs from patient stem cells eliminate transplant rejection and organ shortage crises.&apos; },
    { id: &apos;proteomics-disease-biomarkers&apos;, title: &apos;Proteomics and Disease Biomarkers: Protein Signatures&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;Advanced protein analysis identifies early disease markers enabling prevention rather than treatment.&apos; },
    { id: &apos;immunotherapy-cancer-breakthrough&apos;, title: &apos;Immunotherapy Cancer Breakthrough: Engineered Immune Cells&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;Customized immune cells successfully target and eliminate previously untreatable cancer variants.&apos; },
    { id: &apos;metagenomics-ecosystem-analysis&apos;, title: &apos;Metagenomics Ecosystem Analysis: Community Genomics&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;Sequencing entire ecosystem genomes reveals complex interactions between species and environmental factors.&apos; },
    { id: &apos;stem-cell-therapy-advances&apos;, title: &apos;Stem Cell Therapy Advances: Targeted Regeneration&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;Precise control of stem cell differentiation enables repair of specific tissues and organs.&apos; },
    { id: &apos;virology-emerging-pathogens&apos;, title: &apos;Virology of Emerging Pathogens: Pandemic Preparedness&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;Universal virus detection platforms provide early warning systems for potential pandemic threats.&apos; },
    { id: &apos;neuroscience-brain-computer-interfaces&apos;, title: &apos;Neuroscience and Brain-Computer Interfaces: Mind-Machine Merge&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;Direct neural interfaces enable thought-controlled prosthetics and computer interaction.&apos; },
    { id: &apos;evolutionary-biology-speciation&apos;, title: &apos;Evolutionary Biology Speciation: Rapid Species Formation&apos;, date: &apos;Nov 21, 2025&apos;, excerpt: &apos;Accelerated evolution observed in laboratory conditions provides insights into biodiversity mechanisms.&apos; },
    { id: &apos;bioinformatics-genomic-analysis&apos;, title: &apos;Bioinformatics Genomic Analysis: Big Data Biology&apos;, date: &apos;Nov 19, 2025&apos;, excerpt: &apos;Machine learning algorithms decode complex genomic patterns to predict disease susceptibility and drug responses.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Biology | Discovery Nexus</title>
        <meta name="description&quot; content="Explore breakthroughs in biology, from genetics to ecology.&quot; />
        <meta name="keywords&quot; content="biology, genetics, ecology, molecular biology, biotechnology&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Biology
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore breakthroughs in biology, from genetics to ecology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {biologyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/biology/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/biology/${article.id}`}
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