import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PaymentCardBack = props => {
  return (
    <div className={styles['payment-card-back']}>
      <span className={styles['magnetic-stripe']} />
      <div className={styles['signature-field']}>
        <span className={styles.cvv}>{props.cvv}</span>
      </div>
    </div>
  );
}

PaymentCardBack.propTypes = {
  cvv: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default PaymentCardBack;
