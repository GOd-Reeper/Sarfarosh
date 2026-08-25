'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import Container from '@/components/layout/Container';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <Container size="wide">
        <div className={styles.containerInner}>
          {/* Light Theme Watermark Text */}
          <div className={styles.watermark}>CONTACT</div>

          {/* 2-Column Main Contact Architecture */}
          <div className={styles.contactGrid}>
            
            {/* Left Column: Direct Info */}
            <div className={styles.leftCol}>
              <div className={styles.pillTag}>
                <span>● CONTACT</span>
              </div>

              <h1 className={styles.title}>Get in touch</h1>

              <p className={styles.sub}>
                Have an upcoming event or ready to create an experiential drive people remember?
                Reach out to our core team directly.
              </p>

              <div className={styles.infoCards}>
                {/* Email Card */}
                <a href="mailto:hello@sarfarosh.in" className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.infoBody}>
                    <div className={styles.infoLabel}>Email us</div>
                    <div className={styles.infoVal}>hello@sarfarosh.in</div>
                  </div>
                  <div className={styles.arrowIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </a>

                {/* Call Card */}
                <a href="tel:+919893012345" className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.infoBody}>
                    <div className={styles.infoLabel}>Call us</div>
                    <div className={styles.infoVal}>+91 98930 12345</div>
                  </div>
                  <div className={styles.arrowIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </a>

                {/* Location Card */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.infoBody}>
                    <div className={styles.infoLabel}>Our location</div>
                    <div className={styles.infoVal}>Indore, Madhya Pradesh, India</div>
                  </div>
                  <div className={styles.arrowIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: White Form Container Card */}
            <div className={styles.rightCol}>
              <form className={styles.formCard} onSubmit={handleSubmit}>
                {submitted ? (
                  <div className={styles.successState}>
                    <div className={styles.checkIcon}>✓</div>
                    <h3>Message Received</h3>
                    <p>Thank you for reaching out! A member of the Sarfarosh team will be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Email</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your event, expected date, audience size..."
                        className={styles.textarea}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>Submit Message</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </form>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
