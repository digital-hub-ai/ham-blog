'use client';

import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    try {
      // Check if adsbygoogle script is already loaded
      if (typeof (window as any).adsbygoogle === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
      
      // Initialize ads (optional - only if you have specific ad units)
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default AdSense;