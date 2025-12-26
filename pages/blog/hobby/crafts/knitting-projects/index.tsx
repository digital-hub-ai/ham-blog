import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function KnittingProjects() {
  return (
    <>
      <Head>
        <title>Knitting Projects: From Scarves to Complex Patterns | Hobby Dimension</title>
        <meta name="description" content="Step-by-step guides for knitters of all skill levels, from basic stitches to intricate designs." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/crafts" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <span className="mr-2">←</span>
            Back to Arts & Crafts
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mr-4">
                  ✂️
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Knitting Projects: From Scarves to Complex Patterns
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Artisan Sam Stitch</span>
                    <span className="mx-2">•</span>
                    <span>Dec 20, 2025</span>
                    <span className="mx-2">•</span>
                    <span>18 min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Knitting is a timeless craft that combines functionality with creativity, allowing you to create beautiful, warm garments and accessories with your own hands. From the meditative rhythm of basic stitches to the satisfaction of completing complex patterns, knitting offers endless possibilities for creative expression. This comprehensive guide will take you from beginner basics to advanced techniques.
              </p>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Getting Started: Essential Tools and Materials</h2>
              <p className="mb-4">
                Before you begin knitting, you'll need to gather the right tools:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Needles</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Single-point needles for flat pieces</li>
                    <li>Circular needles for seamless projects</li>
                    <li>Double-pointed needles for small circumferences</li>
                    <li>Proper sizing based on yarn weight</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Yarn</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Understand yarn weights (lace, fingering, worsted, etc.)</li>
                    <li>Fiber content affects drape and care</li>
                    <li>Consider project requirements when selecting yarn</li>
                    <li>Buy extra for safety and matching</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Basic Knitting Stitches</h2>
              <p className="mb-4">
                Master these fundamental stitches to build your knitting foundation:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cast On:</strong> The beginning of every project, creating the foundation row of stitches</li>
                <li><strong>Knit Stitch:</strong> The basic "v" shaped stitch that forms the foundation of knitting</li>
                <li><strong>Purl Stitch:</strong> The bumpy stitch that creates the "reverse" side of stockinette</li>
                <li><strong>Bind Off:</strong> The finishing technique to secure your stitches and complete the project</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Beginner-Friendly Projects</h2>
              <p className="mb-4">
                Start with these projects to build your skills gradually:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Garter Stitch Scarf</h3>
                  <p className="text-gray-300 text-sm">Uses only knit stitches, creating a thick, warm fabric. Perfect for learning tension control.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Simple Dishcloth</h3>
                  <p className="text-gray-300 text-sm">Small project using basic stitches. Great for practicing gauge and tension.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Stockinette Dishcloth</h3>
                  <p className="text-gray-300 text-sm">Introduces purl stitches. Learn the rhythm of alternating knit and purl rows.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Simple Hat</h3>
                  <p className="text-gray-300 text-sm">Introduces decreasing techniques. First project with shaping.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Intermediate Techniques</h2>
              <p className="mb-4">
                Once you've mastered the basics, try these intermediate techniques:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Increasing and Decreasing:</strong> Techniques for shaping garments</li>
                <li><strong>Cables:</strong> Creating twisted patterns that add texture and visual interest</li>
                <li><strong>Colorwork:</strong> Fair Isle and intarsia techniques for multicolored designs</li>
                <li><strong>Lace Knitting:</strong> Creating open, decorative patterns with yarn overs and decreases</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Reading Patterns and Charts</h2>
              <p className="mb-4">
                Understanding pattern language is crucial for successful knitting:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Knitting abbreviations (k, p, yo, k2tog, ssk, etc.)</li>
                <li>Understanding gauge and why it matters</li>
                <li>Reading charts vs. written instructions</li>
                <li>Following pattern repeats and modifications</li>
                <li>Adjusting patterns for different sizes</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Common Mistakes and Solutions</h2>
              <p className="mb-4">
                Every knitter encounters these challenges:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Dropped Stitches</h3>
                  <p className="text-gray-300 text-sm">Use a crochet hook to pick up dropped stitches. Don't panic - it's fixable!</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Twisted Stitches</h3>
                  <p className="text-gray-300 text-sm">Insert needle through the front of the loop, not the back, to avoid twisted stitches.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Inconsistent Tension</h3>
                  <p className="text-gray-300 text-sm">Practice regularly to develop consistent tension. Relax your grip on the yarn.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Misreading Patterns</h3>
                  <p className="text-gray-300 text-sm">Read the entire pattern before starting. Mark your place as you work.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Advanced Knitting Techniques</h2>
              <p className="mb-4">
                For experienced knitters looking to expand their skills:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Entrelac:</strong> Creating interwoven squares that form a textured fabric</li>
                <li><strong>Mosaic Knitting:</strong> Two-color technique that creates complex patterns with simple stitches</li>
                <li><strong>Short Rows:</strong> Adding shaping without visible decreases</li>
                <li><strong>Steeking:</strong> Cutting knitted fabric to create openings (for cardigans)</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Knitting is a craft that rewards patience and practice. Each project teaches new skills and builds confidence for more complex endeavors. Whether you're creating simple scarves or intricate sweaters, the meditative rhythm of needles and yarn provides both creative satisfaction and practical results. Remember that mistakes are part of the learning process, and every experienced knitter started with their first stitch.
              </p>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 mb-8 border border-purple-700/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How do I choose the right needle size for my yarn?</h3>
                    <p className="text-gray-300">A: Check the yarn label for recommended needle size, but always knit a gauge swatch to ensure your project will be the correct size.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: What's the difference between knitting and purling?</h3>
                    <p className="text-gray-300">A: The knit stitch creates a smooth "v" shape, while the purl stitch creates a bumpy horizontal bar. Together they form different textures and patterns.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How can I fix a dropped stitch?</h3>
                    <p className="text-gray-300">A: Use a crochet hook to work the dropped stitch back up to the live row, picking up the ladder of yarn as you go.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Knitting Knowledge Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. What does "k2tog" mean in knitting patterns?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Knit two stitches together (decrease)</li>
                      <li>b) Knit two rows</li>
                      <li>c) Knit with two strands</li>
                      <li>d) Knit two separate pieces together</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: a) Knit two stitches together (decrease)</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. What is gauge in knitting?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) The size of your needles</li>
                      <li>b) The number of stitches and rows per inch</li>
                      <li>c) The weight of your yarn</li>
                      <li>d) The length of your project</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) The number of stitches and rows per inch</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Always make a gauge swatch before starting a project</li>
                  <li>Keep a row counter to track pattern repeats</li>
                  <li>Learn to "tink" (knit backwards) to fix mistakes without unraveling</li>
                  <li>Join a knitting group for support and learning opportunities</li>
                  <li>Invest in quality needles that feel comfortable in your hands</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-purple-400 hover:text-purple-300">Knitting pattern websites</a></li>
                  <li><a href="#" className="text-purple-400 hover:text-purple-300">Local yarn shops and communities</a></li>
                  <li><a href="#" className="text-purple-400 hover:text-purple-300">Knitting video tutorials</a></li>
                  <li><a href="#" className="text-purple-400 hover:text-purple-300">Knitting apps for pattern storage</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-purple-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Knitting</span>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Crafts</span>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#DIY</span>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Textiles</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby/crafts"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              ← Back to Arts & Crafts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}