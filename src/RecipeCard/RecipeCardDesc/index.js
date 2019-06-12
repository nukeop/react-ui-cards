import React from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.scss';


class RecipeCardDesc extends React.Component{
  render(){
    let{
      title,
      time,
      servings,
      likeCallback
    } = this.props;
    return(
      <div className= 'recipe-card-desc'>

	      <div className='title'>
	        {title}
	      </div>

	      <a className='heart' onClick={likeCallback}>
	        <FontAwesome name='heart-o'/>
	      </a>

	      <div className= 'time'>
	        <FontAwesome name='hourglass-half'/>
	        {time}
	      </div>

	      <div className= 'servings'>
	        <FontAwesome name='user-o' />
	        {servings}
	      </div>

      </div>
      
    );
  }
}


export default RecipeCardDesc;
