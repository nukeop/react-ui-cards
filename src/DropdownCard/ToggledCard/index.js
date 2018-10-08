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
    } = this.props;
    return(
      <Card className='toggled-root'>
        
        <div className='email'>
          { email }
        </div>
        
        <div className='phone'>
          { phone }
        </div>
        
        <div className='info'>
          { info }
        </div>
        
      </Card>
    );
  }
};

export default ToggledCard;
