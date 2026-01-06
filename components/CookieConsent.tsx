import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(&apos;cookieConsent&apos;, &apos;rejected&apos;);
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg z-50&quot;>
      <div className="max-w-7xl mx-auto&quot;>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between&quot;>
          <div className="mb-4 md:mb-0 md:mr-4&quot;>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white&quot;>Cookie Consent</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1&quot;>
              We use cookies to improve your experience and for advertising purposes. 
              By accepting, you consent to our use of cookies. 
              See our <Link href="/privacy-policy&quot; className="text-blue-600 hover:underline&quot;>Privacy Policy</Link> for more details.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3&quot;>
            <button
              onClick={rejectCookies}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors&quot;
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}