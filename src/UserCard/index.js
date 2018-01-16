import React from 'react';

import Card from '../Card';
import UserCardHeader from './UserCardHeader';
import UserCardAvatar from './UserCardAvatar';
import UserCardBody from './UserCardBody';
import UserCardStats from './UserCardStats';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    let {
      href,
      header,
      avatar,
      name,
      positionName,
      stats
    } = this.props;
    
    return (
      <Card
	 href={href}
	 >
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

	{
	  stats !== undefined
	    ? <UserCardStats
		   stats={stats}
		   />
	    : null
	}
	
      </Card>
    );
  }
}

export default UserCard;
