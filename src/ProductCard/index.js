import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Card from '../Card';
import ProductCardDescription from './ProductCardDescription';
import ProductCardGallery from './ProductCardGallery';
import PriceTag from './PriceTag';

import styles from './styles.scss';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      className,
      photos,
      price,
      productName,
      description,
      buttonText,
      rating,
      url,
      ...other
    } = this.props;

    return (
      <Card
        className={cx(
          styles['product-card'],
          className
        )}
      {...other}
      >
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
