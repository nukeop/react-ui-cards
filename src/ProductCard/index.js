import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import ProductCardDescription from './ProductCardDescription';
import ProductCardGallery from './ProductCardGallery';
import PriceTag from './PriceTag';

import './styles.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      photos,
      price,
      productName,
      description,
      buttonText,
      rating,
      url
    } = this.props;

    return (
      <Card className="product-card">
        <ProductCardGallery photos={photos} />
        <PriceTag price={price} />
        <ProductCardDescription
          productName={productName}
          description={description}
          buttonText={buttonText}
          rating={rating}
          url={url}
        />
      </Card>
    );
  }
}

ProductCard.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  productName: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string
};

export default ProductCard;
