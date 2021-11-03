import React from 'react';

import styles from './styles.module.scss';

export type UserCardBodyProps = {
  name: string;
  positionName: string;
}

const UserCardBody: React.FC<UserCardBodyProps> = ({ name, positionName, children }) => (
  <div
    className={styles['user-card-body']}
  >
    <div className={styles['user-card-name']}>
      {name}
    </div>
    <div className={styles['user-card-position-name']}>
      {positionName}
    </div>
    {children}
  </div>
)

export default UserCardBody;
