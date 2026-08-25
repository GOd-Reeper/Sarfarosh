import Link from 'next/link';
import styles from './not-found.module.css';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Container size="default">
        <div className={styles.content}>
          {/* Light Theme Watermark 404 Display */}
          <div className={styles.watermark}>404</div>

          {/* White Card */}
          <div className={styles.whiteCard}>
            <div className={styles.pillTag}>
              <span>404 ● PAGE NOT FOUND</span>
            </div>

            <h1 className={styles.title}>Oops, page not found</h1>

            <p className={styles.sub}>
              The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
            </p>

            <Link href="/" className={styles.homeBtn}>
              <span>Back to homepage</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
