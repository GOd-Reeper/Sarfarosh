import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export default function Container({ children, wide = false, className = '' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${wide ? styles.wide : ''} ${className}`}>
      {children}
    </div>
  );
}
