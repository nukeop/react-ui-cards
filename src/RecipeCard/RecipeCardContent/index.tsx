import React from 'react';

import styles from './styles.module.scss';

export type RecipeCardContentProps = {
thumbnail: string;
href: string;
};

const RecipeCardContent: React.FC<RecipeCardContentProps> = ({
  thumbnail,
  href
}) =>(
  <a
    href={href}
    className={styles['recipe-card-content']}
  >
    <div className={styles.thumbnail}>
      <div style={{ backgroundImage: `url(${thumbnail})` }} />
    </div>
  </a>
)

export default RecipeCardContent;
