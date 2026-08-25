'use client';

import styles from './ServicesGrid.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { services } from '@/data/siteData';
import Link from 'next/link';

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'management':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="m9 16 2 2 4-4"></path>
        </svg>
      );
    case 'production':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
          <path d="M7 10h10M7 14h10M7 18h6"></path>
        </svg>
      );
    case 'activation':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      );
    case 'government':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="21" x2="21" y2="21"></line>
          <line x1="6" y1="18" x2="6" y2="11"></line>
          <line x1="10" y1="18" x2="10" y2="11"></line>
          <line x1="14" y1="18" x2="14" y2="11"></line>
          <line x1="18" y1="18" x2="18" y2="11"></line>
          <polygon points="12 2 20 7 4 7 12 2"></polygon>
        </svg>
      );
    case 'entertainment':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      );
    case 'creative':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8"></circle>
        </svg>
      );
  }
}

export default function ServicesGrid() {
  return (
    <Section background="primary">
      <Container>
        <FadeInOnScroll>
          <SectionHeader
            tag="Services"
            title="Collaborate with brands and agencies to create impactful results."
            align="center"
          />
        </FadeInOnScroll>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <FadeInOnScroll key={service.id} delay={i * 0.08}>
              <Link href="/services" className={styles.card}>
                <div className={styles.icon}>
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
