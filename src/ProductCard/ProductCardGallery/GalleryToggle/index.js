import React from 'react';

import styles from './styles.scss';

class GalleryToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      icon,
      action,
      left,
      right
    } = this.props;

    let style = {};
    if (left) {
      style.left = 0;
      style.borderRadius = '0.25rem 0 0 0';
    }

    if (right) {
      style.right = 0;
      style.borderRadius = '0 0.25rem 0 0';
    }
    
    return (
      <div
	      className={styles['gallery-toggle']}
	      style={style}
	      onClick={action}
	    >
	      {icon}
      </div>
    );
  }
}

export default GalleryToggle;
