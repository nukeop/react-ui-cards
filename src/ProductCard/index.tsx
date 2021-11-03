import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import ProductCardDescription, { ProductCardDescriptionProps } from './ProductCardDescription';
import ProductCardGallery, { ProductCardGalleryProps } from './ProductCardGallery';
import PriceTag, { PriceTagProps } from './PriceTag';

import styles from './styles.module.scss';

export type ProductCardProps = {
  className?: string;
  photos: ProductCardGalleryProps['photos'];
  price: PriceTagProps['price'];
  productName: ProductCardDescriptionProps['productName'];
  description: ProductCardDescriptionProps['description'];
  buttonText: ProductCardDescriptionProps['buttonText'];
  url: ProductCardDescriptionProps['url'];
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  photos,
  price,
  productName,
  description,
  buttonText,
  url,
  ...rest
}) => (
  <Card
    className={cx(
      styles['product-card'],
      className
    )}
    {...rest}
  >
    <ProductCardGallery photos={photos} />
    <PriceTag price={price} />
    <ProductCardDescription
      productName={productName}
      description={description}
      buttonText={buttonText}
      url={url} />
  </Card>
);

export default ProductCard;
