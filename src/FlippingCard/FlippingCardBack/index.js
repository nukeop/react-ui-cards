import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const FlippingCardBack = props => {
  return (
    <div className={styles['back']}>
      {props.children}
    </div>
  );
}

FlippingCardBack.propTypes = {
  children: PropTypes.node
};

export default FlippingCardBack;
