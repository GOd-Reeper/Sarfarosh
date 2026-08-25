import Link from 'next/link';
import styles from './Footer.module.css';
import Container from './Container';

const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Event Management', href: '/services' },
      { label: 'Event Production', href: '/services' },
      { label: 'Brand Activations', href: '/services' },
      { label: 'Entertainment', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'WhatsApp', href: 'https://wa.me/919893012345' },
      { label: 'Email', href: 'mailto:hello@sarfarosh.in' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        {/* CTA Band */}
        <div className={styles.ctaBand}>
          <h2 className={styles.ctaHeading}>
            Have an event in mind?
            <br />
            Let&apos;s build it.
          </h2>
          <p className={styles.ctaSub}>
            Sarfarosh makes it effortless to plan, produce,
            <br className={styles.brDesktop} />
            and execute events people remember.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        {/* Footer Card */}
        <div className={styles.card}>
          <div className={styles.cardInner}>
            {/* Left - Brand */}
            <div className={styles.brand}>
              <div className={styles.logoMark}>
                <span className={styles.logoIcon}>S</span>
                <span className={styles.logoText}>Sarfarosh</span>
              </div>
              <p className={styles.brandDesc}>
                Event management, production, entertainment, and experiential company — creating experiences people remember.
              </p>
            </div>

            {/* Right - Nav Columns */}
            <div className={styles.columns}>
              {footerColumns.map((col) => (
                <div key={col.title} className={styles.column}>
                  <h4 className={styles.columnTitle}>{col.title}</h4>
                  <ul className={styles.columnList}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={styles.columnLink}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Sarfarosh. All rights reserved
            </p>
            <div className={styles.bottomLinks}>
              <Link href="#" className={styles.bottomLink}>Terms of Service</Link>
              <Link href="#" className={styles.bottomLink}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
