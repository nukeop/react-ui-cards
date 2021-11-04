import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import styles from './styles.module.scss';

export type FlippingCardProps = {
  className?: string,
};

const FlippingCard: React.FC<FlippingCardProps> = ({
  className,
  children,
  ...rest
}) => (
  <Card
    className={cx(
      styles['flipping-card-container'],
      className
    )}
    {...rest}
  >
    <div className={styles['flipping-card']}>
      {children}
    </div>
  </Card>
)

export default FlippingCard;
