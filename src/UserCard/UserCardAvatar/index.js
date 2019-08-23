import React from 'react';

import styles from './styles.scss';

class UserCardAvatar extends React.Component {
  render() {
    let {
      src
    } = this.props;
    
    return (
      <div
	      className={styles['user-card-avatar']}
	      style={{backgroundImage: `url(${src})`}}
	    />
    );
  }
}

export default UserCardAvatar;
