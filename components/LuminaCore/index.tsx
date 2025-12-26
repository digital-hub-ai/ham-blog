'use client';

import { useEffect, useRef } from 'react';
import styles from './LuminaCore.module.css';

const LuminaCore = () => {
  const crystalRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!crystalRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      crystalRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const createParticles = () => {
      if (!particlesRef.current) return;
      
      particlesRef.current.innerHTML = '';
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 4;
        
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${posX}%;
          top: ${posY}%;
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
          background: ${i % 3 === 0 
            ? 'rgba(0, 243, 255, 0.8)' 
            : i % 3 === 1 
              ? 'rgba(157, 78, 221, 0.8)' 
              : 'rgba(255, 255, 0, 0.8)'
          };
        `;
        
        particlesRef.current.appendChild(particle);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    createParticles();

    const resizeObserver = new ResizeObserver(createParticles);
    if (particlesRef.current) {
      resizeObserver.observe(particlesRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.luminaCore}>
      <div className={styles.crystalContainer} ref={crystalRef}>
        <div className={styles.crystal}>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
          <div className={styles.crystalFace}></div>
        </div>
      </div>
      <div className={styles.particles} ref={particlesRef}></div>
      <div className={styles.glow}></div>
    </div>
  );
};

export default LuminaCore;
