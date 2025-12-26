import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MarketingIndex() {
  // Complete list of marketing articles
  const marketingArticles = [
    { id: 'metaverse-commerce-building-economy', title: 'Metaverse Commerce: Building the Economy of Virtual Worlds', date: 'Dec 17, 2025', excerpt: 'Exploring the emergence of virtual economies and how brands are establishing presence in digital realms.' },
    { id: 'neuroscience-consumer-behavior', title: 'Neuroscience in Consumer Behavior: Decoding Purchase Decisions', date: 'Dec 12, 2025', excerpt: 'How brain science is revolutionizing our understanding of what drives consumer choices.' },
    { id: 'ai-powered-customer-journeys', title: 'AI-Powered Customer Journeys: Personalization at Scale', date: 'Dec 8, 2025', excerpt: 'Leveraging artificial intelligence to create individualized experiences across all touchpoints.' },
    { id: 'voice-search-optimization-2025', title: 'Voice Search Optimization in 2025: Conversational SEO Strategies', date: 'Dec 3, 2025', excerpt: 'Adapting digital marketing strategies for the rise of voice-activated search and commerce.' },
    { id: 'social-commerce-evolution', title: 'Social Commerce Evolution: From Discovery to Purchase', date: 'Nov 28, 2025', excerpt: 'How social platforms are becoming complete shopping ecosystems with integrated payment systems.' },
    { id: 'content-marketing-strategy-2025', title: 'Content Marketing Strategy 2025: Building Authority Through Value-Driven Storytelling', date: 'Dec 15, 2025', excerpt: 'How modern brands are creating compelling content ecosystems that drive engagement, build trust, and convert audiences into loyal customers.' },
    { id: 'email-marketing-automation-2025', title: 'Email Marketing Automation 2025: Personalization at Every Touchpoint', date: 'Dec 13, 2025', excerpt: 'How advanced automation and AI are transforming email marketing into highly personalized customer experience engines that drive engagement and revenue.' },
    { id: 'influencer-marketing-strategy', title: 'Influencer Marketing Strategy: Building Authentic Partnerships That Convert', date: 'Dec 11, 2025', excerpt: 'How brands are moving beyond celebrity endorsements to create authentic, value-driven partnerships with micro and nano influencers who drive genuine engagement and measurable business results.' },
    { id: 'marketing-analytics-2025', title: 'Marketing Analytics 2025: Data-Driven Decision Making for Maximum ROI', date: 'Dec 9, 2025', excerpt: 'How modern marketers are leveraging advanced analytics, AI, and real-time data to make smarter decisions, optimize campaigns, and prove marketing\'s impact on business growth.' },
    { id: 'mobile-marketing-strategies', title: 'Mobile Marketing Strategies: Reaching Customers Where They Live', date: 'Dec 7, 2025', excerpt: 'How brands are leveraging mobile-first strategies, app experiences, and location-based marketing to engage customers in the palm of their hands.' },
    { id: 'omnichannel-marketing-2025', title: 'Omnichannel Marketing 2025: Creating Seamless Customer Experiences Across All Touchpoints', date: 'Dec 5, 2025', excerpt: 'How brands are breaking down silos to deliver consistent, personalized experiences across online and offline channels that drive engagement and loyalty.' },
    { id: 'performance-marketing-2025', title: 'Performance Marketing 2025: Driving Measurable Results Through Data-Driven Strategies', date: 'Dec 3, 2025', excerpt: 'How brands are leveraging advanced analytics, AI-powered optimization, and cross-channel attribution to maximize ROI and prove marketing\'s direct impact on business outcomes.' },
    { id: 'personalization-at-scale', title: 'Personalization at Scale: Delivering Individual Experiences to Millions', date: 'Dec 1, 2025', excerpt: 'How brands are leveraging AI, machine learning, and real-time data to create individually tailored experiences that drive engagement, conversion, and customer loyalty.' },
    { id: 'programmatic-advertising-2025', title: 'Programmatic Advertising 2025: Automating Media Buying for Maximum Efficiency', date: 'Nov 29, 2025', excerpt: 'How brands are leveraging AI-powered programmatic platforms, real-time bidding, and advanced targeting to optimize ad spend and deliver personalized experiences at scale.' },
    { id: 'retargeting-and-reengagement', title: 'Retargeting and Reengagement: Bringing Back Customers Who Almost Converted', date: 'Nov 27, 2025', excerpt: 'How brands are using behavioral data, personalized messaging, and cross-channel strategies to re-engage visitors and recover lost revenue opportunities.' },
    { id: 'seo-optimization-2025', title: 'SEO Optimization 2025: Mastering Search Algorithms for Organic Growth', date: 'Nov 25, 2025', excerpt: 'How brands are adapting to evolving search algorithms, leveraging AI-powered content, and building authoritative digital presences that rank at the top of search results.' },
    { id: 'social-media-marketing-2025', title: 'Social Media Marketing 2025: Building Communities and Driving Engagement in the Digital Age', date: 'Nov 23, 2025', excerpt: 'How brands are leveraging emerging platforms, authentic storytelling, and community-driven strategies to build meaningful relationships and drive business results through social channels.' },
    { id: 'video-marketing-strategy', title: 'Video Marketing Strategy: Capturing Attention Through Storytelling and Motion', date: 'Nov 21, 2025', excerpt: 'How brands are leveraging short-form content, live streaming, and interactive video to engage audiences and drive measurable business results in an increasingly visual world.' }
  ];

  return (
    <>
      <Head>
        <title>Digital Marketing | Corporate Consciousness</title>
        <meta name="description" content="Explore digital marketing strategies, consumer insights, and brand building in the connected economy." />
        <meta name="keywords" content="digital marketing, consumer behavior, brand strategy, advertising" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/business" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
            <span className="mr-2">←</span>
            Back to Corporate Consciousness
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore digital marketing strategies, consumer insights, and brand building in the connected economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-amber-700 transition-colors">
                    <Link href={`/blog/business/marketing/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/business/marketing/${article.id}`}
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