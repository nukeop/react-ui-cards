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
      position,
      message
    } = this.props;
    
    return (
      <a onClick={onClick} className={styles['toggle-root']}>
        {
          position === false
            ? <React.Fragment><ArrowDown /> { message }</React.Fragment>
            : <React.Fragment><ArrowUp /> { message }</React.Fragment>
        }
      </a>
    );
  }
}


export default Arrow;
