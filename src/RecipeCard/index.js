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
      likeCallback,
      thumbnail,
      title,
      time,
      servings
    } = this.props;
    return(
      <Card className='recipe-card'>
	
	<RecipeCardContent
	  href={href}
	  thumbnail={thumbnail}
	  />

	<RecipeCardDesc
	  title={title}
	  time={time}
	  servings={servings}
	  likeCallback={likeCallback}
	  />
	
      </Card>
    );
  }
}

export default RecipeCard;
