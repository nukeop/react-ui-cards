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
      messageOnToggled,
      messageOnUntoggled
    } = this.props;
          return(
            <Card className='dropdown-card'>
              <NameSurname
                name={ name }
                surname={ surname }
                />

              <div className='toggling'>
                {
                  this.state.arrowToggled === true  ? <React.Fragment>                 
                  <button className='button'>
                        <Arrow
                            onClick={this.toggleArrow.bind(this)}
                            position={ this.state.arrowToggled }
                            message={ messageOnToggled }
                            />
    
                    </button>

                <ToggledCard
                email={ email }
                phone={ phone }
                 info={ info } />
                    </React.Fragment>   : <button className='button'>
                    <Arrow
                        onClick={this.toggleArrow.bind(this)}
                        position={ this.state.arrowToggled }
                        message={ messageOnUntoggled }
                        />
                    </button>
              }
              </div>
                
            </Card>
          );
    }
  }
export default DropdownCard;
