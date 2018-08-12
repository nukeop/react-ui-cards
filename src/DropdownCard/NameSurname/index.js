import React from 'react';

import styles from './styles.scss';

class NameSurname extends React.Component {
  render(){
    let{
      name,
      surname
    } = this.props;

    return(
      <div className='root'>

        <div className='name'>
          {name}
        </div>

        <div className='surname'>
          {surname}
        </div>
        
      </div>
    );
  }
}
export default NameSurname;
