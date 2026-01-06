&apos;use client&apos;;

&apos;use client&apos;;

import { useState } from &apos;react&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { faEnvelope, faUser, faCheck, faCircleExclamation } from &apos;@fortawesome/free-solid-svg-icons&apos;;

type Status = &apos;idle&apos; | &apos;loading&apos; | &apos;success&apos; | &apos;error&apos;;

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = 'Stay Updated',
  description = 'Subscribe to our newsletter for the latest AI tools and updates.',
  className = '',
}) => {
  const [email, setEmail] = useState(&apos;&apos;);
  const [name, setName] = useState(&apos;&apos;);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(&apos;loading&apos;);
    setError(&apos;&apos;);

    try {
      const response = await fetch(&apos;/api/newsletter&apos;, {
        method: &apos;POST&apos;,
        headers: {
          &apos;Content-Type&apos;: &apos;application/json&apos;,
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || &apos;Something went wrong&apos;);
      }

      setStatus(&apos;success&apos;);
      setEmail(&apos;&apos;);
      setName(&apos;&apos;);
    } catch (err) {
      setStatus(&apos;error&apos;);
      setError(err instanceof Error ? err.message : &apos;Failed to subscribe&apos;);
      console.error(&apos;Subscription error:&apos;, err);
    }
  };

  if (status === &apos;success&apos;) {
    return (
      <div className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 shadow-lg ${className}`}>
        <div className="flex items-center justify-center space-x-3 text-white&quot;>
          <FontAwesomeIcon icon={faCheck} className="w-6 h-6&quot; />
          <h3 className="text-xl font-bold&quot;>Thank you for subscribing!</h3>
        </div>
        <p className="mt-2 text-blue-100 text-center&quot;>
          We&rsquo;ve sent a confirmation email to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 md:p-8 shadow-lg ${className}`}>
      <div className="max-w-md mx-auto&quot;>
        <h3 className="text-2xl font-bold text-white mb-2&quot;>{title}</h3>
        <p className="text-blue-100 mb-6&quot;>{description}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4&quot;>
          <div className="relative&quot;>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4&quot; />
            </div>
            <input
              type="text&quot;
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)&quot;
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent&quot;
              disabled={status === &apos;loading}
            />
          </div>
          
          <div className="relative&quot;>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4&quot; />
            </div>
            <input
              type="email&quot;
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address&quot;
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent&quot;
              disabled={status === &apos;loading}
            />
          </div>
          
          <button
            type="submit&quot;
            disabled={status === 'loading'}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors&quot;
          >
            {status === &apos;loading&apos; ? &apos;Subscribing...&apos; : &apos;Subscribe&apos;}
          </button>
          
          <p className="text-xs text-blue-100 text-center&quot;>
            We respect your privacy. Unsubscribe at any time.
          </p>
          
          {status === &apos;error&apos; && (
            <div className="flex items-center justify-center space-x-2 text-red-200 text-sm&quot;>
              <FontAwesomeIcon icon={faCircleExclamation} className="w-5 h-5 text-red-500&quot; />
              <span>{error || &apos;Failed to subscribe. Please try again.&apos;}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
