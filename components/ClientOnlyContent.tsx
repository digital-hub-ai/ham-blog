import { useEffect, useState } from 'react';

const ClientOnlyContent = () => {
  const [currentText, setCurrentText] = useState(&quot;&quot;);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(150);
  const [time, setTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePlanet, setActivePlanet] = useState(null);

  const texts = [
    &quot;Orbit Through Infinite Blogging Galaxies&quot;,
    &quot;Navigate 100,000+ Cosmic Articles&quot;, 
    &quot;Command the Ultimate Storytelling Engine&quot;,
    &quot;Shape the Future of Digital Narratives&quot;
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener(&quot;mousemove&quot;, handleMouseMove);
    return () => window.removeEventListener(&quot;mousemove&quot;, handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, isDeleting ? typingSpeed / 2 : typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

  return (
    <div className="text-center mb-12&quot;>
      <h1 className="text-5xl font-bold mb-4&quot;>Orbital Blog Cosmos</h1>
      <p className="text-xl text-gray-300 mb-2&quot;>{currentText}</p>
      <p className="text-sm text-gray-500&quot;>
        Galactic Time: {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ClientOnlyContent;
