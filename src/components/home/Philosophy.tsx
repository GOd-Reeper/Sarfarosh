'use client';

import styles from './Philosophy.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

export default function Philosophy() {
  return (
    <Section background="primary">
      <Container>
        <div className={styles.layout}>
          <FadeInOnScroll>
            <div className={styles.text}>
              <h2 className={styles.heading}>
                We don&apos;t just organize events.
                <br />
                <span className={styles.headingAccent}>
                  We design experiences.
                </span>
              </h2>
              <p className={styles.body}>
                Every event starts with an idea. We bring creative thinking,
                live performance, production expertise, and on-ground execution
                together to turn that idea into something people feel, remember,
                and talk about.
              </p>
              <p className={styles.body}>
                Our roots in performing arts give us an edge — we understand
                audiences, energy, timing, and the difference between an event
                that happens and an experience that moves.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.15}>
            <div className={styles.visual}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardTitle}>Performance DNA</h4>
                  <p className={styles.cardDesc}>Built from live performing arts — we understand audience energy.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardTitle}>324+ Strong</h4>
                  <p className={styles.cardDesc}>Performers, artists, crew, and creative minds — ready to execute.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.cardTitle}>Concept to Execution</h4>
                  <p className={styles.cardDesc}>Creative, production, logistics, and live ops — all under one roof.</p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </Section>
  );
}
