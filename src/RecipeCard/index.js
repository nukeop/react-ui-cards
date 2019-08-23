import React from 'react';
import cx from 'classnames';

import Card from '../Card';
import RecipeCardContent from './RecipeCardContent';
import RecipeCardDesc from './RecipeCardDesc';

import styles from './styles.scss';

class RecipeCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {
      className,
      href,
      likeCallback,
      thumbnail,
      title,
      time,
      servings,
      ...other
    } = this.props;
    return(
      <Card className={styles['recipe-card']}>
	      
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
