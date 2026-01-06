import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function LeadershipIndex() {
  // Complete list of leadership articles
  const leadershipArticles = [
    { id: &apos;distributed-leadership-remote-teams&apos;, title: &apos;Distributed Leadership: Managing Remote and Hybrid Teams&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;Effective leadership strategies for geographically dispersed teams in the post-pandemic workplace.&apos; },
    { id: &apos;emotional-intelligence-leadership&apos;, title: &apos;Emotional Intelligence in Leadership: The Human Edge&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;How EQ drives better decision-making and team performance in complex organizational environments.&apos; },
    { id: &apos;ai-augmented-leadership&apos;, title: &apos;AI-Augmented Leadership: Decision Support for Executives&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Leveraging artificial intelligence to enhance strategic thinking and operational decision-making.&apos; },
    { id: &apos;inclusive-leadership-practices&apos;, title: &apos;Inclusive Leadership Practices: Building Diverse and Equitable Organizations&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;Creating cultures where all employees feel valued, heard, and empowered to contribute their best.&apos; },
    { id: &apos;crisis-leadership-resilience&apos;, title: &apos;Crisis Leadership: Building Organizational Resilience&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;Developing capabilities to navigate uncertainty and emerge stronger from disruptive events.&apos; },
    { id: &apos;leadership-communication-digital-age&apos;, title: &apos;Leadership Communication in the Digital Age: Connecting Across Screens&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;Master essential digital communication skills to lead effectively across virtual teams, remote collaborations, and technology-mediated interactions in modern organizations.&apos; },
    { id: &apos;developing-high-performance-teams&apos;, title: &apos;Developing High-Performance Teams: The Science of Exceptional Collaboration&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Unlock the secrets of building and leading high-performance teams that consistently deliver exceptional results through proven methodologies and evidence-based practices.&apos; },
    { id: &apos;strategic-thinking-vision-setting&apos;, title: &apos;Strategic Thinking and Vision Setting: Charting the Future&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Master the art of strategic thinking and vision setting to guide organizations toward long-term success and sustainable growth.&apos; },
    { id: &apos;change-management-organizational-transformation&apos;, title: &apos;Change Management and Organizational Transformation: Navigating Transitions&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Essential strategies for leading successful organizational change and transformation initiatives in today\&apos;s dynamic business environment.&apos; },
    { id: &apos;coaching-mentoring-leader-development&apos;, title: &apos;Coaching and Mentoring for Leader Development: Cultivating Tomorrow\&apos;s Leaders&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Unlock the power of coaching and mentoring to develop exceptional leaders and build strong organizational leadership pipelines.&apos; },
    { id: &apos;ethical-leadership-corporate-governance&apos;, title: &apos;Ethical Leadership and Corporate Governance: Building Trust and Accountability&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;Explore how ethical leadership and robust corporate governance frameworks create sustainable value and stakeholder trust in modern organizations.&apos; },
    { id: &apos;cross-cultural-leadership-global-organizations&apos;, title: &apos;Cross-Cultural Leadership in Global Organizations: Bridging Differences&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Master the complexities of cross-cultural leadership to drive performance and innovation in globally distributed teams and multicultural organizations.&apos; },
    { id: &apos;innovation-leadership-creative-problem-solving&apos;, title: &apos;Innovation Leadership and Creative Problem Solving: Driving Breakthrough Solutions&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;Discover how innovative leaders harness creativity and systematic problem-solving to drive breakthrough solutions and maintain competitive advantage.&apos; },
    { id: &apos;servant-leadership-empowerment&apos;, title: &apos;Servant Leadership and Empowerment: Unleashing Team Potential&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;Explore how servant leadership principles and empowerment strategies create high-engagement workplaces where teams thrive and organizations excel.&apos; },
    { id: &apos;leadership-times-uncertainty&apos;, title: &apos;Leadership in Times of Uncertainty: Navigating Volatility with Confidence&apos;, date: &apos;Nov 24, 2025&apos;, excerpt: &apos;Essential strategies for leading organizations effectively through uncertain times, economic volatility, and unexpected disruptions with resilience and clarity.&apos; },
    { id: &apos;building-psychological-safety-teams&apos;, title: &apos;Building Psychological Safety in Teams: Creating Environments Where People Thrive&apos;, date: &apos;Nov 22, 2025&apos;, excerpt: &apos;Learn how to create psychologically safe team environments that boost innovation, engagement, and performance while reducing turnover and conflict.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Leadership | Corporate Consciousness</title>
        <meta name="description&quot; content="Explore leadership development, team management, and organizational culture in modern business.&quot; />
        <meta name="keywords&quot; content="leadership, management, organizational culture, team building&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/business&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Leadership
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore leadership development, team management, and organizational culture in modern business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {leadershipArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors&quot;>
                    <Link href={`/blog/business/leadership/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/business/leadership/${article.id}`}
                      className="text-amber-600 hover:text-amber-800 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/business&quot;
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300&quot;
            >
              ← Back to Business Realm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}