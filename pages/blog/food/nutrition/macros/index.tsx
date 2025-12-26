import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MacronutrientTracking() {
  return (
    <>
      <Head>
        <title>Understanding Macronutrient Tracking | Culinary Chronicles</title>
        <meta name="description" content="A comprehensive guide to tracking proteins, carbs, and fats for optimal health." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food/nutrition" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
            <span className="mr-2">←</span>
            Back to Nutrition
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <header className="mb-8">
              <div className="flex items-center text-green-400 mb-4">
                <span className="text-2xl">🥗</span>
                <span className="ml-2 text-sm font-semibold">NUTRITION</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Understanding Macronutrient Tracking
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm">
                <span className="mr-4">By Nutritionist Sarah Balance</span>
                <span className="mr-4">Dec 22, 2025</span>
                <span>18 min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-green-200 mb-6">
                Macronutrient tracking is a powerful tool for understanding your nutritional intake and achieving specific health goals. By monitoring proteins, carbohydrates, and fats, you can optimize your diet to support your body's needs and reach your wellness objectives.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">What Are Macronutrients?</h2>
              <p>
                Macronutrients are nutrients that provide calories or energy and are required in large amounts by the body. They include proteins, carbohydrates, and fats, each serving distinct functions in maintaining health and supporting bodily functions.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-green-400">The Three Macronutrients</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Proteins:</strong> Essential for building and repairing tissues, producing enzymes and hormones</li>
                <li><strong>Carbohydrates:</strong> Primary source of energy for the body and brain</li>
                <li><strong>Fats:</strong> Important for hormone production, insulation, and absorption of fat-soluble vitamins</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-green-400">Caloric Values</h3>
              <p>
                Each macronutrient provides different amounts of energy: proteins and carbohydrates each provide 4 calories per gram, while fats provide 9 calories per gram. Alcohol, though not a macronutrient, provides 7 calories per gram.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Setting Macronutrient Goals</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Calculate your Total Daily Energy Expenditure (TDEE)</li>
                <li>Determine your caloric target based on your goals (weight loss, maintenance, or gain)</li>
                <li>Allocate percentages of calories to each macronutrient category</li>
                <li>Convert these percentages to grams based on caloric values</li>
                <li>Track your intake using apps or food diaries</li>
                <li>Adjust as needed based on results and how you feel</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-green-400">Common Macro Ratios</h3>
              <p>
                General recommendations vary based on goals and individual needs. For example, a balanced diet might be 45-65% carbohydrates, 20-35% fats, and 10-35% protein. Athletes or those with specific goals might adjust these ratios significantly.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Tracking Tools and Techniques</h2>
              <p>
                Effective macronutrient tracking requires accurate tools. Food scales, measuring cups, and nutrition tracking apps like MyFitnessPal or Cronometer can help ensure accuracy. Learning to estimate portions can also be valuable for dining out or when precise tools aren't available.
              </p>

              <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 my-6">
                <h3 className="text-lg font-semibold text-green-300 mb-2">Expert Tip</h3>
                <p className="text-gray-300">
                  Start with tracking just one or two macronutrients rather than all three. This makes the process less overwhelming while still providing valuable insights. As you become more comfortable, you can add additional tracking elements.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Benefits of Macro Tracking</h2>
              <p>
                Tracking macronutrients increases awareness of food choices, helps identify nutritional gaps, and ensures adequate protein intake for muscle preservation. It can also help with energy management throughout the day and support various health goals.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-green-400">Potential Challenges</h3>
              <p>
                Tracking can become time-consuming and may lead to an unhealthy obsession with numbers. It's important to maintain flexibility and remember that tracking is a tool, not a restriction. Some foods may be difficult to track accurately, especially restaurant meals.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-green-400">How accurate do I need to be with macro tracking?</h3>
                  <p className="mt-2 text-gray-300">
                    For most people, being within 5-10 grams of your targets is sufficient. Perfect accuracy is impossible and unnecessary. Focus on consistency over perfection, and adjust your approach based on results and how you feel.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-green-400">Do I need to track forever?</h3>
                  <p className="mt-2 text-gray-300">
                    No, tracking is a learning tool. Many people use it for 3-12 months to develop an understanding of portion sizes and food composition, then transition to intuitive eating or periodic check-ins.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-green-400">Can I eat junk food and still hit my macros?</h3>
                  <p className="mt-2 text-gray-300">
                    While it's technically possible to fit processed foods into your macro targets, focusing on nutrient-dense whole foods provides additional vitamins, minerals, and fiber essential for health that macros alone don't capture.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Interactive Quiz</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">How many calories does one gram of protein provide?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="radio" id="quiz-a" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-a">A) 4 calories</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-b" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-b">B) 7 calories</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-c" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-c">C) 9 calories</label>
                  </li>
                </ul>
                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Check Answer
                </button>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-green-300">Resources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Macronutrient Calculator for Your Goals</li>
                <li>Food Database and Tracking App Recommendations</li>
                <li>Meal Planning Templates for Macro Tracking</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}