import React from 'react';

import styles from './styles.module.scss';

export type UserCardHeaderProps = {
  src: string;
};

const UserCardHeader: React.FC<UserCardHeaderProps> = ({ src }) => (
  <div
    className={styles['user-card-header']}
    style={{ backgroundImage: `url(${src})` }}
  >
  </div>
)

export default UserCardHeader;
