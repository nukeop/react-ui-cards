import React from 'react';

import styles from './styles.scss';

class Phone extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let {
      phone
    } = this.props;
    return(
      <div className='phone-root'>
        { phone }
      </div>
    );
  }
};

export default Phone;
