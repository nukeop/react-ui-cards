import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import FlippingCard from '../FlippingCard';
import FlippingCardFront from '../FlippingCard/FlippingCardFront';
import FlippingCardBack from '../FlippingCard/FlippingCardBack';
import PaymentCardBackground from './PaymentCardBackground';
import IssuerIcon from './IssuerIcon';
import PaymentCardNumber from './PaymentCardNumber';
import './styles.scss';

const PaymentCard = props => {
  let {
    background,
    issuerIcon,
    number
  } = props;

  return (
    <FlippingCard className='payment-card'>
      <FlippingCardFront>
        <PaymentCardBackground
          background={background}
        />
        <IssuerIcon
          icon={issuerIcon}
        />
        <PaymentCardNumber
          number={number}
        />
      </FlippingCardFront>
      <FlippingCardBack>
        <div></div>
      </FlippingCardBack>
    </FlippingCard>
  );
}

PaymentCard.propTypes = {
  background: PropTypes.string,
  issuerIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  number: PropTypes.string.isRequired
};

export default PaymentCard;
