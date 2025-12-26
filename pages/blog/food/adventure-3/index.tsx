import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SourdoughStarter() {
  return (
    <>
      <Head>
        <title>Sourdough Starter Maintenance Guide | Culinary Chronicles</title>
        <meta name="description" content="Complete guide to maintaining a healthy sourdough starter." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl mr-4">
                  🥖
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Sourdough Starter Maintenance Guide
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Sourdough Specialist Chef Marie Levain</span>
                    <span className="mx-2">•</span>
                    <span>Dec 18, 2025</span>
                    <span className="mx-2">•</span>
                    <span>20 min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                A sourdough starter is a living culture of wild yeast and beneficial bacteria that has been the foundation of bread making for thousands of years. Unlike commercial yeast, which provides a quick rise, sourdough starters create complex flavors and textures that have made artisanal bread a cherished tradition. Maintaining a healthy starter requires understanding its needs, observing its behavior, and developing a routine that fits your lifestyle. This comprehensive guide will help you create and maintain a robust sourdough culture that will provide years of baking satisfaction.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Understanding Sourdough Culture</h2>
              <p className="mb-4">
                A sourdough starter is an ecosystem of wild yeast and lactic acid bacteria that naturally occur in the environment. When flour and water are combined and left at room temperature, these microorganisms begin to ferment, creating the bubbles and tangy flavor characteristic of sourdough bread.
              </p>
              <p className="mb-4">
                The wild yeast provides the leavening power, while the bacteria produce lactic and acetic acids that give sourdough its distinctive flavor and help preserve the bread. This natural fermentation process also makes the nutrients in grain more bioavailable and can improve digestibility for some people.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Creating Your First Starter</h2>
              <p className="mb-4">
                Creating a starter from scratch is both simple and fascinating. The process typically takes 5-7 days, though environmental conditions can affect the timeline.
              </p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Day 1-2: Initial Mix</h3>
              <p className="mb-4">
                Combine equal parts (by weight) of flour and water in a clean jar. Use unbleached flour for best results—whole grain flours often work better initially due to their higher nutrient content that feeds the wild yeasts. Stir well, cover loosely, and let sit at room temperature.
              </p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Day 3-4: Signs of Life</h3>
              <p className="mb-4">
                You should see small bubbles beginning to form, and the mixture may have a slightly sweet, yeasty smell. At this point, begin daily feedings of fresh flour and water. Discard half the starter before each feeding to prevent excessive growth.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Environmental Factors</h2>
              <p className="mb-4">
                Several environmental factors affect your starter's health and activity:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Temperature</h3>
                  <p className="text-gray-300 text-sm">Warmer temperatures (75-80°F) accelerate fermentation, while cooler temperatures slow it down. Consistent temperature helps maintain predictable activity patterns.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Humidity</h3>
                  <p className="text-gray-300 text-sm">Higher humidity can affect the consistency of your starter. You may need to adjust water ratios accordingly.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Altitude</h2>
                  <p className="text-gray-300 text-sm">At higher altitudes, starters may be more active due to lower atmospheric pressure, requiring more frequent feedings.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Flour Type</h3>
                  <p className="text-gray-300 text-sm">Different flours contain different nutrients and microorganisms, affecting starter behavior and flavor development.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Feeding Your Starter</h2>
              <p className="mb-4">
                Regular feeding is essential for maintaining a healthy starter. The feeding ratio determines the strength and activity of your culture.
              </p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">The 1:1:1 Ratio</h3>
              <p className="mb-4">
                The most common feeding ratio is 1:1:1 (starter:water:flour by weight). For example, if you have 50g of starter, feed it with 50g of water and 50g of flour. This creates a 100% hydration starter that's easy to manage.
              </p>
              
              <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Timing and Frequency</h3>
              <p className="mb-4">
                Feed your starter when it's at peak activity, typically 4-8 hours after feeding depending on temperature and maturity. An active starter will be bubbly and have doubled in size. If you're baking regularly, keep your starter at room temperature and feed daily. For occasional baking, store it in the refrigerator and feed weekly.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Hydration Levels</h2>
              <p className="mb-4">
                Hydration refers to the ratio of water to flour in your starter. This affects its behavior and the resulting bread:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Low Hydration (50-60%):</strong> Thicker consistency, slower fermentation, more acidic flavor</li>
                <li><strong>Medium Hydration (65-75%):</strong> Standard consistency, balanced fermentation, versatile for most breads</li>
                <li><strong>High Hydration (80-125%):</strong> Very liquid, fast fermentation, milder flavor</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Signs of Health and Activity</h2>
              <p className="mb-4">
                A healthy starter shows consistent signs of activity and growth:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Visual Indicators</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-300 text-sm">
                    <li>Abundant bubbles throughout</li>
                    <li>Doubles in size after feeding</li>
                    <li>Active fermentation within 4-8 hours</li>
                    <li>Consistent rising and falling pattern</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Aroma Indicators</h3>
                  <ul className="list-disc pl-4 space-y-1 text-gray-300 text-sm">
                    <li>Pleasant, yeasty smell</li>
                    <li>Slightly tangy or acidic</li>
                    <li>No off-putting odors</li>
                    <li>Consistent aroma patterns</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Common Issues and Solutions</h2>
              <p className="mb-4">
                Every sourdough baker encounters challenges. Understanding these common issues helps maintain a healthy starter:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Slow Activity:</strong> May need more frequent feedings, warmer temperature, or a different flour</li>
                <li><strong>Too Sour:</strong> Feed more frequently or use a lower hydration level</li>
                <li><strong>Not Rising:</strong> May need more time to mature or a change in feeding routine</li>
                <li><strong>Hooch Formation:</strong> Indicates the starter needs feeding; this liquid alcohol layer is normal but signals hunger</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Storage and Long-Term Care</h2>
              <p className="mb-4">
                Proper storage ensures your starter remains viable for extended periods:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Refrigerator Storage</h3>
                  <p className="text-gray-300 text-sm">Feed weekly and store in a loosely covered container. The cold temperature significantly slows fermentation, allowing for less frequent maintenance.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">Extended Breaks</h3>
                  <p className="text-gray-300 text-sm">For longer breaks, you can dry your starter by spreading it thinly on parchment paper until completely dry, then storing in a sealed container. To revive, simply add water and flour.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Troubleshooting Problems</h2>
              <p className="mb-4">
                If your starter develops problems, here are solutions to common issues:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Pink or Orange Streaks:</strong> Discard the starter as it's contaminated with harmful bacteria</li>
                <li><strong>Very Strong Acetone Smell:</strong> The starter is hungry; increase feeding frequency</li>
                <li><strong>No Rise After Feeding:</strong> May need more time to mature or a change in feeding routine</li>
                <li><strong>Too Runny:</strong> Feed with a higher ratio of flour to water</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Using Your Starter</h2>
              <p className="mb-4">
                When your starter is active and healthy, it's ready to use for baking. Use it when it's at peak activity—typically 4-8 hours after feeding when it has doubled in size and is full of bubbles.
              </p>

              <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Maintaining a sourdough starter is a rewarding practice that connects us to ancient bread-making traditions. While it requires attention and consistency, the results are worth the effort. A healthy starter becomes more robust and flavorful over time, and with proper care, it can last for years or even decades. Remember that each starter is unique and may behave differently based on your environment, flour, and routine. Be patient, observe carefully, and enjoy the process of developing your relationship with this living culture.
              </p>

              <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-amber-700/30">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How do I know if my starter is ready to use?</h3>
                    <p className="text-gray-300">A: A starter is ready when it has doubled in size, is full of bubbles, and passes the "float test" (a spoonful floats in water). This typically occurs 4-8 hours after feeding when the starter is at peak activity.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: What if I see liquid on top of my starter?</h3>
                    <p className="text-gray-300">A: This "hooch" is alcohol produced by the yeast when the starter is hungry. It's normal and not harmful. Simply stir it back in and feed your starter. If it appears frequently, consider feeding more often.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Can I switch the type of flour I feed my starter?</h3>
                    <p className="text-gray-300">A: Yes, you can switch flours, but do it gradually over several feedings. The starter will adapt to the new food source, though the flavor and activity may change temporarily.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Sourdough Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. What does a 1:1:1 feeding ratio mean?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) 1 part starter to 1 part water to 1 part flour (by weight)</li>
                      <li>b) 1 cup starter to 1 cup water to 1 cup flour</li>
                      <li>c) 1 part starter to 1 part water to 1 part sugar</li>
                      <li>d) 1 part flour to 1 part water to 1 part salt</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: a) 1 part starter to 1 part water to 1 part flour (by weight)</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. How long should you wait after feeding before using your starter?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Immediately</li>
                      <li>b) 4-8 hours when it's at peak activity</li>
                      <li>c) 24 hours after feeding</li>
                      <li>d) Only after 2 weeks of feeding</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) 4-8 hours when it's at peak activity</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Always use a kitchen scale for accurate measurements—volume measurements are inconsistent</li>
                  <li>Name your starter to develop a connection and remember to feed it regularly</li>
                  <li>Keep a log of feeding times, ratios, and activity patterns to identify what works best</li>
                  <li>Start with whole grain flour to capture more wild yeasts, then transition to white flour if desired</li>
                  <li>Be patient—creating a mature, reliable starter takes time and consistent care</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 mb-8 border border-purple-700/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Sourdough starter calculators</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Sourdough baking communities</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Hydration conversion tools</a></li>
                  <li><a href="#" className="text-amber-400 hover:text-amber-300">Temperature tracking devices</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-amber-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Sourdough</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Bread</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Baking</span>
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Fermentation</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/food"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}