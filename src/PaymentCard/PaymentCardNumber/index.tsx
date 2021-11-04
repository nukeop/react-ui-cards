import React from 'react';

import styles from './styles.module.scss';

export type PaymentCardNumberProps = {
  number: string;
}

const PaymentCardNumber: React.FC<PaymentCardNumberProps> = ({
  number
}) => (
  <div className={styles['payment-card-number']}>
    {number}
  </div>
)

export default PaymentCardNumber;
