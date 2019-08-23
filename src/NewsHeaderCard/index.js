import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import NewsHeader from './NewsHeader';
import NewsHeaderBackground from './NewsHeaderBackground';

import styles from './styles.scss';

class NewsHeaderCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let{
      className,
      href,
      title,
      author,
      date,
      thumbnail,
      tags,
      ...other
    } = this.props;
    
    return(
      <a href={href}>
	      <Card
          className={cx(
            styles['news-header-card'],
            className
          )}
      {...other}
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
    );
  }
}

export default NewsHeaderCard;
