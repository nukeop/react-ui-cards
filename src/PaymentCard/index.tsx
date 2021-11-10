import React from 'react';
import cx from 'classnames';

import FlippingCard from '../FlippingCard';
import FlippingCardFront from '../FlippingCard/FlippingCardFront';
import FlippingCardBack from '../FlippingCard/FlippingCardBack';
import PaymentCardBackground, { PaymentCardBackgroundProps } from './PaymentCardBackground';
import IssuerIcon, { IssuerIconProps } from './IssuerIcon';
import PaymentCardNumber, { PaymentCardNumberProps } from './PaymentCardNumber';
import Chip from './Chip';
import PaymentCardDate, { PaymentCardDateProps } from './PaymentCardDate';
import PaymentCardName, { PaymentCardNameProps } from './PaymentCardName';
import PaymentCardBack, { PaymentCardBackProps } from './PaymentCardBack';
import styles from './styles.module.scss';

export type PaymentCardProps = {
  className?: string;
  background?: PaymentCardBackgroundProps['background'];
  backgroundPattern?: PaymentCardBackgroundProps['backgroundPattern'];
  issuerIcon: IssuerIconProps['icon'];
  number: PaymentCardNumberProps['number'];
  date: PaymentCardDateProps['date'];
  name: PaymentCardNameProps['name'];
  cvv: PaymentCardBackProps['cvv'];
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  className,
  background,
  backgroundPattern,
  issuerIcon,
  number,
  date,
  name,
  cvv,
  ...rest
}) => (
  <FlippingCard
    className={cx(
      styles['payment-card'],
      className
    )}
    {...rest}
  >
    <FlippingCardFront>
      <PaymentCardBackground
        background={background}
        backgroundPattern={backgroundPattern} />
      <IssuerIcon
        icon={issuerIcon} />
      <Chip />
      <PaymentCardNumber
        number={number} />
      <PaymentCardDate
        date={date} />
      <PaymentCardName
        name={name} />

    </FlippingCardFront>
    <FlippingCardBack>
      <PaymentCardBackground
        background={background}
        backgroundPattern={null} />
      <PaymentCardBack
        cvv={cvv} />
    </FlippingCardBack>
  </FlippingCard>
)

export default PaymentCard;
