'use client';

import { useState, useCallback } from 'react';
import styles from './FeaturedWork.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { projects } from '@/data/siteData';

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  return (
    <Section background="primary" padding="default" className={styles.sectionOverride}>
      <Container size="wide">
        <FadeInOnScroll>
          <SectionHeader
            tag="005 ● CASE STUDIES"
            title="Projects that speak for themselves."
            subtitle="From government programs to brand activations — a selection of events we've brought to life."
            align="center"
          />
        </FadeInOnScroll>

        {/* Carousel Container */}
        <div className={styles.carouselViewport}>
          {/* Navigation Buttons (Outside floating) */}
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextSlide}
            aria-label="Next project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards Track */}
          <div className={styles.cardsTrack}>
            {projects.map((project, index) => {
              let position = 'hidden';
              const total = projects.length;

              if (index === currentIndex) {
                position = 'active';
              } else if (index === (currentIndex + 1) % total) {
                position = 'next';
              } else if (index === (currentIndex - 1 + total) % total) {
                position = 'prev';
              }

              return (
                <div
                  key={project.id}
                  className={`${styles.card} ${styles[position]}`}
                  onClick={() => {
                    if (position === 'next') nextSlide();
                    if (position === 'prev') prevSlide();
                  }}
                >
                  {/* Left Cover Image (No internal padding, rounded corners) */}
                  <div
                    className={styles.imageBox}
                    style={{ backgroundColor: project.imageBgColor || '#181A20' }}
                  >
                    <div className={styles.imageOverlayGradient} />
                    <div className={styles.imageBadge}>
                      <span>{project.category}</span>
                      <span className={styles.dot}>•</span>
                      <span>{project.year}</span>
                    </div>

                    <div className={styles.imageCenterArt}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>

                    <div className={styles.imageFooter}>
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className={styles.contentBox}>
                    {/* Client header */}
                    <div className={styles.clientHeader}>
                      <div className={styles.clientLogoMark}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 2 7 12 12 22 7 12 2" />
                          <polygon points="2 17 12 22 22 17 12 12 2 17" />
                        </svg>
                      </div>
                      <span className={styles.clientName}>{project.client}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.description}</p>

                    {/* Read More */}
                    <a href={`/work#${project.id}`} className={styles.readMore}>
                      <span>Read More</span>
                      <span className={styles.readMoreCircle}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>

                    {/* Metrics Row */}
                    <div className={styles.metricsRow}>
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className={styles.metricItem}>
                          <div className={styles.metricValue}>{m.value}</div>
                          <div className={styles.metricLabel}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsRow}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dotBtn} ${idx === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <FadeInOnScroll delay={0.1}>
          <div className={styles.bottomCta}>
            <Button href="/work" variant="primary" size="large" arrow>
              Explore all Case Studies
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
