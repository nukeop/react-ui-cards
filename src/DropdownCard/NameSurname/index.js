import React from 'react';

import styles from './styles.scss';

class NameSurname extends React.Component {
  render(){
    let{
      name,
      surname,
      bgColor
    } = this.props;

    return(
      <div
        className={styles['NSroot']}
        style={{
          backgroundColor : `rgb(${ bgColor })`
        }}
      >

        <div className={styles['name']}>
          {name}
        </div>

        <div className={styles['surname']}>
          {surname}
        </div>
        
      </div>
    );
  }
}
export default NameSurname;
