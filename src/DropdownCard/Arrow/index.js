import React from 'react';
import Card from '../../Card';
import PropTypes from 'prop-types';

import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';

import styles from './styles.scss';


class Arrow extends React.Component {
  constructor(props){
    super(props);

    //toggled= true or false
    this.state = {
      toggled: false
    };
  }

  handleClick() {
    this.setState(prevState =>{
      return {toggled: !prevState.toggled};
    });
  }
  
  render(){
    
    if(!this.state.toggled){
      return(
        <button className='toggle-root'
             onClick={ this.handleClick.bind(this)}
             >
          <ArrowDown/>
        </button>
      );
    }
    else{
      return(
        <button className='toggle-root'
             onClick={ this.handleClick.bind(this) }
             >
          <ArrowUp/>
        </button>
      );
    }
  }
}


export default Arrow;
