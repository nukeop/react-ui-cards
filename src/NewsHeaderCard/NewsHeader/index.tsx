import React from 'react';

import styles from './styles.module.scss';

export type NewsHeaderProps = {
  title: string;
  author: string;
  date: string;
  tags?: (string | (() => React.ReactNode))[];
};

const NewsHeader: React.FC<NewsHeaderProps> = ({
  title,
  author,
  date,
  tags
}) => (
  <div className={styles['news-header']}>

    <div className={styles['title']}>
      {title}
    </div>

    <div className={styles['bottom']}>
      <div className={styles['author']}>
        {author}
      </div>

      <div className={styles['date']}>
        {date}
      </div>
    </div>

    <div className={styles['tags']}>
      {tags && tags.map((tag, i) => {
        return (
          <span key={i} className={styles['tag']}>
            {typeof tag === "function" ? tag() : tag}
          </span>
        );
      })}
    </div>

  </div>
)

export default NewsHeader;
