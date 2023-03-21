import styles from './Badges.module.css';

interface BadgesProps {
  title: string;
  amount: string;
}

export function Badges({ amount, title }: BadgesProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.counter}>
        <span>{amount}</span>
      </div>
    </div>
  );
}
