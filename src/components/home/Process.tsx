'use client';

import styles from './Process.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { processSteps } from '@/data/siteData';

export default function Process() {
  return (
    <Section background="secondary">
      <Container>
        <FadeInOnScroll>
          <SectionHeader
            tag="How We Work"
            title="From idea to live experience."
            subtitle="A proven process that ensures every event is planned, produced, and executed with precision."
            align="center"
          />
        </FadeInOnScroll>

        <div className={styles.grid}>
          {processSteps.map((step, i) => (
            <FadeInOnScroll key={step.number} delay={i * 0.06}>
              <div className={styles.step}>
                <span className={styles.number}>/{step.number}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
