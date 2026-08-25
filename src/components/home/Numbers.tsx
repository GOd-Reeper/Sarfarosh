'use client';

import styles from './Numbers.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import CountUp from '@/components/animations/CountUp';
import { stats } from '@/data/siteData';

export default function Numbers() {
  return (
    <Section background="primary">
      <Container>
        <FadeInOnScroll>
          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.value}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className={styles.label}>{stat.label}</div>
                <p className={styles.desc}>{stat.description}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
