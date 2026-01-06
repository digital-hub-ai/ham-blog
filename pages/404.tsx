import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center p-4&quot;>
      <Head>
        <title>Page Not Found - AI Tools Directory</title>
        <meta name="description&quot; content="The page you're looking for doesn't exist&quot; />
      </Head>

      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center&quot;>
        <div className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
          404
        </div>
        
        <h1 className="text-4xl font-bold mb-6&quot;>Page Not Found</h1>
        
        <p className="text-xl text-gray-300 mb-8&quot;>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="mb-8&quot;>
          <p className="text-lg text-gray-300&quot;>
            You&apos;ll be redirected to the homepage in <span className="font-bold text-blue-400&quot;>{countdown}</span> seconds.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <Link href="/&quot; className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all&quot;>
            Go to Homepage
          </Link>
          
          <Link href="/contact&quot; className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all&quot;>
            Report Issue
          </Link>
        </div>
        
        <div className="mt-12&quot;>
          <h2 className="text-2xl font-bold mb-4&quot;>Popular Pages</h2>
          <div className="flex flex-wrap justify-center gap-3&quot;>
            <Link href="/terms-of-service&quot; className="text-blue-400 hover:text-blue-300 transition-colors&quot;>
              Terms of Service
            </Link>
            <span className="text-gray-500&quot;>•</span>
            <Link href="/privacy-policy&quot; className="text-blue-400 hover:text-blue-300 transition-colors&quot;>
              Privacy Policy
            </Link>
            <span className="text-gray-500&quot;>•</span>
            <Link href="/about&quot; className="text-blue-400 hover:text-blue-300 transition-colors&quot;>
              About Us
            </Link>
            <span className="text-gray-500&quot;>•</span>
            <Link href="/contact&quot; className="text-blue-400 hover:text-blue-300 transition-colors&quot;>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}