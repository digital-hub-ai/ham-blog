import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InvestmentBasicsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Investment Basics: Your Complete Guide to Building Wealth | Knowledge Compendium</title>
        <meta name="description" content="Learn fundamental investment principles and strategies for long-term wealth building." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50">
                Investment
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Wealth
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Basics
              </span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Investment Basics: Your Complete Guide to Building Wealth
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 mb-6">
              <span className="mb-2 sm:mb-0 sm:mr-4">By Investment Advisor Alex Wealth</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>Dec 22, 2025</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>26 min read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Investing is one of the most powerful tools for building long-term wealth and achieving financial independence. This comprehensive guide will teach you the fundamental principles of investing, from basic concepts to practical strategies for building a diversified portfolio in 2025 and beyond.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Understanding Investment Fundamentals</h2>
            <p>
              Investment is the process of allocating money with the expectation of generating income or profit. Unlike saving, which involves setting aside money in low-risk accounts, investing involves accepting some level of risk in exchange for the potential for higher returns over time.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Key Investment Concepts</h2>
            <p>
              Before making investment decisions, it's essential to understand these fundamental concepts:
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">1. Risk and Return</h3>
            <p>
              There's a fundamental relationship between risk and return in investing. Generally, investments with higher potential returns come with higher risk. Understanding your risk tolerance is crucial for making appropriate investment decisions that align with your financial goals and comfort level.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">2. Diversification</h3>
            <p>
              Diversification is the practice of spreading investments across different asset classes, sectors, and geographic regions to reduce risk. The old adage "don't put all your eggs in one basket" perfectly captures the concept of diversification.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">3. Compound Interest</h3>
            <p>
              Compound interest occurs when the interest earned on an investment is reinvested, generating additional earnings over time. This "interest on interest" effect can significantly accelerate wealth building, especially over long time horizons.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">4. Time Horizon</h3>
            <p>
              Your investment time horizon is the length of time you plan to hold an investment before needing the money. Time horizon significantly influences your investment strategy, with longer horizons typically allowing for more aggressive investment approaches.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">5. Asset Allocation</h3>
            <p>
              Asset allocation refers to how you divide your investment portfolio among different asset categories, such as stocks, bonds, and cash. Your asset allocation should reflect your goals, risk tolerance, and time horizon.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">6. Dollar-Cost Averaging</h3>
            <p>
              Dollar-cost averaging involves investing a fixed amount of money at regular intervals, regardless of market conditions. This strategy helps reduce the impact of market volatility and removes the need to time the market.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Types of Investment Options</h2>
            <p>
              Understanding different investment options is crucial for building a diversified portfolio:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Stocks:</strong> Represent ownership in a company and offer potential for growth and dividends</li>
              <li><strong>Bonds:</strong> Debt securities that provide regular interest payments and return of principal</li>
              <li><strong>Mutual Funds:</strong> Pooled investments managed by professionals with diversification built-in</li>
              <li><strong>Exchange-Traded Funds (ETFs):</strong> Similar to mutual funds but trade like stocks on exchanges</li>
              <li><strong>Real Estate Investment Trusts (REITs):</strong> Allow investment in real estate without direct ownership</li>
              <li><strong>Index Funds:</strong> Low-cost funds that track a market index</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Building Your Investment Strategy</h2>
            <p>
              Creating an effective investment strategy involves several steps:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Define your financial goals and time horizon</li>
              <li>Assess your risk tolerance and capacity</li>
              <li>Determine your asset allocation based on goals and timeline</li>
              <li>Choose specific investments within each asset class</li>
              <li>Regularly review and rebalance your portfolio</li>
              <li>Stay informed about market developments and economic trends</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Common Investment Mistakes to Avoid</h2>
            <p>
              Many investors make preventable mistakes that can significantly impact their returns:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Timing the market instead of time in the market</li>
              <li>Not diversifying adequately</li>
              <li>Letting emotions drive investment decisions</li>
              <li>Chasing past performance</li>
              <li>Not understanding fees and their impact on returns</li>
              <li>Investing money needed in the short term in volatile assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Tax-Efficient Investing Strategies</h2>
            <p>
              Understanding the tax implications of your investments can significantly impact your net returns. Consider using tax-advantaged accounts like 401(k)s, IRAs, and HSAs when possible. Also consider the tax implications of different investment types and holding periods.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Best Practices for Successful Investing</h2>
            <p>
              As you begin your investment journey, keep the following best practices in mind:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Start investing as early as possible to take advantage of compound interest</li>
              <li>Maintain a long-term perspective and avoid emotional reactions to market volatility</li>
              <li>Keep investment costs low by choosing low-fee funds and minimizing trading</li>
              <li>Rebalance your portfolio periodically to maintain your target allocation</li>
              <li>Stay diversified across asset classes, sectors, and geographic regions</li>
              <li>Continue learning about investing and personal finance</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">FAQs</h2>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: How much should I invest each month?</h3>
                <p className="mt-2">A: A common recommendation is to invest 10-15% of your income, but this varies based on your financial situation, goals, and timeline. Start with what you can afford consistently and increase over time.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: What's the difference between stocks and bonds?</h3>
                <p className="mt-2">A: Stocks represent ownership in a company and offer potential for growth but come with higher risk. Bonds are loans to governments or corporations that provide regular interest payments with lower risk than stocks.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: When should I start investing?</h3>
                <p className="mt-2">A: The best time to start investing is as soon as possible. Thanks to compound interest, even small investments made early can grow significantly over time. Don't wait to be "ready" - start with what you can afford.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Interactive Quiz</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <p className="font-bold mb-3">Test your knowledge:</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" id="q1" className="mt-1 mr-2" />
                  <label htmlFor="q1">What is diversification?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q2" className="mt-1 mr-2" />
                  <label htmlFor="q2">What is dollar-cost averaging?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q3" className="mt-1 mr-2" />
                  <label htmlFor="q3">Why is time horizon important in investing?</label>
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
                  <span>Maximize employer 401(k) matching contributions first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Start with broad market index funds for diversification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Ignore short-term market fluctuations and focus on long-term goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Automate your investments to ensure consistency</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Resources</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" className="text-green-400 hover:underline">Investment Company Institute Resources</a></li>
              <li><a href="#" className="text-green-400 hover:underline">SEC Investor.gov Education Center</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Bogleheads Investment Philosophy</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Vanguard Investment Education</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Fidelity Investment Learning Center</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link 
                href="/blog/guides/finance"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
              >
                ← Back to Personal Finance
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}