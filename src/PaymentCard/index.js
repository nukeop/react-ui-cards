import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import FlippingCard from '../FlippingCard';
import FlippingCardFront from '../FlippingCard/FlippingCardFront';
import FlippingCardBack from '../FlippingCard/FlippingCardBack';
import PaymentCardBackground from './PaymentCardBackground';
import IssuerIcon from './IssuerIcon';
import PaymentCardNumber from './PaymentCardNumber';
import Chip from './Chip';
import './styles.scss';

const PaymentCard = props => {
  let {
    background,
    backgroundPattern,
    issuerIcon,
    number
  } = props;

  return (
    <FlippingCard className='payment-card'>
      <FlippingCardFront>
        <PaymentCardBackground
          background={background}
          backgroundPattern={backgroundPattern}
        />
        <IssuerIcon
          icon={issuerIcon}
        />
        <PaymentCardNumber
          number={number}
        />
        <Chip />
      </FlippingCardFront>
      <FlippingCardBack>
        <div></div>
      </FlippingCardBack>
    </FlippingCard>
  );
}

PaymentCard.propTypes = {
  background: PropTypes.string,
  backgroundPattern: PropTypes.string,
  issuerIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  number: PropTypes.string.isRequired
};

export default PaymentCard;
