import React from 'react';

import Card from '../Card';
import NameSurname from './NameSurname';
import Arrow from './Arrow';
import ToggledCard from './ToggledCard';

import styles from './styles.scss';

class DropdownCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Card className='dropdown-card'>
        
        <NameSurname />
        <Arrow />
        <ToggledCard/>
        
      </Card>
    );
  }
}
export default DropdownCard;
