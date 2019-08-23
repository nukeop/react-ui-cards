import React from 'react';

import styles from './styles.scss';

class RecipeCardContent extends React.Component{
  render(){
    let{
      thumbnail,
      href
    } = this.props;

    return(
      <a
        href={href}
        className={styles['recipe-card-content']}
      >
	      <div className={styles.thumbnail}>
	        <div style={{backgroundImage: `url(${thumbnail})`}}/>
	      </div>
      </a>
    );
  }
}

export default RecipeCardContent;
