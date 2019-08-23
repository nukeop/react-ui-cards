import React from 'react';

import styles from './styles.scss';

class CardOverlay extends React.Component {
  render() {
    let {
      thumbnail
    } = this.props;
    return (
      <div
	      className={styles['card-overlay']}
	    >
        <div
	        className={styles['overlay']}
	        style={{
	          backgroundImage: `url(${thumbnail})`
	        }}
	      />
      </div>
    );
  }
}

export default CardOverlay;
