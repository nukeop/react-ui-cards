import React from 'react';

import './styles.scss';

class UserCardAvatar extends React.Component {
  render() {
    let {
      src
    } = this.props;
    
    return (
      <div
	className='user-card-avatar'
	style={{backgroundImage: `url(${src})`}}
	>
	
      </div>
    );
  }
}

export default UserCardAvatar;
