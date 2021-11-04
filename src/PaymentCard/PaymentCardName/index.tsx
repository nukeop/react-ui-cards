import React from 'react';

import styles from './styles.module.scss';

export type PaymentCardNameProps = {
  name: string;
}

const PaymentCardName: React.FC<PaymentCardNameProps> = ({
  name
}) => (
  <div className={styles['payment-card-name']}>
    {name}
  </div>
)

export default PaymentCardName;
