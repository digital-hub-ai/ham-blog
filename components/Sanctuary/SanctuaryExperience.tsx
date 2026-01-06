// components/Sanctuary/SanctuaryExperience.tsx
&apos;use client&apos;;

import { useState, useEffect } from &apos;react&apos;;
import { useFavorites } from &apos;../../hooks/useFavorites&apos;;
import UniverseCanvas from &apos;./UniverseCanvas&apos;;
import FocusCrystal from &apos;./FocusCrystal&apos;;
import DigitalGardener from &apos;./DigitalGardener&apos;;
import TemporalView from &apos;./TemporalView&apos;;

type FocusMode = &apos;exploration&apos; | &apos;analysis&apos; | &apos;presentation&apos; | &apos;zen&apos;;
type CollectionMood = &apos;productive&apos; | &apos;creative&apos; | &apos;research&apos;;

interface SanctuarySettings {
  mood: CollectionMood;
  focusMode: FocusMode;
  orbStyle: &apos;crystal&apos; | &apos;sphere&apos; | &apos;minimal&apos;;
  animationIntensity: number;
  soundEnabled: boolean;
}

export default function SanctuaryExperience() {
  const { favorites } = useFavorites();
  const [settings, setSettings] = useState<SanctuarySettings>({
    mood: 'productive',
    focusMode: 'exploration',
    orbStyle: 'crystal',
    animationIntensity: 0.7,
    soundEnabled: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  // Detect collection mood based on tool composition
  const detectCollectionMood = (): CollectionMood => {
    if (favorites.length === 0) return 'productive';
    
    // In a real implementation, this would analyze the actual tools
    const aiTools = favorites.filter(() => Math.random() > 0.6).length;
    const designTools = favorites.filter(() => Math.random() > 0.7).length;
    const devTools = favorites.filter(() => Math.random() > 0.5).length;
    
    if (aiTools > designTools && aiTools > devTools) return 'research';
    if (designTools > aiTools && designTools > devTools) return 'creative';
    return 'productive';
  };

  // Auto-detect mood when collection changes
  useEffect(() => {
    const detectedMood = detectCollectionMood();
    setSettings(prev => ({ ...prev, mood: detectedMood }));
  }, [favorites]);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (favorites.length === 0) {
        setShowWelcome(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [favorites]);

  // Loading screen
  if (isLoading) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center&quot;>
        <div className="text-center&quot;>
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4&quot; />
          <h2 className="text-2xl font-bold text-white mb-2&quot;>Generating Your Universe</h2>
          <p className="text-purple-200&quot;>Creating your personal digital sanctuary...</p>
        </div>
      </div>
    );
  }

  // Welcome overlay for new users
  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-8&quot;>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-2xl w-full p-8 text-white&quot;>
          <div className="text-center mb-8&quot;>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center&quot;>
              <svg className="w-10 h-10&quot; fill="none&quot; stroke="currentColor&quot; viewBox="0 0 24 24&quot;>
                <path strokeLinecap="round&quot; strokeLinejoin="round&quot; strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4&quot;>Welcome to Your Sanctuary</h1>
            <p className="text-purple-200 mb-8&quot;>
              Your personal digital universe awaits. This is where your favorite tools become living stars in your constellation of productivity.
            </p>
          </div>

          <div className="space-y-6 mb-8&quot;>
            <div className="flex items-start gap-4&quot;>
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;>
                <span className="text-sm&quot;>1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1&quot;>Explore Your Universe</h3>
                <p className="text-sm text-purple-200&quot;>Navigate your 3D space and watch your tools orbit in beautiful constellations</p>
              </div>
            </div>

            <div className="flex items-start gap-4&quot;>
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;>
                <span className="text-sm&quot;>2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1&quot;>Meet Your Digital Gardener</h3>
                <p className="text-sm text-purple-200&quot;>Your AI assistant will help optimize and organize your collection</p>
              </div>
            </div>

            <div className="flex items-start gap-4&quot;>
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;>
                <span className="text-sm&quot;>3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1&quot;>Travel Through Time</h3>
                <p className="text-sm text-purple-200&quot;>Watch your sanctuary evolve and grow over time</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4&quot;>
            <button
              onClick={() => setShowWelcome(false)}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all font-medium&quot;
            >
              Enter Sanctuary
            </button>
            <button
              onClick={() => window.location.href = &apos;/}
              className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all font-medium&quot;
            >
              Explore Tools First
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden&quot;>
      {/* 3D Universe Canvas */}
      <UniverseCanvas />
      
      {/* Focus Crystal - Central Control */}
      <FocusCrystal />
      
      {/* Digital Gardener AI Assistant */}
      <DigitalGardener />
      
      {/* Temporal View - Timeline Navigation */}
      <TemporalView />
      
      {/* Settings Panel */}
      <div className="fixed top-4 right-4 z-30&quot;>
        <button
          onClick={() => {/* Open settings */}}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors&quot;
        >
          <svg className="w-5 h-5&quot; fill="none&quot; stroke="currentColor&quot; viewBox="0 0 24 24&quot;>
            <path strokeLinecap="round&quot; strokeLinejoin="round&quot; strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot; />
            <path strokeLinecap="round&quot; strokeLinejoin="round&quot; strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />
          </svg>
        </button>
      </div>

      {/* Focus Mode Indicator */}
      <div className="fixed top-4 left-4 z-30&quot;>
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 px-4 py-2 text-white&quot;>
          <div className="flex items-center gap-2&quot;>
            <div className={`
              w-2 h-2 rounded-full
              ${settings.focusMode === &apos;exploration&apos; ? &apos;bg-blue-400&apos; : &apos;&apos;}
              ${settings.focusMode === &apos;analysis&apos; ? &apos;bg-purple-400&apos; : &apos;&apos;}
              ${settings.focusMode === &apos;presentation&apos; ? &apos;bg-green-400&apos; : &apos;&apos;}
              ${settings.focusMode === &apos;zen&apos; ? &apos;bg-gray-400&apos; : &apos;}
            `} />
            <span className="text-sm font-medium capitalize&quot;>{settings.focusMode} Mode</span>
          </div>
        </div>
      </div>

      {/* Collection Mood Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30&quot;>
        <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-6 py-2 text-white&quot;>
          <div className="flex items-center gap-2&quot;>
            <span className="text-sm capitalize&quot;>{settings.mood} Atmosphere</span>
            <div className="flex gap-1&quot;>
              {[&apos;productive&apos;, &apos;creative&apos;, &apos;research&apos;].map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSettings(prev => ({ ...prev, mood: mood as CollectionMood }))}
                  className={`
                    w-2 h-2 rounded-full transition-all
                    ${settings.mood === mood ? &apos;ring-2 ring-white ring-offset-2 ring-offset-transparent&apos; : &apos;&apos;}
                    ${mood === &apos;productive&apos; ? &apos;bg-blue-400&apos; : &apos;&apos;}
                    ${mood === &apos;creative&apos; ? &apos;bg-pink-400&apos; : &apos;&apos;}
                    ${mood === &apos;research&apos; ? &apos;bg-cyan-400&apos; : &apos;}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      <div className="fixed bottom-4 right-4 z-30&quot;>
        <button
          onClick={() => {/* Show shortcuts */}}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors&quot;
          title="Keyboard Shortcuts (Press ?)&quot;
        >
          <span className="text-sm font-medium&quot;>?</span>
        </button>
      </div>
    </div>
  );
}
