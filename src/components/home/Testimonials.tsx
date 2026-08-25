'use client';

import styles from './Testimonials.module.css';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { testimonials, spotlightCards } from '@/data/siteData';

interface LeaderAvatar {
  id: string;
  name: string;
  role: string;
  gradient: string;
  col: string;
  topOffset: string;
}

const leaderAvatars: LeaderAvatar[] = [
  { id: 'a1', name: 'D. Sharma', role: 'Govt Dept', gradient: 'linear-gradient(180deg, #3A3D40 0%, #1F2124 100%)', col: 'c1', topOffset: 't1' },
  { id: 'a2', name: 'R. Kothari', role: 'INOX India', gradient: 'linear-gradient(180deg, #5C5247 0%, #3B342C 100%)', col: 'c2', topOffset: 't2' },
  { id: 'a3', name: 'S. Rao', role: 'TI Mall', gradient: 'linear-gradient(180deg, #485856 0%, #2A3634 100%)', col: 'c3', topOffset: 't1' },
  { id: 'a4', name: 'P. Agarwal', role: 'M&S Retail', gradient: 'linear-gradient(180deg, #33383B 0%, #1C2022 100%)', col: 'c4', topOffset: 't2' },
  { id: 'a5', name: 'K. Joshi', role: 'Fest Producer', gradient: 'linear-gradient(180deg, #2B3347 0%, #151B28 100%)', col: 'c5', topOffset: 't1' },
  { id: 'a6', name: 'A. Patel', role: 'CSB Co-Founder', gradient: 'linear-gradient(180deg, #4A3C38 0%, #291F1C 100%)', col: 'c6', topOffset: 't2' },
];

export default function Testimonials() {
  return (
    <Section background="secondary" padding="default" className={styles.sectionOverride}>
      <Container size="wide">
        {/* Single Grand White Card Container (Matching Image 3 Reference) */}
        <div className={styles.masterCard}>
          
          {/* ── TOP HERO: Floating Avatar Cloud (Matching Image 3) ── */}
          <div className={styles.avatarCloudHero}>
            
            {/* Staggered Floating Avatars across top */}
            <div className={styles.avatarsTrack}>
              {leaderAvatars.map((av) => (
                <div
                  key={av.id}
                  className={`${styles.avatarItem} ${styles[av.col]} ${styles[av.topOffset]}`}
                  style={{ background: av.gradient }}
                >
                  <div className={styles.avatarSilhoutte} />
                  <div className={styles.avatarOverlay}>
                    <div className={styles.avatarName}>{av.name}</div>
                    <div className={styles.avatarRole}>{av.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Content Header */}
            <FadeInOnScroll>
              <div className={styles.centerHeroContent}>
                <Tag variant="default" className={styles.heroPill}>Testimonials</Tag>
                
                <h2 className={styles.heroHeading}>
                  Trusted by leaders
                  <br />
                  <span className={styles.heroHeadingMuted}>from various industries</span>
                </h2>

                <p className={styles.heroSub}>
                  Learn why professionals trust our solutions to complete their customer journeys.
                </p>

                <div className={styles.heroCta}>
                  <Button href="/contact" variant="primary" size="large" arrow>
                    Read Success Stories
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Subtle Divider */}
          <div className={styles.sectionDivider} />

          {/* ── BOTTOM BENTO: What They're Saying (Matching Image 2 Bento Masonry) ── */}
          <div className={styles.bentoSection}>
            <div className={styles.bentoHeader}>
              <span className={styles.bentoTag}>007 ● TESTIMONIALS</span>
              <h3 className={styles.bentoTitle}>What They&apos;re Saying</h3>
            </div>

            <div className={styles.bentoGrid}>
              {/* Column 1 */}
              <div className={styles.column}>
                <FadeInOnScroll delay={0.05}>
                  <div className={styles.spotlightCard} style={{ backgroundColor: spotlightCards[0].bgColor }}>
                    <div className={styles.playCircle}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div className={styles.spotlightFooter}>
                      <div className={styles.spotlightLogo}>
                        <div className={styles.logoSquare}>S</div>
                        <span>Sarfarosh Video</span>
                      </div>
                      <h4 className={styles.spotlightTitle}>{spotlightCards[0].title}</h4>
                    </div>
                  </div>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.1}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[0].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[0].name}</div>
                        <div className={styles.authorRole}>{testimonials[0].role}, {testimonials[0].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[0].quote}</p>
                  </blockquote>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.15}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[1].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[1].name}</div>
                        <div className={styles.authorRole}>{testimonials[1].role}, {testimonials[1].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[1].quote}</p>
                  </blockquote>
                </FadeInOnScroll>
              </div>

              {/* Column 2 */}
              <div className={styles.column}>
                <FadeInOnScroll delay={0.1}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[2].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[2].name}</div>
                        <div className={styles.authorRole}>{testimonials[2].role}, {testimonials[2].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[2].quote}</p>
                  </blockquote>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.15}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[3].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[3].name}</div>
                        <div className={styles.authorRole}>{testimonials[3].role}, {testimonials[3].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[3].quote}</p>
                  </blockquote>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.2}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[4].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[4].name}</div>
                        <div className={styles.authorRole}>{testimonials[4].role}, {testimonials[4].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[4].quote}</p>
                  </blockquote>
                </FadeInOnScroll>
              </div>

              {/* Column 3 */}
              <div className={styles.column}>
                <FadeInOnScroll delay={0.15}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[5].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[5].name}</div>
                        <div className={styles.authorRole}>{testimonials[5].role}, {testimonials[5].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[5].quote}</p>
                  </blockquote>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.2}>
                  <div className={styles.spotlightCard} style={{ backgroundColor: spotlightCards[1].bgColor }}>
                    <div className={styles.playCircle}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div className={styles.spotlightFooter}>
                      <div className={styles.spotlightLogo}>
                        <div className={styles.logoSquare}>S</div>
                        <span>Sarfarosh Video</span>
                      </div>
                      <h4 className={styles.spotlightTitle}>{spotlightCards[1].title}</h4>
                    </div>
                  </div>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.25}>
                  <blockquote className={styles.quoteCard}>
                    <div className={styles.quoteHeader}>
                      <div className={styles.avatar}>{testimonials[6].name.charAt(0)}</div>
                      <div>
                        <div className={styles.authorName}>{testimonials[6].name}</div>
                        <div className={styles.authorRole}>{testimonials[6].role}, {testimonials[6].company}</div>
                      </div>
                      <div className={styles.quoteMark}>“</div>
                    </div>
                    <p className={styles.quoteText}>{testimonials[6].quote}</p>
                  </blockquote>
                </FadeInOnScroll>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
