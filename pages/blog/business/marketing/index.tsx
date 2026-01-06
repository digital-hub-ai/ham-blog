import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function MarketingIndex() {
  // Complete list of marketing articles
  const marketingArticles = [
    { id: &apos;metaverse-commerce-building-economy&apos;, title: &apos;Metaverse Commerce: Building the Economy of Virtual Worlds&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Exploring the emergence of virtual economies and how brands are establishing presence in digital realms.&apos; },
    { id: &apos;neuroscience-consumer-behavior&apos;, title: &apos;Neuroscience in Consumer Behavior: Decoding Purchase Decisions&apos;, date: &apos;Dec 12, 2025&apos;, excerpt: &apos;How brain science is revolutionizing our understanding of what drives consumer choices.&apos; },
    { id: &apos;ai-powered-customer-journeys&apos;, title: &apos;AI-Powered Customer Journeys: Personalization at Scale&apos;, date: &apos;Dec 8, 2025&apos;, excerpt: &apos;Leveraging artificial intelligence to create individualized experiences across all touchpoints.&apos; },
    { id: &apos;voice-search-optimization-2025&apos;, title: &apos;Voice Search Optimization in 2025: Conversational SEO Strategies&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;Adapting digital marketing strategies for the rise of voice-activated search and commerce.&apos; },
    { id: &apos;social-commerce-evolution&apos;, title: &apos;Social Commerce Evolution: From Discovery to Purchase&apos;, date: &apos;Nov 28, 2025&apos;, excerpt: &apos;How social platforms are becoming complete shopping ecosystems with integrated payment systems.&apos; },
    { id: &apos;content-marketing-strategy-2025&apos;, title: &apos;Content Marketing Strategy 2025: Building Authority Through Value-Driven Storytelling&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;How modern brands are creating compelling content ecosystems that drive engagement, build trust, and convert audiences into loyal customers.&apos; },
    { id: &apos;email-marketing-automation-2025&apos;, title: &apos;Email Marketing Automation 2025: Personalization at Every Touchpoint&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;How advanced automation and AI are transforming email marketing into highly personalized customer experience engines that drive engagement and revenue.&apos; },
    { id: &apos;influencer-marketing-strategy&apos;, title: &apos;Influencer Marketing Strategy: Building Authentic Partnerships That Convert&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;How brands are moving beyond celebrity endorsements to create authentic, value-driven partnerships with micro and nano influencers who drive genuine engagement and measurable business results.&apos; },
    { id: &apos;marketing-analytics-2025&apos;, title: &apos;Marketing Analytics 2025: Data-Driven Decision Making for Maximum ROI&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;How modern marketers are leveraging advanced analytics, AI, and real-time data to make smarter decisions, optimize campaigns, and prove marketing\&apos;s impact on business growth.&apos; },
    { id: &apos;mobile-marketing-strategies&apos;, title: &apos;Mobile Marketing Strategies: Reaching Customers Where They Live&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;How brands are leveraging mobile-first strategies, app experiences, and location-based marketing to engage customers in the palm of their hands.&apos; },
    { id: &apos;omnichannel-marketing-2025&apos;, title: &apos;Omnichannel Marketing 2025: Creating Seamless Customer Experiences Across All Touchpoints&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;How brands are breaking down silos to deliver consistent, personalized experiences across online and offline channels that drive engagement and loyalty.&apos; },
    { id: &apos;performance-marketing-2025&apos;, title: &apos;Performance Marketing 2025: Driving Measurable Results Through Data-Driven Strategies&apos;, date: &apos;Dec 3, 2025&apos;, excerpt: &apos;How brands are leveraging advanced analytics, AI-powered optimization, and cross-channel attribution to maximize ROI and prove marketing\&apos;s direct impact on business outcomes.&apos; },
    { id: &apos;personalization-at-scale&apos;, title: &apos;Personalization at Scale: Delivering Individual Experiences to Millions&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;How brands are leveraging AI, machine learning, and real-time data to create individually tailored experiences that drive engagement, conversion, and customer loyalty.&apos; },
    { id: &apos;programmatic-advertising-2025&apos;, title: &apos;Programmatic Advertising 2025: Automating Media Buying for Maximum Efficiency&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;How brands are leveraging AI-powered programmatic platforms, real-time bidding, and advanced targeting to optimize ad spend and deliver personalized experiences at scale.&apos; },
    { id: &apos;retargeting-and-reengagement&apos;, title: &apos;Retargeting and Reengagement: Bringing Back Customers Who Almost Converted&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;How brands are using behavioral data, personalized messaging, and cross-channel strategies to re-engage visitors and recover lost revenue opportunities.&apos; },
    { id: &apos;seo-optimization-2025&apos;, title: &apos;SEO Optimization 2025: Mastering Search Algorithms for Organic Growth&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;How brands are adapting to evolving search algorithms, leveraging AI-powered content, and building authoritative digital presences that rank at the top of search results.&apos; },
    { id: &apos;social-media-marketing-2025&apos;, title: &apos;Social Media Marketing 2025: Building Communities and Driving Engagement in the Digital Age&apos;, date: &apos;Nov 23, 2025&apos;, excerpt: &apos;How brands are leveraging emerging platforms, authentic storytelling, and community-driven strategies to build meaningful relationships and drive business results through social channels.&apos; },
    { id: &apos;video-marketing-strategy&apos;, title: &apos;Video Marketing Strategy: Capturing Attention Through Storytelling and Motion&apos;, date: &apos;Nov 21, 2025&apos;, excerpt: &apos;How brands are leveraging short-form content, live streaming, and interactive video to engage audiences and drive measurable business results in an increasingly visual world.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Digital Marketing | Corporate Consciousness</title>
        <meta name="description&quot; content="Explore digital marketing strategies, consumer insights, and brand building in the connected economy.&quot; />
        <meta name="keywords&quot; content="digital marketing, consumer behavior, brand strategy, advertising&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/business&quot; className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore digital marketing strategies, consumer insights, and brand building in the connected economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {marketingArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors&quot;>
                    <Link href={`/blog/business/marketing/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/business/marketing/${article.id}`}
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