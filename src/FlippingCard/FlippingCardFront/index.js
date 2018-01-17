import React from 'react';

import './styles.scss';

class FlippingCardFront extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='front'>
	{this.props.children}
      </div>
    );
  }
}

export default FlippingCardFront;
