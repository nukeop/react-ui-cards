import React from 'react';

import styles from './styles.module.scss';

export type PaymentCardDateProps = {
  date: string
};

const PaymentCardDate: React.FC<PaymentCardDateProps> = ({
  date
}) => (
  <div className={styles['payment-card-date']}>
    <div className={styles['valid-date']}>Valid dates</div>
    <div className={styles['to-date']}>{date}</div>
  </div>
)

export default PaymentCardDate;
