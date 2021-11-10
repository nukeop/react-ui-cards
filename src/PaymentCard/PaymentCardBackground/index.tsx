import React from 'react';
import classnames from 'classnames';

import triangles from '../svg/triangles.svg';
import spiral from '../svg/spiral.svg';
import styles from './styles.module.scss';

const patterns = {
  triangles,
  spiral
};

const defaultBackground = 'linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%)';

export type PaymentCardBackgroundProps = {
  background?: string,
  backgroundPattern?: keyof typeof patterns | null;
}

const PaymentCardBackground: React.FC<PaymentCardBackgroundProps> = ({
  background,
  backgroundPattern
}) => {
  let pattern = backgroundPattern === undefined
    ? 'spiral' : backgroundPattern;

  return (
    <div className={styles['payment-card-background']}
      style={{ background: background || defaultBackground }}>
      <div className={
        classnames(
          styles['svg-background'],
          pattern && styles[pattern]
        )
      } dangerouslySetInnerHTML={{ __html: pattern ? patterns[pattern] : '' }} />
    </div>
  );
}

export default PaymentCardBackground;
