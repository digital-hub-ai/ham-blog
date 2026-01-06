import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function InnovationIndex() {
  // Complete list of innovation articles
  const innovationArticles = [
    { id: &apos;open-innovation-networks&apos;, title: &apos;Open Innovation Networks: Collaborative R&D in the Digital Age&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;How companies are leveraging external partnerships and crowdsourcing to accelerate innovation.&apos; },
    { id: &apos;innovation-labs-2025&apos;, title: &apos;Innovation Labs 2025: Experimental Spaces for Breakthrough Ideas&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Designing physical and virtual environments that foster creative thinking and rapid prototyping.&apos; },
    { id: &apos;frugal-innovation-emerging-markets&apos;, title: &apos;Frugal Innovation: Creating Value in Resource-Constrained Markets&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;Developing affordable, accessible solutions that meet the needs of emerging market consumers.&apos; },
    { id: &apos;design-thinking-business&apos;, title: &apos;Design Thinking in Business: Human-Centered Problem Solving&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;Applying design methodologies to tackle complex business challenges and create user-focused solutions.&apos; },
    { id: &apos;innovation-metrics-measurement&apos;, title: &apos;Innovation Metrics: Measuring and Managing Creative Output&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;Frameworks for tracking innovation performance and ROI on creative investments.&apos; },
    { id: &apos;digital-transformation-innovation&apos;, title: &apos;Digital Transformation and Innovation: Reshaping Industries&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;How organizations are leveraging digital technologies to drive innovation and create competitive advantages across industries.&apos; },
    { id: &apos;open-source-innovation-community-collaboration&apos;, title: &apos;Open Source Innovation and Community Collaboration: Collective Intelligence&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;How businesses are leveraging open source communities and collaborative innovation to accelerate development and create shared value.&apos; },
    { id: &apos;sustainable-innovation-circular-economy&apos;, title: &apos;Sustainable Innovation and Circular Economy: Regenerative Business Models&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;Exploring how businesses are creating regenerative value through sustainable innovation and circular economy principles.&apos; },
    { id: &apos;healthcare-biotechnology-innovation&apos;, title: &apos;Innovation in Healthcare and Biotechnology: Transforming Patient Care&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;How cutting-edge innovations in healthcare and biotechnology are revolutionizing patient care and medical outcomes.&apos; },
    { id: &apos;artificial-intelligence-machine-learning-innovation&apos;, title: &apos;Artificial Intelligence and Machine Learning Innovation: Intelligent Automation&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;Exploring how AI and ML innovations are transforming industries through intelligent automation and data-driven decision making.&apos; },
    { id: &apos;education-edtech-innovation&apos;, title: &apos;Innovation in Education and EdTech: Transforming Learning Experiences&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;How educational technology and innovative teaching methods are revolutionizing learning experiences for students worldwide.&apos; },
    { id: &apos;blockchain-decentralized-innovation&apos;, title: &apos;Blockchain and Decentralized Innovation: Trust Without Authority&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;Exploring how blockchain technology and decentralized systems are creating new paradigms for trust, transparency, and value exchange.&apos; },
    { id: &apos;transportation-mobility-innovation&apos;, title: &apos;Innovation in Transportation and Mobility: Moving Toward the Future&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;How innovative transportation solutions are reshaping mobility, reducing environmental impact, and creating smarter urban environments.&apos; },
    { id: &apos;customer-centric-innovation-co-creation&apos;, title: &apos;Customer-Centric Innovation and Co-Creation: Designing with Users&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;How businesses are partnering with customers to create innovative solutions that truly meet user needs and drive sustainable growth.&apos; },
    { id: &apos;retail-ecommerce-innovation&apos;, title: &apos;Innovation in Retail and E-commerce: Transforming Shopping Experiences&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;How retail and e-commerce innovations are revolutionizing customer experiences, supply chains, and business models in the digital age.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Innovation | Corporate Consciousness</title>
        <meta name="description&quot; content="Explore innovation methodologies, R&D strategies, and creative problem-solving in business.&quot; />
        <meta name="keywords&quot; content="innovation, R&D, creativity, problem solving, design thinking&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/business&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Innovation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore innovation methodologies, R&D strategies, and creative problem-solving in business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {innovationArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors&quot;>
                    <Link href={`/blog/business/innovation/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/business/innovation/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm&quot;
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
              href="/blog/business&quot;
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300&quot;
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}