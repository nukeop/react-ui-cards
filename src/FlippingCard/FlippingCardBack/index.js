import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const FlippingCardBack = props => {
  return (
    <div className='back'>
      {props.children}
    </div>
  );
}

FlippingCardBack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default FlippingCardBack;
