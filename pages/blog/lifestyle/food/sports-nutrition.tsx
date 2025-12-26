import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SportsNutrition() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Sports Nutrition: Fueling Athletic Performance and Recovery | Discovery Nexus</title>
        <meta name="description" content="Evidence-based strategies for optimizing energy availability, enhancing performance, and accelerating recovery through strategic nutrition." />
        <meta name="keywords" content="sports nutrition, athletic performance, recovery, macronutrients, ergogenic aids" />
        <meta name="author" content="Sports Dietitian Dr. Peak Performance" />
        <link rel="canonical" href="https://yourdomain.com/blog/lifestyle/food/sports-nutrition" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-4">
            <Link href="/blog/lifestyle/food" className="text-emerald-300 hover:text-white mr-4">
              ← Back to Food & Nutrition
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sports Nutrition: Fueling Athletic Performance and Recovery</h1>
          <div className="flex flex-wrap items-center text-emerald-200">
            <span className="mr-4">By Sports Dietitian Dr. Peak Performance</span>
            <span className="mr-4">Published Dec 5, 2025</span>
            <span>16 min read</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Evidence-based strategies for optimizing energy availability, enhancing performance, and accelerating recovery through strategic nutrition.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
            <p className="text-lg italic">
              "Nutrition is the foundation of athletic performance. Proper fueling before, during, and after exercise can mean the difference between good and great performance, between injury and resilience, between fatigue and peak energy." - Sports Dietitian Dr. Peak Performance
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Energy Systems and Fuel Requirements</h2>
          
          <p className="mb-6">
            Human energy systems operate through three primary pathways: the phosphocreatine (PCr) system for immediate energy lasting up to 10 seconds, the glycolytic system for moderate-intensity efforts lasting 10 seconds to 2 minutes, and the oxidative system for prolonged activities exceeding 2 minutes. Each system utilizes different fuel substrates and requires specific nutritional strategies.
          </p>

          <p className="mb-6">
            The PCr system relies on stored creatine phosphate in muscles, which can be enhanced through creatine supplementation. The glycolytic system breaks down glucose or glycogen without oxygen, producing lactate as a byproduct. The oxidative system uses carbohydrates, fats, and proteins with oxygen to produce ATP, with fat oxidation becoming predominant during lower-intensity, longer-duration activities.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Macronutrient Periodization</h2>
          
          <p className="mb-6">
            Carbohydrate periodization aligns intake with training demands. High-intensity training sessions require substantial carbohydrate availability, with recommendations of 6-10 grams per kilogram of body weight on heavy training days versus 3-5 grams per kilogram on light days. Strategic carbohydrate restriction during certain training sessions can enhance mitochondrial biogenesis and fat oxidation capacity.
          </p>

          <p className="mb-6">
            Protein requirements for athletes range from 1.2-2.0 grams per kilogram of body weight depending on sport type, training intensity, and adaptation goals. Endurance athletes typically need 1.2-1.6 g/kg, while strength/power athletes may require 1.6-2.0 g/kg. Distributing protein intake throughout the day, with 20-40 grams per meal, optimizes muscle protein synthesis.
          </p>

          <p className="mb-6">
            Fat intake should comprise 20-35% of total calories, with emphasis on unsaturated fats from nuts, seeds, avocados, and fatty fish. Omega-3 fatty acids merit particular attention for their anti-inflammatory properties and cardiovascular benefits. Athletes should avoid trans fats and minimize saturated fat intake.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Pre-Exercise Nutrition Strategies</h2>
          
          <p className="mb-6">
            Pre-exercise meals should be consumed 2-4 hours before activity, emphasizing easily digestible carbohydrates while minimizing fiber, fat, and protein to prevent gastrointestinal distress. Ideal pre-exercise meals provide 1-4 grams of carbohydrate per kilogram of body weight, with examples including oatmeal with banana, toast with jam, or a bagel with honey.
          </p>

          <p className="mb-6">
            For activities beginning within 1 hour, smaller carbohydrate-rich snacks such as fruit, sports drinks, or energy bars provide quick energy without digestive burden. Caffeine, consumed 30-60 minutes before exercise at doses of 3-6 mg per kilogram of body weight, can enhance endurance performance and reduce perceived exertion.
          </p>

          <p className="mb-6">
            Hydration status significantly impacts performance, with even 2% dehydration reducing aerobic capacity and cognitive function. Athletes should aim to begin exercise euhydrated, consuming 5-7 mL of fluid per kilogram of body weight 2-4 hours before activity. Clear or pale yellow urine indicates adequate hydration.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">During-Exercise Fueling</h2>
          
          <p className="mb-6">
            For activities lasting less than 60 minutes, water is typically sufficient unless sweat losses are excessive. For endurance activities exceeding 60 minutes, carbohydrate intake of 30-60 grams per hour enhances performance by maintaining blood glucose levels and sparing muscle glycogen. For ultra-endurance events exceeding 2.5-3 hours, intake up to 90 grams per hour may be beneficial.
          </p>

          <p className="mb-6">
            Multiple transportable carbohydrates such as glucose and fructose utilize different intestinal transporters, allowing for higher total absorption rates. Sports drinks containing 6-8% carbohydrate concentration provide optimal gastric emptying and fluid absorption. Solid foods such as bananas, dates, or energy bars can supplement or replace liquid fuels.
          </p>

          <p className="mb-6">
            Electrolyte replacement becomes important during prolonged exercise, particularly in hot environments. Sodium losses through sweat vary widely among individuals, ranging from 200-2,000 mg per liter of sweat. Sports drinks typically provide 110-170 mg of sodium per 8 oz serving, with additional salt tablets or salty snacks as needed for heavy sweaters.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Post-Exercise Recovery Nutrition</h2>
          
          <p className="mb-6">
            The post-exercise period presents a critical window for recovery optimization. Consuming 1.0-1.5 grams of carbohydrate per kilogram of body weight within 30 minutes of exercise replenishes muscle glycogen stores. Combining carbohydrates with protein at a 3:1 or 4:1 ratio enhances glycogen resynthesis and supports muscle repair.
          </p>

          <p className="mb-6">
            Protein intake of 20-40 grams within 2 hours post-exercise maximizes muscle protein synthesis. Leucine, an essential amino acid, serves as a key trigger for muscle protein synthesis, with dairy proteins such as whey providing high leucine content. Plant-based proteins can achieve similar effects when consumed in slightly larger quantities.
          </p>

          <p className="mb-6">
            Rehydration requires replacing 125-150% of fluid losses, as urine production continues during recovery. Including sodium in rehydration beverages enhances fluid retention and stimulates thirst. Chocolate milk, with its ideal carbohydrate-to-protein ratio and electrolyte content, exemplifies an effective post-exercise recovery beverage.
          </p>

          <div className="bg-gray-100 p-6 my-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Timing Guidelines for Athletes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-exercise (2-4 hours before): High-carb, low-fat, low-fiber meal</li>
              <li>Pre-exercise (30-60 minutes before): Small carb snack or caffeine</li>
              <li>During exercise (every 15-20 minutes): 30-60g carbs/hour for activities >60 min</li>
              <li>Post-exercise (within 30 min): 1.0-1.5g carbs/kg + 20-40g protein</li>
              <li>Throughout the day: Distribute protein intake across meals</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-300">
          <Link href="/blog/lifestyle/food" className="text-violet-600 hover:text-violet-800">
            ← Previous: Back to Food & Nutrition
          </Link>
          <Link href="/blog/lifestyle/food/anti-inflammatory-diet" className="text-violet-600 hover:text-violet-800">
            Next: Anti-Inflammatory Diet: Reducing Chronic Inflammation Through Food →
          </Link>
        </div>
      </main>
    </div>
  );
}