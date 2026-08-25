'use client';

import styles from './ClientLogos.module.css';
import Container from '@/components/layout/Container';
import { clients } from '@/data/siteData';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

export default function ClientLogos() {
  return (
    <section className={styles.section}>
      <Container>
        <FadeInOnScroll>
          <div className={styles.inner}>
            {clients.map((client) => (
              <span key={client} className={styles.logo}>
                {client}
              </span>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
