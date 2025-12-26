import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FitnessIndex() {
  // Fitness articles
  const fitnessArticles = [
    { 
      id: 'strength-training-principles', 
      title: 'Strength Training Principles: Building Muscle and Power', 
      excerpt: 'Evidence-based approaches to resistance training for muscle growth, strength gains, and athletic performance enhancement.',
      date: 'Dec 19, 2025',
      author: 'Fitness Coach Dr. Muscle Gain',
      readTime: '14 min read'
    },
    { 
      id: 'cardiovascular-fitness', 
      title: 'Cardiovascular Fitness: Heart Health and Endurance', 
      excerpt: 'Optimizing aerobic capacity, heart health, and metabolic function through strategic cardio training protocols.',
      date: 'Dec 17, 2025',
      author: 'Cardiologist Dr. Heart Strong',
      readTime: '13 min read'
    },
    { 
      id: 'flexibility-mobility', 
      title: 'Flexibility and Mobility: Movement Quality and Injury Prevention', 
      excerpt: 'Scientific approaches to improving range of motion, movement efficiency, and reducing injury risk through targeted stretching and mobility work.',
      date: 'Dec 15, 2025',
      author: 'Physical Therapist Dr. Flexibility',
      readTime: '12 min read'
    },
    { 
      id: 'high-intensity-intervals', 
      title: 'High-Intensity Interval Training: Maximizing Results in Minimal Time', 
      excerpt: 'The science behind HIIT protocols for fat loss, cardiovascular improvement, and metabolic conditioning.',
      date: 'Dec 13, 2025',
      author: 'Exercise Physiologist Dr. Intensity',
      readTime: '13 min read'
    },
    { 
      id: 'recovery-nutrition', 
      title: 'Recovery and Nutrition: Optimizing Adaptation Between Workouts', 
      excerpt: 'Strategies for enhancing recovery, reducing fatigue, and maximizing training adaptations through proper nutrition and recovery protocols.',
      date: 'Dec 11, 2025',
      author: 'Sports Dietitian Dr. Recovery',
      readTime: '14 min read'
    },
    { 
      id: 'bodyweight-training', 
      title: 'Bodyweight Training: Building Strength and Fitness Anywhere', 
      excerpt: 'Master bodyweight exercises for strength development, functional fitness, and portable workout solutions.',
      date: 'Dec 9, 2025',
      author: 'Calisthenics Expert Dr. Bodyweight',
      readTime: '12 min read'
    },
    { 
      id: 'core-stability', 
      title: 'Core Stability and Functional Strength', 
      excerpt: 'Develop rock-solid core stability and functional strength for improved posture, reduced injury risk, and enhanced athletic performance.',
      date: 'Dec 7, 2025',
      author: 'Core Strength Specialist Dr. Abdominal Fortitude',
      readTime: '13 min read'
    },
    { 
      id: 'endurance-performance', 
      title: 'Endurance Performance: Maximizing Aerobic Capacity and Stamina', 
      excerpt: 'Evidence-based strategies for improving aerobic capacity, lactate threshold, and sustained performance in endurance activities.',
      date: 'Dec 5, 2025',
      author: 'Endurance Coach Dr. Stamina',
      readTime: '14 min read'
    },
    { 
      id: 'flexibility-training', 
      title: 'Flexibility Training and Stretching Techniques', 
      excerpt: 'Master flexibility training with evidence-based stretching techniques. Improve range of motion, prevent injury, and enhance athletic performance.',
      date: 'Dec 3, 2025',
      author: 'Mobility Specialist Dr. Stretch Harmony',
      readTime: '14 min read'
    },
    { 
      id: 'functional-ageing', 
      title: 'Functional Ageing: Maintaining Strength and Mobility Throughout Life', 
      excerpt: 'Strategies for preserving physical function, strength, and independence as we age through targeted fitness approaches.',
      date: 'Dec 1, 2025',
      author: 'Gerontology Specialist Dr. Age Well',
      readTime: '13 min read'
    },
    { 
      id: 'functional-movement', 
      title: 'Functional Movement: Training for Real-Life Activities', 
      excerpt: 'Develop movement patterns that enhance daily activities and reduce injury risk through functional fitness principles.',
      date: 'Nov 29, 2025',
      author: 'Movement Specialist Dr. Functional Flow',
      readTime: '12 min read'
    },
    { 
      id: 'injury-prevention', 
      title: 'Injury Prevention: Strategies for Safe and Sustainable Training', 
      excerpt: 'Evidence-based approaches to reducing injury risk while maintaining consistent training progress and long-term fitness.',
      date: 'Nov 27, 2025',
      author: 'Injury Prevention Specialist Dr. Safe Training',
      readTime: '13 min read'
    },
    { 
      id: 'periodization-strategies', 
      title: 'Periodization Strategies: Structuring Training for Optimal Performance', 
      excerpt: 'Scientific approaches to organizing training cycles for peak performance while preventing overtraining and burnout.',
      date: 'Nov 25, 2025',
      author: 'Performance Coach Dr. Cycle Master',
      readTime: '14 min read'
    },
    { 
      id: 'plyometric-power', 
      title: 'Plyometric Training for Explosive Power', 
      excerpt: 'Master plyometric exercises to develop explosive power and athletic performance. Learn safe progression techniques and advanced jump training methods.',
      date: 'Nov 23, 2025',
      author: 'Performance Coach Alex Jump',
      readTime: '12 min read'
    },
    { 
      id: 'power-speed-training', 
      title: 'Power and Speed Training: Developing Explosive Athletic Performance', 
      excerpt: 'Scientific approaches to developing explosive power, speed, and agility for athletic performance enhancement.',
      date: 'Nov 21, 2025',
      author: 'Speed Coach Dr. Velocity',
      readTime: '13 min read'
    },
    { 
      id: 'rehabilitation-fitness', 
      title: 'Rehabilitation and Fitness: Returning Stronger After Injury', 
      excerpt: 'Safe and effective strategies for transitioning from injury rehabilitation to fitness training.',
      date: 'Nov 19, 2025',
      author: 'Rehabilitation Specialist Dr. Comeback Strong',
      readTime: '14 min read'
    },
    { 
      id: 'strength-periodization', 
      title: 'Strength Periodization: Maximizing Force Production and Muscle Development', 
      excerpt: 'Advanced periodization strategies for strength development, muscle growth, and long-term athletic progression.',
      date: 'Nov 17, 2025',
      author: 'Strength Coach Dr. Periodization Pro',
      readTime: '14 min read'
    },
    { 
      id: 'yoga-fitness', 
      title: 'Yoga for Fitness: Strength, Flexibility, and Mind-Body Connection', 
      excerpt: 'Integrate yoga practices into fitness routines for enhanced flexibility, strength, and mind-body awareness.',
      date: 'Nov 15, 2025',
      author: 'Yoga Instructor Dr. Mindful Motion',
      readTime: '12 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Fitness | Lifestyle Dimension</title>
        <meta name="description" content="Discover evidence-based approaches to physical fitness and athletic performance." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Fitness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Discover evidence-based approaches to physical fitness and athletic performance.
            </p>
          </div>

          {fitnessArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fitnessArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                      <Link href={`/blog/lifestyle/fitness/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <Link 
                        href={`/blog/lifestyle/fitness/${article.id}`}
                        className="text-violet-600 hover:text-violet-800 text-sm"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on bringing you the latest insights in fitness and athletic performance.
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link 
              href="/blog/lifestyle"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300"
            >
              ← Back to Lifestyle Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}