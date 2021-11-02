import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      className,
      float,
      ...other
    } = this.props;
    return (
      <div
        className={
          classnames(
            styles.card,
            { [`${styles.float}`]: float },
            className,
          )}
      { ...other }
      >
	      {this.props.children}
      </div>
    );
  }
}

Card.PropTypes = {
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
