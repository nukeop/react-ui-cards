import React from 'react';
import Card from '../../Card';
import PropTypes from 'prop-types';

import ArrowUp from './ArrowUp';
import ArrowDown from './ArrowDown';

import styles from './styles.scss';


class Arrow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let{
      onClick,
      position
    } = this.props;
    console.log(position);
    return (
      <a onClick={onClick} className='toggle-root'>
        {
          position === false
            ? <ArrowDown />
            : <ArrowUp/>
        }
      </a>
    );
    
    // if(this.props.position === false){
    //   return(
    //     <a onClick={onClick} className='toggle-root'>
    //       <ArrowDown/>
    //     </a>
    //   );
    // }
    // else{
    //   return(
    //     <a className='toggle-root'>
    //       <ArrowUp/>
    //     </a>
    //   );
    // }
  }
}


export default Arrow;
