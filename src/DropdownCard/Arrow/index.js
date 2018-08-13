import React from 'react';
import Card from '../../Card';

import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';

import styles from './styles.scss';


class Arrow extends React.Component {
  constructor(props){
    super(props);

    //toggled= true or false
    this.state = {
      toggled: this.props.toggled
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      toggled: nextProps.toggled
    });
  }

  handleClick() {
    if (this.state.toggled === false){
      this.setState({
        toggled: true
      });
    }
    else if (this.state.toggled === true) {
      this.setState({
        toggled: false
      });
    }
  }
  
  render(){
    let{
      toggled
    } = this.props;
    
    return(
      <div className='toggle-root'>
      </div>
    );
  }
}

export default Arrow;
