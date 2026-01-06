'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faTools, faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic';

// Dynamically import the Newsletter component with no SSR
const Newsletter = dynamic(
  () => import('@/components/Newsletter/Newsletter'),
  { ssr: false }
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800&quot;>
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12&quot;>
        <div className="container mx-auto px-4&quot;>
          <div className="max-w-4xl mx-auto&quot;>
            <Newsletter 
              title="Stay Ahead in AI&quot;
              description="Get the latest AI tools and updates delivered to your inbox every week.&quot;
            />
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12&quot;>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8&quot;>
          {/* About Section */}
          <div className="space-y-4&quot;>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center&quot;>
              <FontAwesomeIcon icon={faRocket} className="w-5 h-5 text-blue-500&quot; fixedWidth />
              AI Tools Directory
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm&quot;>
              Discover and compare the best AI tools to boost your productivity and creativity.
            </p>
            <div className="flex space-x-4&quot;>
              <a 
                href="https://github.com/yourusername/ai-tools-directory&quot; 
                target="_blank&quot; 
                rel="noopener noreferrer&quot;
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors&quot;
                aria-label="GitHub&quot;
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5&quot; fixedWidth />
              </a>
              <a 
                href="https://twitter.com/yourusername&quot; 
                target="_blank&quot; 
                rel="noopener noreferrer&quot;
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors&quot;
                aria-label="Twitter&quot;
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5&quot; fixedWidth />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4&quot;>Quick Links</h4>
            <ul className="space-y-2&quot;>
              <li><Link href="/&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Home</Link></li>
              <li><Link href="/tools&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>All Tools</Link></li>
              <li><Link href="/compare&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Compare Tools</Link></li>
              <li><Link href="/blog&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Blog</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4&quot;>Resources</h4>
            <ul className="space-y-2&quot;>
              <li><Link href="/blog&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Blog</Link></li>
              <li><Link href="/tutorials&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Tutorials</Link></li>
              <li><Link href="/documentation&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Documentation</Link></li>
              <li><Link href="/guides&quot; className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors&quot;>Guides</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4&quot;>Contact</h4>
            <ul className="space-y-2&quot;>
              <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm&quot;>
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-blue-500&quot; fixedWidth />
                <a href="mailto:huzaifakarim612@gmail.com&quot; className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors&quot;>
                  huzaifakarim612@gmail.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-300 text-sm&quot;>
                <button className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors&quot;>
                  <FontAwesomeIcon icon={faTools} className="w-5 h-5 text-blue-500&quot; fixedWidth />
                  Submit a Tool
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8&quot;>
          <div className="flex flex-col md:flex-row justify-between items-center&quot;>
            <p className="text-sm text-gray-500 dark:text-gray-400&quot;>
              © {currentYear} AI Tools Directory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0&quot;>
              <Link href="/privacy&quot; className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors&quot;>
                Privacy Policy
              </Link>
              <Link href="/terms&quot; className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors&quot;>
                Terms of Service
              </Link>
              <Link href="/cookies&quot; className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors&quot;>
                Cookies
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-center md:text-left&quot;>
            <p className="text-xs text-gray-400 dark:text-gray-500&quot;>
              Made with ❤️ for the AI community | Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
