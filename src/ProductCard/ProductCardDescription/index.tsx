import React from 'react';

import styles from './styles.module.scss';

export type ProductCardDescriptionProps = {
  productName: string;
  description: string;
  buttonText?: string;
  url: string;
};

const ProductCardDescription: React.FC<ProductCardDescriptionProps> = ({
  productName,
  description,
  buttonText,
  url
}) => (
  <div className={styles['product-card-description-box']}>
    <div className={styles['product-card-name']}>{productName}</div>
    <p className={styles['product-card-description']}>{description}</p>
    {buttonText &&
      <div className={styles['row']}>
        <a className={styles['buy-button']} href={url}>
          {buttonText}
        </a>
      </div>}
  </div>
);

export default ProductCardDescription;
