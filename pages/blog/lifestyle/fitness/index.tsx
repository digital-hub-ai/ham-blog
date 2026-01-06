import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function FitnessIndex() {
  // Fitness articles
  const fitnessArticles = [
    { 
      id: &apos;strength-training-principles&apos;, 
      title: &apos;Strength Training Principles: Building Muscle and Power&apos;, 
      excerpt: &apos;Evidence-based approaches to resistance training for muscle growth, strength gains, and athletic performance enhancement.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Fitness Coach Dr. Muscle Gain&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;cardiovascular-fitness&apos;, 
      title: &apos;Cardiovascular Fitness: Heart Health and Endurance&apos;, 
      excerpt: &apos;Optimizing aerobic capacity, heart health, and metabolic function through strategic cardio training protocols.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Cardiologist Dr. Heart Strong&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;flexibility-mobility&apos;, 
      title: &apos;Flexibility and Mobility: Movement Quality and Injury Prevention&apos;, 
      excerpt: &apos;Scientific approaches to improving range of motion, movement efficiency, and reducing injury risk through targeted stretching and mobility work.&apos;,
      date: &apos;Dec 15, 2025&apos;,
      author: &apos;Physical Therapist Dr. Flexibility&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;high-intensity-intervals&apos;, 
      title: &apos;High-Intensity Interval Training: Maximizing Results in Minimal Time&apos;, 
      excerpt: &apos;The science behind HIIT protocols for fat loss, cardiovascular improvement, and metabolic conditioning.&apos;,
      date: &apos;Dec 13, 2025&apos;,
      author: &apos;Exercise Physiologist Dr. Intensity&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;recovery-nutrition&apos;, 
      title: &apos;Recovery and Nutrition: Optimizing Adaptation Between Workouts&apos;, 
      excerpt: &apos;Strategies for enhancing recovery, reducing fatigue, and maximizing training adaptations through proper nutrition and recovery protocols.&apos;,
      date: &apos;Dec 11, 2025&apos;,
      author: &apos;Sports Dietitian Dr. Recovery&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;bodyweight-training&apos;, 
      title: &apos;Bodyweight Training: Building Strength and Fitness Anywhere&apos;, 
      excerpt: &apos;Master bodyweight exercises for strength development, functional fitness, and portable workout solutions.&apos;,
      date: &apos;Dec 9, 2025&apos;,
      author: &apos;Calisthenics Expert Dr. Bodyweight&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;core-stability&apos;, 
      title: &apos;Core Stability and Functional Strength&apos;, 
      excerpt: &apos;Develop rock-solid core stability and functional strength for improved posture, reduced injury risk, and enhanced athletic performance.&apos;,
      date: &apos;Dec 7, 2025&apos;,
      author: &apos;Core Strength Specialist Dr. Abdominal Fortitude&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;endurance-performance&apos;, 
      title: &apos;Endurance Performance: Maximizing Aerobic Capacity and Stamina&apos;, 
      excerpt: &apos;Evidence-based strategies for improving aerobic capacity, lactate threshold, and sustained performance in endurance activities.&apos;,
      date: &apos;Dec 5, 2025&apos;,
      author: &apos;Endurance Coach Dr. Stamina&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;flexibility-training&apos;, 
      title: &apos;Flexibility Training and Stretching Techniques&apos;, 
      excerpt: &apos;Master flexibility training with evidence-based stretching techniques. Improve range of motion, prevent injury, and enhance athletic performance.&apos;,
      date: &apos;Dec 3, 2025&apos;,
      author: &apos;Mobility Specialist Dr. Stretch Harmony&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;functional-ageing&apos;, 
      title: &apos;Functional Ageing: Maintaining Strength and Mobility Throughout Life&apos;, 
      excerpt: &apos;Strategies for preserving physical function, strength, and independence as we age through targeted fitness approaches.&apos;,
      date: &apos;Dec 1, 2025&apos;,
      author: &apos;Gerontology Specialist Dr. Age Well&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;functional-movement&apos;, 
      title: &apos;Functional Movement: Training for Real-Life Activities&apos;, 
      excerpt: &apos;Develop movement patterns that enhance daily activities and reduce injury risk through functional fitness principles.&apos;,
      date: &apos;Nov 29, 2025&apos;,
      author: &apos;Movement Specialist Dr. Functional Flow&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;injury-prevention&apos;, 
      title: &apos;Injury Prevention: Strategies for Safe and Sustainable Training&apos;, 
      excerpt: &apos;Evidence-based approaches to reducing injury risk while maintaining consistent training progress and long-term fitness.&apos;,
      date: &apos;Nov 27, 2025&apos;,
      author: &apos;Injury Prevention Specialist Dr. Safe Training&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;periodization-strategies&apos;, 
      title: &apos;Periodization Strategies: Structuring Training for Optimal Performance&apos;, 
      excerpt: &apos;Scientific approaches to organizing training cycles for peak performance while preventing overtraining and burnout.&apos;,
      date: &apos;Nov 25, 2025&apos;,
      author: &apos;Performance Coach Dr. Cycle Master&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;plyometric-power&apos;, 
      title: &apos;Plyometric Training for Explosive Power&apos;, 
      excerpt: &apos;Master plyometric exercises to develop explosive power and athletic performance. Learn safe progression techniques and advanced jump training methods.&apos;,
      date: &apos;Nov 23, 2025&apos;,
      author: &apos;Performance Coach Alex Jump&apos;,
      readTime: &apos;12 min read&apos;
    },
    { 
      id: &apos;power-speed-training&apos;, 
      title: &apos;Power and Speed Training: Developing Explosive Athletic Performance&apos;, 
      excerpt: &apos;Scientific approaches to developing explosive power, speed, and agility for athletic performance enhancement.&apos;,
      date: &apos;Nov 21, 2025&apos;,
      author: &apos;Speed Coach Dr. Velocity&apos;,
      readTime: &apos;13 min read&apos;
    },
    { 
      id: &apos;rehabilitation-fitness&apos;, 
      title: &apos;Rehabilitation and Fitness: Returning Stronger After Injury&apos;, 
      excerpt: &apos;Safe and effective strategies for transitioning from injury rehabilitation to fitness training.&apos;,
      date: &apos;Nov 19, 2025&apos;,
      author: &apos;Rehabilitation Specialist Dr. Comeback Strong&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;strength-periodization&apos;, 
      title: &apos;Strength Periodization: Maximizing Force Production and Muscle Development&apos;, 
      excerpt: &apos;Advanced periodization strategies for strength development, muscle growth, and long-term athletic progression.&apos;,
      date: &apos;Nov 17, 2025&apos;,
      author: &apos;Strength Coach Dr. Periodization Pro&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;yoga-fitness&apos;, 
      title: &apos;Yoga for Fitness: Strength, Flexibility, and Mind-Body Connection&apos;, 
      excerpt: &apos;Integrate yoga practices into fitness routines for enhanced flexibility, strength, and mind-body awareness.&apos;,
      date: &apos;Nov 15, 2025&apos;,
      author: &apos;Yoga Instructor Dr. Mindful Motion&apos;,
      readTime: &apos;12 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Fitness | Lifestyle Dimension</title>
        <meta name="description&quot; content="Discover evidence-based approaches to physical fitness and athletic performance.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/lifestyle&quot; className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Fitness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Discover evidence-based approaches to physical fitness and athletic performance.
            </p>
          </div>

          {fitnessArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {fitnessArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
                >
                  <div className="p-6&quot;>
                    <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors&quot;>
                      <Link href={`/blog/lifestyle/fitness/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4&quot;>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                      <Link 
                        href={`/blog/lifestyle/fitness/${article.id}`}
                        className="text-violet-600 hover:text-violet-800 text-sm&quot;
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12&quot;>
              <div className="text-5xl mb-4&quot;>💪</div>
              <h3 className="text-2xl font-bold mb-2&quot;>Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto&quot;>
                We&apos;re working on bringing you the latest insights in fitness and athletic performance.
              </p>
            </div>
          )}

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/lifestyle&quot;
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300&quot;
            >
              ← Back to Lifestyle Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}