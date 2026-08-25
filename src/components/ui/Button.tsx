import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  arrow = false,
}: ButtonProps) {
  const cls = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg className={styles.arrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
