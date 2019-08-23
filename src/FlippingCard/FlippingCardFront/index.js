import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const FlippingCardFront = props => {
  return (
    <div className={styles['front']}>
      {props.children}
    </div>
  );
}

FlippingCardFront.propTypes = {
  children: PropTypes.node
};

export default FlippingCardFront;
