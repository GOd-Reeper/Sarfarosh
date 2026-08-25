'use client';

import { useEffect, useRef } from 'react';
import styles from './MediaCollage.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MediaTile {
  id: string;
  type: 'image' | 'video';
  bgColor: string;
  gradient: string;
  gridSpan: string;
}

const mediaTiles: MediaTile[] = [
  {
    id: 'm1',
    type: 'video',
    bgColor: '#161922',
    gradient: 'linear-gradient(135deg, #1F2430 0%, #0D0F14 100%)',
    gridSpan: 'tall',
  },
  {
    id: 'm2',
    type: 'image',
    bgColor: '#211D1B',
    gradient: 'linear-gradient(135deg, #2D2724 0%, #151211 100%)',
    gridSpan: 'wide',
  },
  {
    id: 'm3',
    type: 'image',
    bgColor: '#1B211E',
    gradient: 'linear-gradient(135deg, #252F2B 0%, #111614 100%)',
    gridSpan: 'square',
  },
  {
    id: 'm4',
    type: 'video',
    bgColor: '#201A24',
    gradient: 'linear-gradient(135deg, #2C2333 0%, #130F17 100%)',
    gridSpan: 'square',
  },
  {
    id: 'm5',
    type: 'image',
    bgColor: '#1E2021',
    gradient: 'linear-gradient(135deg, #282C2E 0%, #121314 100%)',
    gridSpan: 'tall',
  },
  {
    id: 'm6',
    type: 'video',
    bgColor: '#231B19',
    gradient: 'linear-gradient(135deg, #302422 0%, #140E0D 100%)',
    gridSpan: 'wide',
  },
  {
    id: 'm7',
    type: 'image',
    bgColor: '#181A1F',
    gradient: 'linear-gradient(135deg, #21252C 0%, #0E0F12 100%)',
    gridSpan: 'square',
  },
];

export default function MediaCollage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tiles = containerRef.current.querySelectorAll(`.${styles.tile}`);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        tiles,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="secondary" padding="default">
      <Container size="wide">
        <SectionHeader
          tag="006 ● GALLERY"
          title="Moments captured in motion."
          subtitle="A full-grid visual showcase of live events, stage production, and performances."
          align="center"
        />

        <div ref={containerRef} className={styles.gridContainer}>
          {mediaTiles.map((tile) => (
            <div
              key={tile.id}
              className={`${styles.tile} ${styles[tile.gridSpan]}`}
              style={{ background: tile.gradient }}
            >
              {/* Inner Glow & Texture */}
              <div className={styles.texture} />

              {/* Minimal Video Play Icon */}
              {tile.type === 'video' && (
                <div className={styles.playIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
