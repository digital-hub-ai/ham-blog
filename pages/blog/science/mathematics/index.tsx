import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function MathematicsIndex() {
  // Complete list of mathematics articles
  const mathematicsArticles = [
    { id: &apos;riemann-hypothesis-proof&apos;, title: &apos;Riemann Hypothesis Proof Approaches: Prime Number Patterns&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;New mathematical frameworks bring us closer to resolving the most famous unsolved problem in mathematics.&apos; },
    { id: &apos;topological-data-analysis&apos;, title: &apos;Topological Data Analysis: Shape Recognition in Big Data&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;Techniques from topology reveal hidden structures in complex datasets across scientific disciplines.&apos; },
    { id: &apos;quantum-algorithms-advances&apos;, title: &apos;Quantum Algorithms Advances: Computational Speedup&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;New quantum algorithms demonstrate exponential speedup for specific classes of mathematical problems.&apos; },
    { id: &apos;machine-learning-math-foundations&apos;, title: &apos;Machine Learning Mathematical Foundations: Statistical Learning Theory&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;Rigorous mathematical frameworks explain why deep learning systems work so effectively.&apos; },
    { id: &apos;fractal-geometry-applications&apos;, title: &apos;Fractal Geometry Applications: Natural Pattern Modeling&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Fractal mathematics enables accurate modeling of complex natural phenomena from coastlines to galaxy formation.&apos; },
    { id: &apos;graph-theory-network-science&apos;, title: &apos;Graph Theory in Network Science: Complex System Analysis&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Advanced graph algorithms uncover organizing principles in social, biological, and technological networks.&apos; },
    { id: &apos;algebraic-geometry-cryptography&apos;, title: &apos;Algebraic Geometry in Cryptography: Secure Communications&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Elliptic curve mathematics provides the foundation for next-generation cryptographic protocols.&apos; },
    { id: &apos;mathematical-biology-models&apos;, title: &apos;Mathematical Biology Models: Population Dynamics&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Differential equations and stochastic processes model complex biological systems and evolutionary dynamics.&apos; },
    { id: &apos;chaos-theory-prediction&apos;, title: &apos;Chaos Theory Prediction Methods: Deterministic Randomness&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;New techniques extract predictable patterns from chaotic systems, improving weather and economic forecasting.&apos; },
    { id: &apos;number-theory-cryptography&apos;, title: &apos;Number Theory in Modern Cryptography: RSA Evolution&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Advances in number theory lead to more secure encryption methods resistant to quantum computer attacks.&apos; },
    { id: &apos;differential-equations-ai&apos;, title: &apos;Differential Equations in AI: Neural Network Dynamics&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;Continuous mathematics provides insights into the training and behavior of deep neural networks.&apos; },
    { id: &apos;probability-theory-uncertainty&apos;, title: &apos;Probability Theory for Uncertainty Quantification: Risk Analysis&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;Advanced probabilistic methods enable rigorous quantification of uncertainty in scientific models.&apos; },
    { id: &apos;combinatorics-optimization&apos;, title: &apos;Combinatorics and Optimization: Resource Allocation&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;Discrete mathematics solves complex optimization problems in logistics, scheduling, and network design.&apos; },
    { id: &apos;mathematical-physics-unification&apos;, title: &apos;Mathematical Physics Unification: Geometric Approaches&apos;, date: &apos;Nov 22, 2025&apos;, excerpt: &apos;Geometric methods unify seemingly disparate physical theories through elegant mathematical structures.&apos; },
    { id: &apos;computational-mathematics&apos;, title: &apos;Computational Mathematics: Numerical Methods Advances&apos;, date: &apos;Nov 20, 2025&apos;, excerpt: &apos;High-performance numerical algorithms enable simulation of previously intractable mathematical models.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Mathematics | Discovery Nexus</title>
        <meta name="description&quot; content="Explore mathematical discoveries and their applications across sciences.&quot; />
        <meta name="keywords&quot; content="mathematics, applied math, theoretical math, mathematical physics, computational math&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/science&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Discovery Nexus
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Mathematics
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore mathematical discoveries and their applications across sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {mathematicsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                    <Link href={`/blog/science/mathematics/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/science/mathematics/${article.id}`}
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