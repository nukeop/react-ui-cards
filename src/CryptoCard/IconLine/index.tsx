import React from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export type IconLineProps = {
  icon: React.ReactNode;
  currencyShortName: string;
  trend: string;
  trendDirection: -1 | 0 | 1;
};

const IconLine: React.FC<IconLineProps> = ({
  icon,
  currencyShortName,
  trend,
  trendDirection
}) => (
  <div className={styles['crypto-card-icon-line']}>
    <div className={styles.left}>
      <div className={styles['crypto-icon']}>
        {icon}
      </div>
      <div className={styles['crypto-short-name']}>
        {currencyShortName}
      </div>
    </div>
    <div className={styles.right}>
      <div className={cx(
        styles.trend,
        { [`${styles.green}`]: trendDirection > 0 },
        { [`${styles.yellow}`]: trendDirection === 0 },
        { [`${styles.red}`]: trendDirection < 0 }
      )}>
        {trend}
        {' '}
        {trendDirection > 0
          ? '▲'
          : trendDirection < 0
            ? '▼'
            : '='}
      </div>
    </div>
  </div>
)

export default IconLine;
