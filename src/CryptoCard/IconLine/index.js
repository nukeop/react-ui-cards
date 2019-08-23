import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.scss';

const IconLine = props => {
  let {
    icon,
    currencyShortName,
    trend,
    trendDirection
  } = props;

  return (
    <div className={styles['crypto-card-icon-line']}>
      <div className={styles.left}>
        <div className={styles['crypto-icon']}>
          { icon }
        </div>
        <div className={styles['crypto-short-name']}>
          { currencyShortName }
        </div>
      </div>
      <div className={styles.right}>
        <div className={cx(
          styles.trend,
          {[`${styles.green}`]: trendDirection > 0},
          {[`${styles.yellow}`]: trendDirection === 0},
          {[`${styles.red}`]: trendDirection < 0}
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
