import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const InfinityStream = dynamic(
  () => import('../components/InfinityStream'),
  { ssr: false }
);

// Dynamically import the CelestialNexus component with no SSR
const CelestialNexus = dynamic(
  () => import('../components/CelestialNexus'),
  { ssr: false }
);

// Dynamically import the LuminaCore component with no SSR
const LuminaCore = dynamic(
  () => import('../components/LuminaCore'),
  { ssr: false }
);

// Dynamically import the InfinityGallery component with no SSR
const InfinityGallery = dynamic(
  () => import('../components/InfinityGallery'),
  { ssr: false }
);

export default function OrbitalBlogCosmos() {
  const [isClient, setIsClient] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());
  const [activePlanet, setActivePlanet] = useState(null);
  const canvasRef = useRef(null);
  const orbitCanvasRef = useRef(null);

  const texts = [
    "Orbit Through Infinite Blogging Galaxies",
    "Navigate 100,000+ Cosmic Articles", 
    "Command the Ultimate Storytelling Engine",
    "Shape the Future of Digital Narratives"
  ];

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

  // Advanced orbital particle system
  useEffect(() => {
    if (!isClient) return; // Only run on client side
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 300;
    
    // Create orbital particles with physics
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        hue: Math.random() * 360,
        opacity: Math.random() * 0.8 + 0.2,
        orbitRadius: Math.random() * 200 + 50,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: Math.random() * 0.02 + 0.005
      });
    }
    
    let animationFrameId;
    
    const render = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update orbital motion
        particle.orbitAngle += particle.orbitSpeed;
        particle.x = canvas.width/2 + Math.cos(particle.orbitAngle) * particle.orbitRadius;
        particle.y = canvas.height/2 + Math.sin(particle.orbitAngle) * particle.orbitRadius;
        
        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 3);
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  // Orbital blog visualization
  useEffect(() => {
    if (!isClient) return; // Only run on client side
    
    const orbitCanvas = orbitCanvasRef.current;
    if (!orbitCanvas) return;
    
    const ctx = orbitCanvas.getContext('2d');
    orbitCanvas.width = 500;
    orbitCanvas.height = 500;
    
    const centerX = orbitCanvas.width / 2;
    const centerY = orbitCanvas.height / 2;
    
    // Planet data
    const planets = [
      { name: "Story", radius: 20, distance: 80, color: "#FF6B6B", speed: 0.01, articles: "15K" },
      { name: "Tech", radius: 25, distance: 130, color: "#4ECDC4", speed: 0.008, articles: "22K" },
      { name: "Life", radius: 18, distance: 180, color: "#FFE66D", speed: 0.006, articles: "18K" },
      { name: "Art", radius: 22, distance: 230, color: "#6A0572", speed: 0.004, articles: "12K" },
      { name: "Science", radius: 28, distance: 280, color: "#1A936F", speed: 0.003, articles: "25K" }
    ];
    
    let angles = planets.map(() => Math.random() * Math.PI * 2);
    
    const drawOrbit = () => {
      ctx.clearRect(0, 0, orbitCanvas.width, orbitCanvas.height);
      
      // Draw central star (blog platform)
      const starGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      starGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      starGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = starGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw orbit paths
      planets.forEach(planet => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      // Draw planets
      planets.forEach((planet, index) => {
        angles[index] += planet.speed;
        const x = centerX + Math.cos(angles[index]) * planet.distance;
        const y = centerY + Math.sin(angles[index]) * planet.distance;
        
        // Planet glow
        const planetGlow = ctx.createRadialGradient(x, y, 0, x, y, planet.radius * 2);
        planetGlow.addColorStop(0, planet.color);
        planetGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = planetGlow;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet body
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet ring for Science
        if (planet.name === "Science") {
          ctx.strokeStyle = 'rgba(63, 221, 174, 0.5)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.ellipse(x, y, planet.radius * 1.5, planet.radius * 0.3, angles[index], 0, Math.PI * 2);
          ctx.stroke();
        }
        
        // Planet label
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(planet.name, x, y + planet.radius + 20);
        ctx.font = '10px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(`${planet.articles} articles`, x, y + planet.radius + 35);
      });
      
      // Draw connections between planets
      for (let i = 0; i < planets.length; i++) {
        for (let j = i + 1; j < planets.length; j++) {
          const planet1 = planets[i];
          const planet2 = planets[j];
          const x1 = centerX + Math.cos(angles[i]) * planet1.distance;
          const y1 = centerY + Math.sin(angles[i]) * planet1.distance;
          const x2 = centerX + Math.cos(angles[j]) * planet2.distance;
          const y2 = centerY + Math.sin(angles[j]) * planet2.distance;
          
          // Draw connection line with gradient
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, planets[i].color);
          gradient.addColorStop(1, planets[j].color);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    };
    
    const interval = setInterval(drawOrbit, 50);
    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <div className="w-full relative overflow-hidden bg-black rounded-xl shadow-2xl">
      <Head>
        <title>Orbital Blog Cosmos - World's Largest Blogging Platform</title>
        <meta name="description" content="Navigate through infinite blogging galaxies with our orbital knowledge engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Orbital Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ display: isClient ? 'block' : 'none' }}
      />

      {/* Deep Space Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-radial from-black via-purple-900/5 to-black"></div>
        
        {/* Nebula effects */}
        <div 
          className="absolute w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: `${30 + Math.sin(time.getSeconds() * 0.05) * 20}%`,
            left: `${30 + Math.cos(time.getSeconds() * 0.05) * 20}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: `${70 + Math.sin(time.getSeconds() * 0.07) * 15}%`,
            right: `${30 + Math.cos(time.getSeconds() * 0.07) * 15}%`,
            animationDelay: "1s"
          }}
        ></div>
      </div>

      {/* Interactive Cursor Orbital Effect */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-radial from-blue-500/5 to-transparent pointer-events-none z-10 transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          display: isClient ? 'block' : 'none'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-4 text-center">
        {/* Orbital Portal Entrance */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Orbital rings */}
          <div 
            className="absolute w-[700px] h-[700px] rounded-full border border-blue-500/10 animate-spin-slow"
            style={{ animationDuration: "40s" }}
          ></div>
          <div 
            className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/10 animate-spin-slow"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          ></div>
          <div 
            className="absolute w-[300px] h-[300px] rounded-full border border-indigo-500/10 animate-spin-slow"
            style={{ animationDuration: "20s" }}
          ></div>
          
          {/* Central energy core */}
          <div 
            className="absolute w-48 h-48 rounded-full bg-gradient-radial from-yellow-400/20 via-orange-500/10 to-transparent animate-pulse"
            style={{
              transform: `scale(${1 + Math.sin(time.getSeconds() * 3) * 0.1})`
            }}
          ></div>
        </div>

        <main className="flex flex-col items-center justify-center w-full max-w-7xl">
          {/* Orbital Greeting */}
          <div className="mb-16 relative">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 animate-fade-in-drop-orbital">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Orbital</span> Blog <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Cosmos</span>
            </h1>
            
            <div className="h-24 md:h-32 flex items-center justify-center mb-8">
              <p className="text-4xl md:text-5xl text-gray-100 font-extralight tracking-wider animate-text-shine">
                {currentText}
                <span className="ml-2 animate-blink-orbital">|</span>
              </p>
            </div>
            
            <p className="text-2xl text-gray-200 mt-6 max-w-4xl mx-auto font-light tracking-wider">
              Navigate through{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 animate-pulse">100,000+</span>{" "}
              cosmic articles across infinite blogging galaxies
            </p>
            
            {/* Real-time cosmic clock */}
            <div className="mt-8 text-lg text-gray-400 font-mono">
              Galactic Time: {time.toLocaleTimeString()}
            </div>
          </div>

          {/* Orbital Search with Gravitational Pull */}
          <div className="w-full max-w-4xl mb-20 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition-all duration-1000 animate-gradient-shift"></div>
              <div className="relative bg-black/50 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-2 shadow-2xl">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 flex">
                    <input
                      type="text"
                      placeholder="Speak your cosmic query into the void..."
                      className="flex-1 px-8 py-6 bg-transparent text-white placeholder-gray-400 focus:outline-none text-xl font-light"
                    />
                    <button className="px-10 py-6 bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl text-white font-bold hover:from-yellow-700 hover:to-red-700 transition-all duration-500 transform hover:scale-105 shadow-2xl">
                      <span className="flex items-center">
                        <span>Search</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Powered Predictive Results */}
            <div className="absolute left-0 right-0 mt-6 bg-black/70 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-200 font-bold text-lg">Gravitational Search Suggestions</h3>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-900/50 to-red-900/50 text-yellow-300 rounded-full text-xs">Orbital AI Engine</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Best storytelling techniques for bloggers",
                  "AI tools revolutionizing content creation",
                  "How to build a loyal readership",
                  "Monetization strategies for writers",
                  "The future of digital publishing",
                  "Content marketing trends 2024"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border border-gray-700/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-3 animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orbital Blog Planets */}
          <div className="w-full mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Orbital Blogging Planets</span>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500/70 via-orange-500/70 to-red-500/70 rounded-full"></div>
            </h2>
            
            <div className="flex justify-center mb-12">
              <div className="relative">
                <canvas 
                  ref={orbitCanvasRef} 
                  className="w-96 h-96 rounded-full border border-gray-700/30"
                  style={{ display: isClient ? 'block' : 'none' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Interactive Orbital Blog Map</div>
                    <div className="text-gray-500 text-xs mt-1">Hover over planets to explore</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Story Planet", articles: "15,420", color: "from-red-500 to-red-700", icon: "📖", desc: "Narrative & Fiction" },
                { name: "Tech Planet", articles: "22,870", color: "from-blue-500 to-blue-700", icon: "💻", desc: "Technology & Innovation" },
                { name: "Life Planet", articles: "18,560", color: "from-yellow-500 to-yellow-700", icon: "🌱", desc: "Lifestyle & Wellness" },
                { name: "Art Planet", articles: "12,420", color: "from-purple-500 to-purple-700", icon: "🎨", desc: "Creativity & Design" },
                { name: "Science Planet", articles: "25,420", color: "from-green-500 to-green-700", icon: "🔬", desc: "Research & Discovery" }
              ].map((planet, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden shadow-2xl"
                  onMouseEnter={() => setActivePlanet(index)}
                  onMouseLeave={() => setActivePlanet(null)}
                >
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${planet.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto shadow-2xl border-4 border-white/10`}>
                      {planet.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{planet.name}</h3>
                    <p className="text-gray-400 mb-4">{planet.desc}</p>
                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400 animate-pulse">{planet.articles}</div>
                    
                    <div className="mt-6 flex items-center">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-yellow-500 animate-ripple"></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">Active Orbit</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lumina Core */}
          <div className="w-full py-20 relative overflow-hidden">
            <LuminaCore />
          </div>

          {/* Author Constellation */}
          <div className="w-full mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Author Constellation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Alex Morgan", articles: "1,240", followers: "45.2K", specialty: "Tech Innovation", avatar: "👨‍💻" },
                { name: "Samantha Lee", articles: "890", followers: "32.7K", specialty: "Creative Writing", avatar: "👩‍🎨" },
                { name: "Marcus Johnson", articles: "1,560", followers: "67.3K", specialty: "Business Strategy", avatar: "👨‍💼" },
                { name: "Elena Rodriguez", articles: "2,100", followers: "89.5K", specialty: "Science Communication", avatar: "👩‍🔬" }
              ].map((author, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden shadow-2xl"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center text-3xl mr-4">
                        {author.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{author.name}</h3>
                        <p className="text-gray-400 text-sm">{author.specialty}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-900/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">{author.articles}</div>
                        <div className="text-gray-400 text-sm">Articles</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">{author.followers}</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl text-white font-medium hover:from-yellow-700 hover:to-red-700 transition-all duration-300">
                      Follow Author
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Blogging Features */}
          <div className="w-full mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Galactic Blogging Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "AI Story Weaver", 
                  desc: "Transform ideas into compelling narratives with our AI-powered storytelling engine", 
                  icon: "🖋️", 
                  color: "from-blue-500 to-blue-700",
                  feature: "NEW"
                },
                { 
                  title: "Orbital Analytics", 
                  desc: "Track your content's journey through the blogging cosmos with real-time metrics", 
                  icon: "📊", 
                  color: "from-purple-500 to-purple-700",
                  feature: "PRO"
                },
                { 
                  title: "Community Constellation", 
                  desc: "Connect with fellow bloggers across the galaxy in our collaborative network", 
                  icon: "👥", 
                  color: "from-green-500 to-green-700",
                  feature: "SOCIAL"
                },
                { 
                  title: "Content Black Hole", 
                  desc: "Automatically archive and organize your content for easy retrieval", 
                  icon: "🕳️", 
                  color: "from-red-500 to-red-700",
                  feature: "STORAGE"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl shadow-xl`}>
                        {feature.icon}
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-red-600 text-white text-xs font-bold rounded-full">
                        {feature.feature}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.desc}</p>
                    <button className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl text-white font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                      Explore Feature
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Blog Timeline */}
          <div className="w-full max-w-6xl mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Cosmic Blog Timeline</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 rounded-full"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {[
                  { 
                    date: "2024", 
                    title: "Platform Launch", 
                    desc: "Orbital Blog Cosmos officially launched with 10,000 founding articles",
                    icon: "🚀",
                    side: "left"
                  },
                  { 
                    date: "2023", 
                    title: "AI Integration", 
                    desc: "Revolutionary AI writing assistant introduced to help bloggers craft better content",
                    icon: "🤖",
                    side: "right"
                  },
                  { 
                    date: "2022", 
                    title: "Community Expansion", 
                    desc: "Reached 1 million active readers across the blogging cosmos",
                    icon: "🌍",
                    side: "left"
                  },
                  { 
                    date: "2021", 
                    title: "Mobile Revolution", 
                    desc: "Launched mobile app allowing bloggers to create content from anywhere in the galaxy",
                    icon: "📱",
                    side: "right"
                  }
                ].map((event, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${event.side === "left" ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-1/2 ${event.side === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="bg-black/40 backdrop-blur-2xl border border-gray-700/30 rounded-2xl p-6 shadow-xl">
                        <div className="text-yellow-400 font-bold text-lg mb-2">{event.date}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-300">{event.desc}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-2xl shadow-xl border-4 border-black">
                      {event.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Author Constellation */}
          <div className="w-full mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Author Constellation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Alex Morgan", articles: "1,240", followers: "45.2K", specialty: "Tech Innovation", avatar: "👨‍💻" },
                { name: "Samantha Lee", articles: "890", followers: "32.7K", specialty: "Creative Writing", avatar: "👩‍🎨" },
                { name: "Marcus Johnson", articles: "1,560", followers: "67.3K", specialty: "Business Strategy", avatar: "👨‍💼" },
                { name: "Elena Rodriguez", articles: "2,100", followers: "89.5K", specialty: "Science Communication", avatar: "👩‍🔬" }
              ].map((author, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden shadow-2xl"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center text-3xl mr-4">
                        {author.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{author.name}</h3>
                        <p className="text-gray-400 text-sm">{author.specialty}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-900/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">{author.articles}</div>
                        <div className="text-gray-400 text-sm">Articles</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400">{author.followers}</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-yellow-600 to-red-600 rounded-xl text-white font-medium hover:from-yellow-700 hover:to-red-700 transition-all duration-300">
                      Follow Author
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orbital Call to Action */}
          <div className="w-full max-w-6xl mb-20 text-center">
            <div className="bg-gradient-to-r from-yellow-900/10 via-orange-900/10 to-red-900/10 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSIxMCUiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iOTAlIiBjeT0iNTAlIiByPSIzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI5MCUiIHI9IjEiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-5xl font-black text-white mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Ready to Chart Your Course Through the Blogging Cosmos?
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
                  Join 10 million explorers in the world's most advanced orbital blogging platform
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-12 py-5 bg-gradient-to-r from-yellow-600 to-red-600 rounded-2xl text-white font-bold text-xl hover:from-yellow-700 hover:to-red-700 transition-all duration-500 transform hover:scale-110 shadow-2xl border-2 border-yellow-500/30">
                    Begin Your Orbital Journey
                  </button>
                  <button className="px-12 py-5 bg-transparent border-2 border-gray-600 rounded-2xl text-white font-bold text-xl hover:border-white transition-all duration-500 transform hover:scale-110 backdrop-blur-xl">
                    Explore the Article Archive
                  </button>
                </div>
                
                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  {[
                    { name: "World's #1 Blogging Platform", icon: "🏆" },
                    { name: "100,000+ Cosmic Articles", icon: "📚" },
                    { name: "10M+ Active Readers", icon: "👥" },
                    { name: "5 Major Blogging Planets", icon: "🪐" }
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center bg-black/30 backdrop-blur-xl px-6 py-3 rounded-full border border-gray-700/30">
                      <span className="text-2xl mr-3">{badge.icon}</span>
                      <span className="text-gray-300 font-medium">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Add the InfinityStream component */}
          <InfinityStream />
        </main>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fade-in-drop-orbital {
          from { 
            opacity: 0; 
            transform: translateY(-50px) rotate(5deg);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotate(0);
          }
        }
        
        @keyframes text-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes blink-orbital {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-fade-in-drop-orbital {
          animation: fade-in-drop-orbital 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }
        
        .animate-text-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .animate-blink-orbital {
          animation: blink-orbital 0.6s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
        }
        
        .animate-ripple {
          animation: ripple 2s infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
      `}</style>
      
      {/* Infinity Gallery */}
      <div className="w-full py-20">
        <InfinityGallery />
      </div>
    </div>
  );
}