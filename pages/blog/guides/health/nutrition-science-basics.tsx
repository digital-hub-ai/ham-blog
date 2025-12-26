import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NutritionScienceBasics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Nutrition Science: Understanding the Building Blocks of Health | Knowledge Compendium</title>
        <meta name="description" content="Learn the scientific principles behind healthy eating and optimal nutrition." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50">
                Nutrition
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Science
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Health
              </span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Nutrition Science: Understanding the Building Blocks of Health
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 mb-6">
              <span className="mb-2 sm:mb-0 sm:mr-4">By Nutritionist Dr. Maya Fuel</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>Dec 21, 2025</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>22 min read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Nutrition science is a complex and evolving field that impacts every aspect of our health and well-being. This comprehensive guide will help you understand the fundamental principles of nutrition and how to apply them to optimize your health in 2025 and beyond.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">The Science of Nutrition</h2>
            <p>
              Nutrition science studies how food and nutrients affect our bodies at the cellular, metabolic, and systemic levels. Understanding the biochemical processes that occur when we consume food helps us make informed decisions about what, when, and how much to eat for optimal health.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Essential Nutrients and Their Functions</h2>
            <p>
              Our bodies require six essential nutrients that must be obtained through food since we cannot produce them in sufficient quantities:
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">1. Carbohydrates</h3>
            <p>
              Carbohydrates are the body's primary source of energy. They break down into glucose, which fuels our cells and brain. Focus on complex carbohydrates from whole grains, fruits, vegetables, and legumes rather than simple sugars for sustained energy and better health outcomes.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">2. Proteins</h3>
            <p>
              Proteins are essential for building and repairing tissues, producing enzymes and hormones, and supporting immune function. Include a variety of protein sources such as lean meats, fish, eggs, dairy, legumes, nuts, and seeds to ensure you get all essential amino acids.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">3. Fats (Lipids)</h3>
            <p>
              Fats provide concentrated energy, support cell function, and help absorb fat-soluble vitamins. Focus on healthy fats like omega-3 fatty acids, monounsaturated fats, and polyunsaturated fats while limiting saturated and trans fats.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">4. Vitamins</h3>
            <p>
              Vitamins are organic compounds that support various bodily functions. Fat-soluble vitamins (A, D, E, K) are stored in the body, while water-soluble vitamins (B-complex and C) need regular replenishment. A varied diet typically provides adequate vitamins.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">5. Minerals</h3>
            <p>
              Minerals are inorganic substances essential for bone health, nerve function, muscle contraction, and enzyme activity. Include calcium, iron, magnesium, potassium, and other minerals through a diverse diet rich in whole foods.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">6. Water</h3>
            <p>
              Water is often overlooked but is essential for every bodily function. Aim for 8-10 glasses per day, adjusting for activity level, climate, and individual needs. Water supports temperature regulation, joint lubrication, and waste removal.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Macronutrient Balance and Timing</h2>
            <p>
              The balance and timing of macronutrients can impact energy levels, performance, and health outcomes. General guidelines suggest 45-65% of calories from carbohydrates, 20-35% from fats, and 10-35% from proteins, though individual needs vary based on activity level, health status, and goals.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Understanding Food Quality</h2>
            <p>
              Not all calories are created equal. The quality of food matters as much as the quantity. Whole, minimally processed foods provide more nutrients per calorie and are associated with better health outcomes compared to highly processed alternatives.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Evidence-Based Nutrition Principles</h2>
            <p>
              Based on current scientific evidence, these principles form the foundation of healthy eating:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Eat a variety of colorful fruits and vegetables daily</li>
              <li>Choose whole grains over refined grains</li>
              <li>Include lean proteins in each meal</li>
              <li>Select healthy fats from nuts, seeds, fish, and plant oils</li>
              <li>Limit added sugars, sodium, and saturated fats</li>
              <li>Stay hydrated with water as the primary beverage</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Practical Application of Nutrition Science</h2>
            <p>
              Applying nutrition science to daily life involves making informed choices about food selection, preparation, and timing. Consider your individual needs, preferences, and lifestyle when implementing nutrition strategies for optimal adherence and results.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Best Practices for Healthy Eating</h2>
            <p>
              As you apply nutrition science principles, keep the following best practices in mind:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Plan meals ahead to make healthier choices more convenient</li>
              <li>Read nutrition labels to make informed decisions</li>
              <li>Practice portion control to avoid overeating</li>
              <li>Include a variety of foods to ensure nutrient adequacy</li>
              <li>Limit highly processed foods and added sugars</li>
              <li>Stay hydrated throughout the day</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">FAQs</h2>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: How many calories should I eat per day?</h3>
                <p className="mt-2">A: Caloric needs vary based on age, gender, activity level, and health goals. On average, women need 1,600-2,400 calories and men need 2,000-3,000 calories per day, but individual needs can vary significantly.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: Are all fats bad for health?</h3>
                <p className="mt-2">A: No, healthy fats are essential for good health. Focus on omega-3 fatty acids, monounsaturated fats, and polyunsaturated fats while limiting saturated and trans fats.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: Is it better to eat multiple small meals or three larger meals?</h3>
                <p className="mt-2">A: Both approaches can be healthy. The most important factor is total daily nutrient intake and consistency. Choose the pattern that fits your schedule and helps you maintain stable energy levels.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Interactive Quiz</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <p className="font-bold mb-3">Test your knowledge:</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" id="q1" className="mt-1 mr-2" />
                  <label htmlFor="q1">How many essential nutrients are there?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q2" className="mt-1 mr-2" />
                  <label htmlFor="q2">What percentage of calories should come from carbohydrates?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q3" className="mt-1 mr-2" />
                  <label htmlFor="q3">How much water should you drink daily?</label>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg transition-colors">
                Check Answers
              </button>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Expert Tips</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Eat the rainbow - include different colored fruits and vegetables for diverse nutrients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Prepare meals at home to control ingredients and portions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Focus on nutrient density - foods that provide more nutrients per calorie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Practice mindful eating to recognize hunger and fullness cues</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Resources</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" className="text-green-400 hover:underline">MyPlate Guidelines</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Nutrition Label Reading Guide</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Dietary Guidelines for Americans</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Evidence-Based Nutrition Resources</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Healthy Recipe Databases</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link 
                href="/blog/guides/health"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
              >
                ← Back to Health & Fitness
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}