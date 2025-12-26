import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CoinCollecting() {
  return (
    <>
      <Head>
        <title>Coin Collecting: Building a Numismatic Portfolio | Hobby Dimension</title>
        <meta name="description" content="Learn the fundamentals of coin collecting, from identifying valuable pieces to proper storage techniques." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/collecting" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
            <span className="mr-2">←</span>
            Back to Collecting
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl mr-4">
                  🗂️
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Coin Collecting: Building a Numismatic Portfolio
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Numismatist Alex Treasury</span>
                    <span className="mx-2">•</span>
                    <span>Dec 21, 2025</span>
                    <span className="mx-2">•</span>
                    <span>16 min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Coin collecting, also known as numismatics, is one of the world's oldest and most popular hobbies. It combines the thrill of the hunt for rare pieces with the satisfaction of preserving history. Whether you're drawn to ancient coins with fascinating stories or modern commemorative pieces, coin collecting offers a window into the cultures, politics, and economics of different eras. This comprehensive guide will help you navigate the exciting world of numismatics.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Getting Started with Coin Collecting</h2>
              <p className="mb-4">
                Beginning your coin collection requires understanding some basic concepts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Types of Coins</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Circulating coins: Regular currency used in daily transactions</li>
                    <li>Commemorative coins: Issued to honor special events or people</li>
                    <li>Proof coins: High-quality coins struck specially for collectors</li>
                    <li>Uncirculated coins: Never used in commerce, in mint condition</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Essential Tools</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Good lighting for inspection</li>
                    <li>Magnifying glass for detail examination</li>
                    <li>Coin holders and albums for storage</li>
                    <li>Soft cotton gloves to prevent oils from touching coins</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Understanding Coin Grading</h2>
              <p className="mb-4">
                The condition of a coin significantly affects its value:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Grading Scale</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Uncirculated (MS-60 to MS-70): No wear from circulation</li>
                    <li>Extremely Fine (EF): Minimal wear on high points</li>
                    <li>Very Fine (VF): Light wear on design elements</li>
                    <li>Good (G): Heavily worn but design still visible</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Professional Grading</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>NGC (Numismatic Guaranty Corporation)</li>
                    <li>PCGS (Professional Coin Grading Service)</li>
                    <li>ICG (Independent Coin Grading)</li>
                    <li>Benefits: Authentication and preservation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Popular Coin Collecting Themes</h2>
              <p className="mb-4">
                Many collectors focus on specific areas of interest:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">By Country</h3>
                  <p className="text-gray-300 text-sm">Focusing on coins from a specific nation or region. Allows deep knowledge of that country's history and culture.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">By Time Period</h3>
                  <p className="text-gray-300 text-sm">Collecting coins from specific eras, such as ancient Roman coins or early American coinage.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">By Denomination</h3>
                  <p className="text-gray-300 text-sm">Focusing on specific types like Morgan silver dollars or wheat pennies.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Error Coins</h3>
                  <p className="text-gray-300 text-sm">Coins with minting mistakes, which can be quite valuable to collectors.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Building Your Collection Strategically</h2>
              <p className="mb-4">
                Successful collecting involves planning and research:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Set a Budget:</strong> Determine how much you can afford to spend monthly</li>
                <li><strong>Research Values:</strong> Use price guides and online resources to understand coin values</li>
                <li><strong>Focus Initially:</strong> Start with a specific area to build expertise</li>
                <li><strong>Network with Collectors:</strong> Join clubs and online communities for advice</li>
                <li><strong>Attend Shows:</strong> Coin shows offer opportunities to buy and learn</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Proper Coin Storage and Care</h2>
              <p className="mb-4">
                Protecting your investment is crucial for long-term success:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Storage Options</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Albums for circulation coins</li>
                    <li>Slabs for valuable, graded coins</li>
                    <li>Flips for short-term storage</li>
                    <li>Safe deposit box for valuable collections</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Handling Guidelines</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Use cotton gloves when possible</li>
                    <li>Handle by edges only</li>
                    <li>Avoid cleaning coins unless absolutely necessary</li>
                    <li>Keep coins away from direct sunlight and humidity</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Identifying Counterfeits</h2>
              <p className="mb-4">
                Protect yourself from fake coins with these tips:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Weight:</strong> Counterfeit coins often have incorrect weight</li>
                <li><strong>Magnetism:</strong> Most precious metal coins are not magnetic</li>
                <li><strong>Color:</strong> Incorrect metal composition changes appearance</li>
                <li><strong>Edge:</strong> Check for proper reeding or lettering</li>
                <li><strong>Detail:</strong> Poorly struck details often indicate fakes</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Valuing Your Collection</h2>
              <p className="mb-4">
                Understanding coin values helps with buying and selling decisions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Price Guides</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Red Book (A Guide Book of United States Coins)</li>
                    <li>Greysheet for current market values</li>
                    <li>Online auction results for rare coins</li>
                    <li>Professional appraisals for valuable collections</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Market Factors</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Condition and grade</li>
                    <li>Rarity and mintage figures</li>
                    <li>Historical significance</li>
                    <li>Market demand and trends</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Coin collecting is a rewarding hobby that combines historical education with potential investment value. Success in numismatics comes from knowledge, patience, and careful attention to detail. Whether you're interested in ancient coins with fascinating stories or modern commemorative pieces, the key is to start with proper education and gradually build your expertise. Remember that the best collections are built over time with careful selection and proper care.
              </p>

              <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-amber-700/30">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How do I determine if a coin is valuable?</h3>
                    <p className="text-gray-300">A: Value depends on rarity, condition, historical significance, and market demand. Check price guides and recent auction results for similar coins.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Should I clean my old coins?</h3>
                    <p className="text-gray-300">A: Generally, no. Cleaning can damage the surface and reduce value. Professional conservation should only be done by experts for severely damaged coins.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: What's the difference between numismatics and coin collecting?</h3>
                    <p className="text-gray-300">A: Numismatics is the scientific study and collection of currency, while coin collecting is a more general term for the hobby. Numismatists often focus on historical and educational aspects.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Numismatics Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. What does the term "MS-65" refer to in coin grading?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) A mint state coin with average condition</li>
                      <li>b) A mint state coin with choice, about uncirculated quality</li>
                      <li>c) A mint state coin with brilliant, near perfect quality</li>
                      <li>d) A mint with the designation "65"</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: c) A mint state coin with brilliant, near perfect quality</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. What does the term "toning" refer to in coin collecting?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) The sound a coin makes when dropped</li>
                      <li>b) Natural coloration that develops on coin surfaces over time</li>
                      <li>c) The process of adding color to coins</li>
                      <li>d) The color of the original metal</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) Natural coloration that develops on coin surfaces over time</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Start with a well-defined collecting theme to build expertise</li>
                  <li>Invest in proper storage from the beginning to protect your coins</li>
                  <li>Join local coin clubs for networking and educational opportunities</li>
                  <li>Always research before purchasing expensive coins</li>
                  <li>Consider third-party grading for valuable coins</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Professional Coin Grading Service (PCGS)</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Numismatic Guaranty Corporation (NGC)</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">American Numismatic Association</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Coin collecting forums and communities</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-amber-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#CoinCollecting</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Numismatics</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Collecting</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Hobbies</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby/collecting"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              ← Back to Collecting
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}