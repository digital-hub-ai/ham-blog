import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CustomFurniture() {
  return (
    <>
      <Head>
        <title>Custom Furniture Building: Craft Your Own Unique Pieces | Hobby Dimension</title>
        <meta name="description" content="Learn the fundamentals of furniture design and construction to create custom pieces that reflect your personal style." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/diy" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <span className="mr-2">←</span>
            Back to DIY Projects
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl mr-4">
                  🔨
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Custom Furniture Building: Craft Your Own Unique Pieces
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Craftsman Taylor Wood</span>
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
                Creating custom furniture is one of the most rewarding DIY projects you can undertake. Not only do you end up with a piece that perfectly fits your space and needs, but you also develop valuable woodworking skills that can be applied to countless future projects.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Getting Started: Tools and Materials</h2>
              <p className="mb-4">
                Before beginning your first custom furniture project, you'll need to gather some essential tools:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Quality measuring tape and combination square</li>
                <li>Hand saw or circular saw for cutting</li>
                <li>Drill with various bits</li>
                <li>Sanders (orbital and detail)</li>
                <li>Chisels and block plane</li>
                <li>Clamps of various sizes</li>
                <li>Safety equipment (glasses, dust mask, hearing protection)</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Design Fundamentals</h2>
              <p className="mb-4">
                Good furniture design starts with understanding both form and function. Consider how the piece will be used, the space where it will live, and how it will complement your existing decor. Sketch your ideas, and don't be afraid to make multiple iterations before settling on a final design.
              </p>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Material Selection</h2>
              <p className="mb-4">
                The wood you choose will dramatically impact both the appearance and durability of your furniture:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hardwoods (oak, maple, cherry) for durability and beauty</li>
                <li>Plywood for large panels and hidden parts</li>
                <li>MDF for painted pieces and curved elements</li>
                <li>Reclaimed wood for character and sustainability</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">First Project Recommendations</h2>
              <p className="mb-4">
                If you're new to furniture making, start with a project that builds fundamental skills:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Simple bookshelf to learn joinery basics</li>
                <li>Side table to practice finishing techniques</li>
                <li>Storage bench to combine multiple skills</li>
                <li>Coffee table with hairpin legs for a modern look</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Joinery Techniques</h2>
              <p className="mb-4">
                The joints you use determine the strength and appearance of your furniture. Start with simpler techniques like pocket screws and dowels, then progress to traditional joinery like:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Dado joints for shelves</li>
                <li>Half-lap joints for frames</li>
                <li>Mortise and tenon for traditional construction</li>
                <li>Biscuit joints for alignment</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Finishing Touches</h2>
              <p className="mb-4">
                A quality finish protects your work and brings out the natural beauty of the wood. Consider the environment where the piece will live when selecting a finish:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Oil finishes for a natural, repairable surface</li>
                <li>Water-based polyurethane for clarity and durability</li>
                <li>Shellac for traditional looks and easy repair</li>
                <li>Paint for bold color and style options</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Advanced Techniques</h2>
              <p className="mb-4">
                Once you've mastered basic construction, consider incorporating advanced techniques:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Curved elements using bent lamination</li>
                <li>Marquetry for decorative inlays</li>
                <li>Custom hardware design</li>
                <li>Integrated lighting solutions</li>
              </ul>

              <h2 className="text-2xl font-bold text-orange-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Custom furniture building is a journey of skill development that yields both functional pieces and personal satisfaction. Each project teaches new lessons and builds confidence for more ambitious undertakings. Start with simple projects and gradually work your way up to more complex designs as your skills develop.
              </p>

              <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-6 mb-8 border border-orange-700/30">
                <h2 className="text-2xl font-bold text-orange-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: What is the best wood for a beginner's first furniture project?</h3>
                    <p className="text-gray-300">A: For beginners, pine or plywood is ideal. These materials are affordable, readily available, and forgiving for learning basic joinery techniques. As skills develop, you can progress to hardwoods like oak or maple.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How important is it to invest in quality tools for furniture making?</h3>
                    <p className="text-gray-300">A: Quality tools make the process safer, more accurate, and more enjoyable. Start with basic quality tools rather than buying many cheap ones. A good saw, drill, and measuring tools will serve you well for years.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How long does it take to complete a first furniture project?</h3>
                    <p className="text-gray-300">A: A simple project like a side table might take 10-20 hours for a beginner, including design and finishing. More complex pieces like bookshelves could take 30-50 hours. Don't rush the process, as patience leads to better results.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Woodworking Knowledge Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. What is the purpose of a dado joint in furniture construction?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) To create a decorative surface</li>
                      <li>b) To join two pieces at a right angle</li>
                      <li>c) To create a slot for shelf insertion</li>
                      <li>d) To finish the edge of a board</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: c) To create a slot for shelf insertion</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. Which wood type is known for its exceptional hardness and durability?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Pine</li>
                      <li>b) Oak</li>
                      <li>c) Balsa</li>
                      <li>d) Poplar</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) Oak</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Always make a test cut on scrap wood before cutting your project pieces</li>
                  <li>Measure twice, cut once - accuracy is more important than speed</li>
                  <li>Invest in quality sharp tools - they're safer and produce better results</li>
                  <li>Keep your workspace clean and organized for safety and efficiency</li>
                  <li>Join a local woodworking group or online community for support and inspiration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Woodworking forums and communities</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">SketchUp - 3D design software for furniture planning</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Wood database for species information</a></li>
                  <li><a href="#" className="text-orange-400 hover:text-orange-300">Local lumber yards for quality materials</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Woodworking</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#DIYFurniture</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#FurnitureMaking</span>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Craftsmanship</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby/diy"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              ← Back to DIY Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}