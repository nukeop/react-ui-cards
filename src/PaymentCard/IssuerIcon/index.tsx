import React from 'react';

import styles from './styles.module.scss';

export type IssuerIconProps = {
  icon?: string | React.ReactNode;
}

const IssuerIcon: React.FC<IssuerIconProps> = ({
  icon
}) => {
  return (
    <div className={styles["issuer-icon"]}>
      {
        icon === undefined
          ? null
          : typeof icon === 'string'
            ? (
              <img src={icon} />
            )
            : icon
      }
    </div>
  );
}

export default IssuerIcon;
