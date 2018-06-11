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
import PaymentCardDate from './PaymentCardDate';
import PaymentCardName from './PaymentCardName';
import PaymentCardBack from './PaymentCardBack';
import './styles.scss';

const PaymentCard = props => {
  let {
    background,
    backgroundPattern,
    issuerIcon,
    number,
    date,
    name,
    cvv
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
        <Chip />
        <PaymentCardNumber
          number={number}
        />
        <PaymentCardDate
          date={date}
        />
        <PaymentCardName
          name={name}
        />

      </FlippingCardFront>
      <FlippingCardBack>
        <PaymentCardBackground
          background={background}
          backgroundPattern={null}
        />
        <PaymentCardBack
          cvv={cvv}
        />
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
  number: PropTypes.string.isRequired,
  date: PropTypes.string,
  name: PropTypes.string,
  cvv: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default PaymentCard;
