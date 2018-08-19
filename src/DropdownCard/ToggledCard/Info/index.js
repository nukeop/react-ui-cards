import React from 'react';

import Card from '../../../Card';

import styles from './styles.scss';

class Info extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let{
      infoFirst,
      infoSecond
    } = this.props;
    return(
      <div className='info-root'>
        
        <div className='first'>
          infoFirst={ infoFirst }
        </div>
        <div className='second'>
          infoSecond={ infoSecond }
        </div>
        
      </div>
    );
  }
};
export default Info;
