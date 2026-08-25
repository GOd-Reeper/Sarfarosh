'use client';

import styles from './TrustedLeaders.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface LeaderAvatar {
  id: string;
  name: string;
  role: string;
  bgColor: string;
  colIndex: number;
  heightOffset: string;
}

const leaders: LeaderAvatar[] = [
  { id: '1', name: 'Devendra Sharma', role: 'Govt Officer', bgColor: '#2C3531', colIndex: 1, heightOffset: 'top' },
  { id: '2', name: 'Ananya Verma', role: 'Marketing Head', bgColor: '#116466', colIndex: 1, heightOffset: 'bottom' },
  { id: '3', name: 'Rajesh Kothari', role: 'INOX Director', bgColor: '#D9B08C', colIndex: 2, heightOffset: 'top' },
  { id: '4', name: 'Vikram Mehta', role: 'CSB Founder', bgColor: '#FFCB9A', colIndex: 2, heightOffset: 'bottom' },
  { id: '5', name: 'Siddharth Rao', role: 'Treasure Island', bgColor: '#D1E8E2', colIndex: 3, heightOffset: 'top' },
  { id: '6', name: 'Pooja Agarwal', role: 'M&S Retail', bgColor: '#373A36', colIndex: 4, heightOffset: 'top' },
  { id: '7', name: 'Karan Joshi', role: 'Festival Producer', bgColor: '#190061', colIndex: 5, heightOffset: 'top' },
  { id: '8', name: 'Simran Sethi', role: 'Brand Director', bgColor: '#3500D3', colIndex: 5, heightOffset: 'bottom' },
  { id: '9', name: 'Arjun Patel', role: 'Event Strategist', bgColor: '#240090', colIndex: 6, heightOffset: 'top' },
  { id: '10', name: 'Meera Nair', role: 'Cultural Lead', bgColor: '#0C0032', colIndex: 6, heightOffset: 'bottom' },
];

export default function TrustedLeaders() {
  return (
    <Section background="primary" padding="default" className={styles.section}>
      <Container size="wide">
        <div className={styles.cloudContainer}>
          {/* Subtle Grid Background Lines */}
          <div className={styles.gridLines}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>

          {/* Floating Avatar Cards Cloud */}
          <div className={styles.avatarsWrapper}>
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className={`${styles.avatarCard} ${styles[`col${leader.colIndex}`]} ${styles[leader.heightOffset]}`}
                style={{ backgroundColor: leader.bgColor }}
              >
                <div className={styles.avatarPattern} />
                <div className={styles.avatarInfo}>
                  <div className={styles.avatarInitials}>
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={styles.avatarName}>{leader.name}</div>
                  <div className={styles.avatarRole}>{leader.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Main Content Header */}
          <FadeInOnScroll>
            <div className={styles.centerContent}>
              <Tag variant="default" className={styles.pillTag}>Testimonials</Tag>
              
              <h2 className={styles.heading}>
                Trusted by leaders
                <br />
                <span className={styles.headingMuted}>from various industries</span>
              </h2>

              <p className={styles.sub}>
                Learn why brands, government organizations, and event partners trust
                Sarfarosh to execute their high-impact experiences.
              </p>

              <Button href="/contact" variant="primary" size="large" arrow>
                Read Success Stories
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </Section>
  );
}
