import { useState } from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState(&apos;terms&apos;);
  const [lastUpdated] = useState(&apos;December 9, 2025&apos;);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white&quot;>
      <Head>
        <title>Terms of Service - AI Tools Directory</title>
        <meta name="description&quot; content="Terms of Service and User Agreement for AI Tools Directory&quot; />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12&quot;>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8&quot;>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8&quot;>
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Terms of Service
              </h1>
              <p className="text-gray-300&quot;>Last Updated: {lastUpdated}</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0&quot;>
              <button
                onClick={() => setActiveTab(&apos;terms&apos;)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === &apos;terms&apos; 
                    ? &apos;bg-blue-600 text-white&apos; 
                    : &apos;bg-white/10 text-gray-300 hover:bg-white/20&apos;
                }`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveTab(&apos;acceptable&apos;)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === &apos;acceptable&apos;
                    ? &apos;bg-blue-600 text-white&apos;
                    : &apos;bg-white/10 text-gray-300 hover:bg-white/20
                }`}
              >
                Acceptable Use
              </button>
            </div>
          </div>

          <div className="prose prose-invert max-w-none&quot;>
            {activeTab === &apos;terms&apos; ? (
              <>
                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>1. Acceptance of Terms</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    By accessing or using the AI Tools Directory (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>2. Description of Service</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    AI Tools Directory provides a comprehensive directory of artificial intelligence tools and resources. We serve as an informational platform and do not operate or control the tools listed. We are not responsible for the content, functionality, or performance of any third-party tools or services.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>3. User Accounts</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>4. Intellectual Property</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of AI Tools Directory and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AI Tools Directory.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>5. Links To Other Web Sites</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by AI Tools Directory.
                  </p>
                  <p className="mb-4 text-gray-300&quot;>
                    AI Tools Directory has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that AI Tools Directory shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such web sites or services.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>6. Termination</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p className="mb-4 text-gray-300&quot;>
                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>7. Disclaimer</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>8. Limitation of Liability</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    In no event shall AI Tools Directory, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>9. Governing Law</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>10. Changes</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&rsquo; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </section>

                <section className="mb-10&quot;>
                  <h2 className="text-2xl font-bold mb-4 text-white&quot;>11. Contact Us</h2>
                  <p className="mb-4 text-gray-300&quot;>
                    If you have any questions about these Terms, please contact us at: contact@aitoolsdirectory.com
                  </p>
                </section>
              </>
            ) : (
              <section className="mb-10&quot;>
                <h2 className="text-2xl font-bold mb-4 text-white&quot;>Acceptable Use Policy</h2>
                <p className="mb-4 text-gray-300&quot;>
                  By using our Service, you agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2&quot;>
                  <li>Use the Service in any way that violates any applicable laws or regulations</li>
                  <li>Engage in any activity that interferes with or disrupts the Service</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Use the Service to transmit any malicious code or harmful content</li>
                  <li>Impersonate any person or entity, or falsely state your affiliation with any person or entity</li>
                </ul>
                <p className="mb-4 text-gray-300&quot;>
                  We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any violation of this Acceptable Use Policy.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}