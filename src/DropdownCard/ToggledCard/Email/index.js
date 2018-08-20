import React from 'react';

import styles from './styles.scss';

class Email extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let {
      email
    } = this.props;
    return(
      <div className='email-root'>
        { email }
      </div>
    );
  }
};

export default Email;
