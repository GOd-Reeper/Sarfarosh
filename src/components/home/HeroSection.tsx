'use client';

import styles from './HeroSection.module.css';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <FadeInOnScroll>
            <p className={styles.eyebrow}>
              Events &nbsp;·&nbsp; Experiences &nbsp;·&nbsp; Production &nbsp;·&nbsp; Entertainment
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <h1 className={styles.heading}>
              We create experiences
              <br />
              <span className={styles.headingMuted}>that move people.</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <p className={styles.sub}>
              Sarfarosh is an event management and production company built on a
              foundation of performing arts — delivering events, activations, and
              live entertainment from concept to execution.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3}>
            <div className={styles.actions}>
              <Button href="/work" variant="primary" size="large" arrow>
                Explore Our Work
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                Plan an Event
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </section>
  );
}
