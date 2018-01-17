import React from 'react';

import Card from '../Card';
import FlippingCardBack from './FlippingCardBack';
import FlippingCardFront from './FlippingCardFront';
import './styles.scss';

class FlippingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
	 className='flipping-card'
	 >
	{this.props.children}
      </Card>
    );
  }
}

export default FlippingCard;
