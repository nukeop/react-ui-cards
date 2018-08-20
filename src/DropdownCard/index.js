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
    let{
      name,
      surname,
      email,
      phone,
      infoFirst,
      infoSecond
    } = this.props;
    return(
      <Card className='dropdown-card'>
        <NameSurname
          name={ name }
          surname={ surname }
          />
        <Arrow/>
        <ToggledCard
          email={ email }
          phone={ phone }
          infoFirst={ infoFirst }
          infoSecond={ infoSecond }
          />
        
      </Card>
    );
  }
}
export default DropdownCard;
