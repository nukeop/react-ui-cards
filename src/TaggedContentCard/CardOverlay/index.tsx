import React from 'react';

import styles from './styles.module.scss';

export type CardOverlayProps = {
  thumbnail: string;
};

const CardOverlay: React.FC<CardOverlayProps> = ({ thumbnail }) => (
  <div
    className={styles['card-overlay']}
  >
    <div
      className={styles['overlay']}
      style={{
        backgroundImage: `url(${thumbnail})`
      }} />
  </div>
);

export default CardOverlay;
