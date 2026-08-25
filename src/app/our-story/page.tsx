'use client';

import { useState } from 'react';
import styles from './our-story.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const storyChapters = [
  {
    chapter: '01',
    yearRange: '2015 – 2017',
    title: 'The Street Roots & Theater Movement',
    location: 'Indore, Madhya Pradesh',
    text: 'Sarfarosh began in 2015 as a passionate collective of street dancers, theater performers, and creative visionaries in Indore. We started with unannounced flash mobs, street drama, and college festival takeovers — discovering that live performance holds an extraordinary power to stop people in their tracks and create spontaneous community.',
    imageAspect: 'wide',
    bgColor: '#1A1C23',
    caption: 'Photo Archive 2015 — Early Street Performances & Creative Collective',
  },
  {
    chapter: '02',
    yearRange: '2018 – 2020',
    title: 'Building technical depth & show production',
    location: 'Central India',
    text: 'Recognizing that great artistic ideas need military-grade logistics to succeed, Sarfarosh invested heavily in technical stage infrastructure, sound engineering, artist management, and venue planning. We transitioned from performers to a complete event management and production agency, executing our first retail launches and corporate annual meets.',
    imageAspect: 'twoGrid',
    bgColor: '#1D1E22',
    caption: 'Photo Archive 2019 — First Corporate Mainstage & Lighting Rigs',
  },
  {
    chapter: '03',
    yearRange: '2021 – 2023',
    title: 'The Cultural Movement: MP09 City Anthem',
    location: 'Indore Arena & Digital Channels',
    text: 'In 2023, Sarfarosh produced the landmark MP09 Indore City Anthem event — a celebration of city pride that brought together civic leaders, regional music icons, and over 12,000 live audience members. The resulting content generated over 10 Million views across platforms, cementing Sarfarosh as a premier creator of cultural event IPs.',
    imageAspect: 'heroBanner',
    bgColor: '#14161B',
    caption: 'Photo Archive 2023 — MP09 Live Arena Concert & 12K+ Crowd',
  },
  {
    chapter: '04',
    yearRange: '2024 – 2025',
    title: 'Statewide summits & brand activation scale',
    location: 'Pan-India Footprint',
    text: 'Today, Sarfarosh operates with a network of 300+ on-ground crew members, executing multi-city brand drives for INOX, Chai Sutta Bar, Treasure Island, Marks & Spencer, and government cultural summits. Whether it’s a 60,000-person weekend festival or an exclusive executive conclave, our performance heritage ensures every detail resonates.',
    imageAspect: 'masonry',
    bgColor: '#18191E',
    caption: 'Photo Archive 2024 — Statewide Festival & Retail Brand Activations',
  },
];

export default function OurStoryPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className={styles.wrapper}>
      {/* ── HERO SECTION ── */}
      <Section background="primary" padding="default">
        <Container size="wide">
          <FadeInOnScroll>
            <div className={styles.heroContent}>
              <Tag variant="default" className={styles.heroTag}>001 ● OUR ARCHIVE (2015 – PRESENT)</Tag>
              
              <h1 className={styles.heroTitle}>
                A decade of live storytelling,
                <br />
                <span className={styles.heroTitleMuted}>performance energy, and production mastery.</span>
              </h1>

              <p className={styles.heroSub}>
                Founded in 2015 in Indore. Built by artists, show directors, and logistics visionaries
                who turned a street-performance movement into one of MP’s leading event management powerhouses.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statVal}>2015</div>
              <div className={styles.statLabel}>Founded in Indore</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>150+</div>
              <div className={styles.statLabel}>Events Executed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>60K+</div>
              <div className={styles.statLabel}>Max Festival Audience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statVal}>300+</div>
              <div className={styles.statLabel}>On-Ground Crew</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CHAPTER BY CHAPTER CHRONOLOGY (LARGE SCROLLABLE) ── */}
      <Section background="secondary" padding="default">
        <Container size="wide">
          <SectionHeader
            tag="002 ● CHRONOLOGY"
            title="The Journey: From 2015 to Present."
            subtitle="Explore how Sarfarosh evolved chapter by chapter."
            align="center"
          />

          <div className={styles.chaptersList}>
            {storyChapters.map((ch, idx) => (
              <FadeInOnScroll key={ch.chapter} delay={0.05}>
                <div className={styles.chapterCard}>
                  
                  {/* Chapter Header */}
                  <div className={styles.chapterTop}>
                    <div className={styles.chMeta}>
                      <span className={styles.chNumber}>Chapter {ch.chapter}</span>
                      <span className={styles.chDot}>•</span>
                      <span className={styles.chYears}>{ch.yearRange}</span>
                    </div>
                    <div className={styles.chLocation}>{ch.location}</div>
                  </div>

                  {/* Title & Narrative */}
                  <h2 className={styles.chTitle}>{ch.title}</h2>
                  <p className={styles.chText}>{ch.text}</p>

                  {/* Rectangular Image Placeholder Box */}
                  <div className={styles.imagePlaceholderBox} style={{ backgroundColor: ch.bgColor }}>
                    <div className={styles.placeholderOverlayGlow} />
                    
                    <div className={styles.placeholderCenterContent}>
                      <div className={styles.cameraIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="4" />
                          <circle cx="12" cy="12" r="4" />
                          <line x1="8" y1="7" x2="8.01" y2="7" strokeWidth="3" />
                        </svg>
                      </div>
                      <span className={styles.placeholderLabel}>{ch.caption}</span>
                    </div>
                  </div>

                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── PRODUCTION PHILOSOPHY PILLARS ── */}
      <Section background="primary" padding="default">
        <Container size="wide">
          <SectionHeader
            tag="003 ● PHILOSOPHY"
            title="Why Sarfarosh operates differently."
            subtitle="The three pillars that define every event we produce."
            align="center"
          />

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pTag}>01 ● ARTISTRY</div>
              <h3 className={styles.pTitle}>Performers at Heart</h3>
              <p className={styles.pDesc}>
                Because our roots are in live theater and street performance, we build events from the audience’s emotional perspective — crafting rhythm, energy, and engagement.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pTag}>02 ● LOGISTICS</div>
              <h3 className={styles.pTitle}>Zero-Friction Operations</h3>
              <p className={styles.pDesc}>
                From crowd safety and VIP protocols to multi-rig stage engineering, our team handles behind-the-scenes precision so production flows seamlessly.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pTag}>03 ● IMPACT</div>
              <h3 className={styles.pTitle}>Cultural Resonance</h3>
              <p className={styles.pDesc}>
                We don’t just host events — we create cultural moments that generate social impressions, press coverage, and lasting brand loyalty.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── NEWSLETTER DISPATCH PLACEHOLDER CARD ── */}
      <Section background="secondary" padding="default">
        <Container size="wide">
          <div className={styles.newsletterCard}>
            <div className={styles.nlTag}>SARFAROSH DISPATCH</div>
            <h2 className={styles.nlTitle}>Behind the Stage Insights.</h2>
            <p className={styles.nlSub}>
              Subscribe to receive quarterly event production breakdowns, behind-the-scenes case studies, and creative direction notes.
            </p>

            {subscribed ? (
              <div className={styles.nlSuccess}>
                <span>✓ You are subscribed to Sarfarosh Dispatch!</span>
              </div>
            ) : (
              <form className={styles.nlForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.nlInput}
                />
                <button type="submit" className={styles.nlBtn}>
                  <span>Subscribe</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
