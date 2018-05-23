import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PaymentCardNumber = props => {
  return (
    <div className="payment-card-number">
      { props.number }
    </div>
  );
}

PaymentCardNumber.propTypes = {
  number: PropTypes.string.isRequired
};

export default PaymentCardNumber;
