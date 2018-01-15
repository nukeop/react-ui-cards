import React from 'react';

import './styles.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
	{this.props.children}
      </div>
    );
  }
}

export default Card;
