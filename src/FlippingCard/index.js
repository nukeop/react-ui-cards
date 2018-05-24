import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from '../Card';
import FlippingCardBack from './FlippingCardBack';
import FlippingCardFront from './FlippingCardFront';
import './styles.scss';

const FlippingCard = props => {
  let {
    children,
    className
  } = props;

  return (
    <Card
      className={classnames('flipping-card-container', className)}
    >
      <div className='flipping-card'>
        {children}
      </div>
    </Card>
  );
}

FlippingCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  className: PropTypes.string
};

export default FlippingCard;
