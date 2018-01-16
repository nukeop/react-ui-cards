import React from 'react';

import Card from '../Card';
import UserCardHeader from './UserCardHeader';
import UserCardAvatar from './UserCardAvatar';
import UserCardBody from './UserCardBody';
import UserCardStats from './UserCardStats';

import './styles.scss';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      href,
      header,
      avatar,
      name,
      positionName,
      stats,
      cardClass
    } = this.props;
    
    return (
      <a className='card-link' href={href}>
	<Card
	   className={cardClass}
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
      </a>
    );
  }
}

export default UserCard;
