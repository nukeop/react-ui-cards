import React from 'react';

import './styles.scss';

class UserCardHeader extends React.Component {
  render() {
    let {
      src
    } = this.props;
    
    return (
      <div
	className='user-card-header'
	style={{backgroundImage: `url(${src})`}}
	>
      </div>
    );
  }
}

export default UserCardHeader;
