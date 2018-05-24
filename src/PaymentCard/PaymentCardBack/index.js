import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PaymentCardBack = props => {
  return (
    <div className="payment-card-back">
      <span className="magnetic-stripe" />
      <div className="signature-field">
        <span className="cvv">{props.cvv}</span>
      </div>
    </div>
  );
}

PaymentCardBack.propTypes = {
  cvv: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default PaymentCardBack;
