import React from 'react';

import styles from './styles.scss';

class UserCardBody extends React.Component {
  render() {
    let {
      name,
      positionName
    } = this.props;
    
    return (
      <div
	      className={styles['user-card-body']}
	    >
        <div className={styles['user-card-name']}>
	        {name}
	      </div>
        <div className={styles['user-card-position-name']}>
	        {positionName}
	      </div>
	      {this.props.children}
      </div>
    );
  }
}

export default UserCardBody;
