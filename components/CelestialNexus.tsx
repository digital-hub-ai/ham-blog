'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/CelestialNexus.module.css';

const CelestialNexus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const jewelRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse proximity effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (!jewelRef.current) return;
      
      const jewel = jewelRef.current.getBoundingClientRect();
      const jewelCenterX = jewel.left + jewel.width / 2;
      const jewelCenterY = jewel.top + jewel.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - jewelCenterX, 2) + 
        Math.pow(e.clientY - jewelCenterY, 2)
      );

      setIsHovered(distance < 100 && !isActive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Calculate 3D tilt effect based on mouse position
  const calculateTilt = () => {
    if (!jewelRef.current || !isHovered) return {};
    
    const jewel = jewelRef.current.getBoundingClientRect();
    const jewelCenterX = jewel.left + jewel.width / 2;
    const jewelCenterY = jewel.top + jewel.height / 2;
    
    const x = (mousePosition.x - jewelCenterX) / 20;
    const y = (jewelCenterY - mousePosition.y) / 20;
    
    return {
      transform: `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(${isHovered ? 1.1 : 1})`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div 
      ref={jewelRef}
      className={`${styles.jewel} ${isHovered ? styles.hovered : ''} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
      style={calculateTilt()}
    >
      <div className={styles.nexusContent}>
        <button 
          className={styles.closeButton}
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(false);
          }}
        >
          ×
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Celestial Nexus
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">AI Concierge</h3>
              <p className="text-sm text-gray-300 mb-3">How may I assist your discovery?</p>
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-blue-600/50 hover:bg-blue-600/70 rounded-lg text-sm transition-colors">
                  Find Tools
                </button>
                <button className="px-3 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg text-sm transition-colors">
                  Compare
                </button>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Market Insights</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400">GPT-5 Adoption</span>
                  <span className="text-green-400">+300%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-xs text-gray-400">Based on 1.2M+ data points</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl">
                  ✨
                </div>
                <div>
                  <h3 className="font-semibold">Exclusive Feature</h3>
                  <p className="text-sm text-gray-300">Try our new AI Tool Finder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelestialNexus;
