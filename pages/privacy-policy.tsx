import { useState } from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import { useRouter } from &apos;next/router&apos;;

export default function PrivacyPolicy() {
  const [lastUpdated] = useState(&apos;December 9, 2025&apos;);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(&apos;privacy&apos;);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white&quot;>
      <Head>
        <title>Privacy Policy - AI Tools Directory</title>
        <meta name="description&quot; content="Comprehensive Privacy Policy for AI Tools Directory&quot; />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12&quot;>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8&quot;>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8&quot;>
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Privacy Policy
              </h1>
              <p className="text-gray-300&quot;>Last Updated: {lastUpdated}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none&quot;>
            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>1. Introduction</h2>
              <p className="mb-4 text-gray-300&quot;>
                Welcome to AI Tools Directory. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>2. Information We Collect</h2>
              <p className="mb-2 text-gray-300&quot;>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2&quot;>
                <li>Personal information (name, email, etc.) when you create an account</li>
                <li>Usage data and analytics about how you interact with our site</li>
                <li>Information from cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>3. How We Use Your Information</h2>
              <p className="mb-2 text-gray-300&quot;>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2&quot;>
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Communicate with you</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>4. Data Security</h2>
              <p className="mb-4 text-gray-300&quot;>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>5. Your Rights</h2>
              <p className="mb-4 text-gray-300&quot;>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2&quot;>
                <li>Right to access your data</li>
                <li>Right to correct inaccuracies</li>
                <li>Right to request deletion</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>6. Cookies</h2>
              <p className="mb-4 text-gray-300&quot;>
                We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10&quot;>
              <h2 className="text-2xl font-bold mb-4 text-white&quot;>7. Contact Us</h2>
              <p className="mb-2 text-gray-300&quot;>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-blue-400&quot;>privacy@aitoolsdirectory.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}