import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MicrobiomeDiet() {
  return (
    <>
      <Head>
        <title>The Microbiome Diet: Nourishing Your Gut | Culinary Chronicles</title>
        <meta name="description" content="Foods and eating patterns that support digestive health and immunity." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food/nutrition" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8">
            <span className="mr-2">←</span>
            Back to Nutrition
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <header className="mb-8">
              <div className="flex items-center text-teal-400 mb-4">
                <span className="text-2xl">🥗</span>
                <span className="ml-2 text-sm font-semibold">NUTRITION</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                The Microbiome Diet: Nourishing Your Gut
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm">
                <span className="mr-4">By Gut Specialist Dr. Emma Flora</span>
                <span className="mr-4">Dec 19, 2025</span>
                <span>20 min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-teal-200 mb-6">
                The human gut microbiome contains trillions of microorganisms that play crucial roles in digestion, immunity, and overall health. The foods you eat directly influence the composition and function of this microbial ecosystem, making dietary choices powerful tools for optimizing gut health.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Understanding the Gut Microbiome</h2>
              <p>
                The gut microbiome consists of bacteria, viruses, fungi, and other microorganisms that live in your digestive tract. These microbes help digest food, produce vitamins, regulate immune function, and protect against harmful pathogens. A diverse, balanced microbiome is associated with better health outcomes.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-teal-400">Microbiome Functions</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Digesting fiber and complex carbohydrates</li>
                <li>Producing short-chain fatty acids (SCFAs)</li>
                <li>Synthesizing certain vitamins (B and K)</li>
                <li>Regulating immune responses</li>
                <li>Protecting against harmful bacteria</li>
                <li>Influencing mood and brain function</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-teal-400">Microbiome Diversity</h3>
              <p>
                Greater microbial diversity is generally associated with better health. A diverse microbiome is more resilient and better able to perform various functions. Diet is one of the most significant factors influencing microbiome diversity.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Prebiotic Foods</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Garlic, onions, and leeks (fructooligosaccharides)</li>
                <li>Jerusalem artichokes (inulin)</li>
                <li>Chicory root (inulin)</li>
                <li>Asparagus (fructooligosaccharides)</li>
                <li>Green bananas (resistant starch)</li>
                <li>Oats (beta-glucan fiber)</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-teal-400">Probiotic Foods</h3>
              <p>
                Probiotic foods contain live beneficial bacteria that can colonize the gut. These include fermented foods like yogurt with live cultures, kefir, sauerkraut, kimchi, miso, tempeh, and kombucha. Regular consumption of these foods can enhance microbiome diversity.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Microbiome-Nourishing Eating Patterns</h2>
              <p>
                A diet rich in diverse plant foods provides the fiber and compounds that beneficial bacteria need to thrive. The Mediterranean diet, rich in vegetables, fruits, legumes, and whole grains, is associated with beneficial microbiome changes. Fiber intake of 25-35 grams daily is recommended for optimal microbiome health.
              </p>

              <div className="bg-gray-800/50 border-l-4 border-teal-500 p-4 my-6">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">Expert Tip</h3>
                <p className="text-gray-300">
                  Gradually increase fiber intake to allow your microbiome to adapt. Rapid increases can cause digestive discomfort. Aim for 30+ different plant foods per week to maximize microbiome diversity, including fruits, vegetables, nuts, seeds, legumes, and whole grains.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Foods That Harm the Microbiome</h2>
              <p>
                Highly processed foods, excessive sugar, artificial sweeteners, and some food additives can negatively impact microbiome diversity. Antibiotic use, while sometimes necessary, can significantly disrupt the microbiome. Limiting these factors supports a healthy microbial ecosystem.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-teal-400">Timing and Microbiome Health</h3>
              <p>
                Meal timing can influence microbiome function. Regular eating schedules support circadian rhythms that affect gut bacteria. Some research suggests that time-restricted eating may benefit microbiome diversity, though more research is needed in this area.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-teal-400">How quickly can diet change the microbiome?</h3>
                  <p className="mt-2 text-gray-300">
                    Significant changes in microbiome composition can occur within 3-5 days of dietary changes. However, establishing a stable, beneficial microbiome typically requires consistent dietary patterns over weeks to months.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-teal-400">Do I need to take probiotic supplements?</h3>
                  <p className="mt-2 text-gray-300">
                    Food sources of probiotics are generally preferred over supplements. Fermented foods provide diverse bacterial strains along with other nutrients. Supplements may be beneficial in specific situations, such as after antibiotic use, but consult a healthcare provider.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-teal-400">Can the microbiome affect weight?</h3>
                  <p className="mt-2 text-gray-300">
                    Research suggests the microbiome can influence weight regulation through various mechanisms, including energy extraction from food, inflammation, and hormone regulation. However, the relationship is complex and involves many other factors.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Interactive Quiz</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">What is the recommended daily fiber intake for optimal microbiome health?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="radio" id="quiz-a" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-a">A) 10-15 grams</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-b" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-b">B) 25-35 grams</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-c" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-c">C) 40-50 grams</label>
                  </li>
                </ul>
                <button className="mt-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">
                  Check Answer
                </button>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-teal-300">Resources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gut-Healthy Recipe Collection</li>
                <li>Guide to Fermented Foods and Preparation</li>
                <li>Microbiome Testing: What to Know Before You Try</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}