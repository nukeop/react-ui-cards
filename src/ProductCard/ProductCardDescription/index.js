import React from 'react';

import './styles.scss';

class ProductCardDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      productName,
      description,
      rating,
      url
    } = this.props;

    return (
      <div className='product-card-description-box'>
        <div className='product-card-name'>
	  {productName}
	</div>
        <p className='product-card-description'>
	  {description}
	</p>
        <div className='row'>
          <a className='buy-button' href={url}>Buy now</a>
	</div>
      </div>
    );
  }
}

export default ProductCardDescription;
