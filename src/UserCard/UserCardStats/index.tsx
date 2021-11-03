import React from 'react';

import styles from './styles.module.scss';

export type UserCardStatsProps = {
  stats?: {
    name: string;
    value: number | string;
  }[];
}

const UserCardStats: React.FC<UserCardStatsProps> = ({ stats }) => (
  <div
    className={styles['user-card-stats']}
  >
    {stats?.map((stat) => {
      return (
        <div
          key={stat.name}
          className={styles['stat-container']}
        >
          <div className={styles['stat-value']}>
            {stat.value}
          </div>
          <div className={styles['stat-name']}>
            {stat.name}
          </div>
        </div>
      );
    })}
  </div>
)

export default UserCardStats;
