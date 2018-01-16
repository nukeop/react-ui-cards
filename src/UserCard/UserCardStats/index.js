import React from 'react';

import './styles.scss';

class UserCardStats extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {
      stats
    } = this.props;
    
    return (
      <div
	className='user-card-stats'
	 >
	{
	  stats.map((stat, i) => {
	    return (
              <div className='stat-container'>
		<div className='stat-value'>
		  {stat.value}
		</div>
                <div className='stat-name'>
		  {stat.name}
		</div>
	      </div>
	    );
	  })
	}
      </div>
    );
  }
}

export default UserCardStats;
