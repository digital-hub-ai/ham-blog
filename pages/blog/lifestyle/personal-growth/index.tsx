import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PersonalGrowthIndex() {
  // Personal Growth articles
  const personalGrowthArticles = [
    { 
      id: 'conscious-consumerism', 
      title: 'Conscious Consumerism: Making Ethical Choices in a Global Marketplace', 
      excerpt: 'Navigating modern consumption with awareness of environmental and social impact for a more sustainable lifestyle.',
      date: 'Dec 17, 2025',
      author: 'Ethics Advocate Maya Green',
      readTime: '11 min read'
    },
    {
      id: 'goal-setting',
      title: 'Goal Setting and Achievement Strategies: Transforming Dreams into Reality',
      excerpt: 'Master the art and science of effective goal setting to turn your aspirations into achievable outcomes. Learn proven strategies for setting, tracking, and accomplishing meaningful goals.',
      date: 'Dec 18, 2025',
      author: 'Goal Achievement Expert Dr. Vision Builder',
      readTime: '12 min read'
    },
    {
      id: 'resilience',
      title: 'Building Resilience and Mental Toughness: Thriving Through Adversity',
      excerpt: 'Develop the psychological strength to bounce back from setbacks and thrive in challenging circumstances. Learn techniques to build mental resilience and emotional stability.',
      date: 'Dec 18, 2025',
      author: 'Resilience Specialist Dr. Strong Mind',
      readTime: '13 min read'
    },
    {
      id: 'critical-thinking',
      title: 'Developing Critical Thinking Skills: Sharpening Your Mind for Better Decisions',
      excerpt: 'Enhance your ability to think clearly, analyze information objectively, and make well-reasoned decisions. Master the essential skill of critical thinking for personal and professional success.',
      date: 'Dec 18, 2025',
      author: 'Logic Expert Dr. Clear Thinker',
      readTime: '14 min read'
    },
    {
      id: 'time-management',
      title: 'Time Management and Productivity Mastery: Maximizing Your Most Valuable Resource',
      excerpt: 'Transform your relationship with time and boost productivity through proven strategies. Learn to prioritize effectively and make the most of each day.',
      date: 'Dec 18, 2025',
      author: 'Productivity Expert Dr. Time Master',
      readTime: '13 min read'
    },
    {
      id: 'emotional-intelligence',
      title: 'Cultivating Emotional Intelligence: The Key to Personal and Professional Success',
      excerpt: 'Develop your emotional intelligence to build stronger relationships, make better decisions, and navigate social complexities with ease. Master the crucial skill of emotional awareness and regulation.',
      date: 'Dec 18, 2025',
      author: 'Emotional Expert Dr. Heart Mind',
      readTime: '15 min read'
    },
    {
      id: 'confidence',
      title: 'Building Confidence and Self-Esteem: Unlocking Your Inner Strength',
      excerpt: 'Develop unshakeable confidence and healthy self-esteem through proven techniques. Learn to overcome self-doubt and cultivate a positive self-image that empowers you.',
      date: 'Dec 18, 2025',
      author: 'Confidence Coach Dr. Self Esteem',
      readTime: '12 min read'
    },
    {
      id: 'leadership',
      title: 'Developing Leadership Qualities: Inspire and Influence with Purpose',
      excerpt: 'Cultivate essential leadership skills to inspire others, drive change, and make a positive impact. Learn to lead with authenticity, vision, and purpose.',
      date: 'Dec 18, 2025',
      author: 'Leadership Expert Dr. Visionary Guide',
      readTime: '14 min read'
    },
    {
      id: 'creative-problem-solving',
      title: 'Creative Problem Solving Techniques: Unlock Innovation in Everyday Challenges',
      excerpt: 'Develop your creative problem-solving abilities to tackle challenges with innovative solutions. Learn techniques to think outside the box and approach problems from new angles.',
      date: 'Dec 18, 2025',
      author: 'Innovation Expert Dr. Creative Mind',
      readTime: '13 min read'
    },
    {
      id: 'habits',
      title: 'Building Effective Habits: Transform Your Life One Small Change at a Time',
      excerpt: 'Master the science of habit formation to create lasting positive changes in your life. Learn how to build good habits and break destructive ones for lasting transformation.',
      date: 'Dec 18, 2025',
      author: 'Habit Expert Dr. Change Master',
      readTime: '14 min read'
    },
    {
      id: 'decision-making',
      title: 'Decision Making and Judgment Skills: Choose Wisely in a Complex World',
      excerpt: 'Enhance your decision-making abilities with proven strategies and frameworks. Learn to make better choices under uncertainty and avoid common judgment errors.',
      date: 'Dec 18, 2025',
      author: 'Decision Expert Dr. Choice',
      readTime: '13 min read'
    },
    {
      id: 'communication',
      title: 'Mastering Communication and Interpersonal Skills: Connect with Impact',
      excerpt: 'Develop exceptional communication skills to build stronger relationships and influence others positively. Learn to express yourself clearly and listen with empathy.',
      date: 'Dec 18, 2025',
      author: 'Communication Expert Dr. Connect Master',
      readTime: '15 min read'
    },
    {
      id: 'stress-management',
      title: 'Stress Management and Coping Strategies: Navigate Life's Challenges with Resilience',
      excerpt: 'Learn effective stress management techniques and coping strategies to handle life's pressures with grace. Build resilience and maintain well-being in challenging times.',
      date: 'Dec 18, 2025',
      author: 'Wellness Expert Dr. Calm Rivers',
      readTime: '14 min read'
    },
    {
      id: 'learning-how-to-learn',
      title: 'Learning How to Learn: Unlock Your Brain's Potential for Lifelong Growth',
      excerpt: 'Master the art and science of learning with proven strategies that accelerate knowledge acquisition and retention. Transform how you learn forever.',
      date: 'Dec 18, 2025',
      author: 'Education Specialist Dr. Mind Bloom',
      readTime: '13 min read'
    },
    {
      id: 'financial-literacy',
      title: 'Building Financial Literacy: Master Your Money for Lifetime Security',
      excerpt: 'Gain essential financial literacy skills to manage money wisely, invest strategically, and build lasting wealth. Take control of your financial future today.',
      date: 'Dec 18, 2025',
      author: 'Financial Expert Dr. Prosper Wells',
      readTime: '15 min read'
    },
    {
      id: 'cultural-intelligence',
      title: 'Developing Cultural Intelligence: Navigate Our Globalized World with Grace',
      excerpt: 'Enhance your cultural intelligence to thrive in diverse environments, build stronger relationships, and succeed in our interconnected world. Master the skills for cross-cultural effectiveness.',
      date: 'Dec 18, 2025',
      author: 'Global Leadership Expert Dr. Harmony Bridges',
      readTime: '14 min read'
    },
    {
      id: 'networking',
      title: 'Networking and Relationship Building: Forge Meaningful Connections That Matter',
      excerpt: 'Master the art of authentic networking and relationship building to expand your personal and professional circles. Create valuable connections that last a lifetime.',
      date: 'Dec 18, 2025',
      author: 'Relationship Expert Dr. Connect Bridges',
      readTime: '13 min read'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking and Presentation Skills: Command the Stage with Confidence',
      excerpt: 'Transform your public speaking abilities and presentation skills to captivate audiences and communicate with impact. Master the art of confident, compelling communication.',
      date: 'Dec 18, 2025',
      author: 'Communication Expert Dr. Voice Strong',
      readTime: '14 min read'
    },
    {
      id: 'negotiation',
      title: 'Negotiation and Persuasion Skills: Influence with Integrity and Achieve Win-Win Outcomes',
      excerpt: 'Master negotiation and persuasion techniques to achieve better outcomes in business, relationships, and daily life. Learn to influence ethically and create value for all parties.',
      date: 'Dec 18, 2025',
      author: 'Negotiation Expert Dr. Win-Win Williams',
      readTime: '15 min read'
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution and Mediation: Transform Disagreements into Opportunities',
      excerpt: 'Learn effective conflict resolution and mediation techniques to navigate disagreements constructively. Turn conflicts into opportunities for growth and stronger relationships.',
      date: 'Dec 18, 2025',
      author: 'Mediation Expert Dr. Harmony Seeker',
      readTime: '14 min read'
    },
    {
      id: 'digital-literacy',
      title: 'Building Digital Literacy: Navigate the Digital World with Confidence and Skill',
      excerpt: 'Develop essential digital literacy skills to thrive in our technology-driven world. Master digital tools, protect your privacy, and leverage technology for personal growth.',
      date: 'Dec 18, 2025',
      author: 'Technology Educator Dr. Byte Wise',
      readTime: '13 min read'
    },
    {
      id: 'career-development',
      title: 'Career Development and Advancement: Climb the Ladder to Professional Success',
      excerpt: 'Discover proven strategies for career development and advancement. Build skills, expand networks, and accelerate your professional growth journey.',
      date: 'Dec 18, 2025',
      author: 'Career Strategist Dr. Ascent Advisor',
      readTime: '14 min read'
    },
    {
      id: 'entrepreneurial-mindset',
      title: 'Entrepreneurial Mindset: Think Like an Innovator and Create Your Success',
      excerpt: 'Develop an entrepreneurial mindset to think creatively, take calculated risks, and create opportunities. Learn to approach challenges with an innovator's perspective.',
      date: 'Dec 18, 2025',
      author: 'Innovation Expert Dr. Visionary Thinker',
      readTime: '13 min read'
    },
    {
      id: 'ethical-reasoning',
      title: 'Ethical Reasoning and Moral Development: Build Your Moral Compass for Life',
      excerpt: 'Develop ethical reasoning skills and moral judgment to navigate complex decisions with integrity. Learn frameworks for moral development and ethical decision-making.',
      date: 'Dec 18, 2025',
      author: 'Ethics Expert Dr. Moral Guide',
      readTime: '14 min read'
    },
    {
      id: 'intellectual-curiosity',
      title: 'Building Intellectual Curiosity: Cultivate a Love for Learning and Discovery',
      excerpt: 'Develop intellectual curiosity to fuel lifelong learning, creativity, and personal growth. Learn strategies to maintain wonder and continuously expand your knowledge.',
      date: 'Dec 18, 2025',
      author: 'Learning Expert Dr. Wonder Seeker',
      readTime: '13 min read'
    },
    {
      id: 'lifelong-learning',
      title: 'Lifelong Learning and Personal Renewal: Embrace Continuous Growth Throughout Life',
      excerpt: 'Discover the power of lifelong learning and personal renewal. Develop strategies for continuous growth, adaptation, and self-improvement at every stage of life.',
      date: 'Dec 18, 2025',
      author: 'Learning Expert Dr. Growth Guide',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Personal Growth | Lifestyle Dimension</title>
        <meta name="description" content="Expand your horizons through continuous learning, self-reflection, and intentional living." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Personal Growth
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Expand your horizons through continuous learning, self-reflection, and intentional living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalGrowthArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/lifestyle/personal-growth/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/personal-growth/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

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