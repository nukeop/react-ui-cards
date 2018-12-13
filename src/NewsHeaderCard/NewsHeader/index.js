import React from 'react';

import './styles.scss';

class NewsHeader extends React.Component{
  render(){
    let{
      title,
      author,
      date,
      tags
    } = this.props;
    return(
      <div className= 'news-header'>
	
	<div className= 'title'>
	  {title}
	</div>

	<div className='bottom'>
	    <div className= 'author'>
	      {author}
	    </div>

	    <div className= 'date'>
	      {date}
	    </div>
   </div>

	    <div className='tags'>
       {
         tags && tags.map((tag, i) => {
      return (
        <span className='tag'>
          {typeof tag === "function" ? tag() : tag}
        </span>
      );
         })
       }
     </div>
	
      </div>
    );
  }
}

export default NewsHeader;
