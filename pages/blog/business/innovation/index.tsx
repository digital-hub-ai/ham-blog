import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InnovationIndex() {
  // Complete list of innovation articles
  const innovationArticles = [
    { id: 'open-innovation-networks', title: 'Open Innovation Networks: Collaborative R&D in the Digital Age', date: 'Dec 13, 2025', excerpt: 'How companies are leveraging external partnerships and crowdsourcing to accelerate innovation.' },
    { id: 'innovation-labs-2025', title: 'Innovation Labs 2025: Experimental Spaces for Breakthrough Ideas', date: 'Dec 8, 2025', excerpt: 'Designing physical and virtual environments that foster creative thinking and rapid prototyping.' },
    { id: 'frugal-innovation-emerging-markets', title: 'Frugal Innovation: Creating Value in Resource-Constrained Markets', date: 'Dec 3, 2025', excerpt: 'Developing affordable, accessible solutions that meet the needs of emerging market consumers.' },
    { id: 'design-thinking-business', title: 'Design Thinking in Business: Human-Centered Problem Solving', date: 'Nov 28, 2025', excerpt: 'Applying design methodologies to tackle complex business challenges and create user-focused solutions.' },
    { id: 'innovation-metrics-measurement', title: 'Innovation Metrics: Measuring and Managing Creative Output', date: 'Nov 23, 2025', excerpt: 'Frameworks for tracking innovation performance and ROI on creative investments.' },
    { id: 'digital-transformation-innovation', title: 'Digital Transformation and Innovation: Reshaping Industries', date: 'Dec 11, 2025', excerpt: 'How organizations are leveraging digital technologies to drive innovation and create competitive advantages across industries.' },
    { id: 'open-source-innovation-community-collaboration', title: 'Open Source Innovation and Community Collaboration: Collective Intelligence', date: 'Dec 9, 2025', excerpt: 'How businesses are leveraging open source communities and collaborative innovation to accelerate development and create shared value.' },
    { id: 'sustainable-innovation-circular-economy', title: 'Sustainable Innovation and Circular Economy: Regenerative Business Models', date: 'Dec 7, 2025', excerpt: 'Exploring how businesses are creating regenerative value through sustainable innovation and circular economy principles.' },
    { id: 'healthcare-biotechnology-innovation', title: 'Innovation in Healthcare and Biotechnology: Transforming Patient Care', date: 'Dec 5, 2025', excerpt: 'How cutting-edge innovations in healthcare and biotechnology are revolutionizing patient care and medical outcomes.' },
    { id: 'artificial-intelligence-machine-learning-innovation', title: 'Artificial Intelligence and Machine Learning Innovation: Intelligent Automation', date: 'Dec 3, 2025', excerpt: 'Exploring how AI and ML innovations are transforming industries through intelligent automation and data-driven decision making.' },
    { id: 'education-edtech-innovation', title: 'Innovation in Education and EdTech: Transforming Learning Experiences', date: 'Dec 1, 2025', excerpt: 'How educational technology and innovative teaching methods are revolutionizing learning experiences for students worldwide.' },
    { id: 'blockchain-decentralized-innovation', title: 'Blockchain and Decentralized Innovation: Trust Without Authority', date: 'Nov 29, 2025', excerpt: 'Exploring how blockchain technology and decentralized systems are creating new paradigms for trust, transparency, and value exchange.' },
    { id: 'transportation-mobility-innovation', title: 'Innovation in Transportation and Mobility: Moving Toward the Future', date: 'Nov 27, 2025', excerpt: 'How innovative transportation solutions are reshaping mobility, reducing environmental impact, and creating smarter urban environments.' },
    { id: 'customer-centric-innovation-co-creation', title: 'Customer-Centric Innovation and Co-Creation: Designing with Users', date: 'Nov 25, 2025', excerpt: 'How businesses are partnering with customers to create innovative solutions that truly meet user needs and drive sustainable growth.' },
    { id: 'retail-ecommerce-innovation', title: 'Innovation in Retail and E-commerce: Transforming Shopping Experiences', date: 'Nov 23, 2025', excerpt: 'How retail and e-commerce innovations are revolutionizing customer experiences, supply chains, and business models in the digital age.' }
  ];

  return (
    <>
      <Head>
        <title>Innovation | Corporate Consciousness</title>
        <meta name="description" content="Explore innovation methodologies, R&D strategies, and creative problem-solving in business." />
        <meta name="keywords" content="innovation, R&D, creativity, problem solving, design thinking" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Innovation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore innovation methodologies, R&D strategies, and creative problem-solving in business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/innovation/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/innovation/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm"
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
              href="/blog/business"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}