&quot;use client&quot;;

import React from &apos;react&apos;;
import Link from &apos;next/link&apos;;

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8&quot;>
      <div className="container mx-auto px-4&quot;>
        <div className="flex flex-col md:flex-row justify-between items-center&quot;>
          <div className="mb-4 md:mb-0&quot;>
            <p className="text-sm text-gray-600 dark:text-gray-400&quot;>
              © {new Date().getFullYear()} Ham Blog. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0&quot;>
            <Link href="/&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Home
            </Link>
            <Link href="/blog&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Blog
            </Link>
            <Link href="/compare&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Compare
            </Link>
            <Link href="/about&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              About
            </Link>
            <Link href="/contact&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Contact
            </Link>
          </div>
          <div className="flex space-x-6&quot;>
            <Link href="/privacy-policy&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service&quot; className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors&quot;>
              Terms of Service
            </Link>
            <a 
              href="mailto:huzaifakarim612@gmail.com&quot; 
              className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors&quot;
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
