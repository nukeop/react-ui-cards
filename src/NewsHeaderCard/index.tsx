import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import NewsHeader, { NewsHeaderProps } from './NewsHeader';
import NewsHeaderBackground, { NewsHeaderBackgroundProps } from './NewsHeaderBackground';

import styles from './styles.module.scss';

export type NewsHeaderCardProps = {
  className?: string;
  href: string;
  title: NewsHeaderProps['title'];
  author: NewsHeaderProps['author'];
  date: NewsHeaderProps['date'];
  tags?: NewsHeaderProps['tags'];
  thumbnail: NewsHeaderBackgroundProps['thumbnail'];
};

const NewsHeaderCard: React.FC<NewsHeaderCardProps> = ({
  className,
  href,
  title,
  author,
  date,
  tags,
  thumbnail,
  ...rest
}) => (
  <a href={href}>
    <Card
      className={cx(
        styles['news-header-card'],
        className
      )}
      {...rest}
    >

      <NewsHeaderBackground
        thumbnail={thumbnail}
      />

      <NewsHeader
        title={title}
        author={author}
        date={date}
        tags={tags}
      />
    </Card>
  </a>
)

export default NewsHeaderCard;
