import React from 'react';

import styles from './styles.module.scss';

export type PaymentCardBackProps = {
  cvv: string | number;
};

const PaymentCardBack: React.FC<PaymentCardBackProps> = ({
  cvv
}) => (
  <div className={styles['payment-card-back']}>
    <span className={styles['magnetic-stripe']} />
    <div className={styles['signature-field']}>
      <span className={styles.cvv}>{cvv}</span>
    </div>
  </div>
)

export default PaymentCardBack;
