import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import RecipeCardContent, { RecipeCardContentProps } from './RecipeCardContent';
import RecipeCardDesc, { RecipeCardDescProps } from './RecipeCardDesc';

import styles from './styles.module.scss';

export type RecipeCardProps = {
  className?: string;
  href: RecipeCardContentProps['href'];
  thumbnail: RecipeCardContentProps['thumbnail'];
  likeCallback: RecipeCardDescProps['likeCallback'];
  title: RecipeCardDescProps['title'];
  time: RecipeCardDescProps['time'];
  servings: RecipeCardDescProps['servings'];
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  className,
  href,
  thumbnail,
  likeCallback,
  title,
  time,
  servings,
  ...rest
}) => (
  <Card
    className={cx(
      styles['recipe-card'],
      className
    )}
    {...rest}
  >
    <RecipeCardContent
      href={href}
      thumbnail={thumbnail} />
    <RecipeCardDesc
      title={title}
      time={time}
      servings={servings}
      likeCallback={likeCallback} />
  </Card>
)

export default RecipeCard;
