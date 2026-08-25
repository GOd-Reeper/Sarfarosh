import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  size?: 'default' | 'wide' | 'narrow';
  className?: string;
}

export default function Container({ children, wide = false, size = 'default', className = '' }: ContainerProps) {
  const isWide = wide || size === 'wide';
  const isNarrow = size === 'narrow';

  const containerClasses = [
    styles.container,
    isWide ? styles.wide : '',
    isNarrow ? styles.narrow : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}
