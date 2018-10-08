import React from 'react';

import Card from '../Card';
import NameSurname from './NameSurname';
import Arrow from './Arrow';
import ToggledCard from './ToggledCard';

import styles from './styles.scss';

class DropdownCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      arrowToggled : false
    };
  }

  toggleArrow() {
    this.setState(prevState => {
      return { arrowToggled: !prevState.arrowToggled };
    });
  }
  
  render(){
    let{
      name,
      surname,
      email,
      phone,
      info,
      messageOnPanel
    } = this.props;
          return(
            <Card className='dropdown-card'>
              <NameSurname
                name={ name }
                surname={ surname }
                />
              <Arrow
                onClick={this.toggleArrow.bind(this)}
                position={ this.state.arrowToggled }
                />

                {
                  this.state.arrowToggled === true  ?  <ToggledCard
                email={ email }
                phone={ phone }
                info={ info }
                /> : <div className='message'>
                    { messageOnPanel }
                  </div>
                };
                
            </Card>
          );
    }
  }
export default DropdownCard;
