'use client';

import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    try {
      // Check if adsbygoogle script is already loaded
      if (typeof (window as any).adsbygoogle === &apos;undefined&apos;) {
        const script = document.createElement(&apos;script&apos;);
        script.src = &apos;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js&apos;;
        script.async = true;
        script.crossOrigin = &apos;anonymous&apos;;
        document.head.appendChild(script);
      }
      
      // Initialize ads (optional - only if you have specific ad units)
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(&apos;AdSense initialization error:&apos;, error);
    }
  }, []);

  return null; // This component doesn&apos;t render anything visible
};

export default AdSense;