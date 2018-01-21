import React from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.scss';


class RecipeCardDesc extends React.Component{
  render(){
    let{
      title,
      heart,
      time,
      servings
    } = this.props;
    return(
      <div className= 'recipe-card-desc'>

	<div className='title'>
	  {title}
	</div>

	<div className='heart'>
	  <FontAwesome name='heart'/>
	  {heart}
	</div>

	<div className= 'time'>
	  {time}
	</div>

	<div className= 'servings'>
	  {servings}
	</div>

      </div>
      
    );
  }
}


export default RecipeCardDesc;
