import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MathematicsIndex() {
  // Complete list of mathematics articles
  const mathematicsArticles = [
    { id: 'riemann-hypothesis-proof', title: 'Riemann Hypothesis Proof Approaches: Prime Number Patterns', date: 'Dec 18, 2025', excerpt: 'New mathematical frameworks bring us closer to resolving the most famous unsolved problem in mathematics.' },
    { id: 'topological-data-analysis', title: 'Topological Data Analysis: Shape Recognition in Big Data', date: 'Dec 16, 2025', excerpt: 'Techniques from topology reveal hidden structures in complex datasets across scientific disciplines.' },
    { id: 'quantum-algorithms-advances', title: 'Quantum Algorithms Advances: Computational Speedup', date: 'Dec 14, 2025', excerpt: 'New quantum algorithms demonstrate exponential speedup for specific classes of mathematical problems.' },
    { id: 'machine-learning-math-foundations', title: 'Machine Learning Mathematical Foundations: Statistical Learning Theory', date: 'Dec 12, 2025', excerpt: 'Rigorous mathematical frameworks explain why deep learning systems work so effectively.' },
    { id: 'fractal-geometry-applications', title: 'Fractal Geometry Applications: Natural Pattern Modeling', date: 'Dec 10, 2025', excerpt: 'Fractal mathematics enables accurate modeling of complex natural phenomena from coastlines to galaxy formation.' },
    { id: 'graph-theory-network-science', title: 'Graph Theory in Network Science: Complex System Analysis', date: 'Dec 8, 2025', excerpt: 'Advanced graph algorithms uncover organizing principles in social, biological, and technological networks.' },
    { id: 'algebraic-geometry-cryptography', title: 'Algebraic Geometry in Cryptography: Secure Communications', date: 'Dec 6, 2025', excerpt: 'Elliptic curve mathematics provides the foundation for next-generation cryptographic protocols.' },
    { id: 'mathematical-biology-models', title: 'Mathematical Biology Models: Population Dynamics', date: 'Dec 4, 2025', excerpt: 'Differential equations and stochastic processes model complex biological systems and evolutionary dynamics.' },
    { id: 'chaos-theory-prediction', title: 'Chaos Theory Prediction Methods: Deterministic Randomness', date: 'Dec 2, 2025', excerpt: 'New techniques extract predictable patterns from chaotic systems, improving weather and economic forecasting.' },
    { id: 'number-theory-cryptography', title: 'Number Theory in Modern Cryptography: RSA Evolution', date: 'Nov 30, 2025', excerpt: 'Advances in number theory lead to more secure encryption methods resistant to quantum computer attacks.' },
    { id: 'differential-equations-ai', title: 'Differential Equations in AI: Neural Network Dynamics', date: 'Nov 28, 2025', excerpt: 'Continuous mathematics provides insights into the training and behavior of deep neural networks.' },
    { id: 'probability-theory-uncertainty', title: 'Probability Theory for Uncertainty Quantification: Risk Analysis', date: 'Nov 26, 2025', excerpt: 'Advanced probabilistic methods enable rigorous quantification of uncertainty in scientific models.' },
    { id: 'combinatorics-optimization', title: 'Combinatorics and Optimization: Resource Allocation', date: 'Nov 24, 2025', excerpt: 'Discrete mathematics solves complex optimization problems in logistics, scheduling, and network design.' },
    { id: 'mathematical-physics-unification', title: 'Mathematical Physics Unification: Geometric Approaches', date: 'Nov 22, 2025', excerpt: 'Geometric methods unify seemingly disparate physical theories through elegant mathematical structures.' },
    { id: 'computational-mathematics', title: 'Computational Mathematics: Numerical Methods Advances', date: 'Nov 20, 2025', excerpt: 'High-performance numerical algorithms enable simulation of previously intractable mathematical models.' }
  ];

  return (
    <>
      <Head>
        <title>Mathematics | Discovery Nexus</title>
        <meta name="description" content="Explore mathematical discoveries and their applications across sciences." />
        <meta name="keywords" content="mathematics, applied math, theoretical math, mathematical physics, computational math" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/science" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Mathematics
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore mathematical discoveries and their applications across sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mathematicsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/science/mathematics/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/science/mathematics/${article.id}`}
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