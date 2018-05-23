import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FlippingCardFront = props => {
  return (
    <div className='front'>
      {props.children}
    </div>
  );
}

FlippingCardFront.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default FlippingCardFront;
