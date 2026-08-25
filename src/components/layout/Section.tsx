import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'black';
  padding?: 'default' | 'small' | 'large' | 'none';
  className?: string;
  id?: string;
}

export default function Section({
  children,
  background = 'primary',
  padding = 'default',
  className = '',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${styles[`padding_${padding}`]} ${className}`}
    >
      {children}
    </section>
  );
}
