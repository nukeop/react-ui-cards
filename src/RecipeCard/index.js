import React from 'react';

import Card from '../Card';
import RecipeCardContent from './RecipeCardContent';
import RecipeCardDesc from './RecipeCardDesc';

import './styles.scss';

class RecipeCard extends React.Component{
    constructor(props){
	super(props);
    }

    render(){
	let{
	    href,
	    thumbnail,
	    title,
	    time,
	    servings
	} = this.props;
	return(
	    <a className='recipe-card-link' href={href}>
              <Card className='recipe-card'>
		
		<RecipeCardContent
		   thumbnail={thumbnail}
		   />

		<RecipeCardDesc
		   title={title}
		   time={time}
		   servings={servings}
		   />
		
	      </Card>
	  </a>
	);
    }
}

export default RecipeCard;
