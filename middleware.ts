import { NextResponse } from &apos;next/server&apos;;
import type { NextRequest } from &apos;next/server&apos;;
import { corsMiddleware } from &apos;@/lib/cors&apos;;

// Rate limiting configuration
const RATE_LIMIT = 100; // Default requests per window
const AUTH_RATE_LIMIT = 5; // Stricter limit for auth endpoints
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Rate limit store interface
interface RateLimitInfo {
  count: number;
  resetTime: number;
  blockedUntil?: number;
}

// Simple in-memory store for rate limiting (consider Redis for production)
const rateLimits = new Map<string, RateLimitInfo>();

// Paths that should have stricter rate limiting
const STRICT_PATHS = [
  '/api/auth/signin',
  '/api/auth/signup',
  '/api/auth/2fa/verify',
  '/api/auth/2fa/setup',
  '/api/auth/2fa/disable',
  '/api/auth/2fa/login-verify'
];

// CSRF token validation
function validateCsrfToken(request: NextRequest): boolean {
  // Skip CSRF for GET/HEAD/OPTIONS requests
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return true;
  }

  // Skip CSRF for public endpoints
  const { pathname } = request.nextUrl;
  if (pathname.endsWith('/login') || pathname.endsWith('/signup')) {
    return true;
  }

  // Get CSRF token from header or form data
  const csrfToken = request.headers.get('x-csrf-token') || 
                   (request.headers.get('content-type')?.includes('application/json') 
                     ? (request.json() as any)?._csrf 
                     : null);

  // In a real app, you would validate this token against the one in the session
  // For simplicity, we'll just check if it exists
  return !!csrfToken;
}

export async function middleware(request: NextRequest) {
  // Handle CORS first
  const corsResponse = corsMiddleware(request);
  if (corsResponse) {
    return corsResponse;
  }

  const { pathname } = request.nextUrl;
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Clean up old rate limit entries
  rateLimits.forEach((value, key) => {
    if (value.resetTime < windowStart) {
      rateLimits.delete(key);
    }
  });

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api/')) {
    const isStrictPath = STRICT_PATHS.some(path => pathname.startsWith(path));
    const limit = isStrictPath ? AUTH_RATE_LIMIT : RATE_LIMIT;
    const rateLimitKey = isStrictPath ? `strict:${ip}` : `api:${ip}`;
    
    // Check if IP is blocked
    const blockedInfo = rateLimits.get(`blocked:${ip}`);
    if (blockedInfo && blockedInfo.blockedUntil && blockedInfo.blockedUntil > now) {
      const retryAfter = Math.ceil((blockedInfo.blockedUntil - now) / 1000);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Too many requests',
          message: `Rate limit exceeded. Please try again in ${retryAfter} seconds.`
        }), 
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': retryAfter.toString()
          }
        }
      );
    }
    // Get or initialize rate limit info
    const rateLimitInfo = rateLimits.get(rateLimitKey) || { 
      count: 0, 
      resetTime: now + RATE_LIMIT_WINDOW_MS 
    };

    // Check if window has passed, reset count if needed
    if (now > rateLimitInfo.resetTime) {
      rateLimitInfo.count = 0;
      rateLimitInfo.resetTime = now + RATE_LIMIT_WINDOW_MS;
    }

    // Increment request count
    rateLimitInfo.count += 1;
    rateLimits.set(rateLimitKey, rateLimitInfo);

    // Calculate remaining requests and reset time
    const remaining = Math.max(0, limit - rateLimitInfo.count);
    const resetTime = Math.ceil(rateLimitInfo.resetTime / 1000);

    // Create response object
    const response = NextResponse.next();
    
    // Set rate limit headers
    response.headers.set('X-RateLimit-Limit', limit.toString());
    response.headers.set('X-RateLimit-Remaining', remaining.toString());
    response.headers.set('X-RateLimit-Reset', resetTime.toString());

    // Check if rate limit exceeded
    if (rateLimitInfo.count > limit) {
      // Block IP for 1 hour if too many auth attempts
      if (isStrictPath) {
        rateLimits.set(`blocked:${ip}`, {
          count: 0,
          resetTime: 0,
          blockedUntil: now + (60 * 60 * 1000) // 1 hour block
        });
      }
      
      return new NextResponse(
        JSON.stringify({ 
          error: &apos;Too many requests&apos;,
          message: isStrictPath 
            ? &apos;Too many login attempts. Please try again later.&apos;
            : &apos;Rate limit exceeded. Please try again later.&apos;
        }), 
        { 
          status: 429,
          headers: { 
            &apos;Content-Type&apos;: &apos;application/json&apos;,
            &apos;Retry-After&apos;: isStrictPath ? &apos;3600&apos; : &apos;900&apos;,
            &apos;X-RateLimit-Limit&apos;: limit.toString(),
            &apos;X-RateLimit-Remaining&apos;: &apos;0&apos;,
            &apos;X-RateLimit-Reset&apos;: resetTime.toString()
          }
        }
      );
    }

    return response;
  }

  // Apply CSRF protection to non-GET API routes
  if (pathname.startsWith(&apos;/api/&apos;) && request.method !== &apos;GET&apos;) {
    if (!validateCsrfToken(request)) {
      return new NextResponse(
        JSON.stringify({ error: &apos;Invalid CSRF token&apos; }),
        { status: 403, headers: { &apos;Content-Type&apos;: &apos;application/json&apos; } }
      );
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set(&apos;X-Content-Type-Options&apos;, &apos;nosniff&apos;);
  response.headers.set(&apos;X-Frame-Options&apos;, &apos;DENY&apos;);
  response.headers.set(&apos;X-XSS-Protection&apos;, &apos;1; mode=block&apos;);
  response.headers.set(&apos;Referrer-Policy&apos;, &apos;strict-origin-when-cross-origin&apos;);
  
  // CSP Header - adjust based on your needs
  response.headers.set(
    &apos;Content-Security-Policy&apos;,
    &quot;default-src &apos;self&apos;; script-src &apos;self&apos; &apos;unsafe-inline&apos; &apos;unsafe-eval&apos;; style-src &apos;self&apos; &apos;unsafe-inline&apos;; img-src &apos;self&apos; data:; font-src &apos;self&apos;; connect-src &apos;self&apos;;&quot;
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    &apos;/((?!_next/static|_next/image|favicon.ico|public/).*)&apos;,
  ],
};
