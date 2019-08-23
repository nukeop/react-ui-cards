import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PaymentCardDate = props => {
  return (
    <div className={styles['payment-card-date']}>
      <div className={styles['valid-date']}>Valid dates</div>
      <div className={styles['to-date']}>{props.date}</div>
    </div>
  );
}

PaymentCardDate.propTypes = {
  date: PropTypes.string
};

export default PaymentCardDate;
