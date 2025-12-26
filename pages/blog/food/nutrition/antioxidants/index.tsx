import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AntioxidantPower() {
  return (
    <>
      <Head>
        <title>Antioxidant Power: Fighting Oxidative Stress | Culinary Chronicles</title>
        <meta name="description" content="Understanding how antioxidants protect your body and which foods are richest in them." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food/nutrition" className="inline-flex items-center text-rose-400 hover:text-rose-300 mb-8">
            <span className="mr-2">←</span>
            Back to Nutrition
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <header className="mb-8">
              <div className="flex items-center text-rose-400 mb-4">
                <span className="text-2xl">🥗</span>
                <span className="ml-2 text-sm font-semibold">NUTRITION</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
                Antioxidant Power: Fighting Oxidative Stress
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm">
                <span className="mr-4">By Health Researcher Dr. Alex Defense</span>
                <span className="mr-4">Dec 18, 2025</span>
                <span>14 min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-rose-200 mb-6">
                Antioxidants are compounds that protect cells from damage caused by free radicals. Understanding how these protective compounds work and which foods contain the highest concentrations can help you make dietary choices that support long-term health and reduce the risk of chronic diseases.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Understanding Oxidative Stress</h2>
              <p>
                Oxidative stress occurs when there's an imbalance between free radicals and antioxidants in the body. Free radicals are unstable molecules that can damage cells, proteins, and DNA. While some free radicals are naturally produced during metabolism, external factors like pollution, UV radiation, and processed foods can increase their production.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-rose-400">Sources of Free Radicals</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Environmental pollutants and cigarette smoke</li>
                <li>UV radiation and excessive sun exposure</li>
                <li>Processed and fried foods</li>
                <li>Alcohol consumption</li>
                <li>Intense physical exercise</li>
                <li>Normal metabolic processes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-rose-400">Antioxidant Mechanisms</h3>
              <p>
                Antioxidants neutralize free radicals by donating electrons, stopping the chain reaction that leads to cellular damage. Different antioxidants work in different ways and in different parts of cells. The body also produces its own antioxidants like glutathione and superoxide dismutase.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Types of Antioxidants</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Vitamin C (ascorbic acid) - water-soluble antioxidant</li>
                <li>Vitamin E (tocopherols) - fat-soluble antioxidant</li>
                <li>Beta-carotene and carotenoids - precursors to vitamin A</li>
                <li>Flavonoids - plant compounds with antioxidant properties</li>
                <li>Polyphenols - found in tea, coffee, and wine</li>
                <li>Selenium - mineral with antioxidant function</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-rose-400">High-Antioxidant Foods</h3>
              <p>
                Foods with the highest antioxidant content include small red beans, wild blueberries, red kidney beans, pinto beans, cultivated blueberries, cranberries, artichokes, blackberries, prunes, and russet potatoes. The ORAC (Oxygen Radical Absorbance Capacity) value measures antioxidant capacity.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Antioxidant-Rich Eating Patterns</h2>
              <p>
                Diets rich in fruits, vegetables, nuts, seeds, and whole grains provide high antioxidant intake. The Mediterranean diet and DASH diet are both high in antioxidants. Consuming a variety of colorful fruits and vegetables ensures intake of different types of antioxidants.
              </p>

              <div className="bg-gray-800/50 border-l-4 border-rose-500 p-4 my-6">
                <h3 className="text-lg font-semibold text-rose-300 mb-2">Expert Tip</h3>
                <p className="text-gray-300">
                  Eat the rainbow! Different colored fruits and vegetables contain different types of antioxidants. Red tomatoes have lycopene, orange carrots have beta-carotene, blue berries have anthocyanins, and green leafy vegetables have lutein and zeaxanthin. Aim for at least 5 servings of colorful produce daily.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Cooking and Antioxidant Retention</h2>
              <p>
                Cooking methods can affect antioxidant content. Some antioxidants like lycopene in tomatoes become more bioavailable when cooked, while others like vitamin C are reduced by heat. Steaming, microwaving, and stir-frying tend to preserve more antioxidants than boiling.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-rose-400">Antioxidant Supplements vs. Food</h3>
              <p>
                Research generally shows that antioxidant supplements don't provide the same benefits as antioxidants from whole foods. Food sources provide a complex matrix of nutrients and compounds that work synergistically. Whole foods also contain fiber and other beneficial compounds not found in supplements.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-rose-400">Can I have too many antioxidants?</h3>
                  <p className="mt-2 text-gray-300">
                    While antioxidants from food are generally safe, excessive intake from supplements can be harmful. High-dose antioxidant supplements can interfere with exercise adaptations and may increase disease risk in some cases. Stick to food sources for optimal health.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-rose-400">Do antioxidant needs vary by individual?</h3>
                  <p className="mt-2 text-gray-300">
                    Yes, antioxidant needs can vary based on age, lifestyle, genetics, and environmental exposures. Smokers, athletes, and those exposed to high pollution may have increased antioxidant needs. Age-related changes in antioxidant defense systems may also increase requirements.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-rose-400">How do antioxidants support immune function?</h3>
                  <p className="mt-2 text-gray-300">
                    Antioxidants protect immune cells from oxidative damage, allowing them to function optimally. Vitamin C supports white blood cell function, while vitamin E protects cell membranes. Selenium and zinc support various immune processes and antioxidant enzyme function.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Interactive Quiz</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Which of these is NOT a primary antioxidant vitamin?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="radio" id="quiz-a" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-a">A) Vitamin C</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-b" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-b">B) Vitamin D</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-c" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-c">C) Vitamin E</label>
                  </li>
                </ul>
                <button className="mt-3 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded">
                  Check Answer
                </button>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-rose-300">Resources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Antioxidant-Rich Recipe Collection</li>
                <li>Seasonal Guide to High-Antioxidant Produce</li>
                <li>ORAC Values of Common Foods</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}