import React from 'react';
import classnames from 'classnames';

import './styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      className,
      onClick
    } = this.props;
    return (
      <div className={classnames("card", className)} onClick={onClick}>
	{this.props.children}
      </div>
    );
  }
}

export default Card;
