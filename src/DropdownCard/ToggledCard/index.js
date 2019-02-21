import React from 'react';

import Card from '../../Card';

import styles from './styles.scss';

class ToggledCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let{
      email,
      phone,
      info,
      bgColor
    } = this.props;
    return(
      <div className='toggled-root' style={{
             backgroundColor : `rgba(${bgColor}, 0.25)`
           }}>
        
        <div className='email'>
          { email }
        </div>
        
        <div className='phone'>
          { phone }
        </div>
        
        <div className='info'>
          { info }
        </div>
        
      </div>
    );
  }
};

export default ToggledCard;
