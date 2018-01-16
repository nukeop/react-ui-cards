import React from 'react';

import './styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      href
    } = this.props;

    href = href !== undefined ? href : null;
    
    return (
      <a href={href} className='card-link'>
	<div className="card">
	  {this.props.children}
	</div>
      </a>
    );
  }
}

export default Card;
