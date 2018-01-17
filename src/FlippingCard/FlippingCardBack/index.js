import React from 'react';

import './styles.scss';

class FlippingCardBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='back'>
	{this.props.children}
      </div>
    );
  }
}

export default FlippingCardBack;
