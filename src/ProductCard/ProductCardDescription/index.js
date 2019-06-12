import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProductCardDescription = ({
  productName,
  description,
  buttonText,
    rating,
    url
}) => {
  return (
    <div className='product-card-description-box'>
      <div className='product-card-name'>
	      {productName}
	    </div>
      <p className='product-card-description'>
	      {description}
	    </p>
      <div className='row'>
        <a className='buy-button' href={url}>{buttonText}</a>
	    </div>
    </div>
  );
};

ProductCardDescription.propTypes = {

};

ProductCardDescription.defaultProps = {
  buttonText: 'Buy now'
};

export default ProductCardDescription;
