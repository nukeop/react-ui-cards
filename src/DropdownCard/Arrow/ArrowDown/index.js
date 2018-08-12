import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class ArrowDown extends React.Component {
  render(){
    return(
      <a className='root'>
        
        <FontAwesome name='angle-down'/>
        
      </a>
    );
  }
}
export default ArrowDown;
