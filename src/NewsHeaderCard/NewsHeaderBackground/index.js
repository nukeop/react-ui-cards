import React from 'react';

import styles from './styles.scss';

class NewsHeaderBackground extends React.Component{
  render(){
    let {
      thumbnail
    } = this.props;
    
    return(
      <div className={styles['news-header-background']}>
        <div className={styles['overlay']} />
        <div className={styles['thumbnail']}>
          <div style ={{backgroundImage : `url(${thumbnail})`}}/>
        </div>

      </div>
    );
  }
}

export default NewsHeaderBackground;
