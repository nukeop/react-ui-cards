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
    let{
      email,
      phone,
      infoFirst,
      infoSecond
    } = this.props;
    return(
      <Card className='toggled-root'>
        <Email
          email={ email }
          />
        <Phone
          phone={ phone }
          />
        <Info
          infoFirst={ infoFirst}
          infoSecond={ infoSecond }
          />
      </Card>
    );
  }
};

export default ToggledCard;
