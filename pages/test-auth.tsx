import { useAuth } from '../contexts/MockAuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function TestAuth() {
  const { user, isAuthenticated, login } = useAuth();
  const router = useRouter();

  // Auto-login on page load
  useEffect(() => {
    login();
  }, [login]);

  const containerStyle = {
    maxWidth: &apos;800px&apos;,
    margin: &apos;50px auto&apos;,
    padding: &apos;20px&apos;,
    fontFamily: &apos;Arial, sans-serif&apos;,
    lineHeight: &apos;1.6&apos;
  };

  const infoBoxStyle = {
    marginTop: &apos;30px&apos;,
    padding: &apos;20px&apos;,
    border: &apos;1px solid #ddd&apos;,
    borderRadius: &apos;8px&apos;,
    backgroundColor: &apos;#f9f9f9&apos;
  };

  const buttonStyle = {
    padding: &apos;10px 15px&apos;,
    backgroundColor: &apos;#0070f3&apos;,
    color: &apos;white&apos;,
    border: &apos;none&apos;,
    borderRadius: &apos;4px&apos;,
    cursor: &apos;pointer&apos;,
    marginRight: &apos;10px&apos;
  };

  return (
    <div style={containerStyle}>
      <h1>Authentication Test Page</h1>
      
      <div style={infoBoxStyle}>
        <h2>User Information</h2>
        {isAuthenticated ? (
          <div>
            <p><strong>Status:</strong> <span style={{color: 'green'}}>Authenticated</span></p>
            <p><strong>Name:</strong> {user?.name || &apos;N/A&apos;}</p>
            <p><strong>Email:</strong> {user?.email || &apos;N/A&apos;}</p>
            <p><strong>User ID:</strong> {user?.id || &apos;N/A&apos;}</p>
          </div>
        ) : (
          <p>Not authenticated</p>
        )}
      </div>

      <div style={{marginTop: '30px'}}>
        <h3>Test Navigation</h3>
        <p>Try navigating to other pages - the authentication state will be maintained.</p>
        <button 
          onClick={() => router.push('/')}
          style={buttonStyle}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
