import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class RecipeCardDesc extends React.Component{
  render(){
    let{
      title,
      time,
      servings,
      likeCallback
    } = this.props;
    
    return(
      <div className={styles['recipe-card-desc']}>

	      <div className={styles.title}>
	        {title}
	      </div>

	      <a className={styles.heart} onClick={likeCallback}>
	        <FontAwesome name='heart-o'/>
	      </a>

	      <div className={styles.time}>
	        <FontAwesome name='hourglass-half'/>
	        {time}
	      </div>

	      <div className={styles.servings}>
	        <FontAwesome name='user-o' />
	        {servings}
	      </div>

      </div>
      
    );
  }
}


export default RecipeCardDesc;
