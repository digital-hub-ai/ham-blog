import { useState } from &apos;react&apos;;
import Head from &apos;next/head&apos;;

export default function About() {
  const [lastUpdated] = useState(&apos;November 22, 2025&apos;);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white&quot;>
      <Head>
        <title>About Us - AI Tools Directory</title>
        <meta name="description&quot; content="Learn more about AI Tools Directory and our mission&quot; />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12&quot;>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8&quot;>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
            About AI Tools Directory
          </h1>
          
          <div className="text-gray-300 mb-8&quot;>
            <p className="mb-4&quot;>Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none&quot;>
            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>Our Mission</h2>
              <p className="mb-4 text-gray-300&quot;>
                At AI Tools Directory, we&apos;re on a mission to democratize access to artificial intelligence tools and make cutting-edge AI technology accessible to everyone. We believe that AI should empower individuals and businesses to achieve more, create better, and solve complex problems.
              </p>
              <p className="mb-4 text-gray-300&quot;>
                Our platform serves as a comprehensive directory of AI tools across various categories, helping users discover, compare, and select the perfect tools for their specific needs.
              </p>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>What We Do</h2>
              <p className="mb-4 text-gray-300&quot;>
                We meticulously curate and organize thousands of AI tools from around the web, categorizing them by function, industry, and use case. Our team of AI enthusiasts and experts continuously researches and evaluates new tools to ensure our directory remains up-to-date and relevant.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6&quot;>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10&quot;>
                  <h3 className="text-xl font-bold mb-3 text-blue-400&quot;>Comprehensive Directory</h3>
                  <p className="text-gray-300&quot;>
                    Over 1,000+ AI tools organized across 300+ categories to help you find exactly what you need.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10&quot;>
                  <h3 className="text-xl font-bold mb-3 text-purple-400&quot;>Expert Reviews</h3>
                  <p className="text-gray-300&quot;>
                    Detailed reviews and ratings from our team of AI specialists to help you make informed decisions.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10&quot;>
                  <h3 className="text-xl font-bold mb-3 text-green-400&quot;>Smart Search</h3>
                  <p className="text-gray-300&quot;>
                    Advanced search and filtering capabilities to quickly find tools that match your requirements.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10&quot;>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400&quot;>Regular Updates</h3>
                  <p className="text-gray-300&quot;>
                    New tools and updates added daily to keep our directory fresh and current with AI advancements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>Our Values</h2>
              
              <div className="space-y-6 mt-6&quot;>
                <div className="flex items-start&quot;>
                  <div className="text-2xl mr-4&quot;>🔍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white&quot;>Transparency</h3>
                    <p className="text-gray-300&quot;>
                      We provide honest, unbiased reviews and clearly disclose our relationships with tool providers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start&quot;>
                  <div className="text-2xl mr-4&quot;>🚀</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white&quot;>Innovation</h3>
                    <p className="text-gray-300&quot;>
                      We&apos;re constantly exploring new AI technologies and trends to keep our users at the forefront of innovation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start&quot;>
                  <div className="text-2xl mr-4&quot;>🤝</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white&quot;>Community</h3>
                    <p className="text-gray-300&quot;>
                      We foster a community of AI enthusiasts, professionals, and creators to share knowledge and experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start&quot;>
                  <div className="text-2xl mr-4&quot;>💡</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white&quot;>Empowerment</h3>
                    <p className="text-gray-300&quot;>
                      We believe in empowering individuals and businesses with the tools they need to succeed in the AI era.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>Our Team</h2>
              <p className="mb-4 text-gray-300&quot;>
                Our team consists of AI researchers, developers, content creators, and industry experts who are passionate about artificial intelligence and its potential to transform the world. We bring together diverse backgrounds and expertise to provide the most comprehensive and valuable AI tool directory on the web.
              </p>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>Get In Touch</h2>
              <p className="mb-4 text-gray-300&quot;>
                Have questions, suggestions, or want to partner with us? We&apos;d love to hear from you!
              </p>
              <p className="text-gray-300&quot;>
                Email us at: contact@aitoolsdirectory.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}