import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Card from '../Card';
import FlippingCardBack from './FlippingCardBack';
import FlippingCardFront from './FlippingCardFront';
import styles from './styles.scss';

const FlippingCard = props => {
  let {
    children,
    className,
    ...other
  } = props;

  return (
    <Card
      className={cx(
        styles['flipping-card-container'],
        className
      )}
    {...other}
    >
      <div className={styles['flipping-card']}>
        {children}
      </div>
    </Card>
  );
}

FlippingCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FlippingCard;
