import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import worldMap from '../svg/world-map.svg';
import triangles from '../svg/triangles.svg';
import spiral from '../svg/spiral.svg';
import styles from './styles.scss';

const patterns = {
  worldMap,
  triangles,
  spiral
};

const defaultBackground = "linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%)";

const PaymentCardBackground = props => {
  let {
    background,
    backgroundPattern
  } = props;

  let pattern = backgroundPattern===undefined
  ? "worldMap" : backgroundPattern;

  return (
    <div className="payment-card-background" style={{background: background || defaultBackground}}>
      <div className={classnames("svg-background", pattern)} dangerouslySetInnerHTML={{__html: patterns[pattern]}} />
    </div>
  );
}

PaymentCardBackground.propTypes = {
  background: PropTypes.string,
  backgroundPattern: PropTypes.string
};

export default PaymentCardBackground;
