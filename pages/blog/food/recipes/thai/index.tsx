import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PadThai() {
  return (
    <>
      <Head>
        <title>Pad Thai: Balancing Sweet, Sour, and Heat | Culinary Chronicles</title>
        <meta name="description" content="Master the authentic flavors of Thailand's most famous dish." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food/recipes" className="inline-flex items-center text-red-400 hover:text-red-300 mb-8">
            <span className="mr-2">←</span>
            Back to Recipes
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <header className="mb-8">
              <div className="flex items-center text-red-400 mb-4">
                <span className="text-2xl">🍜</span>
                <span className="ml-2 text-sm font-semibold">THAI CUISINE</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Pad Thai: Balancing Sweet, Sour, and Heat
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm">
                <span className="mr-4">By Chef Somchai Jaidee</span>
                <span className="mr-4">Dec 17, 2025</span>
                <span>14 min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-red-200 mb-6">
                Pad Thai is Thailand's most iconic dish, representing the perfect harmony of sweet, sour, and spicy flavors. Mastering this dish requires understanding the delicate balance that makes it so beloved worldwide.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">The Origins of Pad Thai</h2>
              <p>
                Pad Thai was created in the 1930s as part of a government campaign to promote nationalism and reduce rice consumption. The dish combines Chinese stir-frying techniques with local Thai ingredients, resulting in a unique flavor profile that represents Thailand's culinary evolution.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Essential Ingredients</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>200g rice noodles (medium thickness)</li>
                <li>2 tbsp tamarind paste</li>
                <li>3 tbsp fish sauce</li>
                <li>2 tbsp palm sugar or brown sugar</li>
                <li>200g firm tofu, cubed</li>
                <li>200g shrimp or chicken (optional)</li>
                <li>2 eggs</li>
                <li>Garlic chives or bean sprouts</li>
                <li>Roasted peanuts, crushed</li>
                <li>Chili flakes for heat</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">The Pad Thai Sauce</h3>
              <p>
                The sauce is the heart of authentic Pad Thai. The traditional ratio is 3 parts tamarind paste, 2 parts fish sauce, and 1 part palm sugar. This creates the characteristic sweet-sour-salty balance that defines the dish.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Cooking Process</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Soak rice noodles in warm water for 20-30 minutes until pliable</li>
                <li>Prepare the sauce by mixing tamarind, fish sauce, and sugar</li>
                <li>Heat wok or large pan over high heat</li>
                <li>Add oil and scramble eggs, then set aside</li>
                <li>Stir-fry tofu and protein until golden</li>
                <li>Add noodles and sauce, toss quickly</li>
                <li>Add eggs back and toss to combine</li>
                <li>Add bean sprouts and chives in the final moments</li>
                <li>Plate and garnish with crushed peanuts and lime</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Wok Hei: The Breath of Fire</h3>
              <p>
                Authentic Pad Thai requires high heat and quick cooking to achieve "wok hei" - the smoky, charred flavor that comes from stir-frying at extremely high temperatures. This is what separates restaurant-quality Pad Thai from home versions.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Balancing the Flavors</h2>
              <p>
                The magic of Pad Thai lies in achieving the perfect balance between sweet, sour, salty, and spicy. Each element should be present but none should overpower the others. Taste and adjust the sauce throughout cooking.
              </p>

              <div className="bg-gray-800/50 border-l-4 border-red-500 p-4 my-6">
                <h3 className="text-lg font-semibold text-red-300 mb-2">Expert Tip</h3>
                <p className="text-gray-300">
                  Don't overcrowd your wok - cook in batches if necessary. The high heat and quick cooking are essential for achieving the right texture. Also, always add the protein before the noodles to prevent the noodles from steaming instead of stir-frying.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Regional Variations</h2>
              <p>
                While the classic Pad Thai remains popular, regional variations exist throughout Thailand. Northern versions might be less sweet, while Southern versions might be spicier. Street vendors often add their own unique touches that make their version distinctive.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Garnishes and Serving</h3>
              <p>
                Authentic Pad Thai is served with lime wedges, crushed peanuts, and fresh bean sprouts. Some vendors also provide extra chili flakes or fish sauce for personal adjustments. The garnishes add texture and brightness to each bite.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">Can I make Pad Thai without fish sauce?</h3>
                  <p className="mt-2 text-gray-300">
                    Yes, you can substitute soy sauce or tamari for fish sauce, though the flavor profile will be different. The fish sauce provides a unique umami depth that's characteristic of authentic Thai cooking.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">Why is my Pad Thai too dry?</h3>
                  <p className="mt-2 text-gray-300">
                    This usually happens when there's not enough sauce or the noodles are overcooked. Make sure to use enough sauce and cook the noodles just until tender - they should still have a slight bite to them.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">How can I make Pad Thai spicier?</h3>
                  <p className="mt-2 text-gray-300">
                    Add more chili flakes during cooking, or serve with extra chilies on the side. You can also use fresh bird's eye chilies for authentic Thai heat.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Interactive Quiz</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">What is the traditional ratio for Pad Thai sauce?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="radio" id="quiz-a" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-a">A) Equal parts tamarind, fish sauce, and sugar</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-b" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-b">B) 3 parts tamarind, 2 parts fish sauce, 1 part sugar</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-c" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-c">C) 1 part tamarind, 2 parts fish sauce, 3 parts sugar</label>
                  </li>
                </ul>
                <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Check Answer
                </button>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Resources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guide to Essential Thai Ingredients and Where to Buy Them</li>
                <li>Mastering the Wok: Techniques for Perfect Stir-Frying</li>
                <li>Other Thai Street Food Classics to Try at Home</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}