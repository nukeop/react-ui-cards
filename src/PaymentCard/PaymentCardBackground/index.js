import React from 'react';
import PropTypes from 'prop-types';

import worldMap from '../svg/world-map.svg';
import styles from './styles.scss';

const defaultBackground = "linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%)";

const PaymentCardBackground = props => {
  let {
    background
  } = props;

  return (
    <div className="payment-card-background" style={{background: background || defaultBackground}}>
      <div className="svg-background" dangerouslySetInnerHTML={{__html: worldMap}} />
    </div>
  );
}

PaymentCardBackground.propTypes = {
  background: PropTypes.string
};

export default PaymentCardBackground;
