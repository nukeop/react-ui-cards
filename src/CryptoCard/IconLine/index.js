import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const IconLine = props => {
  let {
    icon,
    currencyShortName,
    trend,
    trendDirection
  } = props;

  return (
    <div className="crypto-card-icon-line">
      <div className="left">
        <div className="crypto-icon">
          { icon }
        </div>
        <div className="crypto-short-name">
          { currencyShortName }
        </div>
      </div>
      <div className="right">
        <div className={classnames(
          'trend',
          {'green': trendDirection > 0},
          {'yellow': trendDirection === 0},
          {'red': trendDirection < 0}
        )}>
        {trend}
        {' '}
        {
          trendDirection > 0
          ? '▲'
          : trendDirection < 0
            ? '▼'
            : '='
        }
        </div>
      </div>
    </div>
  );
}

IconLine.propTypes = {
  icon: PropTypes.node,
  currencyShortName: PropTypes.string,
  trend: PropTypes.string,
  trendDirection: PropTypes.oneOf([-1, 0, 1])
};

export default IconLine;
