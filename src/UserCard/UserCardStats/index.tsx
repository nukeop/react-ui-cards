import React from 'react';

import styles from './styles.module.scss';

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
	      className={styles['user-card-stats']}
	    >
	      {
	        stats.map((stat, i) => {
	          return (
              <div className={styles['stat-container']}>
		            <div className={styles['stat-value']}>
		              {stat.value}
		            </div>
                <div className={styles['stat-name']}>
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
