import React from 'react';

import './styles.scss';

class CardContent extends React.Component {
  render() {
    let {
      thumbnail,
      title,
      description,
      tags
    } = this.props;
    return (
      <div
	 className='card-content'
	 >
        <div className='thumbnail'>
	  <img src={thumbnail} />
	</div>

        <div className='text'>
          <div className='title'>
	    {title}
	  </div>
          <div className='description'>
	    {description}
	  </div>
          <div className='tags'>
	    {
	      tags.map((tag, i) => {
		return (
		  <span className='tag'>
		     {typeof tag === "function" ? tag() : tag}
		  </span>
		);
	      })
	    }
	  </div>
	</div>
      </div>
    );
  }
}

export default CardContent;
