import React from 'react';

import styles from './styles.module.scss';

export type UserCardAvatarProps = {
  src: string;
};

const UserCardAvatar: React.FC<UserCardAvatarProps> = ({ src }) =>
(
  <div
    className={styles['user-card-avatar']}
    style={{ backgroundImage: `url(${src})` }} />
)

export default UserCardAvatar;
