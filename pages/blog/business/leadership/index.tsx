import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LeadershipIndex() {
  // Complete list of leadership articles
  const leadershipArticles = [
    { id: 'distributed-leadership-remote-teams', title: 'Distributed Leadership: Managing Remote and Hybrid Teams', date: 'Dec 14, 2025', excerpt: 'Effective leadership strategies for geographically dispersed teams in the post-pandemic workplace.' },
    { id: 'emotional-intelligence-leadership', title: 'Emotional Intelligence in Leadership: The Human Edge', date: 'Dec 9, 2025', excerpt: 'How EQ drives better decision-making and team performance in complex organizational environments.' },
    { id: 'ai-augmented-leadership', title: 'AI-Augmented Leadership: Decision Support for Executives', date: 'Dec 4, 2025', excerpt: 'Leveraging artificial intelligence to enhance strategic thinking and operational decision-making.' },
    { id: 'inclusive-leadership-practices', title: 'Inclusive Leadership Practices: Building Diverse and Equitable Organizations', date: 'Nov 29, 2025', excerpt: 'Creating cultures where all employees feel valued, heard, and empowered to contribute their best.' },
    { id: 'crisis-leadership-resilience', title: 'Crisis Leadership: Building Organizational Resilience', date: 'Nov 24, 2025', excerpt: 'Developing capabilities to navigate uncertainty and emerge stronger from disruptive events.' },
    { id: 'leadership-communication-digital-age', title: 'Leadership Communication in the Digital Age: Connecting Across Screens', date: 'Dec 12, 2025', excerpt: 'Master essential digital communication skills to lead effectively across virtual teams, remote collaborations, and technology-mediated interactions in modern organizations.' },
    { id: 'developing-high-performance-teams', title: 'Developing High-Performance Teams: The Science of Exceptional Collaboration', date: 'Dec 10, 2025', excerpt: 'Unlock the secrets of building and leading high-performance teams that consistently deliver exceptional results through proven methodologies and evidence-based practices.' },
    { id: 'strategic-thinking-vision-setting', title: 'Strategic Thinking and Vision Setting: Charting the Future', date: 'Dec 8, 2025', excerpt: 'Master the art of strategic thinking and vision setting to guide organizations toward long-term success and sustainable growth.' },
    { id: 'change-management-organizational-transformation', title: 'Change Management and Organizational Transformation: Navigating Transitions', date: 'Dec 6, 2025', excerpt: 'Essential strategies for leading successful organizational change and transformation initiatives in today\'s dynamic business environment.' },
    { id: 'coaching-mentoring-leader-development', title: 'Coaching and Mentoring for Leader Development: Cultivating Tomorrow\'s Leaders', date: 'Dec 4, 2025', excerpt: 'Unlock the power of coaching and mentoring to develop exceptional leaders and build strong organizational leadership pipelines.' },
    { id: 'ethical-leadership-corporate-governance', title: 'Ethical Leadership and Corporate Governance: Building Trust and Accountability', date: 'Dec 2, 2025', excerpt: 'Explore how ethical leadership and robust corporate governance frameworks create sustainable value and stakeholder trust in modern organizations.' },
    { id: 'cross-cultural-leadership-global-organizations', title: 'Cross-Cultural Leadership in Global Organizations: Bridging Differences', date: 'Nov 30, 2025', excerpt: 'Master the complexities of cross-cultural leadership to drive performance and innovation in globally distributed teams and multicultural organizations.' },
    { id: 'innovation-leadership-creative-problem-solving', title: 'Innovation Leadership and Creative Problem Solving: Driving Breakthrough Solutions', date: 'Nov 28, 2025', excerpt: 'Discover how innovative leaders harness creativity and systematic problem-solving to drive breakthrough solutions and maintain competitive advantage.' },
    { id: 'servant-leadership-empowerment', title: 'Servant Leadership and Empowerment: Unleashing Team Potential', date: 'Nov 26, 2025', excerpt: 'Explore how servant leadership principles and empowerment strategies create high-engagement workplaces where teams thrive and organizations excel.' },
    { id: 'leadership-times-uncertainty', title: 'Leadership in Times of Uncertainty: Navigating Volatility with Confidence', date: 'Nov 24, 2025', excerpt: 'Essential strategies for leading organizations effectively through uncertain times, economic volatility, and unexpected disruptions with resilience and clarity.' },
    { id: 'building-psychological-safety-teams', title: 'Building Psychological Safety in Teams: Creating Environments Where People Thrive', date: 'Nov 22, 2025', excerpt: 'Learn how to create psychologically safe team environments that boost innovation, engagement, and performance while reducing turnover and conflict.' }
  ];

  return (
    <>
      <Head>
        <title>Leadership | Corporate Consciousness</title>
        <meta name="description" content="Explore leadership development, team management, and organizational culture in modern business." />
        <meta name="keywords" content="leadership, management, organizational culture, team building" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Leadership
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore leadership development, team management, and organizational culture in modern business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/leadership/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/leadership/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm"
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
              href="/blog/business"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}