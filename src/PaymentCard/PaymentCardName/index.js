import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PaymentCardName = props => {
  return (
    <div className="payment-card-name">
      {props.name}
    </div>
  );
}

PaymentCardName.propTypes = {
  name: PropTypes.string
};

export default PaymentCardName;
