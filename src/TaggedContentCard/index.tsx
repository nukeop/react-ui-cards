import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import CardContent, { CardContentProps } from './CardContent';
import CardOverlay from './CardOverlay';
import styles from './styles.module.scss';

export type TaggedContentCardProps = {
  className?: string;
  href: string;
  thumbnail: CardContentProps['thumbnail'];
  title: CardContentProps['title'];
  description: CardContentProps['description'];
  tags: CardContentProps['tags'];
};

const TaggedContentCard: React.FC<TaggedContentCardProps> = ({
  className,
  href,
  thumbnail,
  title,
  description,
  tags,
  ...rest
}) => (
  <a className={styles['card-link']} href={href}>
    <Card
      className={cx(
        styles['tagged-content-card'],
        className
      )}
      {...rest}
    >
      <CardOverlay
        thumbnail={thumbnail} />
      <CardContent
        thumbnail={thumbnail}
        title={title}
        description={description}
        tags={tags} />
    </Card>
  </a>
);

export default TaggedContentCard;
