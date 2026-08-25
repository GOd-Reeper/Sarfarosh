'use client';

import styles from './StoryTeaser.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

export default function StoryTeaser() {
  return (
    <Section background="secondary" padding="default">
      <Container>
        <FadeInOnScroll>
          <div className={styles.inner}>
            <div className={styles.label}>Our Story</div>
            <h2 className={styles.heading}>
              From performance
              <br />
              to production.
            </h2>
            <p className={styles.body}>
              Sarfarosh started with performing arts — nukkad theatre, music,
              dance, and flash mobs. That foundation in live performance, public
              engagement, and creative storytelling is now the engine behind a
              full-service event management and production company.
            </p>
            <Button href="/our-story" variant="primary" arrow>
              Discover Our Story
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
