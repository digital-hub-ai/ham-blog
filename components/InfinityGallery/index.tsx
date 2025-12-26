'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './InfinityGallery.module.css';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'showcase' | 'insights' | 'comparison' | 'discovery';
  // Add more specific types as needed
}

const InfinityGallery = () => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample data - replace with your actual data
  const segments: ContentItem[] = [
    {
      id: 'museum',
      title: 'AI Tools of Extraordinary Caliber',
      description: 'Curated excellence, presented with uncompromising beauty',
      type: 'showcase'
    },
    {
      id: 'comparison',
      title: 'The Grand Comparison',
      description: 'An interactive symphony of data and insight',
      type: 'comparison'
    },
    {
      id: 'library',
      title: 'The Library of AI Excellence',
      description: 'Knowledge presented as art',
      type: 'insights'
    },
    {
      id: 'starfield',
      title: 'Navigate the AI Cosmos',
      description: 'Every star is a tool, every constellation a category',
      type: 'discovery'
    }
  ];

  // Handle scroll and intersection for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSegment(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-segment]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const renderSegment = (segment: ContentItem) => {
    switch (segment.type) {
      case 'showcase':
        return (
          <div className={styles.segment} id={segment.id} data-segment>
            <div className={styles.museumSegment}>
              <div className={styles.segmentHeader}>
                <span className={styles.luxuryBadge}>✨ PREMIUM SPOTLIGHT</span>
                <h2>{segment.title}</h2>
                <p>{segment.description}</p>
              </div>
              {/* Museum content will go here */}
            </div>
          </div>
        );
      case 'comparison':
        return (
          <div className={styles.segment} id={segment.id} data-segment>
            <div className={styles.comparisonSegment}>
              <div className={styles.segmentHeader}>
                <span className={styles.luxuryBadge}>🔬 PRECISION ANALYSIS</span>
                <h2>{segment.title}</h2>
                <p>{segment.description}</p>
              </div>
              {/* Comparison content will go here */}
            </div>
          </div>
        );
      case 'insights':
        return (
          <div className={styles.segment} id={segment.id} data-segment>
            <div className={styles.librarySegment}>
              <div className={styles.segmentHeader}>
                <span className={styles.luxuryBadge}>📚 CURATED WISDOM</span>
                <h2>{segment.title}</h2>
                <p>{segment.description}</p>
              </div>
              {/* Library content will go here */}
            </div>
          </div>
        );
      case 'discovery':
        return (
          <div className={styles.segment} id={segment.id} data-segment>
            <div className={styles.starfieldSegment}>
              <div className={styles.segmentHeader}>
                <span className={styles.luxuryBadge}>🌌 INFINITE DISCOVERY</span>
                <h2>{segment.title}</h2>
                <p>{segment.description}</p>
              </div>
              {/* Starfield content will go here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderConnector = (index: number) => {
    if (index === segments.length - 1) return null;
    return (
      <div className={styles.ribbonConnector}>
        <div className={styles.connectorLine}></div>
        <div className={styles.connectorOrnament}>✦</div>
      </div>
    );
  };

  return (
    <section className={styles.infinityGallery} ref={containerRef}>
      {segments.map((segment, index) => (
        <div key={segment.id} className={styles.segmentWrapper}>
          {renderSegment(segment)}
          {renderConnector(index)}
        </div>
      ))}
    </section>
  );
};

export default InfinityGallery;
