import React from 'react';

import './styles.scss';

class RecipeCardContent extends React.Component{
    render(){
	let{
	    thumbnail
	} = this.props;
	return(
	       <div className='recipe-card-content'>

		  <div className='thumbnail'>
		      <img src={thumbnail}/>
		  </div>

	      </div>
	);
    }
}

export default RecipeCardContent;
