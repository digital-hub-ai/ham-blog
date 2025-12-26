import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FitnessFundamentalsBeginners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Fitness Fundamentals: A Complete Guide for Beginners | Knowledge Compendium</title>
        <meta name="description" content="Start your fitness journey with essential exercises, routines, and mindset strategies." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50">
                Fitness
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Beginners
              </span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-700/50 ml-2">
                Health
              </span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Fitness Fundamentals: A Complete Guide for Beginners
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 mb-6">
              <span className="mb-2 sm:mb-0 sm:mr-4">By Fitness Coach Alex Strong</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>Dec 22, 2025</span>
              <span className="mx-2 hidden sm:block">|</span>
              <span>24 min read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Starting a fitness journey can feel overwhelming with so much conflicting advice available. This comprehensive guide will teach you the essential principles and practices to begin your fitness journey safely and effectively, setting you up for long-term success in 2025 and beyond.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">The Foundation of Physical Fitness</h2>
            <p>
              Physical fitness is a multifaceted concept that encompasses cardiovascular endurance, muscular strength, flexibility, and body composition. Understanding these components and how they work together is essential for creating a balanced fitness program that addresses all aspects of physical health.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Essential Components of a Beginner Fitness Program</h2>
            <p>
              A well-rounded fitness program should include several key components that work together to improve overall health and fitness:
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">1. Cardiovascular Exercise</h3>
            <p>
              Cardiovascular exercise strengthens your heart and lungs while improving endurance. Start with 20-30 minutes of moderate-intensity cardio 3-4 times per week. Activities like brisk walking, swimming, cycling, or dancing are excellent for beginners.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">2. Strength Training</h3>
            <p>
              Strength training builds muscle, increases bone density, and improves metabolism. Beginners should start with bodyweight exercises or light weights, focusing on major muscle groups 2-3 times per week. Include exercises that work multiple muscles simultaneously for efficiency.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">3. Flexibility and Mobility</h3>
            <p>
              Flexibility and mobility exercises help maintain range of motion, prevent injury, and improve daily function. Incorporate stretching exercises after workouts and consider yoga or Pilates to improve flexibility and core strength.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">4. Core Stability</h3>
            <p>
              A strong core is fundamental to all movement and helps prevent injury. Include exercises that target the deep stabilizing muscles of the abdomen, back, and pelvis in every workout.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">5. Recovery and Rest</h3>
            <p>
              Recovery is when your body adapts to exercise and gets stronger. Schedule rest days between intense workouts and prioritize quality sleep to allow your body to repair and strengthen.
            </p>

            <h3 className="text-xl font-bold text-teal-400 mt-6 mb-3">6. Nutrition and Hydration</h3>
            <p>
              Exercise and nutrition work together to achieve fitness goals. Focus on whole foods, adequate protein intake, and proper hydration to fuel your workouts and support recovery.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Getting Started: A Beginner's Weekly Plan</h2>
            <p>
              Here's a sample weekly plan to help you start your fitness journey:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Monday:</strong> 30-minute walk + 10 minutes of stretching</li>
              <li><strong>Tuesday:</strong> Bodyweight strength exercises (squats, push-ups, planks)</li>
              <li><strong>Wednesday:</strong> Rest or gentle yoga</li>
              <li><strong>Thursday:</strong> 25-minute cardio session (walking, cycling, or swimming)</li>
              <li><strong>Friday:</strong> Full-body strength training with light weights</li>
              <li><strong>Saturday:</strong> Active recovery (hiking, dancing, or recreational activity)</li>
              <li><strong>Sunday:</strong> Complete rest day</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Essential Exercises for Beginners</h2>
            <p>
              Start with these fundamental exercises that target all major muscle groups:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Lower Body:</strong> Bodyweight squats, lunges, calf raises</li>
              <li><strong>Upper Body:</strong> Modified push-ups, wall push-ups, arm circles</li>
              <li><strong>Core:</strong> Modified planks, dead bugs, bird dogs</li>
              <li><strong>Cardio:</strong> Brisk walking, marching in place, step-ups</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Avoiding Common Beginner Mistakes</h2>
            <p>
              Many beginners make mistakes that can hinder progress or lead to injury. Here are common pitfalls to avoid:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Starting too intense and doing too much too soon</li>
              <li>Not warming up properly before exercise</li>
              <li>Ignoring proper form in favor of heavier weights</li>
              <li>Not allowing adequate recovery time</li>
              <li>Expecting immediate results</li>
              <li>Not tracking progress to stay motivated</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Building Sustainable Habits</h2>
            <p>
              The key to long-term fitness success is creating sustainable habits that you can maintain over time. Focus on consistency rather than perfection, and make small changes that gradually become part of your lifestyle.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Best Practices for Fitness Success</h2>
            <p>
              As you begin your fitness journey, keep the following best practices in mind:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Start slowly and gradually increase intensity and duration</li>
              <li>Focus on proper form before adding weight or intensity</li>
              <li>Listen to your body and rest when needed</li>
              <li>Set realistic, measurable goals</li>
              <li>Find activities you enjoy to maintain motivation</li>
              <li>Track your progress to stay motivated</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">FAQs</h2>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: How often should beginners exercise?</h3>
                <p className="mt-2">A: Beginners should start with 3-4 days per week, allowing for rest days in between. As your fitness improves, you can gradually increase frequency to 5-6 days per week.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: Do I need to go to a gym to get fit?</h3>
                <p className="mt-2">A: No, you can achieve excellent fitness results at home using bodyweight exercises, resistance bands, or basic equipment. Many effective workouts require no equipment at all.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-lg">Q: How long before I see results?</h3>
                <p className="mt-2">A: You may notice improved energy and mood within a few weeks. Visible changes in strength and appearance typically take 4-8 weeks of consistent exercise.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Interactive Quiz</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-green-700/30 mt-4">
              <p className="font-bold mb-3">Test your knowledge:</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" id="q1" className="mt-1 mr-2" />
                  <label htmlFor="q1">How often should beginners exercise?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q2" className="mt-1 mr-2" />
                  <label htmlFor="q2">What are the components of physical fitness?</label>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="q3" className="mt-1 mr-2" />
                  <label htmlFor="q3">How long before you see fitness results?</label>
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
                  <span>Start with exercises you can do with proper form for 8-12 repetitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Keep a fitness journal to track your progress and stay motivated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Focus on compound movements that work multiple muscles at once</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Progressive overload is key - gradually increase weight, reps, or intensity</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Resources</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><a href="#" className="text-green-400 hover:underline">Beginner Workout Plans</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Exercise Form Guides and Videos</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Fitness Tracking Apps and Tools</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Nutrition for Exercise Recovery</a></li>
              <li><a href="#" className="text-green-400 hover:underline">Injury Prevention Strategies</a></li>
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