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
    return (
      <a onClick={onClick} className='toggle-root'>
        {
          position === false
            ? <ArrowDown />
            : <ArrowUp/>
        }
      </a>
    );
  }
}


export default Arrow;
