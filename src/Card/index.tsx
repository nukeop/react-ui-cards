import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

export type CardProps = {
  className?: string;
  float?: boolean;
};

const Card: React.FC<CardProps> = ({
  className,
  float,
  children,
  ...rest
}) => {

  return <div className={
    classnames(styles.card, styles.card,
      { [styles.float]: float },
      className)
  }
    {...rest}
  >
    {children}
  </div>;
};

export default Card;
