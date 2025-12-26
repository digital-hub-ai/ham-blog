import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ItalianPastaReview() {
  return (
    <>
      <Head>
        <title>The Nonna's Kitchen: Authentic Italian Pasta Experience | Culinary Chronicles</title>
        <meta name="description" content="A family-run restaurant that has been serving traditional pasta dishes for four generations." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/food/restaurants" className="inline-flex items-center text-red-400 hover:text-red-300 mb-8">
            <span className="mr-2">←</span>
            Back to Restaurant Reviews
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <header className="mb-8">
              <div className="flex items-center text-red-400 mb-4">
                <span className="text-2xl">🍷</span>
                <span className="ml-2 text-sm font-semibold">RESTAURANT REVIEW</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
                The Nonna's Kitchen: Authentic Italian Pasta Experience
              </h1>
              <div className="flex flex-wrap items-center text-gray-400 text-sm">
                <span className="mr-4">By Pasta Expert Giuseppe Tradition</span>
                <span className="mr-4">Dec 17, 2025</span>
                <span>12 min read</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-red-200 mb-6">
                In the heart of Bologna's Quadrilatero market district, Osteria della Nonna has been serving traditional pasta dishes since 1932. What started as a small family kitchen serving homemade pasta to neighbors has evolved into one of Italy's most authentic pasta experiences, while maintaining the intimate, home-style atmosphere that defines Italian family cooking.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">The Legacy: Four Generations of Pasta Excellence</h2>
              <p>
                The Rossi family has been making pasta using the same techniques for 93 years. The original recipes, passed down from Nonna Maria Rossi, are still followed today by her great-granddaughter, Sofia. The restaurant operates in the family's original home, with the kitchen visible from the dining room, creating an intimate experience that feels like dining in an Italian grandmother's home.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Family Heritage</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Founded in 1932 by Nonna Maria Rossi</li>
                <li>Four generations of pasta-making expertise</li>
                <li>Original family recipes preserved and passed down</li>
                <li>Family members still actively involved in daily operations</li>
                <li>Traditional techniques maintained with modern equipment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">The Pasta Philosophy</h3>
              <p>
                At Osteria della Nonna, pasta is made fresh daily using 00 flour from a mill in Naples and eggs from local free-range hens. The dough is kneaded by hand in the morning, then rolled and cut using techniques that have remained unchanged for generations. The focus is on simplicity – quality ingredients prepared with care and respect for tradition.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">The Menu: Traditional Emilia-Romagna Pasta</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Tagliatelle al Ragu: fresh pasta with traditional meat sauce</li>
                <li>Tortellini in Brodo: delicate pasta parcels in rich broth</li>
                <li>Pappardelle al Cinghiale: wide ribbons with wild boar ragu</li>
                <li>Ravioli di Zucca: pumpkin-filled pasta with butter and sage</li>
                <li>Cappelletti in Panna: small hat-shaped pasta in cream sauce</li>
                <li>Lasagne della Nonna: family recipe with béchamel and meat</li>
              </ol>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Signature Dishes</h3>
              <p>
                The Tortellini in Brodo remains the signature dish, with each pasta piece carefully shaped by hand to hold the rich, golden broth. The pasta is made with only flour, eggs, and a pinch of salt, rolled to paper-thin perfection. The broth is simmered for 18 hours with chicken, vegetables, and herbs from the family garden.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">The Experience: Dining Like Family</h2>
              <p>
                The restaurant seats only 24 guests in a space that feels like an extension of the family kitchen. The Rossi family moves between tables like relatives at a Sunday dinner, sharing stories about the dishes and family history. The menu changes seasonally based on what's available in the local market, ensuring the freshest ingredients.
              </p>

              <div className="bg-gray-800/50 border-l-4 border-red-500 p-4 my-6">
                <h3 className="text-lg font-semibold text-red-300 mb-2">Expert Tip</h3>
                <p className="text-gray-300">
                  Arrive early and be flexible with timing. The kitchen operates like a home kitchen, so service follows meal times rather than a strict schedule. The family recommends staying for both pasta and the second course, as the full experience captures the essence of Italian dining culture. Also, don't be surprised if you're invited into the kitchen to see the pasta-making process.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">The Wine Program</h2>
              <p>
                The wine list features exclusively Emilia-Romagna producers, with an emphasis on family-run vineyards that have been known to the Rossis for generations. The sommelier, Giuseppe (the current patriarch), offers personal recommendations based on your preferences and the dishes you've selected. The house wine is produced by a family friend just outside Bologna.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3 text-red-400">Value and Authenticity</h3>
              <p>
                The prices reflect the quality and authenticity of the experience. A pasta course costs 12-15 euros, which is exceptional value considering the hand-made quality and traditional preparation methods. The experience of dining in a restaurant that has maintained its original character for over 90 years is priceless, offering a genuine connection to Italian culinary heritage.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">Do they accommodate dietary restrictions?</h3>
                  <p className="mt-2 text-gray-300">
                    The kitchen can accommodate some dietary restrictions, though options are limited. They offer a gluten-free pasta made with rice flour, though it's not made in the same kitchen as regular pasta. Vegetarian options are available as many traditional dishes are naturally meat-free. Advance notice is recommended for special dietary needs.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">Can I learn to make pasta there?</h3>
                  <p className="mt-2 text-gray-300">
                    Yes, Sofia Rossi offers private pasta-making lessons for individuals or small groups. These intimate sessions include learning the family techniques for making tagliatelle, tortellini, and other traditional shapes. Lessons must be booked weeks in advance and include a full meal featuring what you've made.
                  </p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-red-400">What's the reservation policy?</h3>
                  <p className="mt-2 text-gray-300">
                    Reservations are essential and can be made up to two months in advance. The family prefers phone reservations to email, as they like to speak personally with guests. They maintain a small book of regular customers who get priority booking, but new visitors are always welcome with advance planning.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Interactive Quiz</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">In what year was Osteria della Nonna founded?</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="radio" id="quiz-a" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-a">A) 1930</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-b" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-b">B) 1932</label>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" id="quiz-c" name="quiz" className="mr-2" />
                    <label htmlFor="quiz-c">C) 1935</label>
                  </li>
                </ul>
                <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Check Answer
                </button>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4 text-red-300">Resources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traditional Italian Pasta-Making Guide</li>
                <li>Emilia-Romagna Food Culture and Traditions</li>
                <li>Guide to Authentic Italian Dining Experiences</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}