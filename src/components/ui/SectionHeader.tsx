import Tag from './Tag';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  tag?: string;
  tagVariant?: 'default' | 'dark';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  tag,
  tagVariant = 'default',
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]} ${dark ? styles.dark : ''} ${className}`}>
      {tag && <Tag variant={tagVariant}>{tag}</Tag>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
