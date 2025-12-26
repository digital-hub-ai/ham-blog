import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CompanionPlanting() {
  return (
    <>
      <Head>
        <title>Companion Planting: Creating Synergistic Garden Ecosystems | Hobby Dimension</title>
        <meta name="description" content="Learn which plants grow better together and how to maximize your garden productivity naturally." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/hobby/gardening" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
            <span className="mr-2">←</span>
            Back to Gardening
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 p-8">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl mr-4">
                  🌱
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Companion Planting: Creating Synergistic Garden Ecosystems
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Botanist Sam Grow</span>
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
                Companion planting is an ancient agricultural practice that harnesses the natural relationships between plants to create more productive, resilient, and ecologically balanced gardens. By strategically positioning compatible plants together, gardeners can improve yields, reduce pest problems, enhance soil fertility, and create beautiful, diverse growing spaces. This comprehensive guide explores the science and art of companion planting, providing practical strategies to maximize your garden's potential through synergistic plant relationships.
              </p>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Understanding Plant Relationships</h2>
              <p className="mb-4">
                Learn how plants interact and support each other:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Beneficial Relationships</h3>
                  <p className="text-gray-300 text-sm">Some plants enhance growth, flavor, or health of nearby companions through chemical, physical, or biological interactions.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Antagonistic Relationships</h3>
                  <p className="text-gray-300 text-sm">Certain plants release chemicals or compete for resources in ways that inhibit neighboring plants.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pest Deterrence</h3>
                  <p className="text-gray-300 text-sm">Some plants naturally repel harmful insects while attracting beneficial predators and pollinators.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Nutrient Sharing</h3>
                  <p className="text-gray-300 text-sm">Nitrogen-fixing plants can enhance soil fertility for heavy feeders in the garden.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Classic Companion Planting Combinations</h2>
              <p className="mb-4">
                Time-tested combinations that work well together:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Three Sisters</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Corn provides support for beans</li>
                    <li>Beans fix nitrogen for corn and squash</li>
                    <li>Squash provides ground cover and moisture retention</li>
                    <li>Traditional Native American technique</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Tomatoes & Basil</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Basil repels aphids and whiteflies</li>
                    <li>May improve tomato flavor</li>
                    <li>Similar water and light requirements</li>
                    <li>Complementary harvest timing</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Carrots & Onions</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Onions repel carrot flies</li>
                    <li>Carrots repel onion flies</li>
                    <li>Different root depths reduce competition</li>
                    <li>Effective mutual protection</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Beans & Corn</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Beans climb corn stalks naturally</li>
                    <li>Fix nitrogen for corn</li>
                    <li>Complementary nutrient needs</li>
                    <li>Space-efficient combination</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Companion Planting Benefits</h2>
              <p className="mb-4">
                Multiple advantages of strategic plant placement:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Pest Management:</strong> Natural pest control through companion plants that repel harmful insects</li>
                <li><strong>Space Optimization:</strong> Growing compatible plants together maximizes garden productivity</li>
                <li><strong>Soil Enhancement:</strong> Nitrogen-fixing plants improve soil for heavy feeders</li>
                <li><strong>Disease Prevention:</strong> Diverse plantings can reduce the spread of plant diseases</li>
                <li><strong>Pollinator Attraction:</strong> Companion plants can attract beneficial insects that pollinate crops</li>
                <li><strong>Microclimate Creation:</strong> Plants can provide shade, wind protection, or humidity for companions</li>
              </ol>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Companion Planting for Different Garden Types</h2>
              <p className="mb-4">
                Adapt companion planting to your specific garden setup:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Container Gardens</h3>
                  <p className="text-gray-300 text-sm">Choose companions with similar water, light, and space requirements for successful container plantings.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Raised Beds</h3>
                  <p className="text-gray-300 text-sm">Maximize the benefits of improved soil with strategic companion plantings in raised bed systems.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Indoor Gardens</h3>
                  <p className="text-gray-300 text-sm">Select compatible herbs and small plants that share similar light and humidity needs.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Greenhouse Growing</h3>
                  <p className="text-gray-300 text-sm">Control conditions to optimize companion plant relationships and maximize yields.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Companion Plants for Common Vegetables</h2>
              <p className="mb-4">
                Specific companion recommendations for popular crops:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Tomatoes:</strong> Basil, carrots, chives, marigolds, parsley, peppers, and borage</li>
                <li><strong>Carrots:</strong> Chives, leeks, rosemary, sage, and lettuce</li>
                <li><strong>Cucumbers:</strong> Beans, corn, nasturtiums, radishes, and sunflowers</li>
                <li><strong>Peppers:</strong> Basil, carrots, oregano, and tomatoes</li>
                <li><strong>Beans:</strong> Carrots, celery, corn, cucumber, and strawberries</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Plants to Keep Apart</h2>
              <p className="mb-4">
                Avoid these incompatible plant combinations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Competitive Combinations</h3>
                  <p className="text-gray-300 text-sm">Avoid planting members of the same family together to prevent competition and disease spread.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Chemical Inhibitors</h3>
                  <p className="text-gray-300 text-sm">Some plants release chemicals that inhibit growth of nearby plants (allelopathy).</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Resource Competition</h3>
                  <p className="text-gray-300 text-sm">Avoid combining heavy feeders with light feeders or plants with different water needs.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Disease Vectors</h3>
                  <p className="text-gray-300 text-sm">Keep plants susceptible to the same diseases separated to prevent spread.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Flowers as Garden Companions</h2>
              <p className="mb-4">
                Incorporate beneficial flowers into your vegetable garden:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pest-Repelling Flowers</h3>
                  <p className="text-gray-300 text-sm">Marigolds, nasturtiums, and chrysanthemums repel various garden pests while adding color.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pollinator-Attracting Flowers</h3>
                  <p className="text-gray-300 text-sm">Lavender, sunflowers, and zinnias attract beneficial insects that pollinate crops.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Trap Crops</h3>
                  <p className="text-gray-300 text-sm">Flowers like nasturtiums attract pests away from valuable crops to protect them.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Beneficial Insect Habitat</h3>
                  <p className="text-gray-300 text-sm">Flowers provide nectar and habitat for predatory insects that control pests.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Planning Your Companion Garden</h2>
              <p className="mb-4">
                Steps to design an effective companion planting system:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Map Your Garden:</strong> Plan plant placement considering mature sizes and growth habits</li>
                <li><strong>Research Compatibility:</strong> Verify which plants work well together and which to avoid</li>
                <li><strong>Consider Timing:</strong> Plan for succession planting and different harvest times</li>
                <li><strong>Account for Growth:</strong> Consider how plants will grow and affect companions over time</li>
                <li><strong>Observe Results:</strong> Keep notes on what works in your specific garden conditions</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                Companion planting transforms gardening from a simple cultivation activity into a complex ecosystem that mimics natural plant communities. By understanding and applying these time-tested relationships, you can create more productive, sustainable, and ecologically balanced gardens. The key is to observe, experiment, and learn from your specific growing conditions. Start with proven combinations like the Three Sisters or tomatoes with basil, then gradually expand your knowledge of plant relationships. Remember that companion planting is not an exact science—results can vary based on climate, soil conditions, and other environmental factors. Keep records of what works in your garden and adjust your plant combinations accordingly. With patience and observation, you'll develop an intuitive understanding of how to create synergistic plant communities that benefit all garden inhabitants.
              </p>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How close should companion plants be planted together?</h3>
                    <p className="text-gray-300">A: This varies by plant type, but generally 6-12 inches apart allows beneficial interaction while preventing competition. Consider mature plant sizes when planning spacing.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Can companion planting replace pest control methods?</h3>
                    <p className="text-gray-300">A: Companion planting is part of integrated pest management but shouldn't be the only method. It works best combined with other organic pest control strategies.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Are there companion plants that work in containers?</h3>
                    <p className="text-gray-300">A: Yes! Herbs like basil with tomatoes, lettuce with radishes, and marigolds with many vegetables work well in containers when space and water needs are compatible.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-6 mb-8 border border-purple-700/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">Companion Planting Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. Which plants are part of the traditional "Three Sisters" combination?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Corn, beans, squash</li>
                      <li>b) Corn, tomatoes, peppers</li>
                      <li>c) Beans, peas, lentils</li>
                      <li>d) Carrots, onions, parsley</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: a) Corn, beans, squash</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. What is the primary benefit of planting basil near tomatoes?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Provides shade</li>
                      <li>b) Repels pests and may improve flavor</li>
                      <li>c) Fixes nitrogen</li>
                      <li>d) Prevents disease</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) Repels pests and may improve flavor</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Start with proven combinations and gradually experiment with new pairings</li>
                  <li>Keep a garden journal to track successful and unsuccessful combinations</li>
                  <li>Consider the height of plants when planning to avoid shading issues</li>
                  <li>Match plants with similar water and nutrient needs for best results</li>
                  <li>Rotate plant families annually to maintain soil health</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Companion planting charts and guides</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Garden planning software with companion features</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Organic gardening communities and forums</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Plant compatibility databases</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-green-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#CompanionPlanting</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#OrganicGardening</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#SustainableGardening</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#Permaculture</span>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby/gardening"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              ← Back to Gardening
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}