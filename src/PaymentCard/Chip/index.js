import React from 'react';

import styles from './styles.scss';

const Chip = props => {
  return (
    <div className={styles["chip-container"]}>
      <span className={styles['chip']} />
    </div>

  );
};

export default Chip;
