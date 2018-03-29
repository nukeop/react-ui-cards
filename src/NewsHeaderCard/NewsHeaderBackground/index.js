import React from 'react';

import './styles.scss';

class NewsHeaderBackground extends React.Component{
  render(){
    let{
      thumbnail
    } =this.props;
    return(
      <div className='news-header-background'>

        <div className='overlay'>

        </div>

        <div className='thumbnail'>
          <div style ={{backgroundImage : `url(${thumbnail})`}}/>
        </div>

      </div>
    );
  }
}

export default NewsHeaderBackground;
