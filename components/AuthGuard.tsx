import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      const publicPaths = [&apos;/login&apos;, &apos;/signup&apos;];
      if (!publicPaths.includes(router.pathname)) {
        router.push(&apos;/login&apos;);
      }
    }
  }, [user, isLoading, router]);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;>
        <div className="text-center&quot;>
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4&quot;></div>
          <p className="text-white text-lg&quot;>Loading THE WAR ROOM...</p>
        </div>
      </div>
    );
  }

  // Show children if user is authenticated or on public pages
  const publicPaths = [&apos;/login&apos;, &apos;/signup&apos;];
  if (user || publicPaths.includes(router.pathname)) {
    return <>{children}</>;
  }

  // Redirect to login if not authenticated
  return null;
}
