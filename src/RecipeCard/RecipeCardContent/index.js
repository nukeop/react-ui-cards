import React from 'react';

import './styles.scss';

class RecipeCardContent extends React.Component{
  render(){
    let{
      thumbnail,
      href
    } = this.props;
    return(
      <a href={href} className='recipe-card-content'>

	<div className='thumbnail'>
	  <div style={{backgroundImage: `url(${thumbnail})`}}/>
	</div>

      </a>
    );
  }
}

export default RecipeCardContent;
