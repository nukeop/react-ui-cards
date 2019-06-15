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
  const renderButton = () => {
    if (buttonText) {
      return (
        <div className="row">
          <a className="buy-button" href={url}>
            {buttonText}
          </a>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="product-card-description-box">
      <div className="product-card-name">{productName}</div>
      <p className="product-card-description">{description}</p>
      {renderButton()}
    </div>
  );
};

export default ProductCardDescription;
