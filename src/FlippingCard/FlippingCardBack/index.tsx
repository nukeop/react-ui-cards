import React from 'react';

import styles from './styles.module.scss';

const FlippingCardBack: React.FC = ({ children }) => (
  <div className={styles['back']}>
    {children}
  </div>
)

export default FlippingCardBack;
