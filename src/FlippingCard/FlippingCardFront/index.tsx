import React from 'react';

import styles from './styles.module.scss';

const FlippingCardFront: React.FC = ({ children }) => (
  <div className={styles['front']}>
    {children}
  </div>
)

export default FlippingCardFront;
