import React from 'react';

import styles from './styles.module.scss';

class UserCardHeader extends React.Component {
  render() {
    let {
      src
    } = this.props;
    
    return (
      <div
	      className={styles['user-card-header']}
	      style={{backgroundImage: `url(${src})`}}
	    >
      </div>
    );
  }
}

export default UserCardHeader;
