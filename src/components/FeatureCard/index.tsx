import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ComponentType<React.ComponentProps<'svg'>>;
  linkTo: string;
  isExternal?: boolean;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  linkTo,
  isExternal = false
}: FeatureCardProps): JSX.Element {
  const CardContent = (
    <div className={clsx(styles.card, styles.cardHover)}>
      {Icon && (
        <div className={styles.cardIcon}>
          <Icon className={styles.icon} role="img" />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardArrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8.22 2.22a.75.75 0 011.06 0l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 01-1.06-1.06L12.94 8.5H1.75a.75.75 0 010-1.5h11.19L8.22 2.28a.75.75 0 010-1.06z"/>
        </svg>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={linkTo} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        {CardContent}
      </a>
    );
  }

  return (
    <Link to={linkTo} className={styles.cardLink}>
      {CardContent}
    </Link>
  );
}
