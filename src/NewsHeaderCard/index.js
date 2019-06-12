import React from 'react';

import Card from '../Card';
import NewsHeader from './NewsHeader';
import NewsHeaderBackground from './NewsHeaderBackground';

import './styles.scss';

class NewsHeaderCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let{
      href,
      title,
      author,
      date,
      thumbnail,
      tags
    } = this.props;
    return(
      <a href={href}>
	<Card className='news-header-card'>
	  
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
