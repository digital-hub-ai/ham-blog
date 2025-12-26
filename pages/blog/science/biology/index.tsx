import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BiologyIndex() {
  // Complete list of biology articles
  const biologyArticles = [
    { id: 'crispr-evolution-editing', title: 'CRISPR 3.0: Editing Evolution Itself', date: 'Dec 17, 2025', excerpt: 'Next-generation gene editing technology allows precise manipulation of evolutionary pathways in living organisms.' },
    { id: 'synthetic-biology-life-creation', title: 'Synthetic Biology: Creating New Life Forms', date: 'Dec 15, 2025', excerpt: 'Scientists engineer entirely new organisms with custom genetic codes designed for specific industrial applications.' },
    { id: 'microbiome-health-connections', title: 'Microbiome-Health Connections: The Gut-Brain Axis', date: 'Dec 13, 2025', excerpt: 'Research reveals how intestinal bacteria influence mental health, immunity, and metabolic function.' },
    { id: 'cellular-reprogramming-youth', title: 'Cellular Reprogramming for Youth: Reversing Aging', date: 'Dec 11, 2025', excerpt: 'Breakthrough techniques restore youthful function to aged cells without genetic modification.' },
    { id: 'neuroplasticity-digital-environments', title: 'Neuroplasticity in Digital Environments: Brain Adaptation', date: 'Dec 9, 2025', excerpt: 'Studies show how virtual and augmented reality environments reshape neural pathways and cognitive abilities.' },
    { id: 'epigenetics-environmental-influence', title: 'Epigenetics and Environmental Influence: Gene Expression Control', date: 'Dec 7, 2025', excerpt: 'Environmental factors can alter gene expression patterns that persist across generations without changing DNA sequence.' },
    { id: 'regenerative-medicine-organs', title: 'Regenerative Medicine: Growing Organs in Labs', date: 'Dec 5, 2025', excerpt: 'Bioengineered organs from patient stem cells eliminate transplant rejection and organ shortage crises.' },
    { id: 'proteomics-disease-biomarkers', title: 'Proteomics and Disease Biomarkers: Protein Signatures', date: 'Dec 3, 2025', excerpt: 'Advanced protein analysis identifies early disease markers enabling prevention rather than treatment.' },
    { id: 'immunotherapy-cancer-breakthrough', title: 'Immunotherapy Cancer Breakthrough: Engineered Immune Cells', date: 'Dec 1, 2025', excerpt: 'Customized immune cells successfully target and eliminate previously untreatable cancer variants.' },
    { id: 'metagenomics-ecosystem-analysis', title: 'Metagenomics Ecosystem Analysis: Community Genomics', date: 'Nov 29, 2025', excerpt: 'Sequencing entire ecosystem genomes reveals complex interactions between species and environmental factors.' },
    { id: 'stem-cell-therapy-advances', title: 'Stem Cell Therapy Advances: Targeted Regeneration', date: 'Nov 27, 2025', excerpt: 'Precise control of stem cell differentiation enables repair of specific tissues and organs.' },
    { id: 'virology-emerging-pathogens', title: 'Virology of Emerging Pathogens: Pandemic Preparedness', date: 'Nov 25, 2025', excerpt: 'Universal virus detection platforms provide early warning systems for potential pandemic threats.' },
    { id: 'neuroscience-brain-computer-interfaces', title: 'Neuroscience and Brain-Computer Interfaces: Mind-Machine Merge', date: 'Nov 23, 2025', excerpt: 'Direct neural interfaces enable thought-controlled prosthetics and computer interaction.' },
    { id: 'evolutionary-biology-speciation', title: 'Evolutionary Biology Speciation: Rapid Species Formation', date: 'Nov 21, 2025', excerpt: 'Accelerated evolution observed in laboratory conditions provides insights into biodiversity mechanisms.' },
    { id: 'bioinformatics-genomic-analysis', title: 'Bioinformatics Genomic Analysis: Big Data Biology', date: 'Nov 19, 2025', excerpt: 'Machine learning algorithms decode complex genomic patterns to predict disease susceptibility and drug responses.' }
  ];

  return (
    <>
      <Head>
        <title>Biology | Discovery Nexus</title>
        <meta name="description" content="Explore breakthroughs in biology, from genetics to ecology." />
        <meta name="keywords" content="biology, genetics, ecology, molecular biology, biotechnology" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Biology
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore breakthroughs in biology, from genetics to ecology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biologyArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/biology/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/biology/${article.id}`}
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