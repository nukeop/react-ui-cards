import React from 'react';

import Card from '../../Card';
import Email from './Email';
import Phone from './Phone/';
import Info from './Info';

import styles from './styles.scss';

class ToggledCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Card className='toggled-root'/>
    );
  }
};

export default ToggledCard;
