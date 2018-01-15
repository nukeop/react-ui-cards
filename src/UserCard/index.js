import React from 'react';

import Card from '../Card';
import UserCardHeader from './UserCardHeader';
import UserCardAvatar from './UserCardAvatar';
import UserCardBody from './UserCardBody';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      header,
      avatar,
      name,
      positionName
    } = this.props;
    
    return (
      <Card>
	<UserCardHeader
	  src={header}
	  />
	<UserCardAvatar
	  src={avatar}
	  />
	<UserCardBody
	  name={name}
	  positionName={positionName}
	  >
	  {this.props.children}
	</UserCardBody>
      </Card>
    );
  }
}

export default UserCard;
