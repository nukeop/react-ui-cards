import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class ArrowUp extends React.Component {
  render(){
    return(
        <a className='arrow-up'>
          
          <FontAwesome name='angle-up'/>
          
        </a>
    );
  }
}
export default ArrowUp;
