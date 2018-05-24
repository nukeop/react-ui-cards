import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const IssuerIcon = props => {


  return (
    <div className="issuer-icon">
      {
        props.icon === undefined
        ? null
        : typeof props.icon === 'string'
          ? (
            <img src={props.icon}/>
          )
          : props.icon
      }
    </div>
  );
}

IssuerIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

export default IssuerIcon;
