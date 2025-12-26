import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function IndoorHerbGarden() {
  return (
    <>
      <Head>
        <title>Indoor Herb Garden: Fresh Flavors Year-Round | Hobby Dimension</title>
        <meta name="description" content="Create a thriving indoor herb garden for fresh culinary ingredients anytime." />
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
                    Indoor Herb Garden: Fresh Flavors Year-Round
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>By Herb Specialist Morgan Leaf</span>
                    <span className="mx-2">•</span>
                    <span>Dec 16, 2025</span>
                    <span className="mx-2">•</span>
                    <span>14 min read</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                An indoor herb garden brings the fresh flavors of culinary herbs into your kitchen year-round, regardless of outdoor weather conditions. With proper planning and care, you can enjoy aromatic basil, pungent rosemary, bright cilantro, and other favorite herbs just steps away from your cooking area. This comprehensive guide will show you how to create a thriving indoor herb garden that provides fresh ingredients for your culinary adventures while adding beauty and fragrance to your living space.
              </p>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Choosing the Right Location</h2>
              <p className="mb-4">
                Select the perfect spot for your indoor herb garden:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Light Requirements</h3>
                  <p className="text-gray-300 text-sm">Most herbs need 6-8 hours of bright light daily. South-facing windows are ideal, with east-facing as a good alternative.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Temperature Considerations</h3>
                  <p className="text-gray-300 text-sm">Herbs prefer moderate temperatures between 65-75°F. Avoid placing them near heating vents or drafty windows.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Air Circulation</h3>
                  <p className="text-gray-300 text-sm">Good air flow prevents fungal diseases and strengthens plant stems. A small fan on low setting can help.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Accessibility</h3>
                  <p className="text-gray-300 text-sm">Place your herb garden where you can easily access it for harvesting while cooking.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Best Herbs for Indoor Growing</h2>
              <p className="mb-4">
                Choose herbs that thrive in indoor conditions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Low-Light Tolerant</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Chives - grow well in moderate light</li>
                    <li>Parsley - tolerates lower light conditions</li>
                    <li>Cilantro - prefers cooler, shadier spots</li>
                    <li>Thyme - compact and hardy indoors</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">High-Light Lovers</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Basil - needs bright light to thrive</li>
                    <li>Oregano - prefers sunny locations</li>
                    <li>Rosemary - loves bright, direct light</li>
                    <li>Sage - requires full sun conditions</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Compact Varieties</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Dwarf basil varieties</li>
                    <li>Miniature rosemary</li>
                    <li>Compact thyme</li>
                    <li>Bush sage varieties</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Fast-Growing Options</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    <li>Cress - ready in 2-3 weeks</li>
                    <li>Chervil - grows quickly in cooler conditions</li>
                    <li>Microgreens - ready in 7-14 days</li>
                    <li>Scallions - can be regrown from scraps</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Container and Soil Selection</h2>
              <p className="mb-4">
                Proper containers and growing medium are essential:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Container Size:</strong> Choose pots with adequate depth (6-12 inches) and drainage holes for healthy root development</li>
                <li><strong>Drainage:</strong> Ensure all containers have drainage holes to prevent root rot</li>
                <li><strong>Soil Mix:</strong> Use high-quality potting mix designed for containers, not garden soil</li>
                <li><strong>Drainage Layer:</strong> Add a layer of gravel or perlite at the bottom of containers for improved drainage</li>
                <li><strong>Container Materials:</strong> Consider ceramic, plastic, or fabric pots based on your aesthetic preferences and plant needs</li>
                <li><strong>Grouping Strategy:</strong> Plant herbs with similar water and light needs together</li>
              </ol>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Artificial Lighting Solutions</h2>
              <p className="mb-4">
                When natural light is insufficient:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">LED Grow Lights</h3>
                  <p className="text-gray-300 text-sm">Energy-efficient with full-spectrum light. Position 12-18 inches above plants for optimal growth.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Fluorescent Lights</h3>
                  <p className="text-gray-300 text-sm">Cost-effective option that provides good light for herbs. T5 bulbs are particularly effective.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Light Duration</h3>
                  <p className="text-gray-300 text-sm">Provide 12-16 hours of artificial light daily to simulate bright natural conditions.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Light Positioning</h3>
                  <p className="text-gray-300 text-sm">Adjust height as plants grow and ensure even coverage across all containers.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Watering and Feeding</h2>
              <p className="mb-4">
                Proper hydration and nutrition for healthy herbs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Watering Frequency:</strong> Check soil moisture regularly and water when the top inch feels dry</li>
                <li><strong>Watering Technique:</strong> Water at soil level to avoid wetting leaves and causing disease</li>
                <li><strong>Drainage:</strong> Empty saucers after watering to prevent root rot</li>
                <li><strong>Fertilization:</strong> Use diluted liquid fertilizer every 2-4 weeks during active growth</li>
                <li><strong>Humidity:</strong> Some herbs benefit from increased humidity, especially in winter months</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Pruning and Harvesting</h2>
              <p className="mb-4">
                Techniques for maximizing growth and flavor:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Regular Harvesting</h3>
                  <p className="text-gray-300 text-sm">Frequent harvesting encourages new growth and prevents plants from becoming leggy.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pinching Techniques</h3>
                  <p className="text-gray-300 text-sm">Pinch flower buds to redirect energy into leaf production, especially for basil.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Harvest Timing</h3>
                  <p className="text-gray-300 text-sm">Harvest in the morning when essential oils are most concentrated for best flavor.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pruning Strategy</h3>
                  <p className="text-gray-300 text-sm">Remove no more than 1/3 of the plant at a time to maintain health and growth.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Common Indoor Herb Problems</h2>
              <p className="mb-4">
                Troubleshooting typical growing issues:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Leggy Growth</h3>
                  <p className="text-gray-300 text-sm">Caused by insufficient light. Move to brighter location or add artificial lighting.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Yellowing Leaves</h3>
                  <p className="text-gray-300 text-sm">Often due to overwatering. Allow soil to dry between waterings.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Pest Issues</h3>
                  <p className="text-gray-300 text-sm">Aphids and spider mites can occur. Use neem oil or insecticidal soap for treatment.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Wilting</h3>
                  <p className="text-gray-300 text-sm">Can indicate both overwatering and underwatering. Check soil moisture.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Seasonal Care Considerations</h2>
              <p className="mb-4">
                Adjusting care throughout the year:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Winter Care:</strong> Reduce watering frequency and supplement with artificial light as days shorten</li>
                <li><strong>Spring Growth:</strong> Begin regular fertilization and increase watering as growth accelerates</li>
                <li><strong>Summer Vigor:</strong> Ensure adequate watering and consider moving herbs outside if possible</li>
                <li><strong>Fall Preparation:</strong> Reduce fertilization and prepare for shorter daylight hours</li>
                <li><strong>Rotation:</strong> Replace herbs that have become woody or less productive</li>
              </ul>

              <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Conclusion</h2>
              <p className="mb-8">
                An indoor herb garden is a rewarding investment that provides fresh, flavorful ingredients year-round while enhancing your living space. With proper location selection, appropriate containers, and consistent care, your indoor herbs will thrive and provide culinary benefits for years to come. The key to success is understanding each herb's specific needs and adjusting your care routine seasonally. Start with a few easy-to-grow herbs like basil, parsley, and chives, then gradually expand your collection as you gain experience. Remember that indoor herb gardening is both practical and enjoyable, offering the satisfaction of growing your own food while adding beauty and fragrance to your home. With patience and attention to your plants' needs, your indoor herb garden will become an essential part of your culinary routine, providing fresh flavors for countless meals throughout the year.
              </p>

              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: How often should I water my indoor herbs?</h3>
                    <p className="text-gray-300">A: Check soil moisture every 2-3 days and water when the top inch feels dry. Most herbs prefer slightly dry conditions to overly wet soil.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Which herbs are best for beginners?</h3>
                    <p className="text-gray-300">A: Chives, parsley, basil, and mint are generally easy to grow indoors and provide good results for beginners.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Q: Can I grow herbs from seeds indoors?</h3>
                    <p className="text-gray-300">A: Yes, many herbs can be grown from seeds indoors. Start with easy varieties like basil, cilantro, and chives. Some herbs like rosemary and sage are easier to start from cuttings.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-6 mb-8 border border-purple-700/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">Indoor Herb Quiz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white mb-2">1. How many hours of light do most herbs need daily indoors?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) 2-4 hours</li>
                      <li>b) 4-6 hours</li>
                      <li>c) 6-8 hours</li>
                      <li>d) 8-10 hours</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: c) 6-8 hours</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-white mb-2">2. What should you do with basil flowers to keep leaves flavorful?</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>a) Leave them to enjoy</li>
                      <li>b) Pinch them off</li>
                      <li>c) Harvest and dry them</li>
                      <li>d) Use them in cooking</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-green-400 font-semibold">Answer: b) Pinch them off</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 mb-8 border border-green-700/30">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Expert Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Place herbs where you'll see them daily to remember to water and harvest them</li>
                  <li>Group herbs with similar water and light needs together for easier care</li>
                  <li>Harvest regularly to encourage new growth and prevent plants from becoming woody</li>
                  <li>Rotate pots weekly to ensure even light exposure and prevent leaning</li>
                  <li>Start with small pots and transplant to larger containers as plants grow</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-6 mb-8 border border-yellow-700/30">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Resources & Tools</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Indoor herb growing guides and tips</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Herb seed and plant suppliers</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">Indoor growing containers and supplies</a></li>
                  <li><a href="#" className="text-blue-400 hover:text-blue-300">LED grow light recommendations</a></li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-green-700/50">
                <p className="mb-4">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#IndoorGardening</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#HerbGardening</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#CulinaryHerbs</span>
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">#SustainableLiving</span>
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